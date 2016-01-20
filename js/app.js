'use strict';

var productList = [];
var randomProductsArray = []; //temporarily holds the three images until they are displayed.
var clickCounter = 0;

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

function randomProducts() {
  console.log('randomizer function');
  randomProductsArray = [];
  var productGenerated = 0;
  while (randomProductsArray.length < 3) {
    console.log('first while loop');
    //start nested loop
    do {
      console.log('do-while loop');
      productGenerated = Math.floor(Math.random() * productList.length);
      console.log('Number generated: ' + productGenerated);
    } while (randomProductsArray.indexOf(productGenerated) !== -1);

    randomProductsArray.push(productGenerated);
    console.log('Array contains: ' + randomProductsArray);
  }
}


function displayProducts() {   //find a way to clear old image elements
  console.log('display loop running');
  randomProducts();
  for (var i = 0; i < randomProductsArray.length; i++) {
    console.log('inside for loop inside displayProducts');
    var imageSpots = ['pictureOne', 'pictureTwo', 'pictureThree'];
    console.log('imageSpots = ' + imageSpots);
    var pictureLocation = document.getElementById(imageSpots[i]);
    pictureLocation.innerHTML = "";
    console.log('pictureLocation= ' + pictureLocation);
    console.log('imageSpots[i]= ' + imageSpots[i]);
    var createImage = document.createElement('img');
    createImage.src = productList[randomProductsArray[i]].picturePath;
    pictureLocation.appendChild(createImage);
//stick code to track times shown here
  }
}

displayProducts();

// event handling
pictureOne.addEventListener('click', productOneChosen);
pictureTwo.addEventListener('click', productTwoChosen);
pictureThree.addEventListener('click', productThreeChosen);

function productOneChosen() {
  console.log(event);
  event.preventDefault();
  productList[randomProductsArray[0]].votes += 1;  //returns NaN. Why?
  clickCounter++;
  if (clickCounter < 15) {
    displayProducts();
  }
}
function productTwoChosen() {
  console.log(event);
  event.preventDefault();
  productList[randomProductsArray[1]].votes += 1;//returns NaN. Why?
  clickCounter++;
  if (clickCounter < 15) {
    displayProducts();
  }
}
function productThreeChosen(){
  console.log(event);
  event.preventDefault();
  productList[randomProductsArray[2]].votes += 1;//returns NaN. Why?
  clickCounter++;
  if (clickCounter < 15) {
    displayProducts();
  }
}
