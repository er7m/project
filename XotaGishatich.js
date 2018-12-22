var LivingCreature = require("./LivingCreature.js");

module.exports = class XotaGishatich extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;
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

    yntrelVandak(character) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(character);
    }

    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;

            this.x = norVandak[0];
            this.y = norVandak[1];
        }
        if (this.energy <= 0) {
            this.mernel();
        }
        this.energy -= 2;

    }
    utel() {
        var datarkVandakner = this.yntrelVandak(3);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];;
        var datarkVandaknererku = this.yntrelVandak(2);
        var norVandakerku = datarkVandaknererku[Math.floor(Math.random() * datarkVandaknererku.length)];

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
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];

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
