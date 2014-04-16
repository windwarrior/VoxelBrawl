var MaterialStorage = function () {
    this.materials = [];
    this.materialMappings = [];

    this.mesh_faces = new THREE.MeshFaceMaterial(this.materials);
}

MaterialStorage.prototype.put = function (key, material) {
    if(key in this.materialMappings){
        var mapping = this.materialMappings[key];

        this.materials[mapping] = material;

        return this.materials.indexOf(material);
    } else {
        this.materials.push(material);
        this.materialMappings[key] = this.materials.length - 1;
        return this.materials.length -1;
    }

    this.mesh_faces.materials = this.materials;
}

MaterialStorage.prototype.get_materials = function () { return this.materials; };

MaterialStorage.prototype.get_materials_wrapped = function () { return this.mesh_faces; };

var materialStorageInstance = new MaterialStorage();


