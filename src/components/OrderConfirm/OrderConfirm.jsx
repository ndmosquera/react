import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getOrderData } from "../../services/firebase";
import * as con from '../../utils/GlobalConstants'
import './OrderConfirm.css'
import Loader from "../Loader/Loader";

function OrderConfirm() {
    const orderId = useParams().orderId;
    const [order, setOrder] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getOrderData(orderId)
        .then((answer) => {
            setOrder(answer);
        })
        .catch((error) => {
            setErrors(error.message);
        });
    }, [orderId]);

    if (errors)
    return (
      <div>
        <h1>Error</h1>
        <p>{errors}</p>
      </div>
    );

    if(order) {
    return (
        <div className="confirmation-container">
            <h2>¡Felicidades {order[con.BUYER][con.BUYER_NAME]}!</h2>
            <p>Tu orden se ha recibido correctamente</p>
            <strong>
                La referencia para que puedas hacer seguimiento de tu pedido es: <span>{orderId}</span>
            </strong>

        </div>
    )}
    return (
        <div className="confirmation-container">
            <Loader />
        </div>
    )
}

export default OrderConfirm