import BaseMore1Png from "@/assets/Detail/base-more-1.png";
import BaseMoreEn2Png from "@/assets/Detail/base-more-en-2.png";
import BaseMoreZh2Png from "@/assets/Detail/base-more-zh-2.png";
import MorePng from "@/assets/Detail/more.png";
import {useLocale} from "@/i18n";

export const BaseDetail = () => {
    const {locale} = useLocale()
    return (
        <div className="relative mt-[0.16rem]">
            <img className="w-full" src={MorePng} alt="more"/>
            <img className="absolute z-10 top-[1.2rem] right-[2.23rem] w-[4.84rem] h-[4.84rem]"
                 src={BaseMore1Png} alt="more"/>
            <img className="absolute z-10 top-[6.48rem] left-[5.32rem] w-[10.76472rem] h-[4.54rem]"
                 src={locale === 'zh' ? BaseMoreZh2Png : BaseMoreEn2Png} alt="more"/>

            <div className="absolute z-10 top-[1.3rem] left-[2.97rem]">
                <video
                    controls className="w-[8.38rem] h-[4.64rem] rounded-[0.66rem]"
                    src={"https://web-1327550023.cos.ap-beijing.myqcloud.com/%E5%BA%95%E5%BA%A7.mp4"}/>
                <div
                    className="pointer-events-none absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%+0.2rem)] h-[calc(100%+0.2rem)] border-[0.2rem] border-[#B885FE] rounded-[0.66rem]"/>
            </div>
        </div>
    );
}