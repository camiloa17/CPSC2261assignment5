import React from 'react'

const Post = (props) => {
    const { post } = props;
    return (
            <div className="post card" key={post.id}>
              <div className="card-content">
                  <span className="card-title">{post.title}</span>
                  <p>{post.body}</p>
              </div>
            </div>
    )
}

export default Post
