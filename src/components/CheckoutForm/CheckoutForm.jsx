import { useState } from "react";
import * as con from '../../utils/GlobalConstants'
import './checkoutForm.css';
import Button from "../Button/Button";

function CheckoutForm({onConfirm}) {
    const [userData, setUserData] = useState({
        [con.BUYER_NAME]: "",
        [con.BUYER_PHONE]: "",
        [con.BUYER_EMAIL]: "",      
    });

    const styleSubmit = {
        display: "block",
        width: "50%",
        padding: "10px",
        marginTop: "20px",
        backgroundColor:"#4caf50",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    }

    const styleReset = {
        display: "block",
        width: "50%",
        padding: "10px",
        marginTop: "20px",
        backgroundColor:"rgb(196, 30, 58)",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    }

    function onSubmit(){
        onConfirm(userData)

    }

    function onInputChange(evt) {
        const prop = evt.target.name;
        const value = evt.target.value;
        const newData = {...userData}
        newData[prop] = value
        setUserData(newData)
    }

    function handleReset() {
        setUserData({
        [con.BUYER_NAME]: "",
        [con.BUYER_PHONE]: "",
        [con.BUYER_EMAIL]: "", 
        });
    }


    return(
        <form className="checkout-form">
            <h2>Por favor, Ingresa tus datos para continuar con el pedido</h2>
                <div className="style-input">
                    <label>Nombre</label>
                    <input
                    type="text"
                    name={con.BUYER_NAME}
                    value={userData[con.BUYER_NAME]}
                    placeholder="Ingresa tu nombre" 
                    onChange={onInputChange}
                    />
                </div>
                <div className="style-input">
                    <label>Teléfono</label>
                    <input 
                    type="tel"
                    name={con.BUYER_PHONE}
                    value={userData[con.BUYER_PHONE]}
                    placeholder="Ingresa tu teléfono" 
                    onChange={onInputChange}
                     />
                </div>
                <div className="style-input">
                    <label>E-mail</label>
                    <input type="email"
                    name={con.BUYER_EMAIL}
                    value={userData[con.BUYER_EMAIL]}
                    placeholder="Ingresa tu correo electrónico" 
                    onChange={onInputChange}
                     />
                </div>
                <div className="confirmation-buttons">
                    <Button styBtn={styleSubmit} onClick={() => onSubmit()}>Crear Orden</Button>
                    <Button type="button" styBtn={styleReset} onClick={() => handleReset()}>Limpiar</Button>
                </div>

        </form>
    )
}

export default CheckoutForm