/*
 * Simple demo for loading json files generated by assimp2json
 * https://github.com/acgessler/assimp2json
 * 
 * assimp2json uses assimp (http://assimp.sf.net) to import 40+ 3D file formats,
 * including 3ds, obj, dae, blend, fbx, x, ms3d, lwo (and many more).
 * 
 * TODOs: - assimp supports skeletal animations and assimp2son exports them.
 * This demo currently doesn't read them. - not all material properties
 * supported by assimp are currently mapped to THREE.js
 * 
 * The sample files for this demo originate in assimp's repository, and were
 * converted using assimp2json 2.0. The interior file was slightly edited to
 * adjust for lower-case texture names.
 * 
 */

var container, element;
var	camera, scene, renderer, objects, effect, stereo = false;
var	clock = new THREE.Clock();


var	onProgress = function(xhr) {
	if (xhr.lengthComputable) {
		var percentComplete=xhr.loaded / xhr.total * 100;
		console.log(Math.round(percentComplete, 2) + '% downloaded');
	}
};

var	onError = function(xhr) { };


var	loader = new THREE.AssimpJSONLoader();
//scene.add( loader.parse( json_model ) );
//console.log(scene, json_model);

function reset() {
    window.location.reload();
}
function load(){ 
	document.getElementById('file').click();
}

function demo(){
	scene.add( loader.parse( json_model ) );
}
    
//
function init()
{
    // scene
	scene = new THREE.Scene();

	//renderer
	renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setClearColorHex( 0xeeeeee, 1.0 );
    renderer.setClearColor( 0xffffff, 0);
    
    // container
	container = document.getElementById('container');
	element = renderer.domElement;
	container.appendChild(element);


    // camera
	camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.set(-10, 10, 10);
	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );



	cameraHelper = new THREE.CameraHelper(camera);
	// scene.add(cameraHelper);


	// 1. ArrowHelper
	// var directionV3 = new THREE.Vector3(1, 0, 1);
	// var originV3 = new THREE.Vector3(0, 200, 0);
	// var arrowHelper = new THREE.ArrowHelper(directionV3, originV3, 100, 0xff0000, 20, 10); // 100 is length, 20 and 10 are head length and width
	// scene.add(arrowHelper);


	// 2. AxisHelper
	axisHelper = new THREE.AxisHelper(1000); // 500 is size
	scene.add(axisHelper);



	//Lights
	scene.add(new THREE.AmbientLight(0xcccccc));
    
	// efeito estereo
	effect = new THREE.StereoEffect(renderer);
    
    // controls first person
	controls = new THREE.FirstPersonControls(camera);
	controls.movementSpeed=5;
	controls.lookSpeed=0.1;
	// controls.lookVertical=true;
	controls.freeze = true;
	controls.mouseDragOn = true;

	// TODO
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 0.2;
	controls.panSpeed = 0.8;

	controls.noZoom = false;
	controls.noPan = false;

	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;


	//Events
	window.addEventListener('deviceorientation', setOrientationControls, true);
	window.addEventListener('resize', resize, false);
    
}

//
function resize()
{
	var	width  = container.offsetWidth;
	var	height = container.offsetHeight;

	camera.aspect = width/height;
	camera.updateProjectionMatrix();

	renderer.setSize(width, height);
	effect.setSize  (width, height);
}

//
function animate()
{
	requestAnimationFrame(animate);
	update(clock.getDelta());
	render(clock.getDelta());
}

function update(dt)
{
	resize();
	controls.update(dt);

	x = Math.round(camera.position.x);
	y = Math.round(camera.position.y);
	z = Math.round(camera.position.z);
	xyz = x+","+y+","+z;
	document.getElementById('debug').innerHTML = "(x,y,z)=" + xyz;
}
    
//
function render(dt)
{
    if(stereo)
        effect.render(scene, camera);
    else
        renderer.render(scene, camera);
}

// Mobile
function setOrientationControls(e) {
	if (!e.alpha) {
		return;
	}
	controls = new THREE.DeviceOrientationControls(camera, true);
	controls.connect();
	controls.update();

	// element.addEventListener('click', fullscreen, false);

	window.removeEventListener('deviceorientation', setOrientationControls, true);
}

function fullscreen()
{
	if (container.requestFullscreen) {
		container.requestFullscreen();
	} else if (container.msRequestFullscreen) {
		container.msRequestFullscreen();
	} else if (container.mozRequestFullScreen) {
		container.mozRequestFullScreen();
	} else if (container.webkitRequestFullscreen) {
		container.webkitRequestFullscreen();
	}
}

