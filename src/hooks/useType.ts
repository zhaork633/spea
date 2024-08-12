import {useSearchParams} from "react-router-dom";
import {products, ProductType} from "@/constants";
import {CartItemProps} from "@/stores/cart.ts";

export const useType = (_type?: ProductType) => {
    const [params] = useSearchParams();
    const type = _type || params.get('type') as ProductType;
    const product = products.find(product => product.type === type)!;
    const groups = product.groups;
    const list = groups.flatMap(group => group.list);
    const length = list.length;

    const transfer = (item: CartItemProps) => {
        const group = groups.find(group => group.groupId === item.groupId)!;
        const itemInGroup = group.list.find(itemInGroup => itemInGroup.id === item.id)!;
        return {
            ...item,
            retailPrice: group.retailPrice,
            wholesalePrice: group.wholesalePrice,
            icon: itemInGroup.icon
        }
    }

    return {
        type,
        product,
        groups,
        list,
        length,
        transfer
    }
}