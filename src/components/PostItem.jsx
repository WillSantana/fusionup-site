import React from 'react';

const PostItem = ({ post, onClick }) => {
    if (!post) return null;

    return (
        <div className="post-item" onClick={() => onClick && onClick(post)}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-meta">
                {post.author} &middot; {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="post-excerpt">{post.excerpt}</p>
        </div>
    );
};

export default PostItem;