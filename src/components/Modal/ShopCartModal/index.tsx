import {BaseModal, BaseModalProps} from "@/components/Modal/BaseModal";
import {useState} from "react";
import ArrowSvg from "@/assets/Modal/arrow.svg";
import ToyPng from "@/assets/Modal/toy.png";
import TalkiePng from "@/assets/Modal/talkie.png";
import BasePng from "@/assets/Modal/base.png";
import CustomPng from "@/assets/Modal/custom.png";
import QrcodePng from "@/assets/Home/qrcode.png";
import EmailSvg from "@/assets/Home/email.svg";
import PhoneSvg from "@/assets/Home/phone.svg";
import TaobaoSvg from "@/assets/Modal/taobao.svg";
import {ShopSelectModal} from "@/components/Modal/ShopSelectModal";
import {products, ProductType} from "@/constants";
import {usePrice} from "@/stores/cart.ts";
import {isMobile, priceFormat} from "@/utils";
import {ShopCustomModal} from "@/components/Modal/ShopCustomModal";
import {QrCodeModal} from "@/components/Modal/QrCodeModal";
import {useLocale} from "@/i18n";

// 计算最低价格用于展示
const prices = products.map(product => {
    const retailPrice = Math.min(...product.groups.map(group => group.retailPrice))
    const wholesalePrice = Math.min(...product.groups.map(group => group.wholesalePrice))
    return {
        type: product.type,
        retailPrice,
        wholesalePrice,
    }
})

// 汇率
const RATE = 7.2

export const ShopCartModal = (props: Pick<BaseModalProps, 'open' | 'onCancel'>) => {
    const {t, locale} = useLocale()
    const [isUSD, setIsUSD] = useState(true);
    const [shopSelectModalState, setShopSelectModalState] = useState({
        open: false,
        type: 'toy' as ProductType
    });
    const [shopCustomModalOpen, setShopCustomModalOpen] = useState(false);
    const [qrCodeModalOpen, setQrCodeModalOpen] = useState(false);
    const {toyPrice, talkiePrice, basePrice, customPrice, totalPrice} = usePrice()

    // 点击购买按钮
    const handleBuyNow = () => {
        if (isMobile()) {
            window.open('https://weidian.com/?userid=1704211833&vc_wfr=wechat_gzh')
        } else {
            setQrCodeModalOpen(true)
        }
    }

    return (
        <BaseModal {...props}>
            <ShopSelectModal
                type={shopSelectModalState.type}
                open={shopSelectModalState.open}
                onCancel={() => setShopSelectModalState({open: false, type: shopSelectModalState.type})}
            />
            <ShopCustomModal open={shopCustomModalOpen} onCancel={() => setShopCustomModalOpen(false)}/>
            <QrCodeModal open={qrCodeModalOpen} onCancel={() => setQrCodeModalOpen(false)}/>
            <div
                className="w-[8.28761rem] h-[6.3rem] pl-[0.74rem] pt-[0.25rem] rounded-[0.34rem] bg-shop-cart"
                style={{backgroundSize: "100%"}}
            >
                <div className="flex">
                    <div className={"w-[4.34789rem] h-[0.83408rem] leading-[1] text-[#B885FE] " +
                        (locale === 'zh' ? 'font-kingnamype-yuanmo text-[0.96rem]' : 'font-jomhuria text-[1.16rem]')}>
                        {t('shopping-card')}
                    </div>
                    <button
                        onClick={() => setIsUSD(!isUSD)}
                        className="hover:animate-button font-jomhuria mt-[0.28rem] ml-[1.22rem] w-[1.34rem] h-[0.55rem] rounded-[0.18rem] bg-[#E39DFF] text-[0.64rem] leading-[1] text-white">
                        {isUSD ? 'USD' : 'CNY'}
                    </button>
                </div>

                <div className="mt-[0.12rem] flex">
                    <img className="w-[0.69211rem] h-[0.69211rem]" src={ToyPng} alt="toy"/>
                    <div className="flex-1 mt-[0.04rem] ml-[0.21rem]">
                        <div className="h-[0.35764rem] flex items-center">
                            <span className={"w-[2.5rem] leading-[1] text-[#DB99FF] " +
                                (locale === 'zh' ? 'font-inter font-black text-[0.28rem]' : 'font-jomhuria text-[0.56rem]')}>
                                {products.find(product => product.type === 'toy')![`${locale}Name`].replace('Spea', '')}
                            </span>
                            <img
                                className="cursor-pointer w-[0.26rem] h-[0.14444rem]" src={ArrowSvg} alt="arrow"
                                onClick={() => setShopSelectModalState({open: true, type: 'toy'})}
                            />
                        </div>
                        <div
                            className="mt-[0.03rem] h-[0.35493rem] font-inter text-[0.16rem] leading-[1] text-[#E1ABFF]">
                            {t('retail-price')}：{prices.find(i => i.type === 'toy')!.retailPrice} &nbsp;&nbsp;&nbsp;
                            {t('wholesale-price')}：{prices.find(i => i.type === 'toy')!.wholesalePrice}
                        </div>
                    </div>
                    <div
                        className="font-jomhuria mt-[0.12rem] mr-[0.94rem] w-[0.88732rem] h-[0.37268rem] pt-[0.06rem] rounded-[0.16rem] border-[0.01rem] border-[#E39DFF] text-[0.32rem] leading-[1] text-[#E39DFF] text-center">
                        {priceFormat((isUSD ? 1 : RATE) * toyPrice.retailPrice)}
                    </div>
                </div>

                <div className="mt-[0.09rem] flex">
                    <img className="w-[0.69211rem] h-[0.69211rem]" src={TalkiePng} alt="talkie"/>
                    <div className="flex-1 mt-[0.04rem] ml-[0.21rem]">
                        <div className="h-[0.35764rem] flex items-center">
                            <span className={"w-[2.5rem] leading-[1] text-[#DB99FF] " +
                                (locale === 'zh' ? 'font-inter font-black text-[0.28rem]' : 'font-jomhuria text-[0.56rem]')}>
                                {products.find(product => product.type === 'talkie')![`${locale}Name`].replace('Spea', '')}
                            </span>
                            <img
                                className="cursor-pointer mw-[0.26rem] h-[0.14444rem]" src={ArrowSvg} alt="arrow"
                                onClick={() => setShopSelectModalState({open: true, type: 'talkie'})}
                            />
                        </div>
                        <div
                            className="mt-[0.03rem] h-[0.35493rem] font-inter text-[0.16rem] leading-[1] text-[#E1ABFF]">
                            {t('retail-price')}：{prices.find(i => i.type === 'talkie')!.retailPrice} &nbsp;&nbsp;&nbsp;
                            {t('wholesale-price')}：{prices.find(i => i.type === 'talkie')!.wholesalePrice}
                        </div>
                    </div>
                    <div
                        className="font-jomhuria mt-[0.12rem] mr-[0.94rem] w-[0.88732rem] h-[0.37268rem] pt-[0.06rem] rounded-[0.16rem] border-[0.01rem] border-[#E39DFF] text-[0.32rem] leading-[1] text-[#E39DFF] text-center">
                        {priceFormat((isUSD ? 1 : RATE) * talkiePrice.retailPrice)}
                    </div>
                </div>

                <div className="mt-[0.09em] flex">
                    <img className="w-[0.69211rem] h-[0.69211rem]" src={BasePng} alt="stand"/>
                    <div className="flex-1 mt-[0.04rem] ml-[0.21rem]">
                        <div className="h-[0.35764rem] flex items-center">
                            <span className={"w-[2.5rem] leading-[1] text-[#DB99FF] " +
                                (locale === 'zh' ? 'font-inter font-black text-[0.28rem]' : 'font-jomhuria text-[0.56rem]')}>
                                {products.find(product => product.type === 'base')![`${locale}Name`].replace('Spea', '')}
                            </span>
                            <img
                                className="cursor-pointer w-[0.26rem] h-[0.14444rem]" src={ArrowSvg} alt="arrow"
                                onClick={() => setShopSelectModalState({open: true, type: 'base'})}
                            />
                        </div>
                        <div
                            className="mt-[0.03rem] h-[0.35493rem] font-inter text-[0.16rem] leading-[1] text-[#E1ABFF]">
                            {t('retail-price')}：{prices.find(i => i.type === 'base')!.retailPrice} &nbsp;&nbsp;&nbsp;
                            {t('wholesale-price')}：{prices.find(i => i.type === 'base')!.wholesalePrice}
                        </div>
                    </div>
                    <div
                        className="font-jomhuria mt-[0.12rem] mr-[0.94rem] w-[0.88732rem] h-[0.37268rem] pt-[0.06rem] rounded-[0.16rem] border-[0.01rem] border-[#E39DFF] text-[0.32rem] leading-[1] text-[#E39DFF] text-center">
                        {priceFormat((isUSD ? 1 : RATE) * basePrice.retailPrice)}
                    </div>
                </div>

                <div className="mt-[0.09rem] flex">
                    <img className="w-[0.69211rem] h-[0.69211rem]" src={CustomPng} alt="custom"/>
                    <div className="flex-1 mt-[0.04rem] ml-[0.21rem]">
                        <div className="h-[0.35764rem] flex items-center">
                            <span className={"leading-[1] text-[#DB99FF] " +
                                (locale === 'zh' ? 'font-inter font-black text-[0.28rem]' : 'font-jomhuria text-[0.42rem]')}>{t('customized-personalized')}</span>
                            <img
                                className="cursor-pointer ml-[0.2rem] w-[0.26rem] h-[0.14444rem]" src={ArrowSvg}
                                alt="arrow" onClick={() => setShopCustomModalOpen(true)}
                            />
                        </div>
                        <div
                            className="mt-[0.03rem] h-[0.35493rem] font-inter text-[0.16rem] leading-[1] text-[#E1ABFF]">
                            {t('please-contact-us')}
                        </div>
                    </div>
                    <div
                        className="font-jomhuria mt-[0.12rem] mr-[0.94rem] w-[0.88732rem] h-[0.37268rem] pt-[0.06rem] rounded-[0.16rem] border-[0.01rem] border-[#E39DFF] text-[0.32rem] leading-[1] text-[#E39DFF] text-center">
                        {priceFormat((isUSD ? 1 : RATE) * customPrice)}
                    </div>
                </div>

                <div className="mt-[0.27rem] flex">
                    <div className="w-[3.76225rem] pr-[0.28rem] text-[0.48rem] leading-[1] text-white">
                        <div className="flex justify-between">
                            <span
                                className={locale === 'zh' ? 'font-kingnamype-yuanmo text-[0.4rem]' : 'font-jomhuria text-[0.48rem]'}>{t('total-wholesale-price')}</span>
                            <span
                                className="font-jomhuria">{priceFormat((isUSD ? 1 : RATE) * totalPrice.wholesalePrice)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span
                                className={locale === 'zh' ? 'font-kingnamype-yuanmo text-[0.4rem]' : 'font-jomhuria text-[0.48rem]'}>{t('total-retail-price')}</span>
                            <span
                                className="font-jomhuria">{priceFormat((isUSD ? 1 : RATE) * totalPrice.retailPrice)}</span>
                        </div>
                    </div>
                    <img className="mt-[0.06rem] ml-[0.27rem] w-[0.71rem] h-[0.71rem] rounded-[0.15rem]" src={QrcodePng}
                         alt="qrcode"/>
                    <button
                        onClick={handleBuyNow}
                        className={"hover:animate-button mt-[0.06rem] ml-[0.18rem] w-[2.34rem] h-[0.72rem] rounded-[0.2rem] bg-white leading-[1] text-[#E39DFF] " +
                            (locale === 'zh' ? 'font-kingnamype-yuanmo text-[0.48rem]' : 'font-jomhuria text-[0.8rem]')}>
                        {t('buy-now')}
                    </button>
                </div>

                <div className="mt-[0.05rem] flex items-center leading-[1] text-white opacity-[0.6]">
                    <span
                        className={"w-[2.5rem] self-start " + (locale === 'zh' ? "font-inter text-[0.2rem]" : "font-jomhuria text-[0.36rem]")}>{t('any-questions')}</span>
                    <img className="mt-[-0.05rem] ml-[0.16rem] mr-[0.06rem] w-[0.17746rem]" src={EmailSvg} alt="email"/>
                    <span className="font-jomhuria text-[0.28rem]">business@aiSpea.com</span>
                    <img className="mt-[-0.05rem] ml-[0.16rem] mr-[0.06rem] w-[0.17746rem]" src={PhoneSvg} alt="phone"/>
                    <span className="font-jomhuria text-[0.28rem]">+86 15600577129</span>
                    <img className="mt-[-0.05rem] ml-[0.16rem] mr-[0.06rem] w-[0.19521rem]" src={TaobaoSvg}
                         alt="taobao"/>
                    <span className="font-jomhuria text-[0.28rem]">AI Spea</span>
                </div>
            </div>
        </BaseModal>
    )
}