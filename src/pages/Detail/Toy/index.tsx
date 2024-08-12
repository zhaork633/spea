import ToyMoreEnPng from "@/assets/Detail/toy-more-en.png";
import ToyMoreZhPng from "@/assets/Detail/toy-more-zh.png";
import MorePng from "@/assets/Detail/more.png";
import {useLocale} from "@/i18n";

export const ToyDetail = () => {
    const {locale} = useLocale()
    return (
        <div className="relative mt-[0.16rem]">
            <img className="w-full" src={MorePng} alt="more"/>
            <div className="absolute z-10 top-[1.67076rem] left-[4.27rem]">
                <video
                    controls className="w-[5.1075rem] h-[9.08rem] rounded-[0.66rem]"
                    src={"https://web-1327550023.cos.ap-beijing.myqcloud.com/%E6%AF%9B%E7%BB%92%E7%8E%A9%E5%85%B7.mp4"}/>
                <div
                    className="pointer-events-none absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%+0.2rem)] h-[calc(100%+0.2rem)] border-[0.2rem] border-[#B885FE] rounded-[0.66rem]"/>
            </div>
            <img className="absolute z-10 top-[1.57076rem] left-[11.59rem] w-[5.1167rem] h-[9.3167rem]"
                 src={locale === 'zh' ? ToyMoreZhPng : ToyMoreEnPng} alt="more"/>
        </div>
    );
}