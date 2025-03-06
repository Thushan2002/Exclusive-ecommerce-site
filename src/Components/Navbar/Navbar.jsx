import React, { useState } from "react";
import "./Navbar.css";
import search_icon from "../../assets/image/search.png";
import heart_icon from "../../assets/image/heart.png";
import cart_icon from "../../assets/image/cart.png";

const Navbar = () => {
  // State for dropdown
  const [selectedOption, setSelectedOption] = useState("");

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Handle dropdown change
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav>
      {/* Offer Section */}
      <div className="offer">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span>ShopNow</span>
        </p>
        <div className="form">
          <form action="">
            <label htmlFor="options"></label>
            <select id="options" value={selectedOption} onChange={handleChange}>
              <option value="english">English</option>
              <option value="tamil">Tamil</option>
              <option value="sinhala">Sinhala</option>
            </select>
          </form>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <h2>Exclusive</h2>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Sign Up</li>
        </ul>

        {/* Search Bar & Wishlist */}
        <div className="wish-list">
          <form action="" className="search-form">
            <input
              type="text"
              name="search"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit">
              <img src={search_icon} alt="Search" />
            </button>
          </form>

          <div className="wish-list-items">
            <img src={heart_icon} alt="Wishlist" />
            <img src={cart_icon} alt="Cart" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
