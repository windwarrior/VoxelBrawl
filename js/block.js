var Block = function() {
    this.material_id = materialStorageInstance.put("empty", new THREE.MeshLambertMaterial({color: 0xffffff, ambient: 0x888888}));
}

Block.prototype._makeFace = function(x, y, z, rotX, rotY, rotZ) {
    var geo = new THREE.IndexedPlaneGeometry(this.materialId);
    var matrix = new THREE.Matrix4();
    geo.applyMatrix(matrix.makeTranslation(x,y,z));
    geo.applyMatrix(matrix.makeRotationX(rotX));
    geo.applyMatrix(matrix.makeRotationY(rotZ));
    
    var mesh = new THREE.Mesh();
    mesh.geometry = geo;
    return mesh;
};

Block.prototype.get_material_id = function () {
    return this.material_id;
}

Block.prototype.topFace = function () { 
    return this._makeFace(0,0,0.5, -Math.PI/2, 0, 0);
};

Block.prototype.downFace = function () {
    return this._makeFace(0,0,0.5, Math.PI/2, 0, 0);
};

Block.prototype.backFace = function () {
    return this._makeFace(0,0,0.5, 0, 0, Math.PI);
};

Block.prototype.frontFace = function () {
    return this._makeFace(0,0,0.5, 0, 0, 0);
};

Block.prototype.leftFace = function () {
    return this._makeFace(0, 0, 0.5, 0, 0, -Math.PI/2);
};

Block.prototype.rightFace = function () {
    return this._makeFace(0, 0, 0.5, 0, 0, Math.PI/2);
};

Block.prototype.is_opaque = function () {
    return true;
};
