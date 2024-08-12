import {atom, useAtomValue, useSetAtom} from "jotai";
import {ProductType} from "@/constants";
import {useType} from "@/hooks/useType.ts";
import {customAtom} from "@/stores/custom.ts";

export type CartItemProps = {
    type: ProductType
    groupId: string
    id: string
    enName: string
    zhName: string
    quantity: number
}
const cartAtom = atom<CartItemProps[]>([])

export const useCart = () => {
    const cart = useAtomValue(cartAtom)

    // 判断商品是否存在
    const isExist = (id: string) => cart.some((cartItem) => cartItem.id === id)
    // 获取商品数量
    const getQuantity = (id: string) => cart.find((cartItem) => cartItem.id === id)?.quantity || 0

    return {
        cart,
        isExist,
        getQuantity
    }
}

export const useSetCart = () => {
    const setCart = useSetAtom(cartAtom)

    // 添加商品，如果已经有则更新数量
    const addCart = (item: CartItemProps) => {
        setCart((prev) => {
            const idx = prev.findIndex((cartItem) => cartItem.id === item.id)
            if (idx === -1) {
                return [...prev, item]
            }
            const newCart = [...prev]
            newCart[idx].quantity += item.quantity
            return newCart
        })
    }

    // 删除商品
    const removeCart = (id: string) => {
        setCart((prev) => prev.filter((cartItem) => cartItem.id !== id))
    }

    // 更新商品数量
    const updateCart = (id: string, quantity: 1 | -1) => {
        setCart((prev) => {
            const idx = prev.findIndex((cartItem) => cartItem.id === id)
            if (idx === -1) return prev
            const newQuantity = prev[idx].quantity + quantity
            if (newQuantity <= 0) {
                return prev.filter((cartItem) => cartItem.id !== id)
            }
            const newCart = [...prev]
            newCart[idx].quantity = newQuantity
            return newCart
        })
    }

    return {
        addCart,
        removeCart,
        updateCart
    }
}

export const usePrice = () => {
    const {cart} = useCart()
    const {privateState, voiceTone} = useAtomValue(customAtom)
    const {transfer: toyTransfer} = useType('toy')
    const {transfer: talkieTransfer} = useType('talkie')
    const {transfer: baseTransfer} = useType('base')

    const toyPrice = cart.filter(item => item.type === 'toy').map(toyTransfer).reduce((acc, cur) => {
        return {
            retailPrice: acc.retailPrice + cur.retailPrice * cur.quantity,
            wholesalePrice: acc.wholesalePrice + cur.wholesalePrice * cur.quantity
        }
    }, {retailPrice: 0, wholesalePrice: 0})
    const talkiePrice = cart.filter(item => item.type === 'talkie').map(talkieTransfer).reduce((acc, cur) => {
        return {
            retailPrice: acc.retailPrice + cur.retailPrice * cur.quantity,
            wholesalePrice: acc.wholesalePrice + cur.wholesalePrice * cur.quantity
        }
    }, {retailPrice: 0, wholesalePrice: 0})
    const basePrice = cart.filter(item => item.type === 'base').map(baseTransfer).reduce((acc, cur) => {
        return {
            retailPrice: acc.retailPrice + cur.retailPrice * cur.quantity,
            wholesalePrice: acc.wholesalePrice + cur.wholesalePrice * cur.quantity
        }
    }, {retailPrice: 0, wholesalePrice: 0})

    const customPrice = (privateState ? 100 : 0) + voiceTone * 150
    const totalPrice = {
        retailPrice: toyPrice.retailPrice + talkiePrice.retailPrice + basePrice.retailPrice + customPrice,
        wholesalePrice: toyPrice.wholesalePrice + talkiePrice.wholesalePrice + basePrice.wholesalePrice + customPrice
    }
    return {
        toyPrice,
        talkiePrice,
        basePrice,
        customPrice,
        totalPrice
    }
}