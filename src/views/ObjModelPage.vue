<script setup>
    import { useRoute } from 'vue-router'
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { onMounted,ref  } from 'vue'
    import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
    import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

    const target = ref()
    let camera, scene, renderer;
    let object, line, raycaster, mouseHelper;
    const intersects = [];
    const meshList = [];
    let moved = false;
    var mouse = new THREE.Vector2();
    const position = new THREE.Vector3();
    const intersection = {
        intersects: false,
        point: new THREE.Vector3(),
        normal: new THREE.Vector3()
    };

    function init() {
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 20 );
        camera.position.z = 2.5;
        // scene
        scene = new THREE.Scene();
        
        const ambientLight = new THREE.AmbientLight( 0xffffff );
        scene.add( ambientLight );
        const pointLight = new THREE.PointLight( 0xffffff, 15 );
        camera.add( pointLight );

        const geometry = new THREE.BufferGeometry();
        geometry.setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);

        line = new THREE.Line(geometry, new THREE.LineBasicMaterial());
        scene.add(line);

        raycaster = new THREE.Raycaster();
        mouseHelper = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 10), new THREE.MeshNormalMaterial());
        mouseHelper.visible = false;
        scene.add(mouseHelper);

        scene.add( camera );
        // manager
        function loadModel() {
            object.traverse( function ( child ) {
                if ( child.isMesh ) child.material.map = texture;
            });
            object.position.y = - 0.95;
            object.scale.setScalar( 0.01 );
            scene.add( object );
            render();
        }

        const manager = new THREE.LoadingManager( loadModel );
        // texture
        const textureLoader = new THREE.TextureLoader( manager );
        const texture = textureLoader.load('model/obj/uv_grid_opengl.jpg', render );
        texture.colorSpace = THREE.SRGBColorSpace;
        // model
        function onProgress( xhr ) {
            if ( xhr.lengthComputable ) {
                const percentComplete = xhr.loaded / xhr.total * 100;
            }
        }
        function onError() {}
        const loader = new OBJLoader( manager );
        loader.load('model/obj/male02.obj', function ( obj ) {
            object = obj;
            meshList.push(...object.children)
        }, onProgress, onError );
        renderer = new THREE.WebGLRenderer( { antialias: true });
        // 设置背景色
        renderer.setClearColor(0xffffff);
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        target.value.appendChild( renderer.domElement );
        const controls = new  OrbitControls( camera, renderer.domElement );
        controls.minDistance = 2;
        controls.maxDistance = 5;
        controls.addEventListener('change', ()=>{
            moved = true;
            render();
        } );
        
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function checkIntersection(x, y, flag) {
        if (!meshList.length) return;
        mouse.x = (x / window.innerWidth) * 2 - 1;
        mouse.y = - (y / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        for(let i=0; i<meshList.length; i++) {
            mMesh = meshList[i];
            raycaster.intersectObject(mMesh, false, intersects);
            if(intersects.length) break;
        }
        var objectIntersects = raycaster.intersectObjects( mMesh.children );
        if (intersects.length > 0) {
            const p = intersects[0].point;
            mouseHelper.position.copy(p);
            intersection.point.copy(p);
            const n = intersects[0].face.normal.clone();
            n.transformDirection(mMesh.matrixWorld);
            n.multiplyScalar(10);
            n.add(intersects[0].point);
            intersection.normal.copy(intersects[0].face.normal);
            mouseHelper.lookAt(n);
            const positions = line.geometry.attributes.position;
            positions.setXYZ(0, p.x, p.y, p.z);
            positions.setXYZ(1, n.x, n.y, n.z);
            positions.needsUpdate = true;
            intersection.intersects = true;
            intersects.length = 0;
            if (flag) {
                if(objectIntersects.length > 0) {
                    showMesh(objectIntersects[0].object)
                }
            }
            render();
        } else {
            intersection.intersects = false;
        }
    }

    function onPointerMove(event) {
        if (event.isPrimary) {
            checkIntersection(event.clientX, event.clientY);
        }
    }

    const list = [];
    const decals = [];
    let index = 0;
    var mMesh;
    function shoot() {
        if(!mMesh) return;
        position.copy(intersection.point);

        // 创建一个圆球的几何体
        const radius = 0.005; // 圆球的半径
        const widthSegments = 12; // 球体宽度上的分段数
        const heightSegments = 12; // 球体高度上的分段数
        const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
        // 创建一个材质
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        // 创建一个圆球的网格模型
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(position.x, position.y, position.z);
        // 将圆球添加到场景中
        decals.push(sphere);
        mMesh.attach(sphere)
        render();
        list.push({ id: index++, position: { x: position.x, y: position.y, z: position.z }, x: sphere.matrix.elements[12], y: sphere.matrix.elements[13], z: sphere.matrix.elements[14] })
        if (list.length == 10) {
            console.log(list)
        }
    }

    function render() {
        renderer.render( scene, camera );
    }

    function removeDecals() {
        decals.forEach(function (d) {
            object.children.forEach(p=>{
                p.remove(d);
            })
        });
        decals.length = 0;
        render();
    }

    onMounted(()=>{
        init();
        window.addEventListener("resize", onWindowResize);
        window.addEventListener('pointerdown', function () {
            moved = false;
        });
        window.addEventListener('pointerup', function (event) {
            if (Object.prototype.toString.call(event.target) == '[object HTMLCanvasElement]') {
                if (moved === false) {
                    checkIntersection(event.clientX, event.clientY);
                    if (intersection.intersects) {
                        shoot();
                    }
                }
            }
        });
        window.addEventListener('pointermove', onPointerMove);
        setTimeout(() => {
            removeDecals();
        }, 6000);
    })
</script>

<template>
    <div ref="target"></div>
</template>