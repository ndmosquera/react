import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContext"
import { createOrderWithStockUpdate } from "../../services/firebase";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import * as con from "../../utils/GlobalConstants"
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import './CartView.css'
import CheckoutForm from "../CheckoutForm/CheckoutForm";


function CartView () {
    const { cart, removeProduct, totalPrice, clearCart, addProduct, substractProduct } = useContext(cartContext);
    const [showForm, setShowFrom] = useState(false);
    const navigateTo = useNavigate();

    const styleButtonSub = {
        backgroundColor: "red",
        fontSize: "10px",
        borderRadius: "40%",
        width: "auto",
        height: "auto"
    }

    const styleButtonAdd = {
        backgroundColor: "green",
        fontSize: "10px",
        borderRadius: "40%",
        width: "auto",
        height: "auto"
    }

    const deleteButton = {
        backgroundColor: "red",
        margin: "0px 20px",
        fontSize: "15px"
    }

    const confirmButton = {
        backgroundColor: "rgba(215, 222, 41)",
        margin: "30px 0px",
        fontSize: "15px",
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 'bolder'
    }

    function handleAdd(product){
        if (product[con.QUANTITY] + 1 <= product[con.STOCK]){
            addProduct(product, 1);
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'No tenemos más unidades',
                'warning'
              )
        }
    }

    function handleSubstract(product){
        if (product[con.QUANTITY] - 1 > 0){
            substractProduct(product, 1);
        } else if (product[con.QUANTITY] - 1 === 0) {
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
                  removeProduct(product);
                }
              });
        }
    }

    function handleClear(){
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Eliminaras todos los productos del carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                '¡Eliminado!',
                'El carrito está vacio',
                'success'
                )
                clearCart();
            }
            });
    }

    function handleShow(){
        setShowFrom(true);
    }


    async function handleConfirm(userData) {
        const order = {
            [con.ITEMS]: cart,
            [con.BUYER]: userData,
            [con.BUY_DATE]: new Date(),
            [con.TOTAL_PURCHASE_VALUE]: totalPrice()
        };
        try {
            const id = await createOrderWithStockUpdate(order);
            clearCart()
            navigateTo(`/order-confirmation/${id}`);
        } catch (error) {
            alert(error)
        }
    }

    
    return (
        <>  
        {cart.length === 0 ? (
            <>
            <div className="empty-cart-container">
            <h2>TU CARRITO ESTÁ VACIO</h2>

            <strong>
                Te invitamos a revisar nuestro catagolo haciendo: <Link to="/products">CLIC AQUÍ</Link>
            </strong>

        </div>
            </>

        ) : (
        <>
        <section className="cart-container">
        <h2 className='section-tittle'>CARRITO DE COMPRAS</h2>
        <table>
            <thead>
            <tr>
                <th>PRODUCTO</th>
                <th>CANTIDAD</th>
                <th>PRECIO</th>
                <th>IMPORTE</th>
                <th>ELIMINAR</th>
            </tr>
            </thead>
            <tbody>
            {cart.map(product => (
                <tr key={product[con.ID]}>
                    <td>{product[con.NAME]}</td>
                    <td>
                        <Button styBtn={styleButtonAdd} onClick={() => handleAdd(product)}>+1</Button>
                        {product[con.QUANTITY]}
                        <Button styBtn={styleButtonSub} onClick={() => handleSubstract(product)}>-1</Button>
                        </td>
                    <td>{con.FORMAT_MONEY_VALUE(product[con.PRICE])}</td>
                    <td>{con.FORMAT_MONEY_VALUE(product[con.PRICE]*product[con.QUANTITY])} </td>
                    <td><Button styBtn={deleteButton} onClick={() => removeProduct(product)}>X</Button></td>
                </tr>
            ))}
            </tbody>
            <thead>
                <tr>
                    <th colSpan="3">TOTAL</th>
                    <th>{con.FORMAT_MONEY_VALUE(totalPrice())}</th>
                    <th><Button styBtn={deleteButton} onClick={() => handleClear()}>Eliminar</Button></th>
                    
                </tr>
            </thead>
        </table>

        <Button styBtn={confirmButton} onClick={() => handleShow()}>Finalizar compra</Button>
         </section>

         {showForm && <CheckoutForm onConfirm={handleConfirm}></CheckoutForm>}
         
        </>
        )}
        </>
    )
}

export default CartView