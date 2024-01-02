import React from 'react';
import MyInput from "./UI/input/MyInput";
import Select from "./UI/select/Select";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "20px", width: "100%"}}>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск"
                style={{width: "15%", marginRight: "2%"}}
            />
            <Select
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: "title", name: "По названию"},
                    {value: "body", name: "По описанию"},
                ]}
                DefaultValue="Сортировка"
                style={{display: "flex", flexDirection: "row"}}
            />
        </div>
    );
};

export default PostFilter;