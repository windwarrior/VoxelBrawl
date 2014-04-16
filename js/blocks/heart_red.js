var HeartRed = function () {
    this.materialId = materialStorageInstance.put("heart_red", new THREE.MeshLambertMaterial({color: 0xff0000, ambient: 0x330000}));
};

HeartRed.prototype = new Block();

HeartRed.prototype.get_material_id = function () {
    return this.material_id;
}

