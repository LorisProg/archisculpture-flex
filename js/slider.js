/*
	Slider Javascript for Laurence Morales Website
*/

var updateImage = function(image, alternative){
	document.getElementById("img-focus").src = image;
	document.getElementById("img-focus").alt = alternative;
}

var createThumbnails = function(list){
	for (var i=0; i<list.length; i++) {

		var newThumb = document.createElement('li'),
				newImg = document.createElement('img'),
				onClick = "updateImage('" + list[i][0] + "', '" + list[i][1] + "')";

		newThumb.appendChild(newImg);
		newImg.setAttribute('src', list[i][0]);
		newImg.setAttribute('alt', list[i][1]);
		newImg.setAttribute('onClick', onClick);
		document.getElementById('thumbnails').appendChild(newThumb);
	}
}