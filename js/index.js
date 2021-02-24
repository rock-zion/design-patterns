let myCats = [
  {
    name: "Shelly",
    img:
      "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    count: 0,
  },
  {
    name: "Deerbra",
    img:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    count: 0,
  },
  {
    name: "Nelly",
    img:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    count: 0,
  },
  {
    name: "Jolly",
    img:
      "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    count: 0,
  },
  {
    name: "Smiley",
    img:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    count: 0,
  },
  {
    name: "Carly",
    img:
      "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80",
    count: 0,
  },
];

let catList = document.querySelector("#cat-list");
let catCount = document.querySelector("#cat-count");
let catImg = document.querySelector("#cat-img");
let catPrompt = document.querySelector("#prompt");
let currentCat = myCats[0];

for (let index = 0; index < myCats.length; index++) {
  //create list items and add name to content
  let cat = myCats[index];
  let catItem = document.createElement("li");
  catItem.innerHTML = myCats[index].name;

  const setCurrentCat = (cat) => {
    currentCat = cat;
    catImg.src = currentCat.img;
    catCount.textContent = `${currentCat.name} has been clicked ${currentCat.count} times`;
  };

  catItem.addEventListener(
    "click",
    (function (catCopy) {
      return function () {
        setCurrentCat(catCopy);
      };
    })(cat)
  );
  catList.appendChild(catItem);
}

catImg.src = currentCat.img;
catCount.textContent = `${currentCat.name} has been clicked ${currentCat.count} times`;

catImg.addEventListener("click", function () {
  catCount.textContent = `${currentCat.name}  has been
    clicked ${++currentCat.count} times`;
});
