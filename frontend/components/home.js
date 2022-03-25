import { splitArrayIntoChunks } from './common.js';

const generateCategory = (id, name, img) => {
  return `<div id="category-${id}">
    <a href="frontend/pages/products.html?category=${id}"><div> <img class="fresh_find_img"
      src="${img}" alt=""> </div>
    <div class="fresh_find_title">${name}</div></a>
  </div>`
}
export const generateCategories = async () => {
  const res = await fetch(`http://localhost:3000/categories`);
  const categories = await res.json();
  let rowSize = 6;
  const categoriesHTML = [];
  const categoryRows = splitArrayIntoChunks(categories, rowSize)

  categoryRows.forEach((row) => {
    let rowHTML = '';
    row.forEach(category => {
      rowHTML += generateCategory(category.id, category.name, category.image)
    });
    categoriesHTML.push(`<div class="fresh_find">${rowHTML}</div>`);
  })
  return categoriesHTML.toString();
}