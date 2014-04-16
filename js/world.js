var WORLD_WIDTH = 12;
var WORLD_HEIGHT = 6;

var World = function () {
    this.world = new Array();

    this.dirty = true;

    for(var x = 0; x < WORLD_WIDTH; x++){
        this.world[x] = new Array();
        for(var z = 0; z < WORLD_WIDTH; z++){
            this.world[x][z] = new Array();
            for(var y = 0; y < WORLD_HEIGHT; y++){
                this.world[x][z][y] = new Chunk(x,z,y);
            }
        }
    }
};

World.prototype.get = function (x,z,y) {
    var res = null;

    if(x >= 0 && z >= 0 && y >= 0 && x < this.widthX() && z < this.widthZ() && y < this.height()){
        var chunkX = Math.floor(x / CHUNK_SIZE);
        var chunkZ = Math.floor(z / CHUNK_SIZE);
        var chunkY = Math.floor(y / CHUNK_SIZE);
        res = this.world[chunkX][chunkZ][chunkY].get(x % CHUNK_SIZE, z % CHUNK_SIZE, y % CHUNK_SIZE);
    }

    return res;

};

World.prototype.height = function () {
    return WORLD_HEIGHT * CHUNK_SIZE;
};

World.prototype.widthX = function () {
    return WORLD_WIDTH * CHUNK_SIZE;
};

World.prototype.widthZ = function () {
    return WORLD_WIDTH * CHUNK_SIZE;
};

World.prototype.set = function (x,z,y,blockType) {
    var chunkX = Math.floor(x / CHUNK_SIZE);
    var chunkZ = Math.floor(z / CHUNK_SIZE);
    var chunkY = Math.floor(y / CHUNK_SIZE);

    if(chunkX < WORLD_WIDTH && chunkZ < WORLD_WIDTH && chunkY < WORLD_HEIGHT){
        // deze chunk is in range
        var chunkLocalX = x % CHUNK_SIZE;
        var chunkLocalZ = z % CHUNK_SIZE;
        var chunkLocalY = y % CHUNK_SIZE;
        this.world[chunkX][chunkZ][chunkY].set(chunkLocalX, chunkLocalZ, chunkLocalY, blockType, this);
    }
};

World.prototype.set_dirty = function (b) { this.dirty = b; };

World.prototype.is_dirty = function () {
    return this.dirty;
}

World.prototype.render = function (scene) {
    if(this.is_dirty()){
        for(var x = 0; x < WORLD_WIDTH; x++){
            for(var z = 0; z < WORLD_WIDTH; z++){
                for(var y = 0; y < WORLD_HEIGHT; y++){
                    if(this.world[x][z][y].is_dirty()){
                        console.log("dirty");
                        //scene.remove(this.world[x][z][y].get_mesh());
                        var item = this.world[x][z][y].render(this);
                        item.material = materialStorageInstance.get_materials_wrapped();
                        scene.add(item);
                    }
                }
            }
        }
        this.set_dirty(false);
    }
};
