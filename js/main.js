/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var renderer;
var scene;
var camera;
var stats;
var controls;
var mat;

var world = new World();

var main = function() {
    var noise = new ImprovedNoise();
    var voxels_active = 0;

    var offset = Math.random();//0.7022340332623571;

    for(var x = 0; x < world.widthX(); x++){
        for(var z = 0; z < world.widthZ(); z++){
            for(var y = 0; y < CHUNK_SIZE; y++){
                /*var val = ((-1/(height/2)) * y + 1) + noise.noise(x/100 + offset,z/100 + offset ,y/100 + offset);
                if(val > 0.3){
                    world.set(x,z,y, new Stone());
                } else if(val > 0.05){
                    world.set(x,z,y, new Dirt());
                } else if (val > 0.0) {
                    world.set(x,z,y, new Grass());
                }*/
                world.set(x,z,y, new Block());
            

                
                //if(noise.noise(x/100 + offset,z/100 + offset ,y/100 + offset) > 0.0) world.set(x,z,y, new Block());
            }
        }
    }

    var heart_stamp = new HeartStamp();
    var pillar = new Pillar();

    for(var x = 0; x < WORLD_WIDTH; x++){
        heart_stamp.stamp(world, x*CHUNK_SIZE, (WORLD_WIDTH-1)*CHUNK_SIZE, 16);
        pillar.stamp(world, x*CHUNK_SIZE, 0, 16);
    }

    //world.set(0,0,0, new Block());

    
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0x87CEEB, 1 );
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    scene = new THREE.Scene();
    camera.position.z = 256;
    camera.position.y = 256;
    camera.position.x = 0;
    camera.lookAt(new THREE.Vector3(0,0,0));

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    //controls.target.set(new THREE.Vector3(0,128,0));
    
    var vecOrig = new THREE.Vector3(0,0,0);
    var arrowX = new THREE.ArrowHelper(new THREE.Vector3(1,0,0), vecOrig, 1000, 0xff0000, 0.1, 0.1); //r
    var arrowY = new THREE.ArrowHelper(new THREE.Vector3(0,0,1), vecOrig, 1000, 0x00ff00, 0.1, 0.1); //g
    var arrowZ = new THREE.ArrowHelper(new THREE.Vector3(0,1,0), vecOrig, 1000, 0x0000ff, 0.1, 0.1); //b
    
    scene.add(arrowX);
    scene.add(arrowY);
    scene.add(arrowZ);
    
    var geo = new THREE.Geometry();
    var cubeMesh = new THREE.Mesh();
    cubeMesh.geometry = new THREE.CubeGeometry(1,1,1);
    
    world.render(scene);
    
    var ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
    
    var light = new THREE.DirectionalLight( 0xffffff, 1.0 ); // soft white light
    light.position.set(-1.0,1.0,-1.0).normalize();
    scene.add(light);

    /**
    document.getElementById("voxels").innerHTML = voxels_active;
    document.getElementById("vertices").innerHTML = mesh.geometry.vertices.length;
    document.getElementById("faces").innerHTML = mesh.geometry.faces.length;
    document.getElementById("culled").innerHTML = ((1 - (mesh.geometry.faces.length / (12 * voxels_active)))*100).toFixed(2);
    document.getElementById("seed").innerHTML = offset;
    */

    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild( stats.domElement );
	
    requestAnimationFrame(function() {
        render();
    });

    window.addEventListener( 'keydown', onKeyDown, false );
    window.addEventListener('resize', resize, false);
};

var render = function() {
    stats.begin();
    world.render(scene);
    renderer.render(scene, camera);
    stats.end();


    requestAnimationFrame(function() {
        render();
    });
};

var onKeyDown = function(event) {
    if(event.keyCode == 87) {// 'w'-key
        mat.wireframe = !mat.wireframe;
    }
};

var resize = function() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}
