import React, { Component } from "react";
import { gotoShop } from "navigation/Routing";
import { Box } from "components";

class About extends Component {
  render() {
    const history = this.props.history;
    return (
      <div>
        <h1
          onClick={() => {
            gotoShop(history);
          }}
        >
          About page
        </h1>
        <Box width={50} height={50} bg="lightgray" />
      </div>
    );
  }
}

export default About;
