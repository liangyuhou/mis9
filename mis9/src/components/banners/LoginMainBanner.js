import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './mainBanner.css'; // 导入你的CSS文件
import { NavLink } from 'react-router-dom';
import userAvatar from '../banners/shaobear.jpg'; // 导入用户头像图片

const MainBannerItem = ({ path, name }) => {
    return (
        <p
            className={`px-5 cursor-pointer hover:text-gray-500 transition-all ease-in-out ${
                name === 'Secondhand' ? 'yellow-bg' : ''
            }`}
        >
            <NavLink to={path}>{name}</NavLink>
        </p>
    );
};

function LoginMainBanner() {
    return (
        <div className={`navbarw`}>
            <div className="login_icon">
                <div className="user-avatar-container ">
                    <img src={userAvatar} alt="User Avatar" className="user-avatar" />
                </div>
            </div>

            <div className="login_item">
                <MainBannerItem path="/member" name="shaobear" />
            </div>

            {/* 添加搜索栏 */}

            <div className="search-bar">
                <form>
                    <div className="searchf">
                        <input type="text" placeholder="Search" />
                        <button type="submit">
                            <FaSearch />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginMainBanner;
