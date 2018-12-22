var LivingCreature = require("./LivingCreature.js");

module.exports = class Grass extends LivingCreature {

    mult() {
        var arr = this.yntrelVandak(0);
        var empty = arr[Math.floor(Math.random() * arr.length)];
        this.multiply++;
        this.qanak = 3;
        //kaxvac exanakic xot@ bazanum e tarber aragutyunnerov
        if (exanak == "cmer") {
            this.qanak = 100;
        }
        else if (exanak == "ashun" || exanak == "garun") {
            this.qanak = 6;
        }

        if (empty && this.multiply > this.qanak) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1);
            grassArr.push(gr)
        }
    }
}