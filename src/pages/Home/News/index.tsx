import News1Png from "@/assets/Home/news-1.png";
import News2Png from "@/assets/Home/news-2.png";
import News3Png from "@/assets/Home/news-3.png";
import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel"
import {useLocale} from "@/i18n";
import Autoplay from "embla-carousel-autoplay";

const news = [
    {
        image: News1Png,
        enTitle: 'Campus Open Day - Smart Bisi Bunny',
        zhTitle: '北京信息科技大学举行校园开放日：首设贯通培养学院 “智能比斯兔”成“宣传员”',
        date: '2024.5.12',
        enContent: 'Beijing Info Tech Univ hosts campus open day, launches integrated education college; "Smart Bisi Rabbit" becomes promo ambassador.',
        zhContent: '5月12日上午，北京信息科技大学在沙河校区举办2024年校园开放日暨高招联合咨询会。咨询会现场，信息科大学生自主研发的“智能比斯兔”成为学校招生的“宣传员”，为家长和考生提供咨询服务。当天，学校本研贯通培养、本硕博贯通培养的勤信荣誉学院正式亮相。',
        link: 'https://baijiahao.baidu.com/s?id=1798836142144190266',
    },
    {
        image: News2Png,
        enTitle: 'The inaugural "Brilliant Beijing Start"',
        zhTitle: '沙河高教园区大学生创新创业投融资联盟成立暨首届“京彩启城”创新创业活动季启动仪式隆重举行',
        date: '2024.6.13',
        enContent: 'The Shahe Higher Education Park Student Innovation and Entrepreneurship Investment Alliance was established, and the inaugural "Beijing Bright Start" ...',
        zhContent: '6月13日，沙河高教园区大学生创新创业投融资联盟成立暨沙河高教园区首届“京彩启城”创新创业活动季启动仪式在中央财经大学沙河校区北京高校大学生创业园（沙河园）隆重举行。市委教育工委副书记、市教委主任、市政府教育督导室主任李奕，昌平区委副书记、区长支现伟，中央财经大学党委书记吴国生、校长马海涛出席活动...',
        link: 'http://edu.china.com.cn/2024-06/13/content_117252057.shtml',
    },
    {
        image: News3Png,
        enTitle: '"The Qianshan Cup" Education Ecosystem Industry Competition',
        zhTitle: '“千帆杯”教育生态行业赛圆满收官，用AI共筑下一代的千万种未来！',
        date: '2024.7.4',
        enContent: 'On July 4th, the finals of the Baidu Smart Cloud Qianshan Cup AI-Native Application Creative Challenge - Education Ecosystem Industry Competition concluded ....',
        zhContent: '7月4日，百度智能云千帆杯AI原生应用创意挑战赛——教育生态行业赛总决赛在上海圆满收官。本次大赛由千帆AppBuilder携手教育高校、教育科技合作伙伴、特邀社区等多家平台共同打造，面向深度产业级场景，旨在加速大模型在教育行业中的深度应用，帮助企业缩短大模型进入业务的最后一公里，并提供全开发周期的工具链，推动教育产业的智能化发展。',
        link: 'https://mp.weixin.qq.com/s/51rM8RgQ2Eetnpm0qIg38A',
    },
]

export const News = () => {
    const {locale} = useLocale()
    return (
        <div
            className="absolute bottom-[0.5294rem] left-[0.6921rem] flex justify-between w-[15.86rem] h-[6.84rem] pt-[0.06rem] px-[0.4rem] rounded-[0.41rem] bg-white">
            <Carousel
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent className="ml-0">
                    {news.map((item, index) => (
                        <CarouselItem key={index} className="basis-1/2 pl-0">
                            <img onClick={() => window.open(item.link)}
                                 className="cursor-pointer w-[7.2564rem] h-[3.76293rem]" src={item.image} alt="news"/>
                            <div
                                className={"mt-[0.19rem] ml-[0.43rem] text-[#313131] " +
                                    (locale === 'zh' ? 'font-inter font-semibold text-[0.28rem] leading-[1]' : 'text-[0.64rem] leading-[0.3rem]')}>
                                {item[`${locale}Title`]}
                            </div>
                            <div
                                className="font-jomhuria mt-[0.08rem] ml-[0.43rem] h-[0.38495rem] text-[0.56rem] leading-[1] text-[#979797]">
                                {item.date}
                            </div>
                            <div
                                className={"mt-[0.15rem] ml-[0.43rem] w-[6.83rem] text-[#6F6F6F] " +
                                    (locale === 'zh' ? 'font-inter text-[0.24rem] leading-[1.1]' : 'text-[0.64rem] leading-[0.5]')}>
                                {item[`${locale}Content`]}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}