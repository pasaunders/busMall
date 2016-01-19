'use strict';

var productList = [];

function Product(picturePath){
  this.picturePath = picturePath;
  this.votes = 0;
  this.shown = 0;

  console.log(this);
  productList.push(this);
}

var bag = new Product('img/bag.jpg');
var banana = new Product('img/banana.jpg');
var boots = new Product('img/boots.jpg');
var chair = new Product('img/chair.jpg');
var cthulhu = new Product('img/cthulhu.jpg');
var dragon = new Product('img/dragon.jpg');
var pen = new Product('img/pen.jpg');
var scissors = new Product('img/scissors.jpg');
var shark = new Product('img/shark.jpg');
var sweep = new Product('img/sweep.png');
var unicorn = new Product('img/unicorn.jpg');
var usb = new Product('img/usb.gif');
var waterCan = new Product('img/watercan.jpg');
var wineGlass = new Product('img/wineglass.jpg');

var thisSelection = [];
function randomProducts() {
  console.log('randomizer function');
  var productGenerated = 0;
  while (thisSelection.length < 3) {
    console.log('first while loop');
    // do {
      console.log('do-while loop');
      productGenerated = Math.floor(Math.random() * productList.length);
      console.log('Number generated: ' + productGenerated);
    // } while (thisSelection.indexOf(productGenerated) === -1 false);
    thisSelection.push(productGenerated);
    console.log('Array contains: ' + thisSelection);
  }
}


function displayProducts() {
  console.log('display loop running');
  randomProducts();

  for (var i = 0; i < thisSelection.length; i++) {
    var pictureLocation = document.getElementById('picture');
    var createImage = document.createElement('img');
    var attachImage = document.setAttribute('src', thisRound[i].picturePath);
    createElement.appendChild(attachImage);
    pictureLocation.appendChild(createElement);
  }
}
displayProducts();

// for (var i = 0; i < 3; i++) {
//   displayProducts();
//   console.log('display loop is running');
// }
