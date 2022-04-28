import React, { useContext } from "react";
import "./style.css";
import { ApiContext } from "../../ApiContext/AllContextApi";
import { Link } from "react-router-dom";
import NavbarNew from "../../Components/Navbar Main/NavbarNew";
import FooterMain from "../../Components/Footer/Footermain";
function WishList() {
  const { api, wishList, setWishList, setCartValue, handleAddToCart } =
    useContext(ApiContext);

  // Function to Remove Items from wishList
  const removewishItem = (category) => {
    const filterWishItems = wishList.filter((curElem) => {
      return curElem === category.id ? "" : curElem;
    });
    setWishList(filterWishItems);
  };

  return (
    <>
      <NavbarNew />
      <div className="wishlist-main">
        <div className="wishlist-nav-bar">
          <span>Product</span>
          <span>Description</span>
          <span>Price</span>
          <span>Stock Status</span>
        </div>

        {wishList <= 1 ? (
          <>
            <div className="wishlist-empty">
              <span>
                Your Wishlist is Empty. Please go to -
                <Link to="/home" className="cart-link">
                  Home
                </Link>
              </span>
            </div>
          </>
        ) : (
          api.map((curElem, index) => {
            const { id, description, price, image } = curElem;
            if (wishList.includes(id)) {
              return (
                <div className="wishlist-item" key={id}>
                  <img src={image} alt="" />
                  <p>{description}</p>
                  <span>${price}</span>
                  <span> IN Stock</span>
                  <button onClick={() => handleAddToCart(curElem)}>
                    Add To Cart
                  </button>
                  <i
                    onClick={() => removewishItem(curElem)}
                    className="fas fa-times fa-2x "
                  ></i>
                </div>
              );
            }
          })
        )}
      </div>
      <FooterMain />
    </>
  );
}

export default WishList;
