import React from "react";
import "./Profile.css";

const Footer = () => {
  const handleform = (e) => {
    e.preventDefault();
  }

  return (
    <footer>
      <div className="row">
        <div className="col">
          <img
            className="FootLogo"
            src="https://th.bing.com/th/id/OIP.nWltZ2UgyhZU1s3k-Rx-GQHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.4&pid=1.7"
            alt="FooterImg"
            height={80}
            width={80}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            qui id vel laborum quia illo quas qlaudantium delectus excepturi,
            placeat ratione soluta.
          </p>
        </div>
        <div className="col">
          <h3>Office</h3>
          <p>Gali No.3</p>
          <p>Road sec-62</p>
          <p>Noida UP 201013</p>
          <p className="email">Shivamkumar0170951@gmail.com</p>
          <h4>9927681371</h4>
        </div>
        <div className="col">
          <h3>Link</h3>
          <ul>
            <li>
              <a href="/#">Profile</a>
            </li>
            <li>
              <a href="/#">Add product</a>
            </li>
            <li>
              <a href="/#">Service</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter</h3>
          <form onSubmit={handleform}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                comments
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
