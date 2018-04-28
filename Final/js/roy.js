var camera, scene, renderer, controls;

function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  camera.position.set(0, 200, 700);
  scene.add(camera);

  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);

  var spotlight = new THREE.SpotLight(0xffffff, 0.8, 2000);
  spotlight.position.set(500, 500, 500);
  spotlight.castShadow = true;


  spotlight.shadow.mapSize.width = 4096;
  spotlight.shadow.mapSize.height = 4096;

  spotlight.shadow.camera.near = 500;
  spotlight.shadow.camera.far = 2000;
  spotlight.shadow.camera.fov = 45;

  scene.add(spotlight);

  var material = new THREE.MeshStandardMaterial({envMap: scene.background, side: THREE.DoubleSide});
  var loader = new THREE.BufferGeometryLoader();
      loader.load('images/seat-color.json', function(geometry1) {
        mesh1 = new THREE.Mesh(geometry1, material);
        mesh1.scale.set(25, 25, 25);
        mesh1.position.y = 330;
        mesh1.position.x = -300;
        mesh1.position.z = 150;
        scene.add(mesh1);});

        loader.load('images/chair.json', function(geometry2) {
          mesh2 = new THREE.Mesh(geometry2, material);
          mesh2.scale.set(25, 25, 25);
          mesh2.position.y = 330;
          mesh2.position.x = -300;
          mesh2.position.z = 150;
          scene.add(mesh2);});

    var planeGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
    var planeMaterial = new THREE.MeshStandardMaterial({color: 0x802b00, side: THREE.DoubleSide});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = Math.PI / -2;
    plane.receiveShadow = true;
    scene.add(plane);


  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

init();
animate();
