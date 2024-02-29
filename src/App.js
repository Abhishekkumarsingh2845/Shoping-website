import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';
import flipkart from "./Assets/Images/Flipkart-logo 1.png";
import star from "./Assets/Images/ei_star.png";
import food from "./Assets/Images/food.png";
import mobile from "./Assets/Images/mobile-phone.png";
import home from "./Assets/Images/responsive.png";
import elct from "./Assets/Images/shoe.png";


function App() {
  return (

    <div className="MainContainer">
      <div className="FirstContainer">
        <img src={flipkart} alt="Flipkart Logo" className="Logo1" />
        <div class="dropdown">
        <button class="dropbtn">MENU</button>
        <div class="dropdown-content">
          <a href="#">T-shirt</a>
          <a href="#">Shirt</a>
          <a href="#">Pant</a>
          <a href="#">Belt</a>
          <a href="#">Coat</a>
          <a href="#">Shoes</a>
        </div>
        </div>

        <input
          placeholder="Search Product,Branchs and More..."
          className="SearchBar"
        />
          
      </div>
      <div className="SecondContainer">
        <div className="tsi-1">
          <img src={star} className="tex1-image" />
          <div className="text1">Top Offers</div>
        </div>

        <div className="tsi-2">
          <img src={food} className="tex2-image" />
          <div className="text1">Grocery</div>
        </div>

        <div className="tsi-3">
          <img src={mobile} className="tex3-image" />
          <div className="text3">Mobiles</div>
        </div>

        <div className="tsi-4">
          <img src={home} className="tex4-image" />
          <div className="text4">Home</div>
        </div>

        <div className="tsi-5">
          <img src={elct} className="tex4-image" />
          <div className="text4">Fashion</div>
        </div>
      </div>
      <div className="thirdContainer">
        <div className="inner1-container"></div>
        <div className="InnerLarge-container"></div>
        <div className="inner2-container"></div>
      </div>
      <div className="FourthContainer">
        <p className="Fourthcontainer-Heading">Featured Prdouct</p>
      </div>
      <div className="FifthContainer">
        <p className="Fifthcontainer-Heading">View Past Product</p>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="SixContainer">
        <p className="Sixcontainer-Heading">Shop By catergories</p>
      </div>
      <div className="LastContainer">
        <div className="Las">
          <ul>ABOUT</ul>
          <Link to="/path" className="bo">Click me</Link>
          <Link to="/path" className="bo">Click me</Link>
          <Link to="/path" className="bo">Click me</Link>
          <Link to="/path" className="bo">Click me</Link>
        </div>
        <div className="Las">
          <ul>Help</ul>
          <Link to="/path" className="bo">Click me</Link>
          <Link to="/path" className="bo">Click me</Link>
          <Link to="/path" className="bo">Click me</Link>
          <Link to="/path" className="bo">Click me</Link>
        </div>
        <div className="Las">
          <ul>Social</ul>
          <Link to="/path" className="bo">Click me</Link>
          <Link to="/path" className="bo">Click me</Link>
          <Link to="/path" className="bo">Click me</Link>
          <Link to="/path" className="bo">Click me</Link>
        </div>
        <div className="Las">
          <ul>Policy</ul>
          <Link to="/path" className="bo">Click me</Link>
          <Link to="/path" className="bo">Click me</Link>
          <Link to="/path" className="bo">Click me</Link>
          <Link to="/path" className="bo">Click me</Link>
        </div>
      </div>
    </div>
  
  );
}

export default App;
