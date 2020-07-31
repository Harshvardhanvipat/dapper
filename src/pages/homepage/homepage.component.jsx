import React from "react";

import "./homepage.styles.scss";

// this is a functional component as we don't need any lifecycle  methods as of now and also we donot need any states we want to store or change
const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">CAPS</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS </h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMEN </h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">MEN </h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
