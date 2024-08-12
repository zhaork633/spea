import {forwardRef, MouseEvent, useImperativeHandle, useRef, useState} from "react";

export type SnailListRef = {
    scrollTo: (idx: number) => void
}

export const SnailList = forwardRef(({list, onSelect}: { list: any[], onSelect: (idx: number) => void }, ref) => {
    const imageListRef = useRef<HTMLDivElement>(null); // 创建一个 ref 来引用图片列表元素
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [maxTranslateX, setMaxTranslateX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const handleMouseDown = (e: MouseEvent) => {
        if (!imageListRef.current) return
        const els = document.querySelectorAll('.scroll-image')
        if (els.length <= 6) return;
        setIsDragging(true);
        setStartX(e.pageX);
        setMaxTranslateX(imageListRef.current.scrollWidth / rootFontSize - 6.8485);
        setTranslateX(parseFloat(getComputedStyle(imageListRef.current).transform.split(',')[4] || '0') / rootFontSize);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !imageListRef.current) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = x - startX; // 左移负数，右移正数
        const tx = Math.max(Math.min(translateX + (walk / rootFontSize), 0), -maxTranslateX);
        console.log(translateX, walk / rootFontSize, maxTranslateX, tx);
        imageListRef.current.style.transform = `translateX(${tx}rem)`;
    };

    const scrollTo = (idx: number) => {
        if (!imageListRef.current) return;
        const els = document.querySelectorAll('.scroll-image')
        if (els.length <= 6) return;
        // 判断元素是否在 imageListRef 的可视区内
        const el = els[idx];
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.left > 0 && rect.right < 6.8485 * rootFontSize) return;
        const maxTranslateX = imageListRef.current.scrollWidth / rootFontSize - 6.8485
        const x = Math.max(Math.min(-idx * 1.1575, 0), -maxTranslateX);
        imageListRef.current.style.transform = `translateX(${x}rem)`;
    }

    useImperativeHandle(ref, () => {
        return {
            scrollTo
        }
    })

    return (
        <div className="flex justify-center select-none w-auto max-w-[6.8485rem] mx-auto overflow-hidden">
            <div
                className="mt-[0.26rem] flex pr-[0.01rem]"
                ref={imageListRef} // 将 ref 绑定到图片列表元素
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                {list.map((item, index) => (
                    <img key={index} style={{marginLeft: index === 0 ? '0' : '0.1rem'}}
                         className="scroll-image cursor-pointer w-[1.05775rem] h-[1.05775rem] border-[0.02rem] border-[#676767] rounded-[0.2rem]"
                         src={item.icon} alt="snail" onClick={() => onSelect(index)}/>
                ))}
            </div>
        </div>
    )
})