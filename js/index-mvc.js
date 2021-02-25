import { myCats } from "../js/model.js";

/* >>> MODEL <<< */
let model = {
  currentCat: null,
  myCats,
};

/* >>> CONTROLLER <<< */
let controller = {
  init: function () {
    model.currentCat = this.getCats()[0];
    this.render();
  },

  incrememtCounter: function () {
    let currentCat = model.currentCat;
    ++currentCat.count;
    view.selectCat();
  },

  getCats: function () {
    return model.myCats;
  },

  setCurrentCat: function (currentCat) {
    model.currentCat = currentCat;
    view.selectCat();
  },

  render: function () {
    view.init();
  },
};

/* >>> VIEW <<< */
let view = {
  init: function () {
    this.catList = document.querySelector("#cat-list");
    this.catCount = document.querySelector("#cat-count");
    this.catImg = document.querySelector("#cat-img");
    this.catPrompt = document.querySelector("#prompt");

    //add event listener to image
    this.catImg.addEventListener("click", controller.incrememtCounter);

    this.render();
    this.selectCat();
  },
  selectCat: function () {
    let currentCat = model.currentCat;
    this.catImg.src = currentCat.img;
    this.catPrompt.textContent = `click on ${currentCat.name}'s picture to increase the count`;
    this.catCount.innerHTML = `<span id="bold">${currentCat.name} &nbsp; </span> has been clicked &nbsp; <span id="bold">${currentCat.count}</span> &nbsp; times`;
  },

  render: function () {
    let cats = controller.getCats();
    for (var i = 0; i < cats.length; i++) {
      let catItem = document.createElement("li");
      catItem.style.cursor = "pointer";
      let cat = cats[i];
      catItem.textContent = cat.name;
      catItem.addEventListener("click", function () {
        controller.setCurrentCat(cat);
      });
      this.catList.appendChild(catItem);
    }
  },
};
controller.init();
