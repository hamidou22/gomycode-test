import React from "react";
import axios from "axios";
import CardPost from './CardPost'

export default class Posts extends React.Component {
  state = {
    posts: []
  };
  getPosts = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`
      )
      .then(res => this.setState({ posts: res.data }));
  };
  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div>
        {this.state.posts.map(el => (
          <CardPost element={el}/>
  
        
          
        ))}
      </div>
    );
  }
}
