import StandardLayout from '../components/layout/StandardLayout';
import React, { useState, useEffect } from 'react';
import seatpic from '../images/seat5.jpg';
import { Link } from 'react-router-dom';
import './social.css';
import concertpic2 from '../images/concert/concert5.jpg';

function Social() {
    const eventInfo = {
        eventName: '2023 LE SSERAFIM TOUR FLAME RISES',
        eventSubtitle: '高雄國家體育場 (世運主場館:高雄市左營區世運大道100號)',
        dateTimeLocation: '高雄國家體育場 (世運主場館:高雄市左營區世運大道100號)',
        imageUrl: concertpic2, // 請替換成實際的圖片路徑
    };
    const date1 = '2023-09-30';
    const date2 = '2023-10-01';

    const seatList = [
        {
            id: 1,
            name: 'FEARNOT座位特區 ',
            price: 8800,
            left: 432,
            date: date1,
        },
        { id: 2, name: 'VIP座位特區', price: 6800, left: 432, date: date1 },
        { id: 3, name: '平面座位特區', price: 5800, left: 432, date: date1 },
        { id: 4, name: '平面座位特區', price: 4800, left: 432, date: date1 },
        { id: 5, name: '平面搖滾站區', price: 3800, left: 432, date: date1 },
        { id: 6, name: '看台座位區', price: 5800, left: 432, date: date1 },
        { id: 7, name: '看台座位區', price: 4800, left: 432, date: date1 },
        { id: 8, name: '看台座位區', price: 3800, left: 432, date: date1 },
        { id: 9, name: '看台座位區', price: 3300, left: 432, date: date1 },
        { id: 10, name: '看台座位區', price: 2800, left: 432, date: date1 },
        { id: 11, name: '看台座位區', price: 2300, left: 432, date: date1 },
        {
            id: 12,
            name: 'FEARNOT座位特區',
            price: 8800,
            left: 432,
            date: date2,
        },
        { id: 13, name: 'VIP座位特區', price: 6800, left: 432, date: date2 },
        { id: 14, name: '平面座位特區', price: 5800, left: 432, date: date2 },
        { id: 15, name: '平面座位特區', price: 4800, left: 432, date: date2 },
        { id: 16, name: '平面搖滾站區', price: 3800, left: 432, date: date2 },
        { id: 17, name: '看台座位區', price: 5800, left: 432, date: date2 },
        { id: 18, name: '看台座位區', price: 4800, left: 432, date: date2 },
        { id: 19, name: '看台座位區', price: 3800, left: 432, date: date2 },
        { id: 20, name: '看台座位區', price: 3300, left: 432, date: date2 },
        { id: 21, name: '看台座位區', price: 2800, left: 432, date: date2 },
        { id: 22, name: '看台座位區', price: 2300, left: 432, date: date2 },
    ];

    const [selectedDate, setSelectedDate] = useState('');

    const [filteredSeats, setFilteredSeats] = useState([]);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    useEffect(() => {
        if (selectedDate) {
            setFilteredSeats(seatList.filter((seat) => seat.date === selectedDate));
        } else {
            setFilteredSeats([]);
        }
    }, [selectedDate, seatList]);

    return (
        <StandardLayout>
            <div>
                {/* 上方流程線 */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        marginBottom: '30px',
                        padding: '20px',
                        position: 'relative',
                        // 为了绝对定位线条
                    }}
                    className="-z-10"
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
                                color: 'blue',
                                fontWeight: 'bold',
                                fontSize: '1.2em',
                            }}
                        >
                            ●
                        </span>
                        <div style={{ marginTop: '0.5em', color: 'blue' }}>選擇張數</div>
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

                        <div style={{ marginTop: '0.5em' }}>購票確認</div>
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

                {/* 上方節目資訊 */}
                <div className="event-container">
                    <div className="event-image">
                        <img src={eventInfo.imageUrl} alt="Event" />
                    </div>
                    <div className="event-details">
                        <h1 className="event-title">{eventInfo.eventName}</h1>
                        <h2 className="event-subtitle">{eventInfo.eventSubtitle}</h2>
                    </div>
                </div>

                {/* 上方下拉式選單 */}
                <div className="selected-showtime">
                    <select onChange={handleDateChange} value={selectedDate}>
                        <option value="">請選擇日期</option>
                        <option value={date1}>2023年9月30日 18:30</option>
                        <option value={date2}>2023年10月1日 18:30</option>
                        {/* 其他日期... */}
                    </select>
                </div>

                {/* 下方布局 */}
                <div style={{ display: 'flex' }}>
                    {/* 左邊放圖片 */}
                    <div style={{ flex: 1 }}>
                        <div className="seatpiccss">
                            <img
                                src={seatpic}
                                style={{ width: '700px', height: '700px' }}
                                alt="Seat"
                            />
                        </div>
                    </div>

                    {/* 右邊放購物列表 */}
                    <div style={{ flex: 1, marginRight: '20px' }}>
                        <div className="seat-list">
                            <h1>請選擇區域</h1>
                            <ul>
                                {filteredSeats.map((seat, index) => (
                                    <li key={seat.id}>
                                        <div className="product-details">
                                            <span>{seat.name}</span>
                                            <span>(剩餘票數 {seat.left})</span>
                                        </div>
                                        <div className="button-container3">
                                            {/* ...其他內容 */}
                                            <Link to="/ticketpage">
                                                {' '}
                                                {/* 將 "/social" 路徑指向您的購票頁面 */}
                                                <button className="custom-button3">
                                                    NTD {seat.price}
                                                </button>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* 注意事項區塊 */}
                <div className="notice">
                    <h3> Notice</h3>
                    <p className="noticecontent text-[15px]">
                        <br />
                        ■座位區皆為劃位座席，請依票面座位號入座
                        <br />
                        ■搖滾站區票面有序號，請依票面序號整隊入場。人身安全起見，孕婦及身高未滿110公分或未滿7歲孩童，請勿購買搖滾站區票券，主辦方將有權謝絕入場
                        <br />
                        ■每人限購4張
                        (含各預購階段之購買數量)，單筆訂單限購4張，各階段僅開放部分座位或序號，數量有限，售完為止。BLINK
                        MEMBERSHIP官方會員預購、Live Nation
                        Taiwan會員預購，皆僅提供特有或優先購買之服務，不保證座位排號及序號一定優於正式開賣，敬請理解。
                        <br />
                        ■因應嚴重特殊傳染性肺炎之疫情，演出時敬請觀眾配合防疫入場須知:
                        <br />
                        ■請自行配戴口罩入場，並於演出時全程配戴口罩
                        <br />
                        ■請配合入場時量測體溫，若有發燒症狀（體溫≥攝氏37.5度）則不得入場
                        <br />
                        ■
                        配合政府防疫政策，主辦單位及場館鼓勵民眾於參加活動前先下載及使用「台灣社交距離」APP
                        <br />
                        ■入場須配合安檢及防疫入場須知，禁止攜帶飲食(水除外)、除手機之外的任何形式之拍攝及錄音電子設備、自拍棒與危險物品（依主辦單位定義）等入場，場館無設置置物櫃，主辦單位有權立即請違反者離開現場自行另覓處所寄物。相關規定請關注Live
                        Nation Taiwan (@livenationtw)臉書、Instagram、Twitter與官網
                        獲得最新資訊。
                        <br />
                        ■ 以上活動內容，主辦單位保留異動之權力
                        <br />
                        ■以上資料來源：Live Nation Taiwan理想國 官網及Facebook
                    </p>
                </div>
            </div>
        </StandardLayout>
    );
}

export default Social;
