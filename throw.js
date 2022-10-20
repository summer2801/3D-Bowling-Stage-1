AFRAME.registerComponent("bowling-balls", {
    init: function(){
        this.throwBall();
    },
    throwBall : function (){
        window.addEventListener("keydown",(e)=> {
            if (e.key === "z") {
                var ball = document.createElement("a-entity");

                ball.setAttribute("gltf-model", "./models/bowlings_ball/scene.gltf");

                ball.setAttribute("scale", { x: 0.09, y: 0.09, z: 0.09});

                var cam = document.querySelector("#camera");

                pos = cam.getAttribute("position");

                ball.setAttribute("position", {
                    x: pos.x,
                    y: pos.y-1.4,
                    z: pos.z,
                });

                var camera = document.querySelector("#camera").objects3D;

                //get the camera direction as Three.js Vector
                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction);

                //set the velocity and it's direction
                ball.setAttribute("velocity", direction.multiplyScalar(-10));

                var scene = document.querySelector("#scene");

                scene.appendChild(ball);
            }
        });
    },
});