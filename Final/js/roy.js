var camera, scene, renderer, controls, mesha, mesh2;

function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(70, width/height, 0.1, 25000);
  camera.position.set(0, 600, 3200);
  scene.add(camera);

  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);

  var spotlight = new THREE.SpotLight(0xffffff, 0.8, 2000);
  spotlight.position.set(1000, 500, 500);
  spotlight.castShadow = true;

  var path = 'images/';
  var format = '.jpg';
  var urls = [
    path + 'black' + format, path + 'black' + format,
    path + 'black' + format, path + 'floor' + format,
    path + 'black' + format, path + 'black-roy' + format
  ];

  scene.background = new THREE.CubeTextureLoader().load(urls);

  var material1 = new THREE.MeshStandardMaterial({color: 0x802b00, envMap: scene.background, side: THREE.DoubleSide});

  var loader = new THREE.BufferGeometryLoader();

  loader.load('images/seat.json', function(geometry1) {

    mesh1 = new THREE.Mesh(geometry1, material1);
    mesh1.scale.set(900, 900, 900);
    mesh1.position.y = -7000;
    mesh1.position.x = 4500;
    mesh1.position.z = 3000;
    scene.add(mesh1);});

    var material2 = new THREE.MeshBasicMaterial({color: 0x737373, envMap: scene.background, side: THREE.DoubleSide});
    loader.load('images/square.json', function(geometry2) {

      var model = new THREE.Mesh(geometry2, material2);
      model.scale.set(400, 400, 400);
      model.position.y = -6800;
      model.position.x = 4500;
      model.position.z = 400;
      scene.add(model);});

      var material3 = new THREE.MeshStandardMaterial({color: 0xff4d4d, envMap: scene.background, side: THREE.DoubleSide});
      loader.load('images/couch.json', function(geometry3) {

        var model2 = new THREE.Mesh(geometry3, material3);
        model2.scale.set(2500, 1000, 900);
        model2.rotation.y += -90;
        model2.position.x = 6000;
        model2.position.z = 3000;
        model2.position.y = -7000;
        scene.add(model2);});

        var material4 = new THREE.MeshStandardMaterial({color: 0x9D6CE7, envMap: scene.background, side: THREE.DoubleSide});
        loader.load('images/lamp.json', function(geometry4) {

          var model4 = new THREE.Mesh(geometry4, material4);
          model4.scale.set(250, 250, 300);
          model4.position.x = 5500;
          model4.position.z = 3000;
          model4.position.y = -4000;
          scene.add(model4);});

          var material5 = new THREE.MeshStandardMaterial({color: 0xF1F7C5, envMap: scene.background, side: THREE.DoubleSide});
          loader.load('images/stand.json', function(geometry5) {

            var model5 = new THREE.Mesh(geometry5, material5);
            model5.scale.set(300, 300, 300);
            model5.position.x = 5500;
            model5.position.z = 3000;
            model5.position.y = -5000;
            scene.add(model5);});

            var material6 = new THREE.MeshStandardMaterial({color: 0xF1F7C5, envMap: scene.background, side: THREE.DoubleSide});
            loader.load('images/table.json', function(geometry6) {

              var model6 = new THREE.Mesh(geometry6, material6);
              model6.scale.set(15, 15, 15);
              model6.rotation.y += -10;
              model6.position.x = 1000;
              model6.position.z = 2400;
              model6.position.y = -5500;
              scene.add(model6);});

              var material7 = new THREE.MeshStandardMaterial({color: 0xF1F7C5, envMap: scene.background, side: THREE.DoubleSide});
              loader.load('images/sticks.json', function(geometry7) {

                var model7 = new THREE.Mesh(geometry7, material7);
                model7.scale.set(30, 30, 30);
                model7.position.x = 1000;
                model7.position.z = 2400;
                model7.position.y = -7000;
                scene.add(model7);});

                loader.load('images/sticks.json', function(geometry7) {

                var model8 = new THREE.Mesh(geometry7, material7);
                model8.scale.set(30, 30, 30);
                model8.rotation.y += -10;
                model8.position.x = 1000;
                model8.position.z = 3500;
                model8.position.y = -7000;
                scene.add(model8);});

                var material9 = new THREE.MeshStandardMaterial({color: 0xffe4c4, envMap: scene.background, side: THREE.DoubleSide});
                loader.load('images/tv.json', function(geometry9) {

                  var model9 = new THREE.Mesh(geometry9, material9);
                  model9.scale.set(300, 300, 300);
                  model9.rotation.y += -0.6;
                  model9.position.x = -2000;
                  model9.position.z = 600;
                  model9.position.y = -7500;
                  scene.add(model9);});

                  var material10 = new THREE.MeshStandardMaterial({color: 0xb35900, envMap: scene.background, side: THREE.DoubleSide});
                  loader.load('images/pot.json', function(geometry10) {

                    var model10 = new THREE.Mesh(geometry10, material10);
                    model10.scale.set(320, 320, 320);
                    model10.position.x = -4500;
                    model10.position.z = 4000;
                    model10.position.y = -5500;
                    scene.add(model10);});

                    var material11 = new THREE.MeshStandardMaterial({color: 0x800000, envMap: scene.background, side: THREE.DoubleSide});
                    loader.load('images/pot2.json', function(geometry11) {

                      var model11 = new THREE.Mesh(geometry11, material11);
                      model11.scale.set(320, 320, 320);
                      model11.position.x = -4500;
                      model11.position.z = 4000;
                      model11.position.y = -5500;
                      scene.add(model11);});

                      var material12 = new THREE.MeshStandardMaterial({color: 0x00cc00, envMap: scene.background, side: THREE.DoubleSide});
                      loader.load('images/plant.json', function(geometry12) {

                        var model12 = new THREE.Mesh(geometry12, material12);
                        model12.scale.set(320, 320, 320);
                        model12.position.x = -3900;
                        model12.position.z = 3400;
                        model12.position.y = -4500;
                        scene.add(model12);});

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);

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
