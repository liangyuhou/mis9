import StandardLayout from '../components/layout/StandardLayout';
import MainBanner from '../components/banners/MainBanner';
import StandardContainerGroup from '../components/containers/StandardContainerGroup';
import LinkGroup from '../components/links/LinkGroup';

// Images
import img1 from '../images/concert/concert1.png';
import img2 from '../images/concert/concert2.png';
import img3 from '../images/concert/concert3.png';
import img4 from '../images/concert/concert4.png';
import img5 from '../images/concert/concert5.jpg';

const DATA = [
    {
        title: '2023 LE SSERAFIM TOUR FLAME RISES',
        description:
            'FEARNOT 準備好了吧！LE SSERAFIM 快將舉行首個巡迴演出 2023 LE SSERAFIM TOUR FLAME RISES，我們怎能錯過她們首個香港舞台呢？',
        date: '2023 AUG-12',
        image: img5,
        path: '/store/lesserafim',
    },
    {
        title: 'BLACKPINK高雄站演唱會 2023｜BORN PINK',
        description:
            '史上首組登頂美國告示牌排行榜Billboard 200專輯榜冠軍的韓國女團新專輯< Born Pink >首周狂賣200萬張，刷新韓國女團最高銷售紀錄',
        date: '2023 MAR-18',
        image: img1,
        path: '/store/blackpink',
    },
    {
        title: 'Westlife The Wild Dreams Tour Taipei西城男孩2023台北演唱會',
        description: '西城男孩台北安可場11月狂野登場！11/15、16熱烈完售，11/14驚喜再加場',
        date: '2023 NOV-18',
        image: img2,
        path: '/store/westlife',
    },
    {
        title: 'OneRepublic The Artificial Paradise Tour in Kaohsiung共和世代2024高雄演唱會',
        description:
            '無憂無慮 二度攻蛋熱血進化 南下開唱2023 台北小巨蛋秒殺完售2024 高雄巨蛋超震撼開唱',
        date: '2023 DEC-20',
        image: img3,
        path: '/store/onerepublic',
    },
    {
        title: 'JOJI-Pandemonium-Asia Tour in Taipei',
        description: '日澳混血憂鬱鬼才 JOJI 屬於Z世代的L首度來台 心碎開唱',
        date: '2023 JUN-15',
        image: img4,
        path: '/store/joji',
    },
];

function Home() {
    return (
        <StandardLayout>
            <MainBanner />

            {/* 2) Box Components */}
            <StandardContainerGroup data={DATA} />

            {/* 4) Page Content */}
            <div className="px-[200px] bg-gray-200">
                {/* 4.1) Main content */}
                <p className=" py-5 text-sm text-gray-700">Hello tixtoken!</p>

                {/* 4.2) Sub links */}
                <LinkGroup />
            </div>
        </StandardLayout>
    );
}

export default Home;
