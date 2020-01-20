import React, { Component } from "react";
import CardComment from './CardComment';
import axios from 'axios'

export default class Comments extends Component {
  state = {
    comments: [],
    data:{}
  };

  getComments = () => {
    axios
    .get(
      `https://jsonplaceholder.typicode.com/posts/${this.props.id}`
    )
    .then(res => this.setState({ data: res.data }));

    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`
      )
      .then(res => this.setState({ comments: res.data }));
  };
  componentDidMount = () => {
    this.getComments();
  };

  render() {
    return (
      <div>
          {this.state.data.title}
        {this.state.comments.map(el => (
          <CardComment comment={el} />
        ))}
      </div>
    );
  }
}
