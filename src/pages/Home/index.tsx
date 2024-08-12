import {MacScrollbar} from 'mac-scrollbar';
import MainPng from '@/assets/Home/main.png'
import DashedBorderSvg from '@/assets/Home/dashed-border.svg'
import LoveSvg from '@/assets/Home/love.svg'
import RobotSvg from '@/assets/Home/robot.svg'
import ChatSvg from '@/assets/Home/chat.svg'
import SloganLeftPng from '@/assets/Home/slogan-left.png'
import SaleCardImage1Png from '@/assets/Home/sale-card-image-1.png'
import SaleCardImage2Png from '@/assets/Home/sale-card-image-2.png'
import SaleCardImage3Png from '@/assets/Home/sale-card-image-3.png'
import SaleCardImageEn4Png from '@/assets/Home/sale-card-image-en-4.png'
import SaleCardImageZh4Png from '@/assets/Home/sale-card-image-zh-4.png'
import AboutBgEnPng from '@/assets/Home/about-bg-en.png'
import AboutBgZhPng from '@/assets/Home/about-bg-zh.png'
import NewsBgPng from '@/assets/Home/news-bg.png'
import LeftPng from '@/assets/Home/left.png'
import RightPng from '@/assets/Home/right.png'
import ShopCartSvg from "@/assets/Home/shop-cart.svg";
import MenuSvg from "@/assets/Home/menu.svg";
import {SaleCard} from "@/components/SaleCard";
import {useNavigate} from "react-router-dom";
import {useState} from 'react';
import {ShopCartModal} from "@/components/Modal/ShopCartModal";
import {products, ProductType} from "@/constants";
import {News} from "@/pages/Home/News";
import {MenuPopover} from "@/pages/Home/Menu";
import {LanguagePopover} from "@/pages/Home/Language";
import {useLocale} from "@/i18n";
import {Footer} from "@/pages/Home/Footer";

const I18nHomeConfig = {
    en: {
        customImage: SaleCardImageEn4Png,
        aboutBg: AboutBgEnPng
    },
    zh: {
        customImage: SaleCardImageZh4Png,
        aboutBg: AboutBgZhPng
    }
}

export const Home = () => {
    const {t, locale} = useLocale()
    const navigate = useNavigate()
    const [shopCartModalOpen, setShopCartModalOpen] = useState(false)

    // 导航栏跳转
    const handleNavi = (name: string) => {
        const el = document.querySelector(`.${name}-navi`)
        if (!el) return
        el.scrollIntoView({behavior: 'smooth'})
    }

    // 跳转到详情页
    const handleDetail = (type: ProductType) => {
        navigate(`/detail?type=${type}`)
    }

    return (
        <MacScrollbar suppressScrollX={true} className="relative w-full h-full bg-[#F6F5F8]">
            <ShopCartModal open={shopCartModalOpen} onCancel={() => setShopCartModalOpen(false)}/>

            <img className="absolute z-20 top-[10.07rem] left-[-2.44rem] w-[5.63576rem] h-[5.2762rem]" src={LeftPng}
                 alt="left"/>
            <img className="absolute z-20 top-[6.26rem] right-[-2.54rem] w-[5.92992rem] h-[6.60222rem]" src={RightPng}
                 alt="right"/>

            {/*导航栏*/}
            <div className="relative z-20 w-[19.2rem] h-[1.14rem] bg-[#DFB0FF] pl-[0.72rem] pr-[1.29916rem] flex">
                <span className="font-jomhuria pt-[0.39rem] text-[0.72rem] text-white leading-[1]">AiSpea</span>
                <span className="flex-1"/>
                <span onClick={() => handleNavi('toy')}
                      className={"cursor-pointer mr-[0.59rem] w-[0.62144rem] text-center text-white leading-[1] " +
                          (locale === 'zh' ? 'pt-[0.62rem] text-[0.22rem]' : 'pt-[0.48rem] text-[0.44rem]')}>{t('toy')}</span>
                <span onClick={() => handleNavi('about')}
                      className={"cursor-pointer mr-[0.59rem] w-[0.90552rem] text-center text-white leading-[1] " +
                          (locale === 'zh' ? 'pt-[0.62rem] text-[0.22rem]' : 'pt-[0.48rem] text-[0.44rem]')}>{t('about')}</span>
                <span onClick={() => handleNavi('contact')}
                      className={"cursor-pointer mr-[0.59rem] w-[1.06532rem] text-center text-white leading-[1] " +
                          (locale === 'zh' ? 'pt-[0.62rem] text-[0.22rem]' : 'pt-[0.48rem] text-[0.44rem]')}>{t('contact')}</span>
                <LanguagePopover>
                    <span className={"cursor-pointer mr-[0.02rem] w-[1.3139rem] text-center text-white leading-[1] " +
                        (locale === 'zh' ? 'pt-[0.62rem] text-[0.22rem]' : 'pt-[0.48rem] text-[0.44rem]')}>{t('language')}</span>
                </LanguagePopover>
                <MenuPopover onNavi={handleNavi}>
                    <img
                        className="cursor-pointer fixed z-[100] top-0 right-[0.63rem] w-[0.66916rem] h-[0.91884rem] mt-[0.12rem]"
                        src={MenuSvg} alt="menu"/>
                </MenuPopover>
            </div>

            {/*首页图*/}
            <div
                className="absolute top-[-0.07rem] w-[19.2rem] h-[10.05rem] bg-[#E0B0FF] rounded-[0.64rem] shadow-[0rem_.12rem_.231rem_.09rem_rgba(223,176,255,0.59)]">
                <img
                    className="mt-[-0.09rem] ml-[0.18rem] w-[18.89367rem] h-[10.02302rem] rounded-[1.1rem]"
                    src={MainPng} alt="main"/>
            </div>

            {/*Slogan*/}
            <div className="relative mt-[9.99rem] mx-[4rem] w-[11.14593rem] h-[2.82643rem] pt-[0.34rem]">
                <img className="absolute w-full h-full top-0" src={DashedBorderSvg} alt="dashed"/>
                <img className="absolute top-[0.53rem] left-[-0.88rem] w-[2.54144rem] h-[2.84489rem]"
                     src={SloganLeftPng} alt="slogan"/>
                <div className="font-jomhuria text-[1.16rem] leading-[1] text-[#313131] text-center">talk smart , play
                    smart !
                </div>
                <div className="mt-[0.3rem] ml-[4.4rem] flex items-center space-x-[0.5rem]">
                    <img className="w-[0.61922rem] h-[0.61922rem]" src={LoveSvg} alt="love"/>
                    <img className="w-[0.71909rem] h-[0.71909rem]" src={RobotSvg} alt="robot"/>
                    <img className="w-[0.69912rem] h-[0.69912rem]" src={ChatSvg} alt="chat"/>
                </div>
            </div>

            <SaleCard
                className="toy-navi mt-[1.18rem]" direction="left" header button="MORE !"
                title={products.find(product => product.type === 'toy')![`${locale}Name`]}
                subtitle={products.find(product => product.type === 'toy')!.enName}
                content={products.find(product => product.type === 'toy')![`${locale}Desc`]}
                image={<img className="absolute top-[-2.02rem] right-[0.66rem] w-[6.5346rem] h-[8.01776rem]"
                            src={SaleCardImage1Png} alt="sale"/>}
                onClick={() => handleDetail('toy')}
            />

            <SaleCard
                className="mt-[1.18rem]" direction="right" header button="MORE !"
                title={products.find(product => product.type === 'talkie')![`${locale}Name`]}
                subtitle={products.find(product => product.type === 'talkie')!.enName}
                content={products.find(product => product.type === 'talkie')![`${locale}Desc`]}
                image={<img className="absolute top-[-0.95rem] left-[0.74rem] w-[7.38374rem] h-[8.06rem]"
                            src={SaleCardImage2Png} alt="sale"/>}
                onClick={() => handleDetail('talkie')}
            />

            <SaleCard
                className="mt-[1.18rem]" direction="left" header button="MORE !"
                title={products.find(product => product.type === 'base')![`${locale}Name`]}
                subtitle={products.find(product => product.type === 'base')!.enName}
                content={products.find(product => product.type === 'base')![`${locale}Desc`]}
                image={<img className="absolute top-[-0.86rem] right-[-0.16rem] w-[9.04rem] h-[9.04rem]"
                            src={SaleCardImage3Png} alt="sale"/>}
                onClick={() => handleDetail('base')}
            />

            <SaleCard
                className="mt-[1.97rem]" direction="left"
                image={<img
                    className={locale === 'zh' ? "absolute top-[-1.47rem] right-0 w-[15.2099rem] h-[8.75595rem]" : "absolute top-[-1.56rem] right-0 w-[15.31161rem] h-[9.47078rem]"}
                    src={I18nHomeConfig[locale].customImage} alt="sale"/>}
            >
                <button
                    className="hover:animate-button relative z-10 mt-[5.93rem] ml-[9.19rem] w-[4.39011rem] h-[0.91718rem] rounded-[0.32rem] flex justify-center space-x-[0.4rem]"
                    style={{
                        background: 'linear-gradient(0deg, #E39DFF 0%, #E39DFF 100%), #FFF'
                    }}
                    onClick={() => setShopCartModalOpen(true)}
                >
                    <img className="mt-[0.06rem] w-[0.7523rem] h-[0.7523rem]" src={ShopCartSvg} alt="cart"/>
                    <span className="font-jomhuria mt-[0.05rem] text-[0.96rem] text-white leading-[1]">Go Now</span>
                </button>
            </SaleCard>

            {/*About*/}
            <div className="about-navi relative mt-[1.77rem] mx-auto w-[17.19rem] h-[9.28rem]">
                <img className="w-full h-full" src={I18nHomeConfig[locale].aboutBg} alt="bg"/>
                <button
                    className={"absolute top-[7.78rem] left-[12.19rem] w-[4.63rem] h-[1.5rem] text-white leading-[1] " +
                        (locale === 'zh' ? 'text-[0.88rem]' : 'text-[1.28rem]')}>
                    {t('about-us')}
                </button>
            </div>

            {/*News*/}
            <div
                className="relative mx-auto w-[17.19rem] h-[9.48rem] shadow-[0px_12px_23.1px_9px_rgba(223,176,255,0.59)] rounded-tr-[0.9rem] rounded-bl-[0.66rem] rounded-br-[0.66rem]">
                <img className="w-full h-full" src={NewsBgPng} alt="bg"/>
                <button
                    className={"absolute top-[0.39rem] left-[0.48rem] w-[4.63rem] h-[1.5rem] pt-[0.1rem] leading-[1] " +
                        (locale === 'zh' ? 'text-[0.88rem]' : 'text-[1.28rem]')}
                    style={{
                        background: 'linear-gradient(99deg, #E39DFF 4.55%, #B885FE 88.01%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    {t('recent-news')}
                </button>
                <News/>
            </div>

            {/*底部*/}
            <Footer onNavi={handleNavi} onDetail={handleDetail}/>
        </MacScrollbar>
    );
};