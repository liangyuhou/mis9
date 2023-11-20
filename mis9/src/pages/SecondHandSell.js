import React, { useState } from 'react';
import StandardLayout from '../components/layout/StandardLayout';
import SecondBanner from '../components/banners/SecondBanner';
import img1 from '../images/concert/concert1.png';
import img2 from '../images/concert/concert2.png';
import img3 from '../images/concert/concert3.png';
import img4 from '../images/concert/concert4.png';
import './secondhandsell.css';
import { Link } from 'react-router-dom';

const SetPriceModal = ({ product, onClose, onSubmit }) => {
    const [price, setPrice] = useState('');
    const [confirmationStep, setConfirmationStep] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const handleSubmit = () => {
        if (Number(price) <= product.price * 1.1) {
            setConfirmationStep(true);
        } else {
            alert("Price cannot be more than 110% of the product's price.");
        }
    };

    const handleFinalSubmit = () => {
        onSubmit(price); // 这里可以是更新产品价格或通知服务器的逻辑
        setSubmissionSuccess(true);
        setTimeout(() => {
            onClose(); // 可以设置延迟关闭模态框
        }, 2000); // 2秒后关闭模态框
    };

    return (
        <div className="modal">
            {!submissionSuccess ? (
                <>
                    {confirmationStep ? (
                        <>
                            <p>
                                Confirm to set the price at NT${price} for {product.name}?
                            </p>
                            <button onClick={handleFinalSubmit}>
                                Confirm Submission
                            </button>
                            <button onClick={() => setConfirmationStep(false)}>
                                Go Back
                            </button>
                        </>
                    ) : (
                        <>
                            <p>Set your selling price for {product.name}:</p>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter price"
                            />
                            <button onClick={handleSubmit}>Submit</button>
                        </>
                    )}
                </>
            ) : (
                <p>Price successfully submitted to the second-hand market!</p>
            )}
            {!confirmationStep && !submissionSuccess && (
                <button onClick={onClose}>Close</button>
            )}
        </div>
    );
};

const productsData = [
    {
        id: 1,
        name: 'BLACKPINK高雄站演唱會 2023｜BORN PINK',
        date: '2023年3月18日 18:30',
        category: 'concert1',
        price: '2500',
        image: img1,
    },
    {
        id: 2,
        name: 'Westlife The Wild Dreams Tour Taipei西城男孩2023台北演唱會',
        date: '2023年12月10日',
        category: 'concert2',
        price: '2500',
        image: img2,
    },
    {
        id: 3,
        name: 'OneRepublic The Artificial Paradise Tour in Kaohsiung共和世代2024高雄演唱會',
        date: '2023年12月10日',
        category: 'concert3',
        price: '2500',
        image: img3,
    },
    {
        id: 3,
        name: 'JOJI-Pandemonium-Asia Tour in Taipei',
        date: '2023年12月10日',
        category: 'concert4',
        price: '2500',
        image: img4,
    },
    // Add more product data as needed
];

const SecondHandSell = () => {
    const [categoryFilter, setCategoryFilter] = useState('');

    const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
    };

    const filteredProducts =
        categoryFilter === ''
            ? []
            : categoryFilter === 'All'
            ? productsData
            : productsData.filter((product) => product.category === categoryFilter);

    // 状态用于控制模态框的显示和选中的产品
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // 处理价格设置按钮的点击
    const handleSetPriceClick = (product) => {
        setShowModal(true);
        setSelectedProduct(product);
    };

    // 处理模态框的提交
    const handleModalSubmit = (price) => {
        console.log(`Price set for ${selectedProduct.name}: ${price}`);
        // 这里可以添加进一步的逻辑，比如更新产品价格或通知服务器
    };

    return (
        <div>
            <StandardLayout>
                <SecondBanner />
                <div className="sell-page-container">
                    {/* Filter by category */}
                    <label
                        style={{ width: '400px', display: 'block', textAlign: 'center' }}
                    >
                        請選擇要賣出的票:
                        <select value={categoryFilter} onChange={handleCategoryChange}>
                            <option value="">Please Select Your Tickets</option>

                            <option value="concert1">
                                BLACKPINK高雄站演唱會 2023｜BORN PINK
                            </option>
                            <option value="concert2">
                                Westlife The Wild Dreams Tour Taipei西城男孩2023台北演唱會
                            </option>
                            <option value="concert3">
                                OneRepublic The Artificial Paradise Tour in
                                Kaohsiung共和世代2024高雄演唱會
                            </option>
                            <option value="concert4">
                                JOJI-Pandemonium-Asia Tour in Taipei
                            </option>
                            {/* Add more categories as needed */}
                        </select>
                    </label>
                </div>

                {/* Display filtered products */}
                <div className="products-sell-container">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-sell-item">
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '300px', height: '400px' }} // 更新尺寸
                            />
                            <h2>{product.name}</h2>
                            <h3>{product.date}</h3>
                            <h4>NT${product.price}</h4>
                            <button
                                onClick={() => handleSetPriceClick(product)}
                                className="set-price-btn"
                            >
                                Set Price
                            </button>
                        </div>
                    ))}
                </div>
                {showModal && selectedProduct && (
                    <SetPriceModal
                        product={selectedProduct}
                        onClose={() => setShowModal(false)}
                        onSubmit={handleModalSubmit}
                    />
                )}
            </StandardLayout>
        </div>
    );
};

export default SecondHandSell;
