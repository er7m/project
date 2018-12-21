var LivingCreature = require("./LivingCreature.js");

module.exports = class Grass extends LivingCreature {

    mult() {
        var arr = this.yntrelVandak(0);
        var empty = arr[Math.floor(Math.random() * arr.length)];
        if(exanak != "cmer"){
            this.multiply++
        }

        if (empty && this.multiply > 3) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1);
            grassArr.push(gr)
        }
    }

}