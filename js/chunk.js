var CHUNK_SIZE = 16;

var Chunk = function (locX, locZ, locY) {
    this.locX = locX;
    this.locZ = locZ;
    this.locY = locY;

    this.dirty = true;

    this.mesh = null;

    this.blocks = new Array();
    for(var x = 0; x < CHUNK_SIZE; x++){
        this.blocks[x] = new Array();
        for(var z = 0; z < CHUNK_SIZE; z++){
            this.blocks[x][z] = new Array();
            for(var y = 0; y < CHUNK_SIZE; y++){
                this.blocks[x][z][y] = null;
            }
        }
    }
}

Chunk.prototype.set = function (x, z, y, blockType, world) {
    if(x < CHUNK_SIZE && y < CHUNK_SIZE && z < CHUNK_SIZE){
        this.dirty = true;
        this.blocks[x][z][y] = blockType;
        world.set_dirty(true);
    }
}

Chunk.prototype.get = function (x, z, y) {
    return x < CHUNK_SIZE && z < CHUNK_SIZE && y < CHUNK_SIZE ? this.blocks[x][z][y] : null;
}

Chunk.prototype.is_dirty = function () {
    return this.dirty;
}

Chunk.prototype.get_mesh = function () {
    return this.mesh;
}

Chunk.prototype.render = function (world) {
    var geo = new THREE.Geometry();
    for(var x = 0; x < CHUNK_SIZE; x++){
        for(var z = 0; z < CHUNK_SIZE; z++){
            for(var y = 0; y < CHUNK_SIZE; y++){
                var block = this.blocks[x][z][y];

                var globalX = this.locX * CHUNK_SIZE + x;
                var globalZ = this.locZ * CHUNK_SIZE + z;
                var globalY = this.locY * CHUNK_SIZE + y;

                    
                if(block != null){
                    if(world.get(globalX,globalZ,globalY+1) == null){
                        //above, ~0 ~0 ~1
                        var top = block.topFace();
                        top.position.x = x + 0.5;
                        top.position.z = z + 0.5;
                        top.position.y = y + 0.5;
                        THREE.GeometryUtils.merge(geo, top);
                    } 
                    //bottom side is never visible, don't render
                    if(world.get(globalX,globalZ,globalY-1) == null){
                        //below, ~0 ~0 ~-1
                        var bottom = block.downFace();
                        bottom.position.x = x + 0.5;
                        bottom.position.z = z + 0.5;
                        bottom.position.y = y + 0.5;
                        THREE.GeometryUtils.merge(geo, bottom);
                    } 
                    if(world.get(globalX+1,globalZ,globalY) == null){
                        //right, ~1 ~0 ~0
                        var right = block.rightFace();
                        right.position.x = x + 0.5;
                        right.position.z = z + 0.5;
                        right.position.y = y + 0.5;
                        THREE.GeometryUtils.merge(geo, right);
                    }
                    if(world.get(globalX-1,globalZ,globalY) == null){
                        //left, ~-1 ~0 ~0
                        var left = block.leftFace();
                        left.position.x = x + 0.5;
                        left.position.z = z + 0.5;
                        left.position.y = y + 0.5;
                        THREE.GeometryUtils.merge(geo, left);
                    }
                    if(world.get(globalX,globalZ+1,globalY) == null){
                        //front, ~0 ~1 ~0
                        var front = block.frontFace();
                        front.position.x = x + 0.5;
                        front.position.z = z + 0.5;
                        front.position.y = y + 0.5;
                        THREE.GeometryUtils.merge(geo, front);
                    }
                    if(world.get(globalX,globalZ-1,globalY) == null){
                        //back, ~0 ~-1 ~0
                        var back = block.backFace();
                        back.position.x = x + 0.5;
                        back.position.z = z + 0.5;
                        back.position.y = y + 0.5;
                        THREE.GeometryUtils.merge(geo, back);
                   }
                }
            }
        }
    }

    var matrix = new THREE.Matrix4();
    var world_width = WORLD_WIDTH/2;
    var world_height = WORLD_HEIGHT/2;
    geo.applyMatrix(matrix.makeTranslation((this.locX - world_width) * CHUNK_SIZE, (this.locY - world_height) * CHUNK_SIZE, (this.locZ - world_width) * CHUNK_SIZE));
    this.dirty = false;

    this.mesh = new THREE.Mesh();
    this.mesh.geometry = geo;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    return this.mesh;
}
