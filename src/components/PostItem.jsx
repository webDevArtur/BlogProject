import React from 'react';
import './PostItem.css';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const router = useNavigate()
    return (
            <div className="post" >
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => router(`/posts/${props.post.id}`)} style={{width: "45%", backgroundColor: "lightseagreen"}}>Открыть</MyButton>
                    <MyButton onClick = {() => props.remove(props.post)} style={{width: "45%", backgroundColor: "lightcoral"}}>Удалить</MyButton>
                </div>
            </div>
    );
};

export default PostItem;