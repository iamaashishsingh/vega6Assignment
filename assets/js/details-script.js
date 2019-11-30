canvas = new fabric.Canvas('c');
addBGImg = function () {
  var imgUrl = location.search.replace('?url=', '');
  // addImage1(imgUrl);
  // var canvas = document.getElementById("c"),
  //   ctx = canvas.getContext("2d");
  // // canvas.width = 903;
  // // canvas.height = 657;
  // var background = new Image();
  // background.src = imgUrl;
  // // Make sure the image is loaded first otherwise nothing will draw.
  // background.onload = function () {
  // ctx.drawImage(background, 0, 0);
  // fabric.Image.fromURL(imgUrl, function (img) {
  //   // add background image
  //   canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
  //     scaleX: canvas.width / img.width,
  //     scaleY: canvas.height / img.height
  //   });
  // });
  canvas.setBackgroundImage(imgUrl, canvas.renderAll.bind(canvas), {
    // Optionally add an opacity lvl to the image
    // backgroundImageOpacity: 0.5,
    // should the image be resized to fit the container?
    backgroundImageStretch: false
  });
}
addText = function () {
  text = 'Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua.\n' +
    'Ut enim ad minim veniam,\nquis nostrud exercitation ullamco\nlaboris nisi ut aliquip ex ea commodo consequat.';
    textSample = new fabric.Text(text.slice(0, getRandomInt(0, text.length)), {
    left: getRandomInt(350, 400),
    top: getRandomInt(350, 400),
    fontFamily: 'helvetica',
    angle: getRandomInt(-10, 10),
    fill: '#' + getRandomColor(),
    scaleX: 0.5,
    scaleY: 0.5,
    fontWeight: '',
    originX: 'left',
    hasRotatingPoint: true,
    centerTransform: true
  });
  canvas.add(textSample);
};
getRandomInt = function () {
  return 100;
}
addTextbox = function () {
  text = 'Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua.\n' +
    'Ut enim ad minim veniam,\nquis nostrud exercitation ullamco\nlaboris nisi ut aliquip ex ea commodo consequat.';
    textSample = new fabric.Textbox(text.slice(0, getRandomInt(0, text.length)), {
    fontSize: 20,
    left: getRandomInt(350, 400),
    top: getRandomInt(350, 400),
    fontFamily: 'helvetica',
    angle: 0, // getRandomInt(-10, 10),
    fill: '#' + getRandomColor(),
    fontWeight: '',
    originX: 'left',
    width: 300,
    hasRotatingPoint: true,
    centerTransform: true
  });
    canvas.add(textSample);
};
addIText = function () {
  text = 'Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua.\n' +
    'Ut enim ad minim veniam,\nquis nostrud exercitation ullamco\nlaboris nisi ut aliquip ex ea commodo consequat.';
    textSample = new fabric.IText(text.slice(0, getRandomInt(0, text.length)), {
    left: getRandomInt(350, 400),
    top: getRandomInt(350, 400),
    fontFamily: 'helvetica',
    angle: getRandomInt(-10, 10),
    fill: '#' + getRandomColor(),
    scaleX: 0.5,
    scaleY: 0.5,
    fontWeight: '',
    originX: 'left',
    hasRotatingPoint: true,
    centerTransform: true
  });
    canvas.add(textSample);
};
getRandomColor = function () {
  return 'Red';
}
function addSelectedShapes() {
  var selectedIndexValue = document.getElementById('option-shape').selectedIndex;
  console.log(selectedIndexValue);
  // document.write(selectedIndexValue);
  if (selectedIndexValue == 0) {
    alert("please select an option");
}
  else if (selectedIndexValue == 1) {
    addRect();
    resetSelectedIndex();
    AddLayer("Reactangle");   
  }
  else if (selectedIndexValue == 2) {
    addCircle();
    resetSelectedIndex();
    AddLayer("Circle");
  }
  else if (selectedIndexValue == 3) {
    addTriangle();
    resetSelectedIndex();
    AddLayer("Triangle");
  }
  else if (selectedIndexValue == 4) {
    addPolygon();
    resetSelectedIndex();
    AddLayer("Polygon");
  }
}
resetSelectedIndex = function () {
  document.getElementById('option-shape').selectedIndex = 0;
}
// dowload canvas image
download_img = function (el) {
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};
function schedule(selectedValue) {
  addSelectedShapes();
}
addBGImg = function () {
  var imgUrl = location.search.replace('?url=', '');
  // addImage1(imgUrl);
  // var canvas = document.getElementById("c"),
  //   ctx = canvas.getContext("2d");
  // // canvas.width = 903;
  // // canvas.height = 657;
  // var background = new Image();
  // background.src = imgUrl;
  // // Make sure the image is loaded first otherwise nothing will draw.
  // background.onload = function () {
  // ctx.drawImage(background, 0, 0);
  // fabric.Image.fromURL(imgUrl, function (img) {
  //   // add background image
  //   canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
  //     scaleX: canvas.width / img.width,
  //     scaleY: canvas.height / img.height
  //   });
  // });
  canvas.setBackgroundImage(imgUrl, canvas.renderAll.bind(canvas), {
    // Optionally add an opacity lvl to the image
    // backgroundImageOpacity: 0.5,
    // should the image be resized to fit the container?
    backgroundImageStretch: false
  });
}
addBGImg();
addShape = function (shapeName) {
  console.log('adding shape', shapeName);
  coord = getRandomLeftTop();
  fabric.loadSVGFromURL('.../../' + shapeName + '.svg', function (objects, options) {
    loadedObject = fabric.util.groupSVGElements(objects, options);
    loadedObject.set({
      left: coord.left,
      top: coord.top,
      angle: getRandomInt(-10, 10)
    })
      .setCoords();
      canvas.add(loadedObject);
  });
};
addPatternRect = function () {
   coord = getRandomLeftTop();
    rect = new fabric.Rect({
    width: 300,
    height: 300,
    left: coord.left,
    top: coord.top,
    angle: getRandomInt(-10, 10),
    fill: pattern,
  });
  canvas.add(rect);
};
addRect = function () {
    coord = getRandomLeftTop();
    canvas.add(new fabric.Rect({
    left: coord.left,
    top: coord.top,
    fill: '#' + getRandomColor(),
    width: 50,
    height: 50,
    opacity: 0.8
  }));
};
    addCircle = function () {
    coord = getRandomLeftTop();
    canvas.add(new fabric.Circle({
    left: coord.left,
    top: coord.top,
    fill: '#' + getRandomColor(),
    radius: 50,
    opacity: 0.8
  }));
};
getRandomLeftTop = function () {
  return { left: Math.random() * 150, top: Math.random() * 180 }
}
addTriangle = function () {
    coord = getRandomLeftTop();
    canvas.add(new fabric.Triangle({
    left: coord.left,
    top: coord.top,
    fill: '#' + getRandomColor(),
    width: 50,
    height: 50,
    opacity: 0.8
  }));
};
  addPolygon = function () {
  coord = getRandomLeftTop();
  this.canvas.add(new fabric.Polygon([
    { x: 185, y: 0 },
    { x: 250, y: 100 },
    { x: 385, y: 170 },
    { x: 0, y: 245 }], {
    left: coord.left,
    top: coord.top,
    fill: '#' + getRandomColor()
  }));
};
function addImage(imageName, minScale, maxScale) {
  coord = getRandomLeftTop();
  fabric.Image.fromURL(imageName, function (image) {
      image.set({
      left: 0, //coord.left,
      top: 0, // coord.top,
      angle: 0 // getRandomInt(-10, 10)
    })
      .scale(0.5)// getRandomNum(minScale, maxScale))
      .setCoords();
      canvas.add(image);
  });
};
addResizeFilter = function () {
  setActiveStyle('resizeFilter', new fabric.Image.filters.Resize());
  canvas.requestRenderAll();
}
addBGImg();
// search image function
function searchImage() {
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();
  var searchTerm = document.getElementById('searchInput').value;
  var url = 'https://api.pexels.com/v1/search?query=' + searchTerm + '&per_page=16&page=1'
  request.open('GET', url, true)
  request.setRequestHeader('Authorization', '563492ad6f917000010000018e94f7f99d1e4b06bc5ac27ac4af0040')
  request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
      if (data.photos.length == 0) {
        document.getElementById("NotFound").innerHTML="Oops! No Matching Result Found."
      }
      else{
        document.getElementById("NotFound").innerHTML=""
      }
        removeElementsByClass('dynamicElement');
        // console.log(data);  
       for (var i = 0; i <= data.photos.length; i++) {
         var img = data.photos[i];
         console.log(img);
         var node = document.getElementById('mycontent').cloneNode(true);
         node.id = "mycontent" + i;
         debugger
        node.childNodes[1].childNodes[3].childNodes[1].href = '/assets/pages/details/?url=' + img.src.large;
        node.childNodes[1].childNodes[1].href = '/assets/pages/details/?url=' + img.src.large;
        node.childNodes[1].childNodes[1].childNodes[1].src = img.src.tiny;
        node.classList.add('dynamicElement');
        document.getElementById('my-galary').appendChild(node);
      }
    }
    else {
      console.log('error')
    }
}
  request.send()
}
function removeElementsByClass(className) {
  var elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
  elements[0].parentNode.removeChild(elements[0]);
  }
}
addTextbox = function () {
  text = 'Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua.\n' +
  'Ut enim ad minim veniam,\nquis nostrud exercitation ullamco\nlaboris nisi ut aliquip ex ea commodo         consequat.';
    textSample = new fabric.Textbox(text.slice(0, getRandomInt(0, text.length)), {
    fontSize: 20,
    left: getRandomInt(350, 400),
    top: getRandomInt(350, 400),
    fontFamily: 'helvetica',
    angle: 0, // getRandomInt(-10, 10),
    fill: '#' + getRandomColor(),
    fontWeight: '',
    originX: 'left',
    width: 300,
    hasRotatingPoint: true,
    centerTransform: true
  });
canvas.add(textSample);
  AddLayer("Text");
};
var layers = ["image"]; 
function AddLayer(layer){
  layers.push(layer);
  console.log(layers); 
}