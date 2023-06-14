import { useState } from "react";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import * as con from '../../utils/GlobalConstants'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import "./ItemCount.css"

function ItemCount(props) {
    let [count, setCount] = useState(0);

    function handleAdd(){
        if (count < props[con.STOCK]){
            setCount(count + 1);
        } else if (count + 1 > props[con.STOCK]) {
            Swal.fire(
                '¡Lo sentimos!',
                'No tenemos más unidades',
                'warning'
              )
        } else if (count === 0){
            Swal.fire(
                '¡Lo sentimos!',
                'En este momento no contamos con este producto',
                'warning'
            )
        }
    } 

    function handleSubstract() {
        if (count > 1) setCount(count - 1);
    }
    

    const styleBottonSub = {
        backgroundColor: "red",
        margin: "0px 20px",
        fontSize: "15px"
      }

    const styleBottonAdd = {
        backgroundColor: "green",
        margin: "0px 20px",
        fontSize: "15px"
    }

    const styleBottonAddCart = {
        backgroundColor: "black",
        margin: "10px 20px",
        fontSize: "15px"
    }

    return (
    <div className="itemcount-container">
        <div className="itemcount-control">
            <Flex>
                <Button styBtn={styleBottonSub} onClick={handleSubstract}>
                    -
                </Button>
                <span className="itemcount-count">{count}</span>
                <Button styBtn={styleBottonAdd} onClick={handleAdd}>
                    +
                </Button>
            </Flex>
        </div>

        <div className="cart-button">
            <Button
            styBtn={styleBottonAddCart}
            onClick={() =>{
                props.onAddToCart(count)
            }}
            >
                Agregar al Carrito
            </Button>
        </div>


        
    </div>



    )
}

export default ItemCount