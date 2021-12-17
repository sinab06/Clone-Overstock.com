const generateProductDetailHTML = (product) => {
  return `<div>
  <img id="product_img"
      src="${product.image}"
      alt="">
</div>


<div id="product_right">
  <div> <strong>${product.description}</strong> </div>

  <div> <strong> Sale INR ${product.price} </strong> </div>

  <div>
      <span>
          <select name="quantity" id="quantity">

              <option value="1">Quantity: 1</option>
              <option value="2">Quantity: 2</option>
              <option value="3">Quantity: 3</option>
              <option value="4">Quantity: 4</option>
              <option value="5">Quantity: 5</option>
              <option value="6">Quantity: 6</option>
              <option value="7">Quantity: 7</option>
              <option value="8">Quantity: 8</option>
              <option value="9">Quantity: 9</option>
              <option value="10">Quantity: 10</option>

          </select>
      </span>

      <span>
          <button onclick="addToCart(${product.id},${product.category_id},${product.price},'${product.description}','${product.image}')" id="btn_cart">Add to cart</button>
      </span>
  </div>


  <div> ITEM: #37062153 </div>


  <div id="favourite">
      <span id="heart_div">
          <img id="heart_logo" src="https://freesvg.org/img/heart-15.png" alt="">
      </span>

      <span id="blank">.</span>

      <span id="fav_div">
          Favorites
      </span>
  </div>
</div>`
}
export const generateProductDetail = async (product_id) => {
  const res = await fetch(`http://localhost:3000/products/${product_id}`);
  let product = await res.json();
  return generateProductDetailHTML(product);
}