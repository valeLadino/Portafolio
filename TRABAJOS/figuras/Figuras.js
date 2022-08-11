
//archivo de prueba del cubo
//creado por Valentina Ladino 22-04-20 
//Elementos fundamentales para crear una animacion
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(100,window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//cubo
var geometry = new THREE.BoxGeometry(0.5, 2, 0.1);
var material = new THREE.MeshBasicMaterial({color: 0x56218C }); //6111CD
var cube = new THREE.Mesh(geometry, material);

//cilindro
var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 3, 34 );
var material = new THREE.MeshNormalMaterial({ color: 0xffff00 });
var cylinder = new THREE.Mesh( geometry, material );

//esfera
var geometry = new THREE.SphereGeometry( 1, 6, 6 );
var material = new THREE.MeshBasicMaterial( {color: 0xCAC25C} );
var sphere = new THREE.Mesh( geometry, material );

//agregar al escenario
scene.add( cube );
scene.add( cylinder );
scene.add( sphere );

//posicion de la camara
camera.position.z = 4;
cube.position.x += -3;
cylinder.position.x += 0;
sphere.position.x += 3;

//animacion
var animate = function () {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

	cylinder.rotation.x += -0.02;
	cylinder.rotation.y += -0.02;

	sphere.rotation.x += 0.02;
	sphere.rotation.y += 0.02;


	renderer.render( scene, camera );
}
animate();


	

	