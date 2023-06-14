
// DATABASE
export const ID = "id"
export const PRODUCTS_DB_NAME = "products"
export const ORDER_DB_NAME = "orders"
export const CATEGORY = "category"
export const SKU = "SKU"
export const NAME = "name"
export const PRICE = "price"
export const DESCRIPTION = "description"
export const CHARACTERISTIC = "characteristic"
export const IMAGE_PATH = "image"
export const STOCK = "stock"
export const ITEMS = 'items'
export const BUYER = 'buyer'
export const BUYER_NAME = 'buyer_name'
export const BUYER_PHONE = 'buyer_phone'
export const BUYER_EMAIL = 'buyer_email'
export const BUY_DATE = 'buy_date'
export const TOTAL_PURCHASE_VALUE = 'total_purchase_value'


export const QUANTITY = "quantity"

export function FORMAT_MONEY_VALUE(value) {
    const formattedValue = value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    return formattedValue
}