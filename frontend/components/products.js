import { splitArrayIntoChunks } from './common.js';

const generateProduct = (id, price, description, img) => {
  return `<div id="${id}" class="pro_div">
    <a href="product.html?id=${id}">
      <div>
        <img class="pro_img"
            src="${img}"
            alt="">
      </div>
      <div>
        <div class="pro_sale"> <strong> Sale start at INR ${price} </strong> </div>
        <div class="pro_description">${description}</div>
      </div>
    </a>
  </div>`
}
export const generateProducts = async (category_id) => {
  const res = await fetch(`http://localhost:3000/products`);
  let products = await res.json();
  products = products.filter(pdt => pdt.category_id == category_id)
  let rowSize = 3;
  const productsHTML = [];
  const productRows = splitArrayIntoChunks(products, rowSize)

  productRows.forEach((row) => {
    let rowHTML = '';
    row.forEach(product => {
      rowHTML += generateProduct(product.id, product.price, product.description, product.image)
    });
    productsHTML.push(`<div class="pro_flex_div">${rowHTML}</div>`);
  })
  return productsHTML.toString();
}