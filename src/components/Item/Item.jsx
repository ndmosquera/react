import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({ nombre, precio, imagen, SKU, categoria }) => {

  const styleBotton = {
    backgroundColor: "black",
    color: "white",
    padding: "15px",
  }


  return (
    <div className="product-card">
      <img className="product-image" src={imagen} alt={nombre} />
      <div className="product-details">
        <h2 className="product-name">{nombre}</h2>
        <small>{categoria}</small>
        <p className="product-price">${precio}</p>
      </div>
      <Link to={`/product/${SKU}`}>
      <Button styBtn={styleBotton}> Ver Detalle </Button>
      </Link>

      <ItemCount stock={5}></ItemCount>


    </div>
  );
};

export default Item;
