import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea className={s.input_area}></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>

            <div className={s.posts}>
            <Post message='Hi, how are you?' likesCount='0'/>
            <Post message='It is my first post' likesCount='23'/>
            <Post />
            <Post />
            <Post />
            <Post />

            </div>
            </div>
    )

}
export default MyPosts;