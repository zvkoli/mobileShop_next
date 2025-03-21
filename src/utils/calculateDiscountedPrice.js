import { englishToPersianNumber } from "./englishToPersianNumber";

export const calculateDiscountedPrice = (price , discount) => {
    const discountedPrice = price * (1 - discount / 100);
    return englishToPersianNumber(discountedPrice.toFixed(0));
}