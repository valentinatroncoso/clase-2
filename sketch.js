
            var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("Valentina Troncoso");
                select("#aprendizaje").html("editar videos en adobe effects");
            noStroke();
            }
            function draw() {
                background(300, 216, 223);
                orbitControl();
                pointLight(100, 255, 255, valor/3, valor/2, 50);
                specularMaterial(255);
                shininess(1);
                fill(70, 120, 255);
            cylinder(); (valor / 50, 10, 20, 5);
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }
