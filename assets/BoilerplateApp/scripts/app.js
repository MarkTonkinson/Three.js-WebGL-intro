var demo = (function(){

    "use strict";

    var scene=new THREE.Scene(),
        light= new THREE.AmbientLight(0xffffff),
        renderer,
        camera,
        renderer = new THREE.WebGLRenderer(),
        box,
        ground,
        controls=null;


        


        function initScene(){
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById("webgl-container").appendChild(renderer.domElement);

            scene.add(light);
                      
            camera = new THREE.PerspectiveCamera(
                    35,
                    window.innerWidth / window.innerHeight,
                    1,
                    1000
                );
            
            
            camera.position.set( 0, 0, 100);
            scene.add(camera);  

            /*box = new THREE.Mesh(
              new THREE.CubeGeometry(
                20,
                20,
                20),
              new THREE.MeshBasicMaterial({color: 0xFF0000}));
            */

            //child box
           /* var color = new THREE.Color("rgb(0,50,0)");
            var childBox = new THREE.Mesh(
                  new THREE.CubeGeometry(10, 10, 10),
                  new THREE.MeshBasicMaterial({color: color}));
            childBox.position.set(50, 0, 0);
            box.add(childBox)*/


            //scene.add(box);
            

             //var degrees=45;
             //var random = 1;
             //box.rotation.y =  degrees  * (Math.PI / 180);
                    
            //rotation
            /*setInterval(function(){        
                degrees +=5;
                box.rotation.y =  degrees  * (Math.PI / 180);
             }, 100);*/

            //setting scale
            /*setInterval(function(){
               random=Math.floor(Math.random() * 2) +1 ;
               box.scale.set(random, random, random);
            }, 1500);*/

            //Goose time!!

           /* var loader = new THREE.JSONLoader(),
                mesh;
    
         loader.load('./scripts/gooseFull.js', function (geometry) {
              var gooseMaterial = new THREE.MeshLambertMaterial({
               map: THREE.ImageUtils.loadTexture('./scripts/goose.jpg')
           });
    
           mesh = new THREE.Mesh(geometry, gooseMaterial);
           mesh.scale.set(20, 20, 20);
           mesh.position.set(0, -10, 0);
           mesh.rotation.y =  gooseDegrees  * (Math.PI / 180);
           scene.add(mesh);
            });
            var gooseDegrees=45;
             setInterval(function(){        
                gooseDegrees +=5;
                mesh.rotation.y =  gooseDegrees  * (Math.PI / 180);
             }, 100);*/
            requestAnimationFrame(render);
        };

        function render() {
                renderer.render(scene, camera); 
                requestAnimationFrame(render);
        };
       
        window.onload = initScene;

})();
