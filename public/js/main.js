$(function() {
    var scene = new THREE.Scene();
    var meshes = [];
    var modelName = "box";

    //var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 500);
    var camera = new THREE.PerspectiveCamera(50, 1, .1, 1000);
    camera.position.x = 0;
    camera.position.y = 10;
    camera.position.z = 20;
    camera.lookAt({x:0, y:0, z:0});

    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("canvas"),
        antialias: true,
        preserveDrawingBuffer: false,
        alpha: true
    });

    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(500, 500);

    var directionalLight = new THREE.DirectionalLight('white', 0.5);
    var light = new THREE.AmbientLight('white', 0.5);
    directionalLight.position.set(0, 10, 6);
    scene.add(directionalLight);
    scene.add(light);

    var grid = new THREE.GridHelper(50, 5);
    var color = new THREE.Color("rgb(255, 0, 0)");
    grid.setColors(color, 0x000000);

    scene.add(grid);

    loadMesh(modelName, function(obj) {
        obj.position.y = 0;
        obj.scale.x = 1;
        obj.scale.y = 1;
        obj.scale.z = 1;
        addMesh(obj);
    });

    var loader = new THREE.JSONLoader();
    loader.load("models/box.js", function(geometry) {
        var eMaterial = new THREE.MeshBasicMaterial( { color: 0xff3300, wireframe: true } );
        var wireframeMesh = new THREE.Mesh( geometry, eMaterial );
        // geometry.position.y = 0;
        // geometry.scale.x = 1;
        // geometry.scale.y = 1;
        // geometry.scale.z = 1;
        meshes.push(wireframeMesh);
        scene.add(wireframeMesh);
        console.log("number of vertices" + geometry.vertices.length);
        console.log("number of faces" + geometry.faces.length);
        for (var i = 0; i < geometry.vertices.length; i++)
        {
            var v = geometry.vertices[i];
            console.log(v);

        }
        for (var i = 0; i < geometry.faces.length; i++)
        {
            var f = geometry.faces[i];
            console.log(f);

        }        
    });

//     loader.load( './models/collada/test.dae', function ( collada ) {                
//     for(i = 0; i < collada.scene.children.length; i++) {
//         if(collada.scene.children[i].geometry) {
//             for(j = 0; j < collada.scene.children[i].geometry.vertices.length; j++) {
//                 //do stuff...
//             }
//         }
//     }

//     //...
// } );


/*

    if(doEdgeCollapse){
        simplification.EdgeCollapse();
        doEdgeCollapse = false;
    }

    if(doVertexSplit){
        simplification.VertexSplit();
        doVertexSplit = false;
    }

    if(doLOD){
        simplification.ControlLevelOfDetail(step);
        doLOD = false;
    }
	*/
    

    var cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
    cameraControls.target.set(0, 0, 0);
    cameraControls.addEventListener('canvas', this.render);

    render();
    // *** to do after calculations
    // scene.remove(mesh);
    // mesh.geometry.dispose();
    // mesh.material.dispose();
    // mesh.texture.dispose();

    function addMesh(mesh) {
        var eMaterial = new THREE.MeshBasicMaterial( { color: 0xff3300, wireframe: true } );
        var wireframeMesh = new THREE.Mesh( mesh, eMaterial );
        meshes.push(mesh);
        scene.add(mesh);
    }

    function render() {
        //this.window.requestAnimationFrame(this.render.bind(this));
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function loadMesh(name, callback) {
        var objLoader = new THREE.OBJLoader();
        var matLoader = new THREE.MTLLoader();
        var path = "models/";
        matLoader.setBaseUrl(path);
        matLoader.setPath(path);
        matLoader.load(name + '.mtl', function(materials){
            try {
                materials.preLoad();
                objLoader.setMaterials(materials);
            }
            catch(error) {
                console.log(error);
            }
            objLoader.setPath(path);
            objLoader.load(name + '.obj', function (obj) {
                callback(obj);
            });
        });
    };

});