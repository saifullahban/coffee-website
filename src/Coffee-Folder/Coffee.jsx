import React from "react";
import "./Coffee.css";


function Coffee() {
  return (
    <div>
      <div className="container mt-5">
        <h2 className="  underline">
          Best Coffee that make you <br />
          happy and cheer you up!
        </h2>

        <div className="row justify-content-center mt-5">
          <div className="col-md-4">
            <div className="card coffee">
              <img src="coffee-pic/coffee-beans.png" alt="not found" />
            </div>
            <div className="card-body">
              <div className="card-title">
                <h4>Original Coffee</h4>
              </div>
              <div className="card-text">
                <p>we select the best beans coffee for a true teste.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card coffee">
              <img src="coffee-pic/hot-drink.png" alt="not found" />
            </div>
            <div className="card-body">
              <div className="card-title">
                <h4>Hot Coffee</h4>
              </div>
              <div className="card-text">
                <p>Enjoy your coffee with some hot with true teste.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card coffee">
              <img src="coffee-pic/coffee-cup.png" alt="not found" />
            </div>
            <div className="card-body">
              <div className="card-title">
                <h4>Ice Coffee</h4>
              </div>
              <div className="card-text">
                <p>Enjoy your coffee with some ice with true teste.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coffee;
