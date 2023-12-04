import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // 导入你的CSS文件
import userAvatar from '/Users/user/Downloads/misg9/mis9/src/images/user-avatar.jpg'; // 导入用户头像图片
import logo from '../header/2.png';

const NavbarItem = ({ path, name, className }) => {
    return (
        <p
            className={`px-5 cursor-pointer hover:text-gray-500 transition-all ease-in-out ${
                name === 'Secondhand' ? 'yellow-bg' : ''
            } ${className}`}
        >
            <NavLink to={path}>
                {name === 'ShoppingCart' ? <FaShoppingCart /> : name}
            </NavLink>
        </p>
    );
};

function Navbar() {
    return (
        <div className={`topbar`}>
            <div className="topbar flex  fixed w-full text-gray-100">
                <NavLink to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </NavLink>

                <NavbarItem path="/secondhandbuy" name="Secondhand" className="mr-auto" />

                <NavbarItem path="/contact" name="Contact" />
                <NavbarItem path="/help" name="Help" />
            </div>
        </div>
    );
}

export default Navbar;
