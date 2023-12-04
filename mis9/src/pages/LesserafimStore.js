import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StandardLayout from '../components/layout/StandardLayout';
import './store.css';
import showpic from '../images/concert/concert5.jpg';

function LesserafimStore() {
    const [displayText, setDisplayText] = useState(''); // 初始化狀態用於顯示文字內容
    const [isTextVisible, setIsTextVisible] = useState(false); // 用於追蹤文字是否可見
    // 函數處理按鈕點擊事件
    const handleButtonClick = (text) => {
        // 判斷文字是否已可見，如果是，則隱藏；如果不是，則顯示
        if (isTextVisible) {
            setDisplayText(''); // 隱藏文字
        } else {
            setDisplayText(text); // 顯示文字
        }
        // 切換文字可見狀態
        setIsTextVisible(!isTextVisible);
    };

    return (
        <StandardLayout>
            <div className="button-wrapper">
                <div className="button-container">
                    <button
                        className="custom-button"
                        onClick={() =>
                            handleButtonClick(
                                <>
                                    【票務須知】身高 115
                                    公分以上一律一人一票，憑票入場，對號入座，票券限當日有效逾期作廢，遺失破損不補發。
                                    <br />
                                    1.身高 115
                                    公分以下孩童，由家長陪同可免票入場，但不得佔位。
                                    <br />
                                    2.賽前2小時開放入場，請依指示入場，現場不提供領票服務。
                                    <br />
                                    3.請利用捷運、公車等大眾交通運輸工具前往。
                                    <br />
                                    4.座位區 102-108 請由 Gate2 入場；座位區 109-117 請由
                                    Gate 3 入場；座位區 118-124 請由 Gate 4 入場。
                                    <br />
                                    5.本場為測試活動非正式賽事，參與活動請依循主辦單位指示，詳細內容請參照官方網站說明。
                                    <br />
                                    6.觀賞賽事活動時請遵守票券相關資訊，依票券座位對號入座，不得有任何阻礙活動舉辦及消防逃生之行為。
                                    <br />
                                    7.活動現場將提供線上問卷請參與觀眾協助填寫，以完善臺北大巨蛋場館空間及品質。
                                    <br />
                                    8.票券請妥善保存，如發生遺失、破損、燒毀或無法辨識等狀況，恕不補發。
                                    <br />
                                    9.票券經使用、翻拍、照片截圖、影印列印、塗改或汙損者視為失效，恕不補發。任意塗改、影印或套印，掃描複製票券、均屬無效票。
                                    <br />
                                    10.此測試非商業售票活動，票券一旦確認領取，恕不接受換票。
                                    <br />
                                    11.此測試活動觀眾皆【免費索票】，請勿購買來路不行有價票券，以免影響自身權益，衍生詐騙案件或交易糾紛，我們有權取消違反規定之訂單座位，如有情節嚴重狀況將採取法律途徑；擁有該門票者也將無法入場。
                                    <br />
                                </>
                            )
                        }
                    >
                        注意事項
                    </button>
                    <button
                        className="custom-button"
                        onClick={() =>
                            handleButtonClick(
                                <>
                                    欲索票者，請參考【拓元會員加入辦法】，需進行手機驗證，才可開始索票，未完成驗證者，恕無法索票，建議提早完成。
                                    <br />
                                    每個帳號限索取2張票券，本場賽事無電子票券，索票訂單成立後，請務必至全台ibon機台領取實體票券，期限內（線上索票完成訂單後2小時內，依系統顯示時間為準）
                                    <br />
                                    未完成取票者，系統將票券重新釋出。
                                    <br />
                                    線上索票：11月10日中午12:00至11月17日晚間23:59拓元售票系統開放索票，線上成功索取票券後，請於索票後2個小時內至全台ibon機台領取實體票券，期限內未完成取票者，系統自動將票券重新釋出。（每帳號限索取至多2張票券）
                                    <br />
                                    本賽事為非商業售票活動，票券一但確認領取，恕不接受退票（包含ibon取票手續費）。
                                    <br />
                                    有鑒於網路拍賣風氣盛行，有許多來路不明的票券在拍賣網站出售競標，但這些票券來源不明、真偽難辨，票務糾紛層出不窮，為確保您的權益，懇請勿於拍賣網站或是其他非正式授權售票之管道購票，如發生無法進場或其他損害個人權益之事宜，本售票系統恕不負責。
                                </>
                            )
                        }
                    >
                        購票提醒
                    </button>
                    <button
                        className="custom-button"
                        onClick={() =>
                            handleButtonClick(
                                <>
                                    1.
                                    【電子票券】於付款完成後，本系統會產生專屬於這筆訂單中每張票券的電子票券QR
                                    Code，可於【訂單查詢】中
                                    <br />
                                    2.
                                    【電子票券】每張系統服務費10元，購票時僅限信用卡付款或ATM虛擬帳號付款，每個節目的付款方式設定不同，請詳閱您購買節目的【購票提醒】。
                                    <br />
                                    3. 電子票券的QR
                                    Code請勿任意截圖轉傳，以免遭有心人士惡意使用，影響自身權益。'
                                </>
                            )
                        }
                    >
                        取票提醒
                    </button>
                </div>
                <div>{displayText && <p className="button-text">{displayText}</p>}</div>
            </div>

            <div className="event-info-container">
                <div className="image-container">
                    <img src={showpic} alt="節目介紹圖片" />
                </div>
                <div className="text-container">
                    <p>
                        ■ 2023 LE SSERAFIM TOUR FLAME RISES
                        <br />
                        <br />
                        ■演出日期：2023年9月30日（星期六）/ 2023年10月1日（星期日）
                        <br />
                        <br />
                        ■演出地點：高雄國家體育場 (世運主場館)
                        <br />
                        <br />
                        ■地址：高雄市左營區世運大道100號
                        <br />
                        <br />
                        ■FEARNOT MEMBER
                        會員優先訂票：8月7日（星期一）早上10時起至8月8日（星期二）凌晨1時
                        <br />
                        <br />
                        ■FEARNOT MEMBER
                        會員：7月17日（星期一）下午1時起至7月21日（星期五）下午1時 12:00 –
                        2023年1月10日
                        <br />
                        <br />
                        ■公開發售： 8月8日（星期二）早上10時起
                        <br />
                        <br />
                        *每人每場限購3張(含官方會員預購階段及全面開賣之購買數量)
                        <br />
                        ■Live Nation Taiwan會員預售
                        <br />
                        <br />
                        ■BLINK MEMBERSHIP EARLY BIRD官方會員預購: 2022年11月8日
                        10:00-22:00
                        <br />
                        <br />
                        ■公開發售：2022年11月10日 12:00 全面開賣
                        <br />
                        <br />
                    </p>
                </div>
            </div>

            <div className="button-container2">
                {/* ...其他內容 */}
                <Link to="/social">
                    {' '}
                    {/* 將 "/social" 路徑指向您的購票頁面 */}
                    <button className="custom-button2">立即購票</button>
                </Link>
            </div>
        </StandardLayout>
    );
}

export default LesserafimStore;
