import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import StandardLayout from '../components/layout/StandardLayout';
import Input from '../components/forms/Input';
import PasswordInput from '../components/forms/PasswordInput';
import '../pages/member.css';

const Member = () => {
    // 假设的用户数据
    const userInfo = {
        name: 'Shao Bear',
        email: 'shaobear666@gmail.com',
        password: '', // 密码通常不预填
        tickets: ['Ticket 1', 'Ticket 2'], // 用户的票券信息
    };

    // Yup 验证架构
    const memberValidation = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    // 处理表单提交
    const handleMemberSubmit = (values) => {
        console.log('Updated values:', values);
        // 这里添加更新用户资料的逻辑
    };
    const [showPasswordUpdate, setShowPasswordUpdate] = useState(false);

    const handlePasswordUpdateClick = () => {
        setShowPasswordUpdate(true);
    };
    const handleUpdateProfile = (values) => {
        console.log('Updating profile with:', values);
        // 这里添加更新名字和邮箱的逻辑
    };

    return (
        <StandardLayout>
            <div className="h-screen px-[200px]">
                {/* 用户资料和密码更新表单 */}
                <div className="flex items-center justify-center pt-3">
                    <div className="w-[400px]">
                        <h2>Member Page</h2>
                        <p className="flex items-center justify-center">
                            YOUR METAMASK ADDRESS
                        </p>
                        <p>0xa00CA243a66E8b12e49223e39A1603fDF1F97dD3</p>
                        <Formik
                            initialValues={userInfo}
                            validationSchema={memberValidation}
                            onSubmit={handleMemberSubmit}
                        >
                            {(formik) => (
                                <Form className="flex flex-col gap-2">
                                    <Input name="name" placeholder="Enter your name" />
                                    <Input name="email" placeholder="Enter your email" />
                                    {/* 单独的更新名字和邮箱按钮 */}
                                    <button
                                        type="button"
                                        onClick={() => handleUpdateProfile(formik.values)}
                                        className="bg-gray-800 text-gray-200 p-3 rounded-lg hover:bg-gray-700 transition-all ease-in-out"
                                    >
                                        Update Profile
                                    </button>
                                    {!showPasswordUpdate && (
                                        <button
                                            type="button"
                                            onClick={handlePasswordUpdateClick}
                                            className="bg-gray-800 text-gray-200 p-3 rounded-lg hover:bg-gray-700 transition-all ease-in-out"
                                        >
                                            Update Password
                                        </button>
                                    )}

                                    {showPasswordUpdate && (
                                        <>
                                            <PasswordInput
                                                name="oldPassword"
                                                placeholder="Enter your old password"
                                            />
                                            <PasswordInput
                                                name="newPassword"
                                                placeholder="Enter your new password"
                                            />
                                            <PasswordInput
                                                name="confirmNewPassword"
                                                placeholder="Confirm your new password"
                                            />
                                            <button
                                                type="submit"
                                                className="bg-gray-800 text-gray-200 p-3 rounded-lg hover:bg-gray-700 transition-all ease-in-out"
                                            >
                                                Update
                                            </button>
                                        </>
                                    )}
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </StandardLayout>
    );
};

export default Member;
