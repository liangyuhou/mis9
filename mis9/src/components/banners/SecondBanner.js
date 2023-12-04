import React from 'react';
import './secondBanner.css'; // 确保你的CSS文件包含新样式
import { NavLink } from 'react-router-dom';
import userAvatar from '../banners/shaobear.jpg'; // 用户头像图片

const SecondBannerItem = ({ path, name }) => {
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
function SecondBanner() {
    return (
        <div className="barww">
            <div className="login_icon">
                <div className="user-avatar-container">
                    <img src={userAvatar} alt="User Avatar" className="user-avatar" />
                </div>
            </div>

            <div className="login_item">
                <SecondBannerItem path="/member" name="shaobear" />
            </div>
            {/* 新添加的父元素 */}
            <div className="switchbar-container">
                <div className="switchbar-oval">
                    <NavLink
                        to="/secondhandbuy"
                        activeClassName="active"
                        className="switchbar-btn"
                    >
                        Buy
                    </NavLink>
                    <NavLink
                        to="/secondhandsell"
                        activeClassName="active"
                        className="switchbar-btn"
                    >
                        Sell
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default SecondBanner;
