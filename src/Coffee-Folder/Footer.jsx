import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaFacebook, FaTiktok } from "react-icons/fa6";
import { VscDeviceCamera } from "react-icons/vsc";

function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark py-5 mt-5">
        <div className="text-center mt-5 text-secondary">
          <h3 className="text-white">Coffee</h3>
          <p>
            Lorem ipsum dolor sit amet sit sit amet
            <br />
            consectetur adipisicing elit. Amet, porro.
          </p>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-2">
            <h3 className="text-white">Address</h3>
            <p className="text-secondary">
              street no 19 lombok <br />
              Peshawar 003
            </p>
          </div>
          <div className="col-md-2">
            <h3 className="text-white">Contact No:</h3>
            <p className="text-secondary">
              +92 3326767615 <br />
              saifbangash480@gmail.com
            </p>
          </div>
          <div className="col-md-2">
            <h3 className="text-white">Office</h3>
            <p className="text-secondary">
              Monday , Saturday <br />
              9AM - 10PM
            </p>
          </div>

          <div className="col-md-3">
            <p className="text-secondary">subscribe to our newsletter</p>
            <div className="d-flex flex-row gap-1">
              <input
                type="text"
                className="form-control"
                placeholder="your email address"
              />
              <span>
                <MdArrowOutward className="fs-1 bg-danger text-white" />
              </span>
            </div>
          </div>
          <hr className="text-white mt-5 w-75" />
          <div className="row justify-content-around mt-3">
            <div className="col-md-2">
              <div className="column-gap-4 d-flex ">
                <FaFacebook className="fs-4 text-white" />
                <VscDeviceCamera className="fs-4 text-white" />
                <FaTiktok className="fs-4 text-white" />
              </div>
            </div>

             <div className="col-md-3">
                <p className="text-white">Copyright@Designed by saifbangash1122</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
