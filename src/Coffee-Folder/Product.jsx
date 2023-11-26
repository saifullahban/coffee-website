import React from "react";
import Card from "./Card";
import "../App.css";
import {  BsBag} from "react-icons/bs";

function Product() {
  return (
    <div>
      <div className="container py-5 bg-light">
        <h2 className="mt-5 underline">
          Find delicious food and <br />
          Choose what you love
        </h2>
        <div className="row">
          <ul className="nav gap-5 mt-5 mb-5 px-5">
            <li>
              <h4>Main Menu</h4>
              <p>4 product</p>
            </li>
            <li>
              <h4>Coffee</h4>
              <p>3 product</p>
            </li>
            <li>
              <h4>Desserts</h4>
              <p>4 product</p>
            </li>
          </ul>

          <div className="col-md-4 card2">
            <Card
              card={"card border-0"}
              img={"coffee-pic/main-menu1.jpg"}
              title={"$8"}
              text={"Pizza Macaroni"}
              btn={<BsBag className="text-white" />}
            />
          </div>
          <div className="col-md-4 card2">
            <Card
              card={"card border-0"}
              img={"coffee-pic/main-menu2.jpg"}
              title={"$9"}
              text={"Burger beef special"}
              btn={<BsBag  className="text-white"/>}
            />
          </div>
          <div className="col-md-4 card2">
            <Card
              card={"card border-0"}
              img={"coffee-pic/main-menu3.jpg"}
              title={"$10"}
              text={"Burger vegetarian"}
              btn={<BsBag className="text-white"/>}
            />
          </div>
          <div className="col-md-4 mt-5 card2">
            <Card
              card={"card border-0"}
              img={"coffee-pic/main-menu4.jpg"}
              title={"$10"}
              text={"Burger"}
              btn={<BsBag className="text-white"/>}
            />
          </div>
          <div className="col-md-4 mt-5 card2">
            <Card
              card={"card border-0"}
              img={"coffee-pic/coffee.jpg"}
              title={"$12"}
              text={"coffee "}
              btn={<BsBag className="text-white"/>}
            />
          </div>
          <div className="col-md-4 mt-5 card2">
            <Card
              card={"card border-0"}
              img={"coffee-pic/coffee2.jpg"}
              title={"$13"}
              text={"Black coffee "}
              btn={<BsBag className="text-white"/>}
            />
          </div>
          <div className="col-md-4 mt-5 card2">
            <Card
              card={"card border-0"}
              img={"coffee-pic/coffee3.jpg"}
              title={"$12"}
              text={"coffee "}
              btn={<BsBag className="text-white"/>}
            />
          </div>
          <div className="col-md-4 mt-5 card2">
            <Card
              card={"card border-0"}
              img={"coffee-pic/dessert1.jpg"}
              title={"$12"}
              text={"Dessert1"}
              btn={<BsBag className="text-white"/>}
            />
          </div>
          <div className="col-md-4 mt-5 card2">
            <Card
              card={"card border-0"}
              img={"coffee-pic/dessert2.jpg"}
              title={"$15"}
              text={"Dessert2"}
              btn={<BsBag className="text-white"/>}
            />
          </div>
          <div className="col-md-4 mt-5 card2">
            <Card
              card={"card border-0"}
              img={"coffee-pic/dessert3.jpg"}
              title={"$15"}
              text={"Dessert3"}
              btn={<BsBag className="text-white"/>}
            />
          </div>
          <div className="col-md-4 mt-5 card2">
            <Card
              card={"card border-0"}
              img={"coffee-pic/dessert4.jpg"}
              title={"$20"}
              text={"Dessert4"}
              btn={<BsBag className="text-white"/>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
