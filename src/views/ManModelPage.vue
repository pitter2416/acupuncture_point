<script setup>
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    import { onMounted,ref  } from 'vue'
    import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
    import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
    import {man} from '../assets/model/man.js'

    const target = ref();
    var mesh;
    const width = window.innerWidth, height = window.innerHeight;
    //创建一个三维场景
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    //创建一个WebGL渲染器
    const renderer = new THREE.WebGLRenderer({antialias: true});
    
    function init() {
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width,height)//设置渲染区尺寸
        renderer.setClearColor(0xffcccccc);
        target.value.appendChild(renderer.domElement)

        camera.position.z = 120;
        const controls = new OrbitControls(camera, target.value);
        controls.minDistance = 50;
        controls.maxDistance = 200;

        scene.add(new THREE.AmbientLight(0xff443333));

        const dirLight1 = new THREE.DirectionalLight(0xffffddcc, 1);
        dirLight1.position.set(1, 0.75, 0.5);
        scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0xffccccff, 1);
        dirLight2.position.set(-1, 0.75, -0.5);
        scene.add(dirLight2);

        const geometry = new THREE.BufferGeometry();
        geometry.setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);

        const line = new THREE.Line(geometry, new THREE.LineBasicMaterial());
        scene.add(line);
        
        var loader = new THREE.TextureLoader();
        var materialMap = loader.load("model/man/man.jpg")
        // 加载obj和mtl模型
        let mtlLoader = new MTLLoader();
        let objLoader = new OBJLoader();
        mtlLoader.load('model/man/man.mtl', function(materials) {
            // 将材质应用于 OBJLoader 加载的对象
            materials.preload();
            objLoader.setMaterials(materials);
            // 使用 OBJLoader 加载 OBJ 文件
            objLoader.load('model/man/man.obj', function(object) {
                mesh = object.children[0];
                object.traverse(function (child) {
                    if (child instanceof THREE.Mesh) {
                        child.material.map = materialMap;
                        animate();
                    }
                });
                scene.add(object);
                object.scale.set(0.5, 0.5, 0.5)
                // 将模型的中心点设置到canvas坐标系的中心点，保证模型显示是居中的，object就是操作的目标模型
                let box = new THREE.Box3().setFromObject(object); // 获取模型的包围盒
                let mdlen = box.max.x - box.min.x; // 模型长度
                let mdwid = box.max.z - box.min.z; // 模型宽度
                let mdhei = box.max.y - box.min.y; // 模型高度
                let x1 = box.min.x + mdlen / 2; // 模型中心点坐标X
                let y1 = box.min.y + mdhei / 2; // 模型中心点坐标Y
                let z1 = box.min.z + mdwid / 2; // 模型中心点坐标Z
                object.position.set(-x1, -y1, -z1); // 将模型进行偏移
                renderer.toneMapping = THREE.ACESFilmicToneMapping;
                renderer.outputEncoding = THREE.sRGBEncoding;
                object.position.set(-x1, -y1, -z1); // 将模型进行偏移
                // objPosition = object.position;
                // finalPosition = camera.position;
            })
        })

        const raycaster = new THREE.Raycaster();
        const mouseHelper = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 10), new THREE.MeshNormalMaterial());
        mouseHelper.visible = false;
        scene.add(mouseHelper);
    }

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera)//执行渲染操作、指定场景、相机作为参数
    }

    function myEventHandler() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onMounted(()=>{
        init();
        animate();
        window.addEventListener("resize", myEventHandler);
    })
  
</script>

<template>
  <div ref="target"></div>
</template>