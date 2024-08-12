import {MouseEvent, ReactNode, useEffect, useRef} from 'react'
import {createPortal} from "react-dom";

export type BaseModalProps = {
    open: boolean
    onCancel: VoidFunction
    children: ReactNode
}
export const BaseModal = ({open, onCancel, children}: BaseModalProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const handleClick = (e: MouseEvent) => {
        // 如果点击的是 modal 外部，则关闭 modal
        if (e.target === e.currentTarget) {
            const modal = ref.current
            if (!modal) return
            modal.classList.add('animate-modal-out')
            modal.addEventListener('animationend', onCancel)
        }
    }
    useEffect(() => {
        if (open) {
            const modal = ref.current
            if (!modal) return
            setTimeout(() => {
                modal.classList.remove('animate-modal-in')
            }, 500)
        }
    }, [open])
    if (!open) return null
    return createPortal(
        <div
            className="fixed z-[1000] inset-x-0 inset-y-0 bg-[rgba(0,0,0,.45)] flex justify-center items-center"
            onClick={handleClick}
        >
            <div ref={ref} className="animate-modal-in">
                {children}
            </div>
        </div>, document.body
    )
}