import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://image.shutterstock.com/image-vector/vector-abstract-background-texture-design-260nw-646522975.jpg"
                    alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>

        </div>)
}
export default Profile;

