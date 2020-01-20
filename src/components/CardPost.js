import React from "react";
import { Link } from "react-router-dom";

export default function CardPost({ element }) {
  return (
    <div>
      <h1>title:</h1>
      <p>{element.title}</p>
      <h1>Body:</h1>
      <p>{element.body}</p>
      <Link to={`/comments/${element.id}`}>
        <button>Description</button>
      </Link>
    </div>
  );
}
