const generateCartItemHTML = (cart) => {
  return `<div>
  <img class="cart_img" src="${cart.product.image}" alt="">
</div>

<div>
  <div id="cart_pro_name">
      ${cart.product.description}
  </div>


  <div id="price">
    <span> <strong> SALE INR </strong> </span>  
    <span> <strong> ${cart.product.price} </strong> </span>
  </div>


  <div id="order_soon">
     <span> <strong> Only 10 Left! </strong> </span>
     <span> Order Soon. </span>  
  </div>


  <div>
      <select name="quantity" id="quantity">
          <option ${cart.quantity == 1 ? 'selected' : ''} value="1">Quantity: 1</option>
          <option ${cart.quantity == 2 ? 'selected' : ''} value="2">Quantity: 2</option>
          <option ${cart.quantity == 3 ? 'selected' : ''} value="3">Quantity: 3</option>
          <option ${cart.quantity == 4 ? 'selected' : ''} value="4">Quantity: 4</option>
          <option ${cart.quantity == 5 ? 'selected' : ''} value="5">Quantity: 5</option>
          <option ${cart.quantity == 6 ? 'selected' : ''} value="6">Quantity: 6</option>
          <option ${cart.quantity == 7 ? 'selected' : ''} value="7">Quantity: 7</option>
          <option ${cart.quantity == 8 ? 'selected' : ''} value="8">Quantity: 8</option>
          <option ${cart.quantity == 9 ? 'selected' : ''} value="9">Quantity: 9</option>
          <option ${cart.quantity == 10 ? 'selected' : ''} value="10">Quantity: 10</option>
          </select>
  </div>



  <div>
      <span class="remove_div">
          <button onclick="removeFromCart(${cart.id})">Remove</button>
      </span>

      <span>
          <u class="remove_div" style="margin-left: 10%;"> Save For Later </u> 
      </span>
  </div>
</div>`
}

const generateAmountDetailHTML = (amount, quantities) => {
  return `            <div id="cart_right">
  <div id="cart_price">
      <div>
          <div class="margin_bott">(${quantities}) Items:</div>

          <div>Subtotal After</div>

          <div class="margin_bott">Discount:</div>

          <div class="size"> <strong> Your Total: </strong> </div>
      </div>

      <div style="margin-left: 60px;">
          <div class="margin_bott">
              <span> INR </span>
              <span>${amount + 2000}</span>
          </div>

          <div> <strong> INR </strong> </div>

          <div class="margin_bott"> <strong> ${amount} </strong> </div>

          <div class="size"> <strong> INR ${amount} </strong> </div>
      </div>
  </div>


  <div>
      <button id="btn_checkout" onclick="onCheckout()">CHECKOUT</button>
  </div>
</div>`
}

export const generateCart = async (cart) => {
  const cartsHTML = [];
  cart.forEach(c => {
    cartsHTML.push(`<div id="cart_div_left">${generateCartItemHTML(c)}</div>`)
  })
  return cartsHTML.toString();
}

export const generateAmountDetail = (cart) => {
  let amount = 0;
  let quantities = 0;
  cart.forEach(c => {
    amount += c.product.price * c.quantity
    quantities += c.quantity
  })
  return generateAmountDetailHTML(Math.round(amount * 100) / 100, quantities)
}