import React, { Component } from "react";
import Welcome from "../../components/Welcome";
import Form from "../Form";

class Home extends Component {
  render() {
    // replace this with a new container to contain your form!
    return (
      <React.Fragment>
        <Welcome/>
        <Form/>
      </React.Fragment>
    );
  }
}

export default Home;
