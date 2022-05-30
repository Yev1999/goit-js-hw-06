const result = document.querySelectorAll('li.item');
console.log(`Number of categories: ${result.length}`);

[...result].map((item) => {
    const currentCategory = item;
    const title = currentCategory.querySelector("h2").innerText;
    console.log("Category: ", title);
    console.log("Elements: ", currentCategory.querySelectorAll('li').length);
})