import React, { Component } from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import axios from "axios";

class Home extends Component {
  static async getInitialProps({ req }) {
    return {
      test: "drew"
    };
  }

  async componentDidMount() {
    const res = await axios.get("/a");
    console.log("did mount", res.data);
  }
  handleClick = async () => {
    const res = await axios.get("/b");

    console.log("click", res.data);
  };

  render() {
    console.log("res", this.props);
    return (
      <div>
        <h2>Hello drew</h2>
        <CommentBox />
        <CommentList />
        <button onClick={this.handleClick}>test</button>
      </div>
    );
  }
}

export default Home;
