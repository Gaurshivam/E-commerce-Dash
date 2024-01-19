import React from "react";
import "./Profile.css";
import ProComp from "./ProComp";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
    <div className="card text-bg-dark">
      <img className="HomeImg card-img" src="https://plus.unsplash.com/premium_photo-1661774910035-05257f7d73a6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="E-commerce" />
      <div className="card-img-overlay">
        <h5 className="card-title">E-commerce website</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <button className="btn btn-danger p-2"><Link className="Explore" to='/product'>Explore More</Link></button>
      </div>
    </div>
    <ProComp />
    <Footer />
    </>
  );
};

export default Profile;
