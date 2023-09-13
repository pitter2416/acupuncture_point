
<script setup>
    import { useRoute } from 'vue-router'
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { onMounted,ref  } from 'vue'
    import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
    import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import Stats from 'three/addons/libs/stats.module.js';
    import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    import manObj from '../assets/model/man.js'
    import router from '../router'

    const route = useRoute()
    const ids = (route.query.ids || '').split(',');
    const target = ref();
    
    let scene, renderer, camera, stats;
    let model, skeleton, mixer, clock;
    const crossFadeControls = [];
    let currentBaseAction = 'idle';
    const allActions = [];
    const baseActions = {
        idle: { weight: 1 },
        walk: { weight: 0 },
        run: { weight: 0 }
    };
    const additiveActions = {
        sneak_pose: { weight: 0 },
        sad_pose: { weight: 0 },
        agree: { weight: 0 },
        headShake: { weight: 0 }
    };
    let panelSettings, numAnimations;
    
    function init() {
        clock = new THREE.Clock();

        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xa0a0a0 );
        scene.fog = new THREE.Fog( 0xa0a0a0, 10, 50 );

        const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x8d8d8d, 3 );
        hemiLight.position.set( 0, 20, 0 );
        scene.add( hemiLight );

        const dirLight = new THREE.DirectionalLight( 0xffffff, 3 );
        dirLight.position.set( 3, 10, 10 );
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 2;
        dirLight.shadow.camera.bottom = - 2;
        dirLight.shadow.camera.left = - 2;
        dirLight.shadow.camera.right = 2;
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 40;
        scene.add( dirLight );

        // ground
        const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshPhongMaterial( { color: 0xcbcbcb, depthWrite: false }) );
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add( mesh );

        const loader = new GLTFLoader();
        loader.load('model/Xbot.glb', function ( gltf ) {
            model = gltf.scene;
            scene.add( model );
            model.traverse( function ( object ) {
                if ( object.isMesh ) object.castShadow = true;
            });
            skeleton = new THREE.SkeletonHelper( model );
            skeleton.visible = false;
            scene.add( skeleton );
            const animations = gltf.animations;
            mixer = new THREE.AnimationMixer( model );
            numAnimations = animations.length;
            for ( let i = 0; i !== numAnimations; ++ i ) {
                let clip = animations[ i ];
                const name = clip.name;
                if ( baseActions[ name ] ) {
                    const action = mixer.clipAction( clip );
                    activateAction( action );
                    baseActions[ name ].action = action;
                    allActions.push( action );
                } else if ( additiveActions[ name ] ) {
                    // Make the clip additive and remove the reference frame
                    THREE.AnimationUtils.makeClipAdditive( clip );
                    if ( clip.name.endsWith( '_pose' ) ) {
                        clip = THREE.AnimationUtils.subclip( clip, clip.name, 2, 3, 30 );
                    }
                    const action = mixer.clipAction( clip );
                    activateAction( action );
                    additiveActions[ name ].action = action;
                    allActions.push( action );
                }
            }
            createPanel();
            animate();
        });
        renderer = new THREE.WebGLRenderer( { antialias: true });
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.shadowMap.enabled = true;
        target.value.appendChild( renderer.domElement );
        // camera
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 100 );
        camera.position.set( - 1, 2, 3 );
        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.target.set( 0, 1, 0 );
        controls.update();
        stats = new Stats();
        target.value.appendChild( stats.dom );
    }

    function activateAction( action ) {
        const clip = action.getClip();
        const settings = baseActions[ clip.name ] || additiveActions[ clip.name ];
        setWeight( action, settings.weight );
        action.play();
    }

    function setWeight( action, weight ) {
        action.enabled = true;
        action.setEffectiveTimeScale( 1 );
        action.setEffectiveWeight( weight );
    }

    function animate() {
        // Render loop
        requestAnimationFrame( animate );
        for ( let i = 0; i !== numAnimations; ++ i ) {
            const action = allActions[ i ];
            const clip = action.getClip();
            const settings = baseActions[ clip.name ] || additiveActions[ clip.name ];
            settings.weight = action.getEffectiveWeight();

        }
        // Get the time elapsed since the last frame, used for mixer update
        const mixerUpdateDelta = clock.getDelta();
        // Update the animation mixer, the stats panel, and render this frame
        mixer.update( mixerUpdateDelta );
        stats.update();
        renderer.render( scene, camera );
    }

    function createPanel() {
        const panel = new GUI( { width: 310 });
        const folder1 = panel.addFolder( 'Base Actions' );
        const folder2 = panel.addFolder( 'Additive Action Weights' );
        const folder3 = panel.addFolder( 'General Speed' );

        panelSettings = {
            'modify time scale': 1.0
        };
        const baseNames = [ 'None', ...Object.keys( baseActions ) ];

        for ( let i = 0, l = baseNames.length; i !== l; ++ i ) {
            const name = baseNames[ i ];
            const settings = baseActions[ name ];
            panelSettings[ name ] = function () {
                const currentSettings = baseActions[ currentBaseAction ];
                const currentAction = currentSettings ? currentSettings.action : null;
                const action = settings ? settings.action : null;
                if ( currentAction !== action ) {
                    prepareCrossFade( currentAction, action, 0.35 );
                }
            };
            crossFadeControls.push( folder1.add( panelSettings, name ) );
        }

        for ( const name of Object.keys( additiveActions ) ) {
            const settings = additiveActions[ name ];
            panelSettings[ name ] = settings.weight;
            folder2.add( panelSettings, name, 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {
                setWeight( settings.action, weight );
                settings.weight = weight;
            });
        }
        folder3.add( panelSettings, 'modify time scale', 0.0, 1.5, 0.01 ).onChange( modifyTimeScale );
        folder1.open();
        folder2.open();
        folder3.open();
        crossFadeControls.forEach( function ( control ) {
            control.setInactive = function () {
                control.domElement.classList.add( 'control-inactive' );
            };
            control.setActive = function () {
                control.domElement.classList.remove( 'control-inactive' );
            };
            const settings = baseActions[ control.property ];
            if ( ! settings || ! settings.weight ) {
                control.setInactive();
            }
        });
    }

    function modifyTimeScale( speed ) {
        mixer.timeScale = speed;
    }

    function prepareCrossFade( startAction, endAction, duration ) {
        // If the current action is 'idle', execute the crossfade immediately;
        // else wait until the current action has finished its current loop
        if ( currentBaseAction === 'idle' || ! startAction || ! endAction ) {
            executeCrossFade( startAction, endAction, duration );
        } else {
            synchronizeCrossFade( startAction, endAction, duration );
        }
        // Update control colors
        if ( endAction ) {
            const clip = endAction.getClip();
            currentBaseAction = clip.name;
        } else {
            currentBaseAction = 'None';
        }

        crossFadeControls.forEach( function ( control ) {
            const name = control.property;
            if ( name === currentBaseAction ) {
                control.setActive();
            } else {
                control.setInactive();
            }
        });
    }

    function synchronizeCrossFade( startAction, endAction, duration ) {
        mixer.addEventListener( 'loop', onLoopFinished );
        function onLoopFinished( event ) {
            if ( event.action === startAction ) {
                mixer.removeEventListener( 'loop', onLoopFinished );
                executeCrossFade( startAction, endAction, duration );
            }
        }
    }
    
    function executeCrossFade( startAction, endAction, duration ) {
        // Not only the start action, but also the end action must get a weight of 1 before fading
        // (concerning the start action this is already guaranteed in this place)
        if ( endAction ) {
            setWeight( endAction, 1 );
            endAction.time = 0;
            if ( startAction ) {
                // Crossfade with warping
                startAction.crossFadeTo( endAction, duration, true );
            } else {
                // Fade in
                endAction.fadeIn( duration );
            }
        } else {
            // Fade out
            startAction.fadeOut( duration );
        }
    }

    function connectLine() {
        // // 创建 3D 物体
        // const object3d = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshBasicMaterial({
        // color: 0x0000ff
        // }));

        // // 获取 3D 物体上的某个点位
        // const point = object3d.getPointAt(0.5, 0.5, 0.5);

        // // 创建文本描述
        // const text = "This is a box.";

        // // 创建文字几何体
        // const textGeometry = new THREE.TextGeometry(text, {
        // font: new THREE.FontLoader().load("assets/fonts/Roboto-Regular.ttf"),
        // size: 100
        // });

        // // 创建线条
        // const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([
        // point,
        // textGeometry.position
        // ]), new THREE.LineBasicMaterial({
        // color: 0x0000ff,
        // linewidth: 2
        // }));

        // // 设置曲率
        // line.setCurveSegments(10);

        // // 将线条添加到场景中
        // scene.add(line);

        // // 将文本添加到场景中
        // scene.add(textGeometry);

        // // 渲染场景
        // renderer.render(scene, camera);

    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    onMounted(()=>{
        init();
        window.addEventListener("resize", onWindowResize);
    })

    router.afterEach((_, __) => {
    // 在这里处理哈希变化的逻辑
    //     removeDecals();
    //     var finishObj;
    //     const ids = (route.query.ids || '').split(',')
    //     for (var i = 0; i < preLoadMeshList.length; i++) {
    //         var model = preLoadMeshList[i];
    //         if(ids.indexOf(model.id) != -1) {
    //             var mesh1 = mesh.children.find(e => e.name == model.id)
    //             mesh1.material.opacity = 1;
    //             preMeshList.push(mesh1);
    //             mesh1.material.color = new THREE.Color( 0x0000ff ); //Math.random()*0x00ff00<<0
    //             addText(mesh1, model);
    //             finishObj = model;
    //         }
    //     }
    //     if(finishObj != null) {
    //         setTimeout(() => {
    //             onAcupointsClick(finishObj);
    //         }, 500);
    //     }
    });
  
</script>

<template>
  <div ref="target"></div>
</template>