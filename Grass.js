var LivingCreature = require("./LivingCreature.js");

module.exports = class Grass extends LivingCreature {

    mult() {
        var empty = this.yntrelVandak[Math.floor(Math.random() * this.yntrelVandak.length)];
        this.multiply++
        if (empty && this.multiply > 3) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1);
            grassArr.push(gr)
        }
    }

}