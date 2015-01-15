$(function(){

var viewerSettings = {
	cameraEyePosition : [-3, -2, 1.0],
	cameraCenterPosition : [0.0, 0.0, 0.0],
	cameraUpVector : [0.0, 0.0, 1.0],
	nearClippingPlane : 1.0,
	farClippingPlane : 100000.0
};

var viewer = new JSM.ThreeViewer ();
if (!viewer.Start (document.getElementById ('svgcanvas'), viewerSettings)) {
	viewer = null;
	return;
}

var svgObject = document.getElementById ('svg2');
var modelAndMaterials = JSM.SvgToModel (svgObject, 8, 5);
var model = modelAndMaterials[0];
var materials = modelAndMaterials[1];


materials.AddMaterial (new JSM.Material ({ambient : 0xfefefe, diffuse : 0xfefefe})); /// INDEX 7
materials.AddMaterial (new JSM.Material ({ambient : 0xcc0000, diffuse : 0xcc0000}));
materials.AddMaterial (new JSM.Material ({ambient : 0xE67E30, diffuse : 0xE67E30}));
materials.AddMaterial (new JSM.Material ({ambient : 0xDE3163, diffuse : 0xDE3163}));
materials.AddMaterial (new JSM.Material ({ambient : 0x7FFF00, diffuse : 0x7FFF00}));
materials.AddMaterial (new JSM.Material ({ambient : 0xF6DC12, diffuse : 0xF6DC12}));
materials.AddMaterial (new JSM.Material ({ambient : 0x800080, diffuse : 0x800080}));

var k=6;
model.bodies.forEach(function(bodie) {
	if(k<14)
		k++;
	else
		k=6;
    bodie.polygons.forEach(function(polygon){
    
    	polygon.SetMaterialIndex (k);
    })
});



var meshes = JSM.ConvertModelToThreeMeshes (model, materials);
viewer.AddMeshes (meshes);

viewer.FitInWindow ();
viewer.Draw ();

});