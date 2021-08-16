import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-center display-4">Universal Trips</h1>
      <div className="p-3">
        <p>
          We were Founded in 2019 with a mission to make travelling hassele-free
          and at same time affordable.
        </p>
        <p>
          We believe in fare deals both to service provider and also the
          customer. We treat Customer as a King{" "}
          <i className="fas fa-crown text-warning"></i>
        </p>
        <p>
          Currently We Provide Hospatility Services at Delhi, Pune, Goa, Mumbai,
          Chandigarh, Manali more Locations will be added soon..
        </p>
        <p className="primary">
          Soon We will Provide Heavy Discounts on Air Fares as we are partnering
          with some of India's best Airlines, Everything will be Included in as
          a package for Customer.
        </p>
        <p>
          Contact Us at{" "}
          <span className="badge badge-primary">
            <i className="fas fa-headset"></i> +91 8554089906
          </span>
        </p>
        <p>
          Mail Id{" "}
          <span className="badge badge-success">
            <i className="fas fa-envelope-square"></i>{" "}
            sarveshsamant1140@gmail.com
          </span>
        </p>
      </div>
      <small className="text-muted">
        * Due to Covid-19 and restrictions imposed we are currently working with
        half team Only.
      </small>
    </div>
  );
};

export default About;
