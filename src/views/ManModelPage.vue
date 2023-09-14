<script setup>
    import { useRoute } from 'vue-router'
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { onMounted,ref, render  } from 'vue'
    import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
    import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import manObj from '../assets/model/man.js'

    import router from '../router'

    const route = useRoute()
    const ids = (route.query.ids || '').split(',');
    const target = ref();
    var mesh;
    var mouse = new THREE.Vector2();
    const intersection = {
        intersects: false,
        point: new THREE.Vector3(),
        normal: new THREE.Vector3()
    };
    var targetObj;
    const decals = [];
    const preMeshList = [];
    var isPointClick = false;

    const preLoadMeshList = [];
    const width = window.innerWidth, height = window.innerHeight;
    //创建一个三维场景
    const scene = new THREE.Scene();
    const fontLoader = new FontLoader();
    var mFont;
    var line;
    var raycaster;
    var mouseHelper;
    const intersects = [];
    var textureLoader = new THREE.TextureLoader();
    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();
    const camera = new THREE.PerspectiveCamera(40, width / height, 3, 1000);
    camera.lookAt(0, 0, 0); // 将相机视点设置为场景中心
    //创建一个WebGL渲染器
    const renderer = new THREE.WebGLRenderer({antialias: true});

    fontLoader.load('fonts/font_weiruanyahei.json', font => {
        mFont = font;
    });

    let moved = false;

    window.addEventListener('pointerdown', function () {
        moved = false;
    });

    window.addEventListener('pointerup', function (event) {
        if (Object.prototype.toString.call(event.target) == '[object HTMLCanvasElement]') {
            if (moved === false) {
                checkIntersection(event.clientX, event.clientY);
                // if (intersection.intersects) {
                //     shoot();
                // }
            }
        }
    });

    window.addEventListener('pointermove', onPointerMove);

    function onPointerMove(event) {
        if (event.isPrimary) {
            checkIntersection(event.clientX, event.clientY);
        }
    }

    document.addEventListener('click', function (event) {
        checkIntersection(event.clientX, event.clientY, true);
    });

    function checkIntersection(x, y, flag) {
        if (mesh === undefined) return;
        mouse.x = (x / window.innerWidth) * 2 - 1;
        mouse.y = - (y / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        raycaster.intersectObject(mesh, false, intersects);
        var objectIntersects = raycaster.intersectObjects( mesh.children );
        if (intersects.length > 0) {
            const p = intersects[0].point;
            mouseHelper.position.copy(p);
            intersection.point.copy(p);
            const n = intersects[0].face.normal.clone();
            n.transformDirection(mesh.matrixWorld);
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
        } else {
            intersection.intersects = false;
        }
    }
    
    function init() {
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width,height)//设置渲染区尺寸
        renderer.setClearColor(0xffffff);
        target.value.appendChild(renderer.domElement)

        camera.position.z = 120;
        const controls = new OrbitControls(camera, target.value);
        controls.minDistance = 50;
        controls.maxDistance = 200;

        controls.addEventListener('change', function () {
            moved = true;
        });

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

        line = new THREE.Line(geometry, new THREE.LineBasicMaterial());
        scene.add(line);
        
        var materialMap = textureLoader.load("model/man/man.jpg")
        // 加载obj和mtl模型
        mtlLoader.load('model/man/man.mtl', function(materials) {
            // 将材质应用于 OBJLoader 加载的对象
            materials.preload();
            objLoader.setMaterials(materials);
            // 使用 OBJLoader 加载 OBJ 文件
            objLoader.load('model/man/man.obj', function(object) {
                targetObj = object;
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
                animate();

                if(ids) {
                    var finishObj;
                    mesh.children.forEach(e=>e.material.opacity=0);
                    ids.forEach((id) => {
                        var cube = mesh.children.find(e => e.name == id)
                        var model = manObj.find((d)=>d.id==id)
                        if(cube && model) {
                            cube.material.opacity = 1;
                            addText(cube, model);
                            finishObj = model;
                        }
                    });

                    if(finishObj != null) {
                        setTimeout(() => {
                            onAcupointsClick(finishObj);
                        }, 500);
                    }
                }
            })
        })

        raycaster = new THREE.Raycaster();
        mouseHelper = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 10), new THREE.MeshNormalMaterial());
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
        preLoadMeshList.push(...manObj.filter(e=>(e.x+e.y+e.z) != 0));
        // var finishObj;
        for (var i = 0; i < preLoadMeshList.length; i++) {
            var model = preLoadMeshList[i];
            // 创建一个圆球的几何体
            var geometry = new THREE.SphereGeometry(0.5, 20, 20);
            // 创建一个材质
            var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0});
            var mesh1 = new THREE.Mesh(geometry, material)
            // Set the transformation matrix
            var matrix = new THREE.Matrix4();
            matrix.makeTranslation(model.x, model.y, model.z);
            mesh1.matrix = matrix;
            mesh1.position.setFromMatrixPosition(matrix);
            mesh1.rotation.setFromRotationMatrix(matrix);
            mesh1.name = model.id;
            mesh.attach(mesh1);
        }

        // if(finishObj != null) {
        //     setTimeout(() => {
        //         onAcupointsClick(finishObj);
        //     }, 500);
        // }
    }

    function onAcupointsClick(obj) {
        // console.log('position',obj,'camera.position',camera.position);
        if((camera.position.z > 0 && obj.position.z < 0) || (camera.position.z < 0 && obj.position.z > 0)) {
            camera.position.set(camera.position.x,camera.position.y, -camera.position.z)
            animate();
            const wheelEvt1 = document.createEvent('MouseEvents');
            wheelEvt1.initMouseEvent('wheel',true,true);
            document.querySelector('canvas').dispatchEvent(wheelEvt1);
        }
        // var p1 = {"x":-1.2228690532530182,"y":5.0656494540051185,"z":2.6636422120377503}
        // var p2 = {"x":0.3115522505371633,"y":10.891290768463882,"z":-5.8800909763953655}

        // var p3 = {
        //     "x": (obj.position.x + obj.position.x) / 0.8,
        //     "y": 25.706226638635073,
        //     "z": (obj.position.z + obj.position.z) / 0.8,
        // }
        // camera.position.z = obj.z < 0 ? p2.z : p1.z
        // if([3.803792830923257, -41.16780364415135, -40.91256046796157].indexOf(obj.position.y) != -1) {
        //     camera.position.copy(obj.position)
        //     scale = true;
        // }
        // const wheelEvt1 = document.createEvent('MouseEvents');
        // wheelEvt1.deltaY = -10
        // Initializing the event
        // wheelEvt1.initMouseEvent(
        //     'wheel',    // type of event (e.g., 'click', 'mousemove', 'mousedown')
        //     true,       // bubbles (event will bubble up through the DOM)
        //     true,       // cancelable (event can be canceled)
        // )

        // for (let i = 1; i <= 5; i++) {
        //     setTimeout(() => {
        //         document.querySelector('canvas').dispatchEvent(wheelEvt1);
        //     }, i * 30);
        // }
        // setTimeout(() => {
        //     const wheelEvt1 = document.createEvent('MouseEvents');
        //     wheelEvt1.deltaY = 10
        //     // Initializing the event
        //     wheelEvt1.initMouseEvent(
        //         'wheel',    // type of event (e.g., 'click', 'mousemove', 'mousedown')
        //         true,       // bubbles (event will bubble up through the DOM)
        //         true,       // cancelable (event can be canceled)
        //     )

        //     for (let i = 1; i <= 16; i++) {
        //         setTimeout(() => {
        //             document.querySelector('canvas').dispatchEvent(wheelEvt1);
        //         }, i * 50);
        //     }
        // }, 300);
    }

    function addText(m, model) {
        if(mFont == null) return;
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
        mesh1.material.opacity =1;
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
    }

    function removeDecals() {
        decals.forEach(function (d) {
            mesh.remove(d);
        });
        decals.length = 0;
        preMeshList.forEach(function (d) {
            d.material.opacity = 0;
        });
        preMeshList.length = 0;
    }

    function showMesh(obj) {
        const cube = mesh.children.find(e=>e==obj);
        if(cube == null) return;
        const v = manObj.find(v => v.id == obj.name)
        if (v) {
            const ids = route.query.ids;
            if((ids||'').indexOf(v.id) == -1) {
                var list = []
                if(ids) list.push(...ids.split(','))
                list.push(v.id)
                isPointClick = true;
                router.push({ path: route.path, query: { ids: list.join(',')}})
                try {
                    window.parent.treatment.getAcupObj().setPoints(list);
                } catch (err){
                }
            } else {
                isPointClick = true;
                let list = [...ids.split(',')];
                list.splice(list.indexOf(v.id),1);
                router.push({ path: route.path, query: { ids: list.join(',')}})
            }
            return;
        }
    }

    onMounted(()=>{
        init();
        window.addEventListener("resize", myEventHandler);
    })

    router.afterEach((_, __) => {
        // 在这里处理哈希变化的逻辑
        removeDecals();
        var finishObj;
        const ids = route.query.ids && route.query.ids.split(',')
        if(ids) {
            mesh.children.forEach(e=>e.material.opacity=0);
            ids.forEach((id) => {
                var cube = mesh.children.find(e => e.name == id)
                var model = manObj.find((d)=>d.id==id)
                if(cube && model) {
                    cube.material.opacity = 1;
                    addText(cube, model);
                    finishObj = model;
                }
            });
        }
        if(finishObj != null && !isPointClick) {
            setTimeout(() => {
                onAcupointsClick(finishObj);
            }, 500);
        }
        setTimeout(() => {
            isPointClick = false;
        }, 600);
    });
  
</script>

<template>
  <div ref="target"></div>
</template>