class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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


    chooseCell(character) {

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0))
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


class Xotaker {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 8;
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

    chooseCell(character) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 10) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2
            var xt = new Xotaker(x, y, 1);
            XotakerArr.push(xt)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
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
        var food = random(this.chooseCell(1))
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

class Gish {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 15;
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

    chooseCell(character) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
        var empty = random(this.chooseCell(0))
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
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 14) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 3
            var gs = new Gish(x, y, 1);
            gishArr.push(gs)
        }
    }

    eat() {
        var food = random(this.chooseCell(2))
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
var line = 0;
class Amena {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 8;
    }
    eat() {
        if (this.y == matrix.length - 1) {
            line = 1
        }
        if (this.y == matrix.length - 1 && this.x == matrix[0].length - 1) {
            line = 2
        }

        if (this.y == 0 && this.x == matrix[0].length - 1) {
            line = 3
        }

        if (this.y == 0 && this.x == 0) {
            line = 4
        }

        var vand = matrix[this.y][this.x + 1]
        if (line == 1) {
            if (vand == 0) {
                this.energy--;
                var x = this.x + 1;
                var y = this.y;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                this.x = x
                this.y = y
            }
            else if (vand == 1) {
                var x = this.x + 1;
                var y = this.y;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in grassArr) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        grassArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 1
            }
            else if (vand == 2) {
                var x = this.x + 1;
                var y = this.y;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in XotakerArr) {
                    if (XotakerArr[i].x == x && XotakerArr[i].y == y) {
                        XotakerArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 3
            }
            else if (vand == 3) {
                var x = this.x + 1;
                var y = this.y;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in gishArr) {
                    if (gishArr[i].x == x && gishArr[i].y == y) {
                        gishArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 7
            }
            else if (vand == 5) {
                var x = this.x + 1;
                var y = this.y;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in xotagishatichArr) {
                    if (xotagishatichArr[i].x == x && xotagishatichArr[i].y == y) {
                        xotagishatichArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 12
            }
        }


        if (line == 2) {
            if (matrix[this.y - 1][this.x] == 0) {
                this.energy--;
                var x = this.x;
                var y = this.y - 1;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                this.x = x
                this.y = y
            }
            else if (matrix[this.y - 1][this.x] == 1) {
                var x = this.x;
                var y = this.y - 1;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in grassArr) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        grassArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 1
            }
            else if (matrix[this.y - 1][this.x] == 2) {
                var x = this.x;
                var y = this.y - 1;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in XotakerArr) {
                    if (XotakerArr[i].x == x && XotakerArr[i].y == y) {
                        XotakerArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 3
            }
            else if (matrix[this.y - 1][this.x] == 3) {
                var x = this.x;
                var y = this.y - 1;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in gishArr) {
                    if (gishArr[i].x == x && gishArr[i].y == y) {
                        gishArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 7
            }
            else if (matrix[this.y - 1][this.x] == 5) {
                var x = this.x;
                var y = this.y - 1;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in xotagishatichArr) {
                    if (xotagishatichArr[i].x == x && xotagishatichArr[i].y == y) {
                        xotagishatichArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 12
            }
        }

        if (line == 3) {
            if (matrix[this.y][this.x - 1] == 0) {
                this.energy--;
                var x = this.x - 1;
                var y = this.y;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                this.x = x
                this.y = y
            }
            else if (matrix[this.y][this.x - 1] == 1) {
                var x = this.x - 1;
                var y = this.y;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in grassArr) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        grassArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 1
            }
            else if (matrix[this.y][this.x - 1] == 2) {
                var x = this.x - 1;
                var y = this.y;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in XotakerArr) {
                    if (XotakerArr[i].x == x && XotakerArr[i].y == y) {
                        XotakerArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 3
            }
            else if (matrix[this.y][this.x - 1] == 3) {
                var x = this.x - 1;
                var y = this.y;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in gishArr) {
                    if (gishArr[i].x == x && gishArr[i].y == y) {
                        gishArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 7
            }
            else if (matrix[this.y][this.x - 1] == 5) {
                var x = this.x - 1;
                var y = this.y;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in xotagishatichArr) {
                    if (xotagishatichArr[i].x == x && xotagishatichArr[i].y == y) {
                        xotagishatichArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 12
            }
        }




        if (line == 4) {
            if (matrix[this.y + 1][this.x] == 0) {
                this.energy--;
                var x = this.x;
                var y = this.y + 1;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                this.x = x
                this.y = y
            }
            else if (matrix[this.y + 1][this.x] == 1) {
                var x = this.x;
                var y = this.y + 1;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in grassArr) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        grassArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 1
            }
            else if (matrix[this.y + 1][this.x] == 2) {
                var x = this.x;
                var y = this.y + 1;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in XotakerArr) {
                    if (XotakerArr[i].x == x && XotakerArr[i].y == y) {
                        XotakerArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 3
            }
            else if (matrix[this.y + 1][this.x] == 3) {
                var x = this.x;
                var y = this.y + 1;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in gishArr) {
                    if (gishArr[i].x == x && gishArr[i].y == y) {
                        gishArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 7
            }
            else if (matrix[this.y + 1][this.x] == 5) {
                var x = this.x;
                var y = this.y + 1;
                matrix[y][x] = 4
                matrix[this.y][this.x] = 0
                for (var i in xotagishatichArr) {
                    if (xotagishatichArr[i].x == x && xotagishatichArr[i].y == y) {
                        xotagishatichArr.splice(i, 1)
                    }
                }
                this.x = x
                this.y = y
                this.energy += 12
            }
        }
    }

}


class XotaGishatich {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 8
        this.directions = []
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        this.energy--
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;

            this.x = norVandak[0];
            this.y = norVandak[1];
        }
        if (this.energy <= 0) {
            this.mernel();
        }
    }
    utel() {
        var datarkVandakner = this.yntrelVandak(3);
        var norVandak = random(datarkVandakner);
        var datarkVandaknererku = this.yntrelVandak(2);
        var norVandakerku = random(datarkVandaknererku);

        if (norVandak) {
            this.energy += 5
            matrix[this.y][this.x] = 0
            matrix[norVandak[1]][norVandak[0]] = 5

            this.x = norVandak[0]
            this.y = norVandak[1]

            for (var i in gishArr) {
                var xotakerObj = gishArr[i];
                if (xotakerObj.x == this.x && xotakerObj.y == this.y) {
                    gishArr.splice(i, 1);
                }
            }
        }
        else if (norVandakerku) {
            this.energy += 7
            matrix[this.y][this.x] = 0;
            matrix[norVandakerku[1]][norVandakerku[0]] = 5;

            this.x = norVandakerku[0];
            this.y = norVandakerku[1];

            for (var i in XotakerArr) {
                var xotakerObj = XotakerArr[i];
                if (xotakerObj.x == this.x && xotakerObj.y == this.y) {
                    XotakerArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
        if (this.energy >= 10) {
            this.bazmanal();
        }
    }
    bazmanal() {
        var datarkVandakner = this.yntrelVandak(3);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 5;

            var norXotaGishatich = new XotaGishatich(norx, nory);
            xotagishatichArr.push(norXotaGishatich);
            this.energy = 8
            for (var i in gishArr) {
                var xotagishatichObj = gishArr[i];
                if (xotagishatichObj.x == norx && xotagishatichObj.y == nory) {
                    gishArr.splice(i, 1);
                }
            }
        }
    }
    mernel() {
        matrix[this.y][this.x] = 0;
        for (var i in xotagishatichArr) {
            if (this.y == xotagishatichArr[i].y && this.x == xotagishatichArr[i].x) {
                xotagishatichArr.splice(i, 1);
            }
        }
    }
}
