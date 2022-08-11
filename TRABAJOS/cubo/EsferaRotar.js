
//Crear un cubo que rota con esferas
//creado por Valentina Ladino 29-04-20 
var renderer;
var scene;
var camera;
	function init() {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(45, window.innerWidth /window.innerHeight, 0.1, 1000);
//estructuras basicas para el objeto renderer
		renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(0xD0DCDB, 1.0);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.physicallyCorrectLights = true;
		renderer.gammaInput = true;
		renderer.gammaOutput = true;
		renderer.shadowMap.enabled = true;
		renderer.toneMapping = THREE.ReinhardToneMapping;
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
//crear el plano donde estara la figura
		var planeGeometry = new THREE.PlaneGeometry(20, 20);
		var planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc});
		var plane = new THREE.Mesh(planeGeometry, planeMaterial);
		plane.receiveShadow = true;
		plane.rotation.x = -0.5 * Math.PI;
		plane.position.x = 0;
		plane.position.y = -2;
		plane.position.z = 0;
		scene.add(plane);
// creacion del cubo
		var cubeGeometry = new THREE.BoxGeometry(6, 4, 6);
		var cubeMaterial = new THREE.MeshLambertMaterial({color: 'purple',transparent:true, opacity:0.4});
		var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

		cube.castShadow=true;
		scene.add(cube);

		camera.position.x = 15;
		camera.position.y = 16;
		camera.position.z = 13;
		camera.lookAt(scene.position);

		var ambient = new THREE.AmbientLight(0xffffff,0.3);
		scene.add(ambient);
		var light = new THREE.DirectionalLight(0x4DFF00, 1, 100, 2 );
		light.position.set(10,20 , 20);
		light.castShadow = true;
		scene.add(light);

		document.body.appendChild(renderer.domElement);
		addVertices(cube);
		render();
}
function addVertices(mesh) {
	var vertices = mesh.geometry.vertices;
	var vertexMaterial = new THREE.MeshPhongMaterial({color: 0x007BFF});
	vertices.forEach(function (vertex) {
		var vertexSphere = new THREE.SphereGeometry(0.20);
		var vertexMesh = new THREE.Mesh(vertexSphere, vertexMaterial);
		vertexMesh.position.copy(vertex);
		scene.add(vertexMesh);
	});
}
function render() {
	var rotSpeed = 0.01;
	camera.position.x = camera.position.x * Math.cos(rotSpeed) +
	camera.position.z * Math.sin(rotSpeed);
	camera.position.z = camera.position.z * Math.cos(rotSpeed) -
	camera.position.x * Math.sin(rotSpeed);
	camera.lookAt(scene.position);

	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
function handleResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("DOMContentLoaded", function(event) {
	init();
});
window.addEventListener('resize', handleResize, false);


