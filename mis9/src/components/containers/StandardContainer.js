import StandardLink from '../links/StandardLink';

function StandardContainer({ title, description, date, image, style }) {
    return (
        <div className={`flex items-center py-4 ${style} justify-between px-28`}>
            {/* 左邊是圖片 */}
            <img src={image} alt="Main banner" className="w-[400px] h-[200px]" />

            {/* 右邊是文字和連結 */}
            <div className="flex flex-col justify-start w-[700px]">
                <p className="text-[30px] font-semibold ">{title}</p>
                <p className="font-thin text-lg">{description}</p>
                <p className="font-thin text-lg">{date}</p>
            </div>
            {/* Buy按鈕在右側 */}
            <div className="flex items-center">
                <StandardLink path="/store" name="Buy >" />
            </div>
        </div>
    );
}

export default StandardContainer;
