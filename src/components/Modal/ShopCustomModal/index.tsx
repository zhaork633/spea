import {BaseModal, BaseModalProps} from "@/components/Modal/BaseModal";
import PrivateSvg from "@/assets/Modal/private.svg";
import VoiceToneSvg from "@/assets/Modal/voice-tone.svg";
import CheckSvg from "@/assets/Modal/check.svg";
import MinusSvg from "@/assets/Modal/minus.svg";
import PlusSvg from "@/assets/Modal/plus.svg";
import {customAtom, useSetCustom} from "@/stores/custom.ts";
import {useAtomValue} from "jotai";
import {useLocale} from "@/i18n";

export const ShopCustomModal = (props: Pick<BaseModalProps, 'open' | 'onCancel'>) => {
    const {t, locale} = useLocale()
    const {privateState, voiceTone} = useAtomValue(customAtom)
    const {togglePrivate, setVoiceTone} = useSetCustom()
    return (
        <BaseModal {...props}>
            <div
                className="overflow-hidden w-[6.75rem] h-[2.53rem] bg-shop-custom"
                style={{backgroundSize: '100%'}}
            >
                <div
                    className="flex mt-[0.29rem] ml-[0.22rem] w-[6.33rem] h-[0.74rem] bg-shop-custom-item"
                    style={{backgroundSize: '100%'}}
                >
                    <img className="mt-[0.12rem] mx-[0.12rem] w-[0.5rem] h-[0.5rem]" src={PrivateSvg} alt="icon"/>

                    <div className="flex-1">
                        <div className={"ml-[0.08rem] text-[#DB99FF] " +
                            (locale === 'zh' ? 'mt-[0.03rem] font-inter font-black h-[0.35934rem] text-[0.28rem] leading-normal' : 'font-jomhuria h-[0.31rem] text-[0.48rem] leading-[1]')}>
                            {t('private-customization')}
                        </div>
                        <div className={"mt-[0.03rem] ml-[0.08rem] h-[0.31rem] font-inter text-[#E1ABFF] " +
                            (locale === 'zh' ? 'text-[0.18rem]' : 'text-[0.16rem] leading-[0.96]')}>
                            {t('private-customization-desc')}
                        </div>
                    </div>

                    <div
                        className="font-jomhuria mt-[0.2rem] mx-[0.21rem] w-[0.65rem] h-[0.38rem] pt-[0.04rem] rounded-[0.12rem] border-[0.01rem] border-[#E39DFF] outline-none text-[0.32rem] leading-[1] text-[#E39DFF] text-center"
                    >
                        100
                    </div>
                    <img className="cursor-pointer mt-[0.29rem] mr-[0.43rem] w-[0.21296rem] h-[0.21296rem]"
                         src={privateState ? CheckSvg : PlusSvg} alt="icon"
                         onClick={togglePrivate}
                    />
                </div>

                <div
                    className="flex mt-[0.13rem] ml-[0.22rem] w-[6.33rem] h-[0.74rem] bg-shop-custom-item"
                    style={{backgroundSize: '100%'}}
                >
                    <img className="mt-[0.12rem] mx-[0.12rem] w-[0.5rem] h-[0.5rem]" src={VoiceToneSvg} alt="icon"/>

                    <div className="flex-1">
                        <div className={"ml-[0.08rem] text-[#DB99FF] " +
                            (locale === 'zh' ? 'mt-[0.03rem] font-inter font-black h-[0.35934rem] text-[0.28rem] leading-normal' : 'font-jomhuria h-[0.31rem] text-[0.48rem] leading-[1]')}>
                            {t('voice-tone-customization')}
                        </div>
                        <div
                            className={"mt-[0.03rem] ml-[0.08rem] h-[0.31rem] font-inter text-[#E1ABFF] " +
                                (locale === 'zh' ? 'text-[0.18rem]' : 'text-[0.16rem] leading-[0.96] whitespace-pre-wrap')}>
                            {t('voice-tone-customization-desc')}
                        </div>
                    </div>

                    <img className="cursor-pointer mt-[0.29rem] w-[0.21296rem] h-[0.21296rem]"
                         src={MinusSvg} alt="icon" onClick={() => setVoiceTone(-1)}/>
                    <div
                        className="font-jomhuria mt-[0.2rem] mx-[0.21rem] w-[0.65rem] h-[0.38rem] pt-[0.04rem] rounded-[0.12rem] border-[0.01rem] border-[#E39DFF] outline-none text-[0.32rem] leading-[1] text-[#E39DFF] text-center"
                    >
                        {voiceTone}
                    </div>
                    <img className="cursor-pointer mt-[0.29rem] mr-[0.43rem] w-[0.21296rem] h-[0.21296rem]"
                         src={PlusSvg} alt="icon" onClick={() => setVoiceTone(1)}/>
                </div>
            </div>
        </BaseModal>
    )
}