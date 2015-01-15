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
var meshes = JSM.ConvertModelToThreeMeshes (model, materials);
viewer.AddMeshes (meshes);

viewer.FitInWindow ();
viewer.Draw ();

});