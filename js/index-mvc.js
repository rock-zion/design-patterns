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

  getCats: function () {
    return model.myCats;
  },

  render: function () {
    view.init();
  },
};

/* >>> VIEW <<< */
let view = {
  init: function () {
    this.render();
  },
  render: function () {},
};
controller.init();
