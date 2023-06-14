import { createContext, useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import * as con from '../utils/GlobalConstants'

export const cartContext = createContext({cart: []});

export function CartContextProvider({children}){
    const [cart, setCart] = useState([]);

    function isInCart(id) {
        return cart.some((product) => product[con.ID] === id);
      }

    function addProduct(product, count){
        const newCart = [...cart];

        if (isInCart(product[con.ID])) {
            setCart(
                cart.map((cartProduct) => {
                    if (cartProduct[con.ID] === product[con.ID]){
                        return {...cartProduct, [con.QUANTITY]: cartProduct[con.QUANTITY] + count }
                    } else {
                        return {...cartProduct}
                    }
                })
            );
        } else {
            newCart.push( {...product, [con.QUANTITY]:count})
            setCart(newCart)
        }
    }

    function countProducts(){
        let total = 0;
        cart.forEach(product => {
            total += product[con.QUANTITY]
        });
        return total;
    }

    function totalPrice(){
        let total = 0;
        cart.forEach(product => {
            total += product[con.QUANTITY] * product[con.PRICE]
        });
        return total;
    }

    function clearCart(){
        setCart([])
    }

    function removeProduct(product){
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Eliminaras este producto del carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '¡Eliminado!',
                'Se quitó el producto del carrito',
                'success'
              )
              setCart(prevState => prevState.filter(item => item[con.ID] !== product[con.ID]));
            }
          });
    }

    function substractProduct(product, count){

        if (isInCart(product[con.ID])) {
            setCart(
                cart.map((cartProduct) => {
                    if (cartProduct[con.ID] === product[con.ID]){
                        return {...cartProduct, [con.QUANTITY]: cartProduct[con.QUANTITY] - count }
                    } else {
                        return {...cartProduct}
                    }
                })
            );
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Este Producto no esta en el carrito',
                'error'
              )
        }
    }

    return(
        <cartContext.Provider value={{
            cart,
            setCart,
            addProduct,
            countProducts,
            clearCart,
            removeProduct,
            totalPrice,
            substractProduct
            }}>
            {children}
        </cartContext.Provider>
    )
}