import React, { useState } from 'react';
import StandardLayout from '../components/layout/StandardLayout';
import SecondBanner from '../components/banners/SecondBanner';
import img1 from '../images/concert/nft1.jpg';
import img2 from '../images/concert/nft2.jpg';
import img3 from '../images/concert/nft3.jpg';
import img4 from '../images/concert/concert4.png';
import './secondhandbuy.css';

const productsData = [
    {
        id: 1,
        name: 'BLACKPINK高雄站演唱會 2023｜BORN PINK',
        date: '2023年3月18日 18:30',
        category: 'concert1',
        seat: '特A區',
        price: '2500',
        image: img1,
    },
    {
        id: 2,
        name: 'Westlife The Wild Dreams Tour Taipei西城男孩2023台北演唱會',
        date: '2023年12月10日',
        category: 'concert2',
        seat: '特A區',
        price: '2500',
        image: img2,
    },
    {
        id: 3,
        name: 'OneRepublic The Artificial Paradise Tour in Kaohsiung共和世代2024高雄演唱會',
        date: '2023年12月10日',
        category: 'concert3',
        seat: '特A區',
        price: '2500',
        image: img3,
    },
    {
        id: 4,
        name: 'JOJI-Pandemonium-Asia Tour in Taipei',
        date: '2023年12月10日',
        category: 'concert4',
        seat: '特A區',
        price: '2500',
        image: img4,
    },
    {
        id: 5,
        name: 'BLACKPINK高雄站演唱會 2023｜BORN PINK',
        date: '2023年3月18日 18:30',
        category: 'concert1',
        seat: '特A區',
        price: '2500',
        image: img1,
    },
    {
        id: 6,
        name: 'Westlife The Wild Dreams Tour Taipei西城男孩2023台北演唱會',
        date: '2023年12月10日',
        category: 'concert2',
        seat: '特B區',
        price: '1500',
        image: img2,
    },
    {
        id: 7,
        name: 'BLACKPINK高雄站演唱會 2023｜BORN PINK',
        date: '2023年3月18日 18:30',
        category: 'concert1',
        seat: '特A區',
        price: '2500',
        image: img1,
    },
    {
        id: 8,
        name: 'JOJI-Pandemonium-Asia Tour in Taipei',
        date: '2023年12月10日',
        category: 'concert4',
        seat: '特C區',
        price: '800',
        image: img4,
    },
    // Add more product data as needed
];

const SecondHandBuy = () => {
    const [categoryFilter, setCategoryFilter] = useState('All');

    const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
    };
    const Popup = ({ onClose }) => {
        const handleCaptchaVerification = async () => {
            if (window.ethereum) {
                try {
                    if (!window.ethereum.selectedAddress) {
                        await window.ethereum.request({ method: 'eth_requestAccounts' });
                    }

                    // 准备交易参数
                    const transactionParameters = {
                        to: '0xA8Cb6545ED303def200C5114b29E8ed7cD121D84', // 替换为合约地址或接收方地址
                        from: window.ethereum.selectedAddress,
                        value: '800', // 以 wei 为单位的字符串，例如 '10000000000000000' （0.01 ETH）
                        // 如果交易涉及智能合约，可能需要 'data' 字段
                    };

                    // 发送交易
                    const txHash = await window.ethereum.request({
                        method: 'eth_sendTransaction',
                        params: [transactionParameters],
                    });

                    console.log('交易发送成功，交易哈希:', txHash);
                    // 这里可以根据需求添加后续逻辑，比如更新 UI 显示交易发送成功
                } catch (error) {
                    console.error('交易发送出错:', error);
                    alert('交易发送失败');
                }
            } else {
                alert('未检测到 MetaMask。');
            }
        };
        return (
            <div className="popup-container">
                <div className="popup-content">
                    <h3>Select number of tickets</h3>
                    <select>
                        {[1, 2, 3, 4, 5].map((number) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleCaptchaVerification}>Confirm</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        );
    };
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleBuyButtonClick = (product) => {
        // 设置当前选中的产品
        setSelectedProduct(product);
        // 显示弹出窗口
        setShowPopup(true);
    };

    const [showPopup, setShowPopup] = useState(false);

    const filteredProducts =
        categoryFilter === 'All'
            ? productsData
            : productsData.filter((product) => product.category === categoryFilter);

    return (
        <div>
            <StandardLayout>
                <SecondBanner />

                <div className="buy-page-container">
                    {/* Filter by category */}
                    <label
                        style={{ width: '400px', display: 'block', textAlign: 'center' }}
                    >
                        請選擇場次:
                        <select value={categoryFilter} onChange={handleCategoryChange}>
                            <option value="All">所有场次</option>

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
                <div className="products-buy-container">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-item">
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '300px', height: '400px' }} // 更新尺寸
                            />
                            <h2>{product.name}</h2>
                            <h3>{product.date}</h3>
                            <h4>
                                {product.seat} NT${product.price}
                            </h4>
                            <button
                                onClick={() => handleBuyButtonClick(product)}
                                className="buy-button"
                            >
                                Buy
                            </button>
                        </div>
                    ))}
                </div>
                {showPopup && (
                    <Popup
                        product={selectedProduct}
                        onClose={() => setShowPopup(false)}
                    />
                )}
            </StandardLayout>
        </div>
    );
};

export default SecondHandBuy;
