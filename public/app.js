cats = [
{
  name: "Zaza",
  favouriteFood: "Beef",
  image: "https://reposti.com/i/m/p1.jpg"
},
{
  name: "Alex",
  favouriteFood: "Salmon",
  image: "https://www.maxprog.com/img/cat.jpg"
}
]


var createUL = function(){
  var uL = document.createElement('ul');
  uL.classList.add('.cat');
  return uL;
}

var createNameL = function(name){
  var nameL = document.createElement('li');
  nameL.innerText = "Name: " + name;
  return nameL;
}

var createFoodL = function(food){
  var foodL = document.createElement('li');
  foodL.innerText = "Favourite food: " + food;
  return foodL;
}

var createImg = function(image, width){
  var img = document.createElement('img');
  img.src = image;
  img.width = width;
  return img;
}

var appendElements = function(uL, name, food, image){
  uL.appendChild(name);
  uL.appendChild(food);
  uL.appendChild(image);
  var cats = document.querySelector('#cats');
  cats.appendChild(uL);
  return cats;
}


var addCat = function(name, food, image){
  var uL = createUL();
  var name = createNameL(name);
  var food = createFoodL(food);
  var image = createImg(image, '500');
  appendElements(uL, name, food, image);
}

var app = function(){
  for(var cat of cats){
    addCat(cat.name, cat.favouriteFood, cat.image);
  }
}

window.onload = app;