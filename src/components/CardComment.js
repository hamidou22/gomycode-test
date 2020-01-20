import React from 'react'

export default function CardComment({comment}) {
    return (
        <div>
            <h1>Name:</h1>
    <p>{comment.name}</p>
    <h1>Email:</h1>
<p>{comment.email}</p>
<h1>Body:</h1>
    <p>{comment.body}</p>
        </div>
    )
}
