import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StandardLayout from '../components/layout/StandardLayout';
import './ticketPage.css';
import seatpic from '../images/seat5.jpg';
import concertpic from '../images/concert/concert5.jpg';
//import TicketSystem from './contracts/TicketSystem.json';
//import Web3 from 'web3';

function TicketPage() {
    //const rpcURL = 'https://sepolia.infura.io/v3/2e648bb38f5647e5989031fc3ade76df';
    // const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));

    //const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // Sepolia 網絡上的合約地址
    // const contractABI = TicketSystem.abi;
    // const ticketContract = new web3.eth.Contract(contractABI, contractAddress);

    const eventInfo = {
        eventName: '2023 LE SSERAFIM TOUR FLAME RISES',
        eventSubtitle: '高雄國家體育場 (世運主場館:高雄市左營區世運大道100號)',
        dateTimeLocation: '高雄國家體育場 (世運主場館:高雄市左營區世運大道100號)',
        imageUrl: concertpic, // 請替換成實際的圖片路徑
    };

    const [selectedQuantity, setSelectedQuantity] = useState(0);

    const handleQuantityChange = (event) => {
        setSelectedQuantity(Number(event.target.value));
    };

    const [captchaText, setCaptchaText] = useState('');
    const [isCaptchaValid, setCaptchaValid] = useState(false);
    const captchaRef = useRef(null);
    const [userInputCaptcha, setUserInputCaptcha] = useState('');

    const generateCaptcha = () => {
        const randomCaptcha = Math.floor(1000 + Math.random() * 9000).toString();
        setCaptchaText(randomCaptcha);
    };
    const handleCaptchaChange = (e) => {
        setUserInputCaptcha(e.target.value);
    };

    const handleCaptchaVerification = async () => {
        const isValid = userInputCaptcha === captchaText;
        setCaptchaValid(isValid);
        if (!isValid) {
            alert('验证码错误');
            return;
        }

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
    const handleRefreshCaptcha = () => {
        // 刷新驗證碼
        generateCaptcha();
    };
    const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
    useEffect(() => {
        console.log('Component re-rendered');

        // 定義刷新驗證碼的函數
        const refreshCaptcha = () => {
            generateCaptcha();
        };

        // 在頁面載入時觸發刷新驗證碼
        window.addEventListener('load', refreshCaptcha);

        // 返回清除函數，以確保在 component unmount 時移除事件監聽器
        return () => {
            window.removeEventListener('load', refreshCaptcha);
            // 可以添加其他事件的移除邏輯
        };
    }, []); // 這裡的依賴項為空，表示只在 component mount 時執行一次

    return (
        <StandardLayout>
            {/* 上方流程線 */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginBottom: '30px',
                    padding: '20px',
                    position: 'relative', // 为了绝对定位线条
                }}
            >
                {/* 添加用于连接圈圈的线 */}
                <div
                    style={{
                        position: 'absolute',
                        height: '2px',
                        width: '100%',
                        backgroundColor: 'gray',
                        top: '33%', // 将线置于容器的中间
                        left: 0,
                        zIndex: 0, // 确保线条在圆圈下方
                    }}
                ></div>

                {/* 圆圈和文本 */}
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <span
                        style={{
                            color: 'gray',
                            fontWeight: 'bold',
                            fontSize: '1.2em',
                        }}
                    >
                        ●
                    </span>
                    <div style={{ marginTop: '0.5em', color: 'gray' }}>選擇張數</div>
                </div>
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <span
                        style={{
                            color: 'blue',
                            fontWeight: 'bold',
                            fontSize: '1.2em',
                        }}
                    >
                        ●
                    </span>
                    <div style={{ marginTop: '0.5em', color: 'blue' }}>購票確認</div>
                </div>
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <span
                        style={{
                            color: 'gray',
                            fontWeight: 'bold',
                            fontSize: '1.2em',
                        }}
                    >
                        ●
                    </span>
                    <div style={{ marginTop: '0.5em' }}>付款</div>
                </div>
            </div>
            <div className="event-container">
                <div className="event-image">
                    <img src={eventInfo.imageUrl} alt="Event" />
                </div>
                <div className="event-details">
                    <h1 className="event-title">{eventInfo.eventName}</h1>
                    <h2 className="event-subtitle">{eventInfo.eventSubtitle}</h2>
                </div>
            </div>

            <div className="ticket-table">
                <table>
                    <thead>
                        <tr>
                            <th>座位/票價</th>
                            <th>選擇張數(每人至多三張)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BORN PINK座位特區 (票價含Sound Check粉絲福利)</td>
                            <td>
                                <select
                                    value={selectedQuantity}
                                    onChange={handleQuantityChange}
                                >
                                    {[0, 1, 2, 3].map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="captcha-container">
                <div className="captcha-row">
                    <div className="captcha-image">
                        <img
                            src={`https://dummyimage.com/100x50/000/fff&text=${captchaText}`}
                            alt="Captcha"
                        />
                        <button onClick={handleRefreshCaptcha}>刷新驗證碼</button>
                    </div>
                    <div className="captcha-details">
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="請輸入驗證碼"
                                value={userInputCaptcha}
                                onChange={handleCaptchaChange}
                                ref={captchaRef} // 设置 ref
                            />
                        </div>
                        <p>※請輸入左圖中的驗證碼</p>
                    </div>
                </div>
                <div className="submit-button">
                    <button onClick={handleCaptchaVerification}>確認購票</button>
                </div>
                <p className="separator-text">座位票價示意圖</p>
                <div className="seat-plan">
                    <img src={seatpic} alt="seat plan" />
                </div>
            </div>
        </StandardLayout>
    );
}

export default TicketPage;
