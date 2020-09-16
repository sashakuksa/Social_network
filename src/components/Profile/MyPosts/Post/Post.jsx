import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNplTWk2suGea3AcNZ-nzKJVrLX9mL0SGOmA&usqp=CAU" alt=""/>
            {props.message}
            <div>
            <span>Like</span>
            </div>
        </div>
    )
}
export default Post;

