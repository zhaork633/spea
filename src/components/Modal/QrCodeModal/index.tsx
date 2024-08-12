import {BaseModal, BaseModalProps} from "@/components/Modal/BaseModal";
import QrCodePng from "@/assets/Modal/qrcode.png";

export const QrCodeModal = (props: Pick<BaseModalProps, 'open' | 'onCancel'>) => {
    return (
        <BaseModal {...props}>
            <img className="w-[2.86rem] h-[3.14rem]" src={QrCodePng} alt="qrcode"/>
        </BaseModal>
    )
}