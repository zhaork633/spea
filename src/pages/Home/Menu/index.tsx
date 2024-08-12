import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {ReactNode} from "react";
import {LanguagePopover} from "@/pages/Home/Language";
import {useLocale} from "@/i18n";

const I18nMenuPopoverConfig = {
    en: {
        item: "leading-[1] text-[0.44rem]",
    },
    zh: {
        item: "leading-[0.4rem] text-[0.24rem]",
    },
}

export const MenuPopover = ({onNavi, children}: { onNavi: (name: string) => void, children: ReactNode }) => {
    const {t, locale} = useLocale()
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent
                className={"flex flex-col justify-between min-w-0 w-[2.56rem] h-[2.08rem] px-[0.39rem] py-[0.16rem] rounded-[0.34rem] border-[0.05rem] border-[#C88EFF] " +
                    (locale === 'zh' ? 'font-kingnamype-yuanmo' : 'font-jomhuria')}>
                <div onClick={() => onNavi('toy')}
                     className={"cursor-pointer h-[0.4rem] p-0 text-[#C88EFF] " + I18nMenuPopoverConfig[locale].item}>{t('toy')}
                </div>
                <div onClick={() => onNavi('about')}
                     className={"cursor-pointer h-[0.4rem] p-0 text-[#C88EFF] " + I18nMenuPopoverConfig[locale].item}>{t('about-us')}
                </div>
                <div onClick={() => onNavi('contact')}
                     className={"cursor-pointer h-[0.4rem] p-0 text-[#C88EFF] " + I18nMenuPopoverConfig[locale].item}>{t('contact-us')}
                </div>
                <LanguagePopover>
                    <div
                        className={"cursor-pointer h-[0.4rem] p-0 text-[#C88EFF] " + I18nMenuPopoverConfig[locale].item}>
                        {t('language')}
                    </div>
                </LanguagePopover>
            </PopoverContent>
        </Popover>
    )
}