const itemRefs = document.querySelectorAll(".item");
console.log("Number of categories: ", itemRefs.length);
itemRefs.forEach((element) => {
  const titleRefs = element.querySelector("h2").textContent;
  console.log("Category: ", titleRefs);
  const secondItemRefs = element.querySelectorAll("li");
  console.log("Elements: ", secondItemRefs.length);
});
