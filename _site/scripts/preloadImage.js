function preloadImage(imgKey) {
  var imageComponent = document.getElementById(imgKey);
  if (!imageComponent) {
    console.log("[preloadImage] Invalid imgKey '" + imgKey + "'");
    return;
  }
  var images = imageComponent.getElementsByTagName("img");
  if (!images || images.length < 1) {
    console.log("[preloadImage] No images found for img_key '" + imgKey + "'");
    return;
  }

  var img = images[0];
  if (img && img.src) {
    var imgSrc = img.src;
    var loader = new window.Image();
    loader.src = '';
    loader.onload = function () {
      imageComponent.classList.add("ImageComponent--loaded")
    }
    loader.src = imgSrc;
  }
}