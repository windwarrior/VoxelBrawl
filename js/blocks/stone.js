var Stone = function () {
    this.materialId = materialStorageInstance.put("stone", new THREE.MeshLambertMaterial({color: 0x555555, ambient: 0x333333}));
};

Stone.prototype = new Block();

Stone.prototype.get_material_id = function () {
    return this.material_id;
}
