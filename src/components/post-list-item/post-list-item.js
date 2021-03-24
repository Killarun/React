import React from 'react';

const PostListItem = () => {
    return(
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello World
            </span>
            <div className="d-flex justify-content-center align-item-center">
                <button type="button" className="btn-sm btn-star">
                    <i className="fa fa-star"></i>
                </button>
                <button type="button" className="btn-sm btn-trash">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
)

}

export default PostListItem;