import { useContext } from "react"
import { cartContext } from "../context/cartContext"


export const useCart = () => {
    const cart = useContext(cartContext)
}