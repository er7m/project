var LivingCreature = require("./LivingCreature.js");

module.exports = class Xotaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(character) {
        this.getNewDirections();
        return super.yntrelVandak(character);
    }

    mult() {
        var empty = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)];
        if (empty && this.energy > 10) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2
            var xt = new Xotaker(x, y, 1);
            XotakerArr.push(xt)
        }
    }

    move() {
        var empty = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)];
        this.energy--
        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
        }
    }

    eat() {
        var food = this.yntrelVandak(1)[Math.floor(Math.random() * this.yntrelVandak(1).length)];
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0
            for (var i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy += 2
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in XotakerArr) {
                if (XotakerArr[i].x == this.x && XotakerArr[i].y == this.y) {
                    XotakerArr.splice(i, 1)
                }
            }
        }
    }
}