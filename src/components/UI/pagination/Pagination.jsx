import React from 'react';
import MyButton from "../button/MyButton";
import {getPagesArray} from "../../utils/pages";
import "./Pagination.css"
const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div style={{width: "100%"}}>
            <div className="page__wrapper">
                {pagesArray.map(p =>
                    <MyButton key={p} onClick={()=>changePage(p)} className={page === p ? 'page page__current' : 'page'}>{p}</MyButton>
                )}
            </div>
            <h3 style={{ display: "flex", justifyContent: "center"}}>Страница:{page}</h3>
        </div>
    );
};

export default Pagination;