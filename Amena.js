var line = 0;
class Amena extends LivingCreature {
    constructor(x, y) {
        super(x, y);
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

