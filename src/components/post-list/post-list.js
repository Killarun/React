import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete}) => {

const elements = posts.map((item) => {
    const {id, ...itemProps} = item; {/* Es8 standart, деструктуризация */}
    return (
        <li key={id} className='list-group-item'>
            {/* <PostListItem 
            label={item.label} 
            important={item.important}
            /> */}
           <PostListItem {...itemProps}
           onDelete={() => onDelete(id)}/>  {/* Es8 standart */}
        </li>
    )
})
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;