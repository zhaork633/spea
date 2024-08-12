import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// 最多保留一位小数，如果是0则不显示
export function priceFormat(price: number) {
    return Math.round(price)
    // return price.toFixed(1).replace(/\.0$/, '')
}

// 判断是否是移动端
export function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
