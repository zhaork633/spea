import FooterPng from "@/assets/Home/footer.png";
import QrcodePng from "@/assets/Home/qrcode.png";
import EmailSvg from "@/assets/Home/email.svg";
import PhoneSvg from "@/assets/Home/phone.svg";
import XSvg from "@/assets/Home/x.svg";
import DySvg from "@/assets/Home/dy.svg";
import InSvg from "@/assets/Home/in.svg";
import TaobaoSvg from "@/assets/Home/taobao.svg";
import {useLocale} from "@/i18n";
import {products, ProductType} from "@/constants";

const I18nFooterConfig = {
    en: {header: 'text-[0.44rem]', text: 'text-[0.32rem]'},
    zh: {header: 'text-[0.32rem]', text: 'text-[0.18rem]'},
}

export const Footer = ({onNavi, onDetail}: {
    onNavi: (name: string) => void,
    onDetail: (type: ProductType) => void
}) => {
    const {t, locale} = useLocale()
    return (
        <div className="contact-navi mt-[1.62rem] h-[1.80962rem]">
            <img className="ml-[3.32rem] w-[4.32085rem] h-[1.80962rem]" src={FooterPng} alt="footer"/>
            <div
                className="relative translate-y-[-0.48962rem] w-[19.2rem] h-[4.45469rem] pt-[0.77rem] pl-[2rem] pr-[0.5rem]"
                style={{
                    background: 'linear-gradient(85deg, rgba(205, 170, 254, 0.20) 21.01%, rgba(228, 158, 255, 0.20) 63.12%), #E49EFF'
                }}
            >
                <div
                    className="font-jomhuria absolute top-[-0.66rem] right-[1.26rem] w-[5.35106rem] h-[1.4297rem] pt-[0.2rem] pl-[0.54rem] rounded-[0.715rem] bg-[#E49EFF] text-[0.64rem] leading-[1] text-white">
                    talk smart，play smart !
                </div>
                <div
                    className="absolute top-[-1rem] right-0 w-[6.25123rem] h-[1.66965rem] rounded-[0.715rem] border-[0.05rem] border-[#E49EFF]"/>

                <div className="w-full flex">
                    <div>
                        <img className="w-[1.72478rem] h-[1.72227rem]" src={QrcodePng} alt="qrcode"/>
                        <div
                            className={"mt-[0.12rem] leading-[1] text-white text-center " + I18nFooterConfig[locale].header}>{t('official-account')}</div>
                    </div>
                    <div className="ml-[1.12rem]">
                        <div
                            className={"h-[0.31993rem] leading-[1] text-white " + I18nFooterConfig[locale].header}>{t('contact-us')}</div>
                        <div className="mt-[0.12rem] ml-[0.25rem] flex">
                            <img className="w-[0.32006rem] h-[0.31993rem]" src={EmailSvg} alt="email"/>
                            <span
                                className="font-jomhuria mt-[0.06rem] ml-[0.1rem] h-[0.28439rem] text-[0.32rem] leading-[1] text-white">business@aispea.com</span>
                        </div>
                        <div className="mt-[0.02rem] ml-[0.25rem] flex">
                            <img className="w-[0.32006rem] h-[0.31993rem]" src={PhoneSvg} alt="phone"/>
                            <span
                                className="font-jomhuria mt-[0.04rem] ml-[0.1rem] h-[0.28439rem] text-[0.32rem] leading-[1] text-white">+86 15600577129</span>
                        </div>
                    </div>
                    <div className="ml-[0.64rem]">
                        <div
                            className={"h-[0.31993rem] leading-[1] text-white " + I18nFooterConfig[locale].header}>{t('product-categories')}</div>
                        <div onClick={() => onDetail('toy')}
                             className={"cursor-pointer mt-[0.13rem] ml-[0.25rem] h-[0.26661rem] leading-[1] text-white " + I18nFooterConfig[locale].text}>
                            {products.find(product => product.type === 'toy')![`${locale}Name`]}
                        </div>
                        <div onClick={() => onDetail('talkie')}
                             className={"cursor-pointer ml-[0.25rem] h-[0.28439rem] leading-[1] text-white " + I18nFooterConfig[locale].text}>
                            {products.find(product => product.type === 'talkie')![`${locale}Name`]}
                        </div>
                        <div onClick={() => onDetail('base')}
                             className={"cursor-pointer ml-[0.25rem] h-[0.28439rem] leading-[1] text-white " + I18nFooterConfig[locale].text}>
                            {products.find(product => product.type === 'base')![`${locale}Name`]}
                        </div>
                    </div>
                    <div className="ml-[0.9rem]">
                        <div className={"h-[0.31993rem] leading-[1] text-white " + I18nFooterConfig[locale].header}>
                            {t('learn-more')}
                        </div>
                        <div className="mt-[0.16rem] ml-[0.25rem] flex">
                            <img className="w-[0.22rem] h-[0.22rem]" src={XSvg} alt="x"/>
                            <span
                                className="font-jomhuria mt-[-0.03rem] ml-[0.04rem] h-[0.26661rem] text-[0.32rem] leading-[1] text-white">AiSpea43643</span>
                        </div>
                        <div className="mt-[0.04rem] ml-[0.25rem] flex">
                            <img className="w-[0.22rem] h-[0.22rem]" src={DySvg} alt="dy"/>
                            <span
                                className="font-jomhuria mt-[-0.03rem] ml-[0.04rem] h-[0.28439rem] text-[0.32rem] leading-[1] text-white">aispeatoys</span>
                        </div>
                        <div className="mt-[0.04rem] ml-[0.25rem] flex">
                            <img className="w-[0.22rem] h-[0.22rem]" src={InSvg} alt="in"/>
                            <span
                                className="font-jomhuria mt-[-0.03rem] ml-[0.04rem] h-[0.28439rem] text-[0.32rem] leading-[1] text-white">aispeatoys</span>
                        </div>
                    </div>
                </div>
                <div className="mt-[0.46rem] w-full flex flex-col items-end">
                    <div className="flex space-x-[0.12rem]">
                        <img className="w-[0.4rem] h-[0.4rem]" src={TaobaoSvg} alt="taobao"/>
                        <img className="w-[0.4rem] h-[0.4rem]" src={InSvg} alt="in"/>
                    </div>
                    <div
                        className="mt-[0.13rem] font-inter text-[0.2rem] italic font-[700] leading-[1] text-white">©
                        2024
                        AISpea, All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}