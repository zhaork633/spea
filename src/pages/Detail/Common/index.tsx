import LeftSvg from "@/assets/Detail/left.svg";
import RightSvg from "@/assets/Detail/right.svg";
import ChatSvg from "@/assets/Detail/chat.svg";
import FeatureWifiSvg from "@/assets/Detail/feature-wifi.svg";
import FeatureAgeSvg from "@/assets/Detail/feature-age.svg";
import FeatureTalkSvg from "@/assets/Detail/feature-talk.svg";
import FeatureEducationSvg from "@/assets/Detail/feature-education.svg";
import FeatureEyeSvg from "@/assets/Detail/feature-eye.svg";
import FeatureEntertainmentSvg from "@/assets/Detail/feature-entertainment.svg";
import AddPng from "@/assets/Detail/add.png";
import AddedPng from "@/assets/Detail/added.png";
import CartPng from "@/assets/Detail/cart.png";
import ShopEnPng from "@/assets/Detail/shop-en.png";
import ShopZhPng from "@/assets/Detail/shop-zh.png";
import {useRef, useState} from "react";
import {useCart, useSetCart} from "@/stores/cart.ts";
import {ShopListModal} from "@/components/Modal/ShopListModal";
import {useType} from "@/hooks/useType.ts";
import {ShopCartModal} from "@/components/Modal/ShopCartModal";
import {useLocale} from "@/i18n";
import {SnailList, SnailListRef} from "@/pages/Detail/SnailList";

const features = [
    {
        icon: FeatureWifiSvg,
        enText: 'Wi-Fi Enabled',
        zhText: '支持wifi',
    },
    {
        icon: FeatureAgeSvg,
        enText: 'Ages 3+',
        zhText: '3岁以上',
    },
    {
        icon: FeatureTalkSvg,
        enText: 'Unlimited Talk',
        zhText: '无限制对话',
    },
    {
        icon: FeatureEducationSvg,
        enText: 'Educational Support',
        zhText: '教育支持',
    },
    {
        icon: FeatureEyeSvg,
        enText: 'Screen-Free,\nEye-Friendly',
        zhText: '无屏设计 护眼友好',
    },
    {
        icon: FeatureEntertainmentSvg,
        enText: 'Entertainment\nSupport',
        zhText: '娱乐支持',
    },
]

export const CommonDetail = () => {
    const {t, locale} = useLocale()
    const snailListRef = useRef<SnailListRef>(null);
    const {type, product, list, length} = useType()
    // 已选商品状态
    const [idx, setIdx] = useState(0);
    const selectedId = list[idx]!.id;
    const selectedEnName = list[idx]!.enName;
    const selectedZhName = list[idx]!.zhName;
    const selectedGroupId = selectedId.split('-').slice(0, 2).join('-');
    // 购物车相关
    const {isExist} = useCart();
    const {addCart, removeCart} = useSetCart();
    // 弹窗相关
    const [shopListModalOpen, setShopListModalOpen] = useState(false);
    const [shopCartModalOpen, setShopCartModalOpen] = useState(false);

    // 选择商品
    const handleSelect = (idx: number) => {
        setIdx(idx);
        if (!snailListRef.current) return;
        snailListRef.current.scrollTo(idx);
    }

    // 标题分割文本
    const splitText =
        locale === 'en' ? type === 'talkie' ? ' ' : <br/> :
            locale === 'zh' ? type === 'base' ? '' : <br/> : '';

    return (
        <div className="flex pl-[0.78rem] pr-[0.91rem]">
            <ShopListModal open={shopListModalOpen} onCancel={() => setShopListModalOpen(false)}/>
            <ShopCartModal open={shopCartModalOpen} onCancel={() => setShopCartModalOpen(false)}/>
            <div className="shrink-0 pt-[0.8rem]">
                <div
                    className="font-jomhuria ml-[0.47rem] flex flex-col justify-center h-[2.98328rem] text-[4.55rem] leading-[1]"
                    style={{
                        background: 'linear-gradient(99deg, rgba(227, 157, 255, 0.20) 4.55%, rgba(184, 133, 254, 0.20) 88.01%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    AiSpea
                </div>

                <div className="flex">
                    <img className="cursor-pointer mt-[1.67rem] w-[0.88851rem] h-[0.88851rem]" src={LeftSvg}
                         alt="left" onClick={() => handleSelect((idx - 1 + length) % length)}/>
                    <img className="mt-[-2.40328rem] mx-[0.68rem] w-[5.26757rem] h-[7.11863rem] object-contain"
                         src={list[idx]!.icon} alt="icon"/>
                    <img className="cursor-pointer mt-[1.67rem] w-[0.88851rem] h-[0.88851rem]" src={RightSvg}
                         alt="right" onClick={() => handleSelect((idx + 1) % length)}/>
                </div>

                <SnailList ref={snailListRef} list={list} onSelect={handleSelect}/>
            </div>

            <div className="ml-[1rem] pt-[1.51rem]">
                <div className="relative flex items-start">
                    <div
                        className={"w-[7.3rem] h-[2.18953rem] leading-[0.93rem] " +
                            (locale === 'zh' ? 'text-[0.72rem] tracking-tighter' : 'text-[1.34rem]')}
                        style={{
                            background: 'linear-gradient(99deg, #E39DFF 4.55%, #B885FE 88.01%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {t('greet')}{splitText}{t('introduce')}{product[`${locale}Name`].replace('Spea', '')}
                    </div>
                    <img className="absolute right-[-0.1rem] w-[1.34958rem]" src={ChatSvg} alt="chat"/>
                </div>

                <div
                    className={"mt-[0.03rem] w-[8.05rem] " +
                        (locale === 'zh' ? 'text-[0.36rem] leading-[1]' : 'text-[0.72rem] leading-[0.65]')}
                    style={{
                        background: 'linear-gradient(102deg, rgba(227, 157, 255, 0.80) 63.35%, rgba(184, 133, 254, 0.80) 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {product[`${locale}Desc`]}
                </div>

                <div className="flex flex-wrap">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            style={{
                                marginTop: index > 2 ? '0.15rem' : '0',
                                marginLeft: index % 3 === 0 ? '0' : '0.14rem'
                            }}
                            className="flex flex-col items-center w-[2.60205rem] h-[1.22698rem] rounded-[0.2rem] bg-[#F6F5F8]"
                        >
                            <img className="mt-[0.16rem] w-[0.4231rem] h-[0.4231rem]" src={feature.icon}
                                 alt="feature"/>
                            <span
                                className={`mt-[0.08rem] whitespace-pre-wrap text-center ` +
                                    (feature[`${locale}Text`].includes('\n') ? 'leading-[0.51] ' : 'leading-[1] ') +
                                    (locale === 'zh' ? 'text-[0.28rem] !leading-normal' : 'text-[0.44rem]')}
                                style={{
                                    background: 'linear-gradient(99deg, rgba(227, 157, 255, 0.80) 4.55%, rgba(184, 133, 254, 0.80) 88.01%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >{feature[`${locale}Text`]}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-[0.37rem] flex justify-between">
                    {isExist(selectedId) ? (
                        <img
                            className="hover:animate-button cursor-pointer w-[1.69607rem] h-[1.19525rem]" src={AddedPng}
                            alt="added"
                            onClick={() => removeCart(selectedId)}
                        />
                    ) : (
                        <img
                            className="hover:animate-button cursor-pointer w-[1.69607rem] h-[1.19525rem]" src={AddPng}
                            alt="add"
                            onClick={() => addCart({
                                type,
                                groupId: selectedGroupId,
                                id: selectedId,
                                enName: selectedEnName,
                                zhName: selectedZhName,
                                quantity: 1
                            })}
                        />
                    )}
                    <img
                        className="hover:animate-button cursor-pointer w-[1.69607rem] h-[1.19525rem]" src={CartPng}
                        alt="cart"
                        onClick={() => setShopListModalOpen(true)}
                    />
                    <img
                        className="hover:animate-button cursor-pointer w-[4.30444rem] h-[1.1953rem]"
                        src={locale === 'zh' ? ShopZhPng : ShopEnPng} alt="shop"
                        onClick={() => setShopCartModalOpen(true)}
                    />
                </div>
            </div>
        </div>
    );
}