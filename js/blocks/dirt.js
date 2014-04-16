var Dirt = function () {
    this.materialId = materialStorageInstance.put("dirt", new THREE.MeshLambertMaterial({color: 0xA86200, ambient: 0x4A2B00}));    
};

Dirt.prototype = new Block();

Dirt.prototype.get_material_id = function () {
    return this.material_id;
}
