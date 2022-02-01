const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
// console.log(ingredients);
const array = ingredients.map((element) => {
  const itemRef = document.createElement("li");
  console.log(itemRef);
  itemRef.classList.add("item");
  itemRef.textContent = element;
  return itemRef;
});
console.log(array);
const listRef = document.querySelector("ul");
listRef.append(...array);
console.log(listRef);
