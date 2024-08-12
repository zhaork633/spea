import TalkieMoreEnPng from "@/assets/Detail/talkie-more-en.png";
import TalkieMoreZhPng from "@/assets/Detail/talkie-more-zh.png";
import MorePng from "@/assets/Detail/more.png";
import {useLocale} from "@/i18n";

export const TalkieDetail = () => {
    const {locale} = useLocale()
    return (
        <div className="relative mt-[0.16rem]">
            <img className="w-full" src={MorePng} alt="more"/>
            <div className="absolute z-10 top-[1.67076rem] left-[4.27rem]">
                <video
                    controls className="w-[5.1075rem] h-[9.08rem] rounded-[0.66rem]"
                    src={"https://web-1327550023.cos.ap-beijing.myqcloud.com/%E5%AF%B9%E8%AE%B2%E6%9C%BA.mp4"}/>
                <div
                    className="pointer-events-none absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%+0.2rem)] h-[calc(100%+0.2rem)] border-[0.2rem] border-[#B885FE] rounded-[0.66rem]"/>
            </div>
            <img className="absolute z-10 top-[1.57076rem] left-[11.59rem] w-[5.1167rem] h-[9.3167rem]"
                 src={locale === 'zh' ? TalkieMoreZhPng : TalkieMoreEnPng} alt="more"/>
        </div>
    );
}