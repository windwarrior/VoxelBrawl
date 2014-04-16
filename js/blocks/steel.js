var Steel = function () {
    this.materialId = materialStorageInstance.put("steel", new THREE.MeshPhongMaterial({color: 0x555555, ambient: 0x999999, specular: 0xffffff}));
};

Steel.prototype = new Block();

Steel.prototype.get_material_id = function () {
    return this.material_id;
}

