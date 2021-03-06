'use strict';

var productList = [];
var randomProductsArray = []; //temporarily holds the three images until they are displayed.
var clickCounter = 0;
var choiceCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var shownCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var chartData = localStorage.getItem('chartPersist');
var shownData = localStorage.getItem('shownPersist');
if (chartData) {
  console.log('im turning from a string to a thing');
  choiceCounter = JSON.parse(chartData);
  shownCounter = JSON.parse(shownData);
} else {
  console.log('local empty yo!');
  localStorage.setItem('chartPersist', JSON.stringify(choiceCounter));
  localStorage.setItem('shownPersist', JSON.stringify(shownCounter));
}

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
    productList[randomProductsArray[i]].shown += 1;
    shownCounter[randomProductsArray[i]] += 1;
    localStorage.setItem('shownPersist', JSON.stringify(shownCounter));
    console.log('inside for loop inside displayProducts');
    var imageSpots = ['pictureOne', 'pictureTwo', 'pictureThree'];
    console.log('imageSpots = ' + imageSpots);
    var pictureLocation = document.getElementById(imageSpots[i]);
    pictureLocation.innerHTML = '';
    console.log('pictureLocation= ' + pictureLocation);
    console.log('imageSpots[i]= ' + imageSpots[i]);
    var createImage = document.createElement('img');
    createImage.src = productList[randomProductsArray[i]].picturePath;
    pictureLocation.appendChild(createImage);
//stick code to track times shown here
  }
}

function questionsFinished() {
    hidePictures();
    displayButton();
}

function hidePictures() {
  document.getElementById('pictureHolder').style.display = 'none';
}

function displayButton() {
  document.getElementById('chartHolder').style.display = 'initial';
  document.getElementById('ctx').style.display = 'initial';
}
displayProducts();

// event handling
pictureOne.addEventListener('click', productOneChosen);
pictureTwo.addEventListener('click', productTwoChosen);
pictureThree.addEventListener('click', productThreeChosen);
revealButton.addEventListener('click', createTables);

var clearLS = document.getElementById('lsClear')
var handleLSClear = function () { //clear LS functionality
  console.log('clearing local storage');
  localStorage.clear();
}
clearLS.addEventListener('click', handleLSClear);

function productOneChosen() {
  console.log(event);
  event.preventDefault();
  productList[randomProductsArray[0]].votes += 1;
  choiceCounter[randomProductsArray[0]] += 1;
  localStorage.setItem('chartPersist', JSON.stringify(choiceCounter));
  clickCounter++;
  if (clickCounter < 15) {
    displayProducts();
  }
  else {
    questionsFinished();
  }
}
function productTwoChosen() {
  console.log(event);
  event.preventDefault();
  productList[randomProductsArray[1]].votes += 1;
  choiceCounter[randomProductsArray[1]] += 1;
  localStorage.setItem('chartPersist', JSON.stringify(choiceCounter));
  clickCounter++;
  if (clickCounter < 15) {
    displayProducts();
  }
  else {
    questionsFinished();
  }
}
function productThreeChosen() {
  console.log(event);
  event.preventDefault();
  productList[randomProductsArray[2]].votes += 1;
  choiceCounter[randomProductsArray[2]] += 1;
  localStorage.setItem('chartPersist', JSON.stringify(choiceCounter));
  clickCounter++;
  if (clickCounter < 15) {
    displayProducts();
  }
  else {
    questionsFinished();
  }
}

function createTables() {
  // console.log('createTables is running');
  event.preventDefault();
  var data = {
    labels: ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'watercan', 'wineglass'],
    datasets: [
      {
        label: 'Item Chosen',
        fillColor: '#48A497',
        strokeColor: '#48A4D1',
        data: choiceCounter
      },
      {
        label: 'Item Viewed',
        fillColor: 'rgba(151,187,205,0.5)',
        strokeColor: 'rgba(151,187,205,0.8)',
        data: shownCounter
      }
    ]
  }
  // var ctx = document.getElementById('ctx').getContext('2d');
  var ctx = document.getElementById("ctx").getContext("2d");
  new Chart(ctx).Bar(data);
}
