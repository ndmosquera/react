import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";
import { getItemData } from "../../services/firebase";
import * as con from "../../utils/GlobalConstants";
import "./ItemDetailContainer.css"
import Loader from "../Loader/Loader";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

function ItemDetailContainer() {
    const [errors, setErrors] = useState(null);
    const [product, setProduct] = useState(null);
    const [countInCart, setCountInCart] = useState(0);
    const navigate = useNavigate();

    const { addProduct} = useContext(cartContext)

    function onAddToCart(count) {
      if (count >= 1) {
       addProduct(product, count);
        setCountInCart(count);
        Swal.fire({
          title: 'Producto añadido al carrito',
          showDenyButton: true,
          confirmButtonText: 'Ir al Carrito',
          denyButtonText: 'Seguir comprando',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/cart")
          } else if (result.isDenied) {
            navigate("/partner")
          }
        });
      } else {
        Swal.fire(
          '¡Lo sentimos!',
          'En este momento no contamos con este producto',
          'warning'
        )
        navigate("/partner")
      }

      };

    const id = useParams().id;

    useEffect(() => {
      getItemData(id)
        .then((answer) => {
          setProduct(answer);
        })
        .catch((error) => {
          setErrors(error.message);
        });
    }, [id]);

    if (errors)
      return (
        <div>
          <h1>Error</h1>
          <p>{errors}</p>
        </div>
      );

    if (product){
    return(
        <div className="card-detail-container">
            <div className="card-img">
                <img src={product[con.IMAGE_PATH]} alt={product[con.NAME]} />
            </div>
            <div className="card-detail-detail">
                <h1>{product[con.NAME]}</h1>
                <h2>{con.FORMAT_MONEY_VALUE(product[con.PRICE])}</h2>
                <p>{product[con.DESCRIPTION]}</p>
                <p>{product[con.CHARACTERISTIC]}</p>
                <ItemCount onAddToCart={onAddToCart} stock={product[con.STOCK]} />
            </div>
        </div>
    )}
    return (
        <div className="card-detail-container">
            <Loader />
        </div>
    )
}

export default ItemDetailContainer;