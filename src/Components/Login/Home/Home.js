import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';
import flipkart from "./Assets/Images/Flipkart-logo 1.png";
import star from "./Assets/Images/ei_star.png";
import food from "./Assets/Images/food.png";
import mobile from "./Assets/Images/mobile-phone.png";
import home from "./Assets/Images/responsive.png";
import elct from "./Assets/Images/shoe.png";
import boy from "./Assets/Images/image 24.png";
import cap from "./Assets/Images/image 25.png";
import shoes from "./Assets/Images/image 26.png";
import heater from "./Assets/Images/image 27.png";
import bla from "./Assets/Images/Aarav Enterprises GUITAR EXCELLENT.png";
import girl from "./Assets/Images/image 15.png";
import leaf from "./Assets/Images/image 16.png";
import aa from "./Assets/Images/image 17.png";
import sugar from "./Assets/Images/image 18.png";


function Home () {
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
        <Link to="/login">here</Link>
          
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
       {/* <p className="Fourthcontainer-Heading">Featured Prdouct</p>*/}
        <div className="b1"></div>
        <div className="b22"></div>
        <div className="b3"></div>
        <div className="b4"></div>
        <div className="b2"></div>
        
      </div>
      <div className="FifthContainer">
        <p className="Fifthcontainer-Heading">View Past Product</p>
        <div className="boxx">
        <img src={cap} className="box-Image1"></img>
        </div>
        <div className="boxx">
        <img src={boy} className="box-Image1"></img>
      
          <p className="box-Text1">Men Striped Padded Jacket</p>
          <p>$29</p>
        </div>
        <div className="boxx">
        <img src={shoes} className="box-Image1"></img>
        <p className="box-Text1">Men Striped Padded Jacket</p>
          <p>$90</p>
        </div>
        <div className="boxx">
        <img src={heater} className="box-Image1"></img>
        <p className="box-Text1">Men Striped Padded Jacket</p>
          <p>$200</p>
        </div>
        <div className="boxx">
        <img src={bla} className="box-Image1"></img>
        <p className="box-Text1">Men Striped Padded Jacket</p>
          <p>$210</p>
        </div>
      </div>
      <div className="SixContainer">
        <p className="SixContainer-Heading">Featured Product</p>
        <div className="Six-boxx">
        <img src={girl} className="box-Image15"></img>
        </div>
        <div className="Six-boxx">
        <img src={leaf} className="box-Image15"></img>
        </div>
        <div className="Six-boxx">
        <img src={sugar} className="box-Image15"></img>
        </div>
        <div className="Six-boxx">
        <img src={aa} className="box-Image15"></img>
        </div>
      </div>
    
      <div className="LastContainer">
        <div className="Las">
          <ul>ABOUT</ul>
          <Link to="/path" className="bo">Contact us</Link>
          <Link to="/path" className="bo">About Us</Link>
          <Link to="/path" className="bo">Carrer</Link>
          <Link to="/path" className="bo">Flipkart</Link>
        </div>
        <div className="Las">
          <ul>Help</ul>
          <Link to="/path" className="bo">Payment</Link>
          <Link to="/path" className="bo">FAO</Link>
          <Link to="/path" className="bo">Shipping</Link>
          <Link to="/path" className="bo">Return</Link>
        </div>
        <div className="Las">
          <ul>Social</ul>
          <Link to="/path" className="bo">FaceBook</Link>
          <Link to="/path" className="bo">Youtube</Link>
          <Link to="/path" className="bo">Twitter</Link>
          <Link to="/path" className="bo">Click me</Link>
        </div>
        <div className="Las">
          <ul>Policy</ul>
          <Link to="/path" className="bo">Return Ploicy</Link>
          <Link to="/path" className="bo">Terms of Use</Link>
          <Link to="/path" className="bo">Security</Link>
          <Link to="/path" className="bo">Click me</Link>
        </div>
      </div>
    </div>
  
  );
}

export default Home;
