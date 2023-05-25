import { useEffect, useState } from "react";
import { productos } from "../../data/products";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css"

function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const { SKU } = useParams();

    useEffect(() => {
        const item = productos.find((item) => item.SKU === SKU);
        setProduct(item)
    }, [SKU]);

  function onAddToCart(count) {
    alert(`Agregaste ${count} unidades - ${product.nombre} al carrito`);
  }

   return(
    <div className="card-detail-container">
        <div className="card-img">
            <img src={product?.imagen} alt={product?.nombre} />
        </div>
        <div className="card-detail-detail">
            <h1>{product.nombre}</h1>
            <h2>$ {product.precio}</h2>
            <p>{product.descripcion}</p>
            <p>{product.caracteristica}</p>
            <ItemCount stock={5} onAddToCart={onAddToCart}></ItemCount>
        </div>
    </div>
   ) 
}

export default ItemDetailContainer;