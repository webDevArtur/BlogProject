import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
    if(!posts.length) {
        return <h1 style={{textAlign: "center"}}>Посты отсутствуют</h1>
    }
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map( (post, index) => <PostItem number={index + 1} post={post} key={post.id} remove={remove}/>) }
        </div>
    );
};

export default PostList;