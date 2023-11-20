import React, { useState } from 'react';
import StandardLayout from '../components/layout/StandardLayout';
import SecondBanner from '../components/banners/SecondBanner';
import img1 from '../images/concert/concert1.png';
import img2 from '../images/concert/concert2.png';
import img3 from '../images/concert/concert3.png';
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
    const Popup = ({ onClose }) => (
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
                <button onClick={onClose}>Confirm</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
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
