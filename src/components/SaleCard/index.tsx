import SaleCardHeaderEnPng from '@/assets/Home/sale-card-header-en.png';
import SaleCardHeaderZhPng from '@/assets/Home/sale-card-header-zh.png';
import SaleCardLeftDashPng from '@/assets/Home/sale-card-left-dash.png';
import SaleCardRightDashPng from '@/assets/Home/sale-card-right-dash.png';
import ShopCartSvg from '@/assets/Home/shop-cart.svg';
import {ReactNode} from "react";
import {useLocale} from "@/i18n";

const I18nSaleCardConfig = {
    en: {
        header: SaleCardHeaderEnPng
    },
    zh: {
        header: SaleCardHeaderZhPng
    }
}

export type SaleCardProps = {
    className?: string;
    direction: 'left' | 'right'
    header?: boolean;
    title?: string;
    subtitle?: string;
    content?: string;
    button?: string;
    image?: ReactNode;
    children?: ReactNode;
    onClick?: VoidFunction;
}

export const SaleCard = (
    {
        className,
        direction,
        header,
        title,
        subtitle,
        content,
        button,
        image,
        children,
        onClick,
    }: SaleCardProps) => {
    const isLeft = direction === 'left'
    const {locale} = useLocale()
    return (
        <div
            className={`w-[16.50241rem] mx-auto ${className ?? ''}`}>
            {header && <img className={`h-[1.93rem] ${isLeft ? 'ml-[1.56rem] mr-auto' : 'ml-auto mr-[0.85rem]'}`}
                            src={I18nSaleCardConfig[locale].header} alt="header"/>}

            <div
                className={`relative w-full h-[7.32715rem] rounded-[0.98rem] border border-[#E39DFF] flex flex-col ` +
                    (isLeft ? 'pl-[1.49rem] items-start ' : 'pr-[1.46rem] items-end ') +
                    (locale === 'zh' ? 'translate-y-[-0.38em]' : 'translate-y-[-0.47rem]')}
                style={{
                    background: isLeft ? 'linear-gradient(100deg, rgba(252, 252, 252, 0.20) 8.13%, rgba(227, 157, 255, 0.09) 81.18%), #FFF' : 'linear-gradient(100deg, rgba(227, 157, 255, 0.09) 8.13%, rgba(252, 252, 252, 0.20) 81.18%), #FFF',
                    boxShadow: '9px 11px 24.8px 0px rgba(227, 157, 255, 0.50)'
                }}
            >
                {!children ? isLeft ?
                    <img className="absolute top-[0.34rem] right-[1.21rem] w-[8.77689rem] h-[6.25842rem]"
                         src={SaleCardLeftDashPng} alt="dash"/> :
                    <img className="absolute top-[0.09rem] left-[1.35rem] w-[14.48286rem] h-[5.98015rem]"
                         src={SaleCardRightDashPng} alt="dash"/> : null}

                {title && (
                    <div
                        className={"leading-[1] " + (locale === 'zh' ? 'mt-[1rem] h-[0.7rem] text-[0.64rem]' : 'mt-[0.64rem] h-[1.43245rem] text-[1.72rem]')}
                        style={{
                            background: 'linear-gradient(99deg, #E39DFF 4.55%, #B885FE 88.01%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {title}
                    </div>
                )}
                {subtitle && (
                    <div
                        className="font-jomhuria h-[0.74199rem] text-[0.86rem] text-transparent leading-[1]"
                        style={{
                            WebkitTextStrokeWidth: '0.01rem',
                            WebkitTextStrokeColor: '#E39DFF',
                        }}
                    >
                        {subtitle}
                    </div>
                )}
                {content && (
                    <div
                        className={locale === 'zh' ? ('text-[0.36rem] leading-[1] ' + (isLeft ? 'w-[7.57rem] text-left' : 'w-[7.2rem] text-right')) :
                            ('text-[0.72rem] leading-[0.65] ' + (isLeft ? 'w-[6.67602rem] text-left' : 'w-[6.31236rem] text-right'))}
                        style={{
                            background: 'linear-gradient(102deg, rgba(227, 157, 255, 0.80) 63.35%, rgba(184, 133, 254, 0.80) 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {content}
                    </div>
                )}
                {button && (
                    <button
                        className={"hover:animate-button relative z-10 w-[4.39011rem] h-[0.91718rem] rounded-[0.32rem] flex justify-center space-x-[0.4rem] " +
                            (locale === 'zh' ? 'mt-[0.2rem]' : 'mt-[0.1rem]')}
                        style={{
                            background: 'linear-gradient(0deg, #E39DFF 0%, #E39DFF 100%), #FFF'
                        }}
                        onClick={onClick}
                    >
                        <img className="mt-[0.06rem] w-[0.7523rem] h-[0.7523rem]" src={ShopCartSvg} alt="cart"/>
                        <span
                            className="font-jomhuria mt-[0.05rem] text-[0.96rem] text-white leading-[1]">{button}</span>
                    </button>
                )}
                {image}
                {children}
            </div>
        </div>
    )
}