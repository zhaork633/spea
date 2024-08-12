import {BaseModal, BaseModalProps} from "@/components/Modal/BaseModal";
import SelectBgSvg from "@/assets/Modal/shop-select-bg.svg";
import MinusSvg from "@/assets/Modal/minus.svg";
import PlusSvg from "@/assets/Modal/plus.svg";
import {useEffect, useState} from "react";
import {ProductType} from "@/constants";
import {useType} from "@/hooks/useType.ts";
import {MacScrollbar} from "mac-scrollbar";
import {useCart, useSetCart} from "@/stores/cart.ts";
import {useLocale} from "@/i18n";

export const ShopSelectModal = ({type, ...props}: Pick<BaseModalProps, 'open' | 'onCancel'> & {
    type: ProductType
}) => {
    const {t, locale} = useLocale()
    const {groups} = useType(type)
    const {isExist, getQuantity} = useCart()
    const {addCart, updateCart} = useSetCart()
    const [orderedGroups, setOrderedGroups] = useState(groups)

    useEffect(() => {
        setOrderedGroups(groups)
    }, [groups])

    return (
        <BaseModal {...props}>
            <div
                className="relative w-[5.56rem] h-[2.93562rem] rounded-tl-[0.66rem] rounded-br-[0.66rem] border-[0.06rem] border-[#E39DFF] bg-shop-select"
                style={{background: 'linear-gradient(0deg, #FFF 0%, #FFF 100%), linear-gradient(0deg, #E7ACFF 0%, #E7ACFF 100%), linear-gradient(84deg, #DFB0FF 16.14%, #B885FE 52.62%)'}}
            >
                <img className="mt-[0.09rem] ml-[0.18rem] w-[4.90358rem] h-[2.71748rem]" src={SelectBgSvg} alt="bg"/>
                <div className="absolute inset-x-0 inset-y-0">
                    <div className="flex mt-[0.15rem] ml-[0.13rem]">
                        {orderedGroups.map((group, index) => (
                            <img
                                className={index === 0 ? 'w-[0.95rem] h-[0.95rem]' : 'cursor-pointer ml-[0.15rem] w-[0.71rem] h-[0.71rem]'}
                                key={group.groupId} src={group.icon} alt="img"
                                onClick={() => {
                                    const newGroups = [...orderedGroups]
                                    newGroups.splice(index, 1)
                                    newGroups.unshift(group)
                                    setOrderedGroups(newGroups)
                                }}/>
                        ))}
                    </div>

                    {/*TODO: scroll*/}
                    <MacScrollbar className="max-h-[1.52rem] mt-[0.05rem] ml-[0.15rem]">
                        {orderedGroups[0].list.map((item, index) => (
                            <div
                                key={item.id}
                                className="flex w-[5.12rem] h-[0.74rem] bg-shop-select-item"
                                style={{backgroundSize: '100%', marginTop: index === 0 ? '0' : '0.04rem'}}
                            >
                                <img src={item.icon} alt="icon"/>

                                <div className="flex-1">
                                    <div
                                        className={"line-clamp-1 ml-[0.08rem] leading-[1] text-[#DB99FF] " +
                                            (locale === 'zh' ? 'mt-[0.08rem] h-[0.35764rem] font-inter font-black text-[0.28rem]' : 'mt-[0.14rem] h-[0.24rem] ont-jomhuria text-[0.4rem]')}>
                                        {item[`${locale}Name`]}
                                    </div>
                                    <div
                                        className="flex mt-[0.08rem] ml-[0.08rem] h-[0.35493rem] font-inter text-[0.12rem] leading-[1] text-[#E1ABFF]">
                                        <span
                                            className="min-w-[1.15352rem]">{t('retail-price')}：{orderedGroups[0].retailPrice}</span>
                                        <span
                                            className="ml-[0.11rem] min-w-[1.15352rem]">{t('wholesale-price')}：{orderedGroups[0].wholesalePrice}</span>
                                    </div>
                                </div>

                                <img className="cursor-pointer mt-[0.26rem] w-[0.21296rem] h-[0.21296rem]"
                                     src={MinusSvg} alt="minus" onClick={() => updateCart(item.id, -1)}/>
                                <div
                                    className={"font-jomhuria mt-[0.18rem] mx-[0.09rem] w-[0.88732rem] h-[0.37268rem] pt-[0.04rem] rounded-[0.16rem] border-[0.01rem] border-[#E39DFF] outline-none text-[0.32rem] leading-[1] text-[#E39DFF] text-center"}
                                >
                                    {getQuantity(item.id)}
                                </div>
                                <img className="cursor-pointer mt-[0.26rem] mr-[0.28rem] w-[0.21296rem] h-[0.21296rem]"
                                     src={PlusSvg} alt="plus"
                                     onClick={() => {
                                         if (!isExist(item.id)) {
                                             addCart({
                                                 type,
                                                 groupId: orderedGroups[0].groupId,
                                                 id: item.id,
                                                 enName: item.enName,
                                                 zhName: item.zhName,
                                                 quantity: 1
                                             })
                                         } else {
                                             updateCart(item.id, 1)
                                         }
                                     }}
                                />
                            </div>
                        ))}
                    </MacScrollbar>
                </div>
            </div>
        </BaseModal>
    )
}