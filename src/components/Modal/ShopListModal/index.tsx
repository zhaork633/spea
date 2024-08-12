import {BaseModal, BaseModalProps} from "@/components/Modal/BaseModal";
import MinusSvg from '@/assets/Modal/minus.svg';
import PlusSvg from '@/assets/Modal/plus.svg';
import {useCart, useSetCart} from "@/stores/cart.ts";
import {useType} from "@/hooks/useType.ts";
import {MacScrollbar} from "mac-scrollbar";
import {useLocale} from "@/i18n";

export const ShopListModal = (props: Pick<BaseModalProps, 'open' | 'onCancel'>) => {
    const {t, locale} = useLocale()
    const {type, transfer} = useType()
    const {cart} = useCart()
    const {updateCart} = useSetCart()
    const list = cart.filter((item) => item.type === type).map(transfer)
    return (
        <BaseModal {...props}>
            <div
                className="overflow-hidden relative w-[8.16rem] h-[5.11rem] rounded-tl-[0.66rem] rounded-br-[0.66rem] bg-shop-list"
                style={{backgroundSize: '100%'}}
            >
                <div className={"mt-[0.25rem] ml-[0.24rem] h-[0.83408rem] leading-[1] text-[#B885FE] " +
                    (locale === 'zh' ? 'font-kingnamype-yuanmo text-[0.96rem]' : 'font-jomhuria text-[1.16rem]')}>
                    {t('shopping-list')}
                </div>

                <MacScrollbar className="max-h-[3.56rem] mt-[0.27rem] ml-[0.22rem]">
                    {list.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex w-[7.64rem] h-[0.74rem] bg-shop-list-item"
                            style={{backgroundSize: '100%', marginTop: index === 0 ? '0' : '0.2rem'}}
                        >
                            <img src={item.icon} alt="icon"/>

                            <div className="flex-1">
                                <div
                                    className={"line-clamp-1 mt-[0.1rem] ml-[0.28rem] h-[0.35764rem] leading-[1] text-[#DB99FF] " +
                                        (locale === 'zh' ? 'font-inter font-black text-[0.28rem]' : 'font-jomhuria text-[0.4rem]')}>{item[`${locale}Name`]}</div>
                                <div
                                    className="flex mt-[0.03rem] ml-[0.28rem] font-inter text-[0.12rem] leading-[1] text-[#E1ABFF]">
                                    <span
                                        className="min-w-[1.27775rem]">{t('retail-price')}：{item.retailPrice}</span>
                                    <span
                                        className="ml-[0.11rem] min-w-[1.15352rem]">{t('wholesale-price')}：{item.wholesalePrice}</span>
                                </div>
                            </div>

                            <img className="cursor-pointer mt-[0.26rem] w-[0.21296rem] h-[0.21296rem]" src={MinusSvg}
                                 alt="minus" onClick={() => updateCart(item.id, -1)}/>
                            <div
                                className="font-jomhuria mt-[0.18rem] mx-[0.09rem] w-[0.88732rem] h-[0.37268rem] pt-[0.04rem] rounded-[0.16rem] border-[0.01rem] border-[#E39DFF] text-[0.32rem] leading-[1] text-[#E39DFF] text-center">
                                {item.quantity}
                            </div>
                            <img className="cursor-pointer mt-[0.26rem] mr-[0.32rem] w-[0.21296rem] h-[0.21296rem]"
                                 src={PlusSvg} alt="plus" onClick={() => updateCart(item.id, 1)}/>
                        </div>
                    ))}
                </MacScrollbar>
            </div>
        </BaseModal>
    )
}