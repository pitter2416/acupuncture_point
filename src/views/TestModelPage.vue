<script setup>
    import { useRoute } from 'vue-router'
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { onMounted,ref  } from 'vue'
    import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
    import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import objList from '../assets/model/obj.js'

    const target = ref()
    let camera, scene, renderer;
    let object, line, raycaster, mouseHelper;
    const intersects = [];
    const preLoadMeshList = [];
    let moved = false;
    var mouse = new THREE.Vector2();
    const position = new THREE.Vector3();
    const intersection = {
        intersects: false,
        point: new THREE.Vector3(),
        normal: new THREE.Vector3()
    };

    function init() {
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 120;
        camera.position.x = 120;
        camera.position.y = 120;
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
            console.log('loadModel')
            // object.traverse( function ( child ) {
            //     if ( child.isMesh ) child.material.map = texture;
            // });
            // object.position.y = - 0.95;
            // object.scale.setScalar( 0.01 );
            // scene.add( object );
            // mMesh = object.children[0];
            // mMesh.material.color = new THREE.Color( 0x0000ff )
            // preRender();
            // render();

            // 创建一个圆球的几何体
            const radius = 5; // 圆球的半径
            const widthSegments = 112; // 球体宽度上的分段数
            const heightSegments = 112; // 球体高度上的分段数
            const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
            // 创建一个材质
            const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
            // 创建一个圆球的网格模型
            mMesh = new THREE.Mesh(geometry, material);
            // Set the transformation matrix
            scene.add( mMesh );
            animate();
        }

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera)//执行渲染操作、指定场景、相机作为参数
        }

        const manager = new THREE.LoadingManager( loadModel );
        // texture
        const textureLoader = new THREE.TextureLoader( manager );
        const texture = textureLoader.load('model/obj/uv_grid_opengl.jpg', render );
        texture.colorSpace = THREE.SRGBColorSpace;
        // model
        // function onProgress( xhr ) {
        //     if ( xhr.lengthComputable ) {
        //         const percentComplete = xhr.loaded / xhr.total * 100;
        //     }
        // }
        // function onError() {}
        // const loader = new OBJLoader( manager );
        // loader.load('model/obj/male02.obj', function ( obj ) {
        //     object = obj;
        // }, onProgress, onError );

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

    // 把所有穴位点全部添加到人体上，并设置成不透明
    function preRender() {
        preLoadMeshList.length = 0;
        preLoadMeshList.push(...objList.filter(e=>(e.x+e.y+e.z) != 0));
        for (var i = 0; i < preLoadMeshList.length; i++) {
            var model = preLoadMeshList[i];
            // 创建一个圆球的几何体
            var geometry = new THREE.SphereGeometry(0.5, 20, 20);
            // 创建一个材质
            var material = new THREE.MeshBasicMaterial({ color: 0xffffff});
            var mesh1 = new THREE.Mesh(geometry, material)
            // Set the transformation matrix
            var matrix = new THREE.Matrix4();
            matrix.makeTranslation(model.x, model.y, model.z);
            mesh1.matrix = matrix;
            mesh1.position.setFromMatrixPosition(matrix);
            mesh1.rotation.setFromRotationMatrix(matrix);
            mesh1.name = model.id;
            mMesh.attach(mesh1);
        }
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function checkIntersection(x, y, flag) {
        return;
        if (!mMesh) return;
        mouse.x = (x / window.innerWidth) * 2 - 1;
        mouse.y = - (y / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        raycaster.intersectObject(mMesh, false, intersects);
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
        mMesh.attach(sphere);
        list.push({ id: index++, position: { x: position.x, y: position.y, z: position.z }, x: sphere.matrix.elements[12], y: sphere.matrix.elements[13], z: sphere.matrix.elements[14] })
        if (list.length % 10 == 0) {
            console.log(list)
        }
        render();
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
    })
</script>

<template>
    <div ref="target"></div>
</template>