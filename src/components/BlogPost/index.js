import React from 'react';


export default ({ loading, posts }) => {
    if (loading) return <h1> Loading </h1>;

    return (
        posts.map((post, i) => {
        return <h1 key={i}> {post.title} </h1>
        })
    )
};