var Pillar = function () {
    var d = new Block();
    var e = null;

    var layer1 = new Array();
    layer1.push([e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]);
    layer1.push([e,e,e,e,e,d,d,d,d,d,d,e,e,e,e,e]);
    layer1.push([e,e,e,d,d,d,d,d,d,d,d,d,d,e,e,e]);
    layer1.push([e,e,d,d,d,d,d,d,d,d,d,d,d,d,e,e]);
    layer1.push([e,e,d,d,d,d,d,d,d,d,d,d,d,d,e,e]);
    layer1.push([e,d,d,d,d,d,d,d,d,d,d,d,d,d,d,e]);
    layer1.push([e,d,d,d,d,d,d,d,d,d,d,d,d,d,d,e]);
    layer1.push([e,d,d,d,d,d,d,d,d,d,d,d,d,d,d,e]);
    layer1.push([e,d,d,d,d,d,d,d,d,d,d,d,d,d,d,e]);
    layer1.push([e,d,d,d,d,d,d,d,d,d,d,d,d,d,d,e]);
    layer1.push([e,d,d,d,d,d,d,d,d,d,d,d,d,d,d,e]);
    layer1.push([e,e,d,d,d,d,d,d,d,d,d,d,d,d,e,e]);
    layer1.push([e,e,d,d,d,d,d,d,d,d,d,d,d,d,e,e]);
    layer1.push([e,e,e,d,d,d,d,d,d,d,d,d,d,e,e,e]);
    layer1.push([e,e,e,e,e,d,d,d,d,d,d,e,e,e,e,e]);
    layer1.push([e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]);

    var layer2 = new Array();

    layer2.push([e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]);
    layer2.push([e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]);
    layer2.push([e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]);
    layer2.push([e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]);
    layer2.push([e,e,e,e,e,d,e,d,d,e,d,e,e,e,e,e]);
    layer2.push([e,e,e,e,d,e,d,e,e,d,e,d,e,e,e,e]);
    layer2.push([e,e,e,e,e,d,e,e,e,e,d,e,e,e,e,e]);
    layer2.push([e,e,e,e,d,e,e,e,e,e,e,d,e,e,e,e]);
    layer2.push([e,e,e,e,d,e,e,e,e,e,e,d,e,e,e,e]);
    layer2.push([e,e,e,e,e,d,e,e,e,e,d,e,e,e,e,e]);
    layer2.push([e,e,e,e,d,e,d,e,e,d,e,d,e,e,e,e]);
    layer2.push([e,e,e,e,e,d,e,d,d,e,d,e,e,e,e,e]);
    layer2.push([e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]);
    layer2.push([e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]);
    layer2.push([e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]);
    layer2.push([e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e]);

    

    this.shape = [layer1, layer1, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer2, layer1, layer1];

    

}

// lower left corner
Pillar.prototype.stamp = function (world, x1, z1, y1) {
    console.log("stamp");
    for(var y = 0; y < this.shape.length; y++){
        for(var z = 0; z < this.shape[y].length; z++){
            for(var x = 0; x < this.shape[y][z].length; x++){
                world.set(x1 + x, z1 + z, y1 + y, this.shape[y][z][x]);
            }
        }
    }
}

