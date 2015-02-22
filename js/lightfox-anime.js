$(document).ready(function()
{
	var arrayOfImages = [];
	for (var i = 0; i < 50; i++) {
		arrayOfImages.push("../img/about/LightFox-" + i + ".png");
	}
	//document.write(arrayOfImages);

	$("#lightfox-anime").rollerblade({
			imageArray: arrayOfImages,
			sensitivity: 35,
			drag: false,
			auto: true,
			edgeStop:false
	})
});
