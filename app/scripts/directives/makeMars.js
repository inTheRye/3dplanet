'use strict';

angular.module('3dplanetApp')
  .directive('makeMars', function () {
    return {
      template: '<div class="make-mars"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the makeMars directive');

		var width  = 500; //window.innerWidth;
		var height = 500; //window.innerHeight;

		// (1) 球体
		var geometry = new THREE.SphereGeometry(0.5, 32, 32);

		var material = new THREE.MeshPhongMaterial({
		    map: THREE.ImageUtils.loadTexture('../../images/marsmap1k.jpg'),
		    bumpMap: THREE.ImageUtils.loadTexture('../../images/marsbump1k.jpg'),
		});
		material.bumpScale = 0.05;
		material.specular  = new THREE.Color('grey');

		var sphere = new THREE.Mesh(geometry, material);

		// (2) ライト（平行光)
		var light = new THREE.DirectionalLight(0xffffff);
		light.position.x = Math.sin(Math.PI * 23.4 / 180.0);
		light.position.z = Math.cos(Math.PI * 23.4 / 180.0);
		light.position.y = 0;

		// (3) 環境光
		var alight = new THREE.AmbientLight(0x444444);

		// (5) Scene
		var scene = new THREE.Scene();
		scene.add(sphere);
		scene.add(light);
		scene.add(alight);

		// (6) Camera (視野角, アスペクト比(縦横比), 描画対象(最小距離), 描画対象(最大距離)
		var camera = new THREE.PerspectiveCamera(90, (width / height), 0.1, 10);

		// (7) WebGL Renderer
		var renderer = new THREE.WebGLRenderer();
		renderer.setSize(width, height);
		renderer.setClearColor(0x101010);
		renderer.clear(true);
		element.append(renderer.domElement);

		// (8) Animation (Rotate)
		function animation() {
		    var time = (new Date()).getTime();

		    sphere.rotation.y = time / 9000;

		    camera.position.x = 1.5 * Math.sin(-1.0 * time / 10000);
		    camera.position.y = 1.0 * Math.sin(time / 10000);
		    camera.position.z = 1.5 * Math.cos(-1.0 * time / 10000);

		    camera.lookAt(new THREE.Vector3(-1.0 * camera.position.x,-1.0 * camera.position.y,-1.0 * camera.position.z));

		    renderer.render(scene, camera);

		    requestAnimationFrame(animation);
		}
		animation();

      }
    };
  });
