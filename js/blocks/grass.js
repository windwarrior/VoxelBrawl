var Grass = function () {
    this.materialId = materialStorageInstance.put("grass", new THREE.MeshLambertMaterial({color: 0x007700, ambient: 0x003300}));
};

Grass.prototype = new Block();

Grass.prototype.get_material_id = function () {
    return this.material_id;
}

