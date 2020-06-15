import React from 'react';
import s from './Navbar.module.css';
console.log(s);
/*let s = {
    'nav' : 'Navbar_nav__28sGl',
    'item': 'Navbar_item__11e9e'

}*/

let c1="item";
let c2="active";

let classes = c1+" "+c2;
let classesNew=`${s.item} ${s.active}`;

const Navbar = () => {
    return  <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}><a href=''>Profile</a></div>
        <div className={s.item}><a href=''>Messages</a></div>
        <div className={s.item}><a href=''>News</a></div>
        <div className={s.item}><a href=''>Music</a></div>
        <div className={s.item}><a href=''>Settings</a></div>
    </nav>
}
export default Navbar;