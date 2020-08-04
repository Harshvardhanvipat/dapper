import React from "react";

import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

// this is a functional component as we don't need any lifecycle  methods as of now and also we donot need any states we want to store or change
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
