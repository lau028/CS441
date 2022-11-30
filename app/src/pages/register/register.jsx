import React from "react";
import "./css/main.css";
import "./css/register.css";



class Image extends React.Component {
  render() {
    return (
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Register - Registore</title>

  {/* Menu */}
  <menu className="flex center spaceBtwnLR">
    <div id="menuIcon" className="flex column center">
      <div id="menuIconBar1" className="menuBar" />
      <div id="menuIconBar2" className="menuBar" />
      <div id="menuIconBar3" className="menuBar" />
    </div>
    <h2 id="menuTitle">Menu</h2>
    <div />
  </menu>
  {/* Register */}
  <main className="flex centerUD">
    <div id="galleryView">
      <section id="gallery">
        <div id="itemTemplate">
          <div id="itemCountBadge" />
          <h3 id="itemTitle" />
          <img id="itemImage" src="" alt="" />
          <div id="itemBtns">
            <div id="itemMinusSign" />
            <div id="itemBtnDivider" />
            <div id="itemPlusSign" />
          </div>
        </div>
      </section>
      <section id="categories">
        <h2 id="menuTitle" className="galleryMenuOptions">
          {" "}
          Food
        </h2>
      </section>
    </div>
    <aside id="cart">
      <div id="cartFlag">
        <div id="cartCount" />
        <img id="cartBtn" src="" alt="" />
        <div id="cartPost" />
      </div>
      <div id="cartContents">
        <div>
          <div id="userInfo">
            <img src="/imgs/acountIcon.svg" alt="ID:" />
            <h2 id="userName">John Doe</h2>
            <h4 id="userID">ID: #031cf42a</h4>
          </div>
          <div className="cartItemList">
            <h4 />
          </div>
          <div id="cartCheckout" className="flex column center">
            <div className="flex spaceBtwn">
              <h4>Add Note</h4>
              <h4>Promo Code</h4>
            </div>
            <div className="flex column center">
              <div className="flex spaceBtwn checkoutInfo">
                <h6>Subtotal:</h6>
                <h6>
                  $<span id="subtotalAmount" />
                </h6>
              </div>
              <div className="flex spaceBtwn checkoutInfo">
                <h6>Estimated Tax:</h6>
                <h6>
                  $<span id="taxAmount" />
                </h6>
              </div>
              <div className="flex spaceBtwn checkoutInfo">
                <h6>Today's Savings:</h6>
                <h6>
                  $<span id="savingsAmount" />
                </h6>
              </div>
              <div className="flex spaceBtwn checkoutInfo">
                <h3>Total:</h3>
                <h3>
                  $<span id="totalAmount" />
                </h3>
              </div>
            </div>
            <button id="checkoutBtn" />
          </div>
        </div>
      </div>
    </aside>
  </main>
</>


    );
  }
}

export default Image;