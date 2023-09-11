<script setup>
    import { useRoute } from 'vue-router'
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { onMounted,ref  } from 'vue'
    import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
    import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import {man} from '../assets/model/man.js'
    const route = useRoute()
    const ids = (route.query.ids || '').split(',').map(i=>parseInt(i));
    const target = ref();
    var mesh;
    const decals = [];
    const preLoadMeshList = [];
    const width = window.innerWidth, height = window.innerHeight;
    //创建一个三维场景
    const scene = new THREE.Scene();
    const fontLoader = new FontLoader();
    var mFont;
    var textureLoader = new THREE.TextureLoader();
    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();
    const camera = new THREE.PerspectiveCamera(40, width / height, 3, 1000);
    //创建一个WebGL渲染器
    const renderer = new THREE.WebGLRenderer({antialias: true});
    
    function init() {
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width,height)//设置渲染区尺寸
        renderer.setClearColor(0xffffff);
        target.value.appendChild(renderer.domElement)

        camera.position.z = 120;
        const controls = new OrbitControls(camera, target.value);
        controls.minDistance = 50;
        controls.maxDistance = 200;

        scene.add(new THREE.AmbientLight(0x443333));

        const hemiLight = new THREE.HemisphereLight(0xffcccc, 0x443333, 5 );
        hemiLight.position.set( 1, 100, 5 );
        scene.add( hemiLight );

        const dirLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
        dirLight.position.set( 20, 150, 5 );
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 2;
        dirLight.shadow.camera.bottom = - 2;
        dirLight.shadow.camera.left = - 2;
        dirLight.shadow.camera.right = 2;
        dirLight.shadow.camera.near = 0.5;
        dirLight.shadow.camera.far = 20;
        scene.add( dirLight );

        const geometry = new THREE.BufferGeometry();
        geometry.setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);

        const line = new THREE.Line(geometry, new THREE.LineBasicMaterial());
        scene.add(line);
        
        var materialMap = textureLoader.load("model/man/man.jpg")
        // 加载obj和mtl模型
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
                    }
                });
                preRender();
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

     // 把所有穴位点全部添加到人体上，并设置成不透明
     function preRender() {
        preLoadMeshList.length = 0;
        for (var d of man) {
            for (var d1 of d.acupoints) {
                preLoadMeshList.push(d1)
            }
        }
        for (var i = 0; i < preLoadMeshList.length; i++) {
            var model = preLoadMeshList[i];
            // 创建一个圆球的几何体
            var geometry = new THREE.SphereGeometry(0.5, 20, 20);
            // 创建一个材质
            // console.log('ids',ids, 'model.id', model.id, ids.indexOf(model.id))
            var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0});
            var mesh1 = new THREE.Mesh(geometry, material)
            // Set the transformation matrix
            var matrix = new THREE.Matrix4();
            matrix.makeTranslation(model.x, model.y, model.z);
            mesh1.matrix = matrix;
            mesh1.position.setFromMatrixPosition(matrix);
            mesh1.rotation.setFromRotationMatrix(matrix);
            mesh1.name = `${model.id}`;
            mesh.attach(mesh1);
            if(ids.indexOf(model.id) != -1) {
                mesh1.material.opacity = 1;
                mesh1.material.color = new THREE.Color( Math.random()*0x00ff00<<0);
                addText(mesh1, model);
            }
        }
    }

    function addText(m, model) {
        if(mFont != null) {
            var text = model.name;
            var geometry = new TextGeometry(text, {
                font: mFont,          // 字体格式
                size: 1.2,           // 字体大小
                height: 0.,          // 字体深度
                curveSegments: 11,  // 曲线控制点数
                bevelEnabled: false, // 斜角
                bevelThickness: 0.1,  // 斜角的深度
                bevelSize: 1,       // 斜角的大小
                bevelSegments: 1    // 斜角段数
            });
            var mat = new THREE.MeshPhongMaterial({
                color: m.material.color,
                opacity: 0.3,
                shininess: 1,
            });
            var mesh1 = new THREE.Mesh(geometry, mat);
            mesh1.needsUpdate = true;
            mesh1.position.copy(model.position);
            mesh1.position.z += model.z < 0 ? -1.5 : 1.5
            mesh1.rotation.y = model.z < 0 ? -Math.PI : mesh1.rotation.y
            mesh1.position.x += (model.z < 0 && model.position.x > 9 && model.position.x < 13.5) ? 5 : 0.1
            if(model.position.y > -40 && model.position.y<-36 ) {
                mesh1.position.y += 1;
                mesh1.position.x += model.position.x;
            } else if(model.position.y > -42 && model.position.y <= -40) {
                mesh1.position.y -= 1.5;
            } else if (model.position.y > 33.05 && model.position.y <= 37.5) {
                if(model.position.z < -1) {
                    mesh1.position.x += 1.8*model.name.length;
                } else {
                    mesh1.position.x -= 1.8 * model.name.length;
                }
            } else if(model.position.y == 9.356680189579848) {
                mesh1.position.x += 3.2;
            }
            mesh.attach(mesh1);
            decals.push(mesh1);
            return
        }
        fontLoader.load('fonts/helvetiker_bold.typeface.json',
            ( font ) =>{
                mFont = font;
                addText(m, model);
                console.log( font );
            }, ( xhr ) => {
                console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
            }, ( err ) => {
                console.log( 'An error happened' );
            }
        );

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