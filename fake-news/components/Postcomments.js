import React, { Component } from "react";
import funPost from "../components/fucPost";
const filejson = funPost();

class PostComments extends Component {
  render() {
    return <h1>{filejson}</h1>;
  }
}

export { PostComments };
