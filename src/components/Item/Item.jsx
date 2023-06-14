import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import * as con from '../../utils/GlobalConstants'
import './Item.css';


const Item = ({ name, price, image, id, category }) => {

  const styleBotton = {
    backgroundColor: "black",
    color: "white",
    padding: "15px",
  }


  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={name} />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <small>{category}</small>
        <p className="product-price">{con.FORMAT_MONEY_VALUE(price)}</p>
      </div>
      <Link to={`/product/${id}`}>
      <Button styBtn={styleBotton}> Ver Detalle </Button>
      </Link>
    </div>
  );
};

export default Item;
