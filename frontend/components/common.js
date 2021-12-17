export const generateNavbar = () => {
  return `<div>

  <div id="ship_india">
    <p>Ships to: &nbsp; &nbsp;</p>
    <img id="flag"
      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png" alt="" />
    <p> <strong> INDIA </strong> </p>
  </div>


  <div id="navbar_box">
    <div> <a href="home.html"><img id="logo" src="https://brandlogovector.com/wp-content/uploads/2021/10/Overstock-Logo.png"
        alt="Overstock.com" /></a>
    </div>

    <div>
      <input type="text" placeholder="Search" id="search" />
    </div>

    <div>
      <img id="search_logo"
        src="https://www.pinclipart.com/picdir/big/558-5584983_virginia-mason-medical-center-continuing-medical-education-searching.png"
        alt="" />
    </div>

    <div id="account_section">
      <img src="https://pic.onlinewebfonts.com/svg/img_364496.png" alt="" />
      <p>Account</p>
    </div>

    <div id="list_section">
      <img src="https://icon-library.com/images/black-heart-icon-png/black-heart-icon-png-29.jpg" alt="" />
      <p> Lists</p>
    </div>

    <div id="cart_section">
      <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
        alt="" />
      <p> Cart </p>
    </div>
  </div>


  <div id="navbar_components">

    <div>Furniture</div>

    <div>Rugs</div>

    <div>Decor</div>

    <div>Bed & Bath</div>

    <div>Home Improvement</div>

    <div>Kitchen</div>

    <div>Outdoor</div>

    <div>Jewelry</div>

    <div>Lighting</div>

    <div>Kids & Baby</div>

    <div>More</div>

    <div style="border: 1px solid black; opacity: 0.1;"></div>

    <div>Holiday & Gifts</div>

    <div style="color: red; ">Sales & Deals</div>

  </div>
</div>`
}

export const generateFooter = () => {
  return `<div>
  <div id="footer_upperbox">

    <div>
      <div>MY ACCOUNT</div>
      <div> Orders & Returns</div>
      <div>Email Preferences</div>
      <div>Account Settings</div>
    </div>

    <div>
      <div>LET US HELP </div>
      <div>Contact Customer Care</div>
      <div>Shipping Information</div>
      <div>Return Policy</div>
      <div> International Help</div>
      <div> Accessibility</div>
    </div>

    <div>
      <div>COMPANY INFORMATION</div>
      <div>About Overstock™</div>
      <div>Careers</div>
      <div>Sell Your Products</div>
      <div>Overstock™ Investor Relations</div>
      <div> Overstock Dividend FAQs</div>
      <div> Overstock™ Supply Chain Transparency</div>
    </div>

    <div>
      <div>MORE WAYS TO SHOP</div>
      <div> Tips & Ideas</div>
      <div>Deals</div>
      <div>Clearance</div>
      <div>New Arrivals</div>
    </div>
  </div>


  <div id="footer_lowerbox">

    <div>
      © Copyright 2021, Overstock.com®, Inc. <br> 799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446
    </div>

    <div>
      <div class="margin_footer_lowerbox">
        Privacy Policy
      </div>

      <div class="margin_footer_lowerbox">Terms & Conditions
      </div>

      <div class="margin_footer_lowerbox">*Promotion Terms</div>

      <div class="margin_footer_lowerbox">
        <span> Ship to: </span>
        <span> <img id="flag"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png"
            alt=""> </span>
      </div>
    </div>

  </div>`
}

export const getParameterByName = (name, url) => {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const splitArrayIntoChunks = (inputArray, perChunk) => {
  return inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }
    resultArray[chunkIndex].push(item)
    return resultArray
  }, [])
}