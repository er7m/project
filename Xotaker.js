var LivingCreature = require("./LivingCreature.js");

module.exports = class Xotaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;
        this.qanak = 8;
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
        var arr = this.yntrelVandak(0);
        var empty = arr[Math.floor(Math.random() * arr.length)];
        //kaxavac exanakic xotaker@ bazmanum e tarber aragutyamb
        if (exanak == "cmer") {
            this.qanak = 100;
        }
        else if (exanak == "ashun" || exanak == "garun") {
            this.qanak = 10;
        }
        if (empty && this.energy > this.qanak) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2
            var xt = new Xotaker(x, y, 1);
            XotakerArr.push(xt)
        }
    }

    move() {
        var arr = this.yntrelVandak(0);
        var empty = arr[Math.floor(Math.random() * arr.length)];
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
        var arr = this.yntrelVandak(1);
        var food = arr[Math.floor(Math.random() * arr.length)];
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