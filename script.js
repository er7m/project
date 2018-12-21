var side = 15;
var socket = io();
exanak = "amar";

function setup() {
    frameRate(4);
    background('#acacac');
    createCanvas(40 * side, 40 * side);
}

function Drawmatrix(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("#000000");
            }
            else if (matrix[y][x] == 5) {
                fill("#c81edb");
            }
            else if (matrix[y][x] == 0) {
                if (exanak == "amar") {
                    fill("#FBFCCB");
                }
                else if (exanak == "ashun") {
                    fill("#F7FD7D");
                }
                else if (exanak == "cmer") {
                    fill("#A5F9EF");
                }
                else if (exanak == "garun") {
                    fill("#A9FA9C");
                }
            }

            rect(x * side, y * side, side, side);

        }
    }
}

socket.on("matrix", Drawmatrix);
socket.on("exanak", function (w){
    exanak = w;
})