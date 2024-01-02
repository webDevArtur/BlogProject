import React, {useState, useEffect} from 'react';
import PostList from "../PostList";
import PostForm from "../PostForm";
import PostFilter from "../PostFilter";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/button/MyButton";
import {usePosts} from "../../hooks/usePost";
import PostService from "../../API/PostService";
import {getPageCount, getPagesArray} from "../utils/pages";
import Pagination from "../UI/pagination/Pagination";
import {useFetching} from "../../hooks/useFetching";
const Post = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const SortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [fetchPosts, isPostsLoading, error]=useFetching(async () => {
            const response = await PostService.getAll(limit, page)
            setPosts(response.data)
            const totalCount = response.headers['x-total-count']
            setTotalPages(getPageCount(totalCount, limit))
        }
    )


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [page]);


    const removePost = (post) => {
        setPosts(posts.filter(p=>p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{display: "flex", width: "100%", backgroundColor: "teal"}}>
            <MyButton
                style={{marginTop: "30px", marginBottom: "10px", marginRight: "2%", marginLeft: "2%", color: "black", backgroundColor: "white"}}
                onClick={() => setModal(true)}>
                Создание поста
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            </div>
            {isPostsLoading ? <h1 style={{textAlign: "center"}}>Идет загрузка...</h1> : <PostList posts={SortedAndSearchedPosts} title="Список постов" remove={removePost}/>}
            <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
        </div>
    );
};

export default Post;
