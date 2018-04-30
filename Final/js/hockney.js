var camera, scene, renderer, controls, mesh;
var container = document.getElementById('pool');

  const canvas = document.getElementById('drawing');
  const context = canvas.getContext('2d');

  var referenceWidth = 660;
  var referenceHeight = 288;

  var x = Math.floor(Math.random()*255);
  var y = Math.floor(Math.random()*255);
  var z = Math.floor(Math.random()*255);
  var fps = 30;

  function setup() {
    canvas.style.width = referenceWidth + 'px';
    canvas.style.height = referenceHeight + 'px';

    var scale = window.devicePixelRatio;
    canvas.width = referenceWidth * scale;
    canvas.height = referenceHeight * scale;

    context.scale(scale, scale);

    draw();}

  function draw() {

      var img = new Image();
      img.src = 'images/hockney.jpg';

      img.addEventListener('load', function() {
        setTimeout (function () {
        context.drawImage(img, 0, 0, referenceWidth, referenceHeight);

        context.save();
        context.globalCompositeOperation = 'exclusion';
        rectangle();
        context.restore();
        requestAnimationFrame(draw);
      }, 11000 / fps);
      });
      x = Math.floor(Math.random()*255);
      y = Math.floor(Math.random()*255);
      z = Math.floor(Math.random()*255);
  }

  function rectangle() {
    var x = Math.floor(Math.random()*255);
    var y = Math.floor(Math.random()*255);
    var z = Math.floor(Math.random()*255);

    context.beginPath();
    context.moveTo(0, 148);
    context.lineTo(435, 148);
    context.lineTo(495, 288);
    context.lineTo(0, 288);
    context.closePath();
    context.fillStyle = 'rgb(' + z + ',' +  x + ', ' + y + ' , 0.5)';
    context.fill();
  }

  function init() {
    scene = new THREE.Scene();
    var width = window.innerWidth;
    var height = window.innerHeight;

    camera = new THREE.PerspectiveCamera(45, width/height, 1, 20000);
    camera.position.set(0, 200, 700); 
    scene.add(camera);

    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    var material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
    var loader = new THREE.BufferGeometryLoader();
    loader.load('images/pool-top.json', function(geometry) {

      mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(50, 50, 50);
      mesh.position.y = -50;
      mesh.position.x = -290;
      mesh.position.z = -20;
      mesh.rotation.y += 1.5;
      scene.add(mesh);

    });

    var material2 = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide});
    var loader2 = new THREE.BufferGeometryLoader();
    loader2.load('images/pool.json', function(geometry2) {

      mesh2 = new THREE.Mesh(geometry2, material2);
      mesh2.scale.set(50, 50, 50);
      mesh2.position.y = -50;
      mesh2.position.x = -480;
      mesh2.position.z = -35;
      scene.add(mesh2);

    });

    renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
    renderer.setSize(width, height);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    container.appendChild(renderer.domElement);
  }

function animate() {
requestAnimationFrame(animate);

renderer.render(scene, camera);
controls.update();
}

init();
animate();

  window.addEventListener('load', setup);
