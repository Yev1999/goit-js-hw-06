const result = document.querySelectorAll('li.item');
console.log(`Number of categories: ${result.length}`);

for (let i = 0; i < result.length; i++) {
    const currentCategory = result[i];
    const title = currentCategory.querySelector("h2").innerText;
    console.log("Category: ", title);
    console.log("Elements: ", currentCategory.querySelectorAll('li').length);
}