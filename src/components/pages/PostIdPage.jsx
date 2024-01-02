import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import PostService from "../../API/PostService";
import {useFetching} from "../../hooks/useFetching";

const PostIdPage = () => {
    const  params  = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    })

    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById();
        fetchComments();
    },[]);

    return (
        <div style={{margin: 30}}>
            <h2>Post ID: {params.id}</h2>
            <div>{post.id}. {post.title}</div>
            {comments.map(comm => <div key={comm.id} style={{marginTop: 30, border: "1px solid black", padding: 10}}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
            </div>)}
        </div>
    );
};

export default PostIdPage;