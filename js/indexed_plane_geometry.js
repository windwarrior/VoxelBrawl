/**
 * @author mrdoob / http://mrdoob.com/
 * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Plane.as
 */

THREE.IndexedPlaneGeometry = function (materialIndex) {
    THREE.Geometry.call(this);

    // A - B
    // D - C

    var a = new THREE.Vector3(-0.5, 0.5, 0);
    var b = new THREE.Vector3(0.5, 0.5, 0);
    var c = new THREE.Vector3(-0.5, -0.5, 0);
    var d = new THREE.Vector3(0.5, -0.5, 0);

    this.vertices.push(a); // 0
    this.vertices.push(b); // 2
    this.vertices.push(c); // 3
    this.vertices.push(d); // 1

    var face1 = new THREE.Face3(0, 2, 1, new THREE.Vector3(0,0,1), null, materialIndex);
    var face2 = new THREE.Face3(2, 3, 1, new THREE.Vector3(0,0,1), null, materialIndex);

    this.faces.push(face1);
    this.faces.push(face2);
    
    //this.computeVertexNormals();
    //this.computeFaceNormals();
};

THREE.IndexedPlaneGeometry.prototype = Object.create( THREE.Geometry.prototype );
