var HeartStamp = function () {
    var r = new HeartRed();
    var s = new Steel();
    var e = null;
    layer1 = new Array();

    layer1 = new Array();
    layer1.push([e,e,e,s,s,s,e,e,e,e,s,s,s,e,e,e]);
    layer1.push([e,e,s,r,r,r,s,e,e,s,r,r,r,s,e,e]);
    layer1.push([e,s,r,r,r,r,r,s,s,r,r,r,r,r,s,e]);
    layer1.push([e,s,r,r,r,r,r,s,s,r,r,r,r,r,s,e]);
    layer1.push([s,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s]);
    layer1.push([s,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s]);
    layer1.push([s,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s]);
    layer1.push([s,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s]);
    layer1.push([e,s,r,r,r,r,r,r,r,r,r,r,r,r,s,e]);
    layer1.push([e,s,r,r,r,r,r,r,r,r,r,r,r,r,s,e]);
    layer1.push([e,s,r,r,r,r,r,r,r,r,r,r,r,r,s,e]);
    layer1.push([e,e,s,r,r,r,r,r,r,r,r,r,r,s,e,e]);
    layer1.push([e,e,s,r,r,r,r,r,r,r,r,r,r,s,e,e]);
    layer1.push([e,e,e,s,s,r,r,r,r,r,r,s,s,e,e,e]);
    layer1.push([e,e,e,e,e,s,s,r,r,s,s,e,e,e,e,e]);
    layer1.push([e,e,e,e,e,e,e,s,s,e,e,e,e,e,e,e]);  

    layer2 = new Array();
    layer2.push([e,e,e,s,s,s,e,e,e,e,s,s,s,e,e,e]);
    layer2.push([e,e,s,e,e,e,s,e,e,s,e,e,e,s,e,e]);
    layer2.push([e,s,e,e,e,e,e,s,s,e,e,e,e,e,s,e]);
    layer2.push([e,s,e,e,e,e,e,s,s,e,e,e,e,e,s,e]);
    layer2.push([s,e,e,e,e,e,e,e,e,e,e,e,e,e,e,s]);
    layer2.push([s,e,e,e,e,e,e,e,e,e,e,e,e,e,e,s]);
    layer2.push([s,e,e,e,e,e,e,e,e,e,e,e,e,e,e,s]);
    layer2.push([s,e,e,e,e,e,e,e,e,e,e,e,e,e,e,s]);
    layer2.push([e,s,e,e,e,e,e,e,e,e,e,e,e,e,s,e]);
    layer2.push([e,s,e,e,e,e,e,e,e,e,e,e,e,e,s,e]);
    layer2.push([e,s,e,e,e,e,e,e,e,e,e,e,e,e,s,e]);
    layer2.push([e,e,s,e,e,e,e,e,e,e,e,e,e,s,e,e]);
    layer2.push([e,e,s,e,e,e,e,e,e,e,e,e,e,s,e,e]);
    layer2.push([e,e,e,s,s,e,e,e,e,e,e,s,s,e,e,e]);
    layer2.push([e,e,e,e,e,s,s,e,e,s,s,e,e,e,e,e]);
    layer2.push([e,e,e,e,e,e,e,s,s,e,e,e,e,e,e,e]);

    this.shape = [layer1, layer2];

    

}

// lower left corner
HeartStamp.prototype.stamp = function (world, x1, z1, y1) {
    console.log("stamp");
    for(var y = 0; y < this.shape.length; y++){
        for(var z = 0; z < this.shape[y].length; z++){
            for(var x = 0; x < this.shape[y][z].length; x++){
                world.set(x1 + x, z1 + z, y1 + y, this.shape[y][z][x]);
            }
        }
    }
}

