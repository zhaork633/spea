import {MacScrollbar} from "mac-scrollbar";
import {useNavigate} from "react-router-dom";
import BackSvg from "@/assets/Detail/back.svg";
import {ToyDetail} from "@/pages/Detail/Toy";
import {useType} from "@/hooks/useType.ts";
import {CommonDetail} from "@/pages/Detail/Common";
import {TalkieDetail} from "@/pages/Detail/Talkie";
import {BaseDetail} from "@/pages/Detail/Base";

export const Detail = () => {
    const {type} = useType();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <MacScrollbar className="relative w-full h-full">
            {/*返回按钮*/}
            <img
                className="hover:animate-button absolute cursor-pointer mt-[0.35rem] ml-[0.48rem] w-[0.53945rem] h-[0.47599rem]"
                src={BackSvg} alt="back" onClick={handleBack}/>

            <CommonDetail/>
            {type === 'toy' && <ToyDetail/>}
            {type === 'talkie' && <TalkieDetail/>}
            {type === 'base' && <BaseDetail/>}
        </MacScrollbar>
    );
}