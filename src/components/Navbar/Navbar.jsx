import React from 'react';
import s from '../Navbar.module.css';
console.log(s);
/*let s = {
    'nav' : 'Navbar_nav__28sGl',
    'item': 'Navbar_item__11e9e'

}*/

let c1="item";
let c2="active";

let classes = c1 + " " + c2;
let classesNew=`${s.item} ${s.active}`;

const Navbar = () => {
    return  <nav className={s.nav}>
        <div><a href='' className={`${s.item} ${s.active}`}>Profile</a></div>
        <div><a href='' className={s.item}>Messages</a></div>
        <div><a href='' className={s.item}>News</a></div>
        <div><a href='' className={s.item}>Music</a></div>
        <div><a href='' className={s.item}>Settings</a></div>
    </nav>
}
export default Navbar;