import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Blog() {
  return (
    <div>
      <div className="container">
        <h2 className="underline">
          Our blog coffee with <br />
          insightful topic
        </h2>
        <div className="row justify-content-center ">
          <div className="col-md-5 card3">
            <div className="card mt-5 border-0">
              <img src="coffee-pic/blog1.jpg" className="rounded" alt="" />
              <div className="card-body">
                <div className="card-title">
                  <h3> How to grow coffee beans</h3>
                </div>
                <div className="card-text">
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur dolor sit amet
                    consectetur adipisicing elit. Quos, animi!
                  </p>
                  <a href="" className="btn"><MdArrowOutward className="fs-1 text-white" /></a>

                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-5 card3">
            <div className="card mt-5 border-0">
              <img src="coffee-pic/blog2.jpg" className="rounded" alt="" />
              <div className="card-body">
                <div className="card-title">
                  <h3> How to make milk coffee </h3>
                </div>
                <div className="card-text">
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur dolor sit amet
                    consectetur adipisicing elit. Quos, animi!
                  </p>
                  <a href="" className="btn"><MdArrowOutward className="fs-1 text-white" /></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
