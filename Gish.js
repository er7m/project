class Gish extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 15;
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

    move() {
        var empty = random(this.yntrelVandak(0))
        this.energy--
        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 3
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
        }
    }

    mult() {
        var empty = random(this.yntrelVandak(0))
        if (empty && this.energy > 14) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 3
            var gs = new Gish(x, y, 1);
            gishArr.push(gs)
        }
    }

    eat() {
        var food = random(this.yntrelVandak(2))
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 3
            matrix[this.y][this.x] = 0
            for (var i in XotakerArr) {
                if (XotakerArr[i].x == x && XotakerArr[i].y == y) {
                    XotakerArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy += 5
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishArr) {
                if (gishArr[i].x == this.x && gishArr[i].y == this.y) {
                    gishArr.splice(i, 1)
                }
            }
        }
    }
}