import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {useSetLocale} from "@/i18n";
import {ReactNode} from "react";

export const LanguagePopover = ({children}: { children: ReactNode }) => {
    const setLocale = useSetLocale()
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent
                className="flex flex-col justify-between w-[2.56rem] h-[1.38rem] px-[0.39rem] py-[0.16rem] rounded-[0.34rem] border-[0.05rem] border-[#C88EFF]">
                <div onClick={() => setLocale('en')}
                     className="font-jomhuria cursor-pointer h-[0.4rem] text-[0.44rem] leading-[1] text-[#C88EFF]">English
                </div>
                <div onClick={() => setLocale('zh')}
                     className="font-kingnamype-yuanmo cursor-pointer h-[0.4rem] text-[0.22rem] leading-[0.4rem] text-[#C88EFF]">简体中文
                </div>
            </PopoverContent>
        </Popover>
    )
}