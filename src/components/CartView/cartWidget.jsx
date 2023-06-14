import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


const cartNotStyle = {
  display: "flex",
}


const cartStyle = {
  fontSize: "1.3em",
  fontWeight: "bolder",
};

const CartStatusStyle = {
  width: "1.1em",
  height:" 1.1em",
  borderRadius: "50%",
  backgroundColor: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  top: "-10px",
  left: "-10px"
};

export default function CartWidget() {
  const {countProducts} = useContext(cartContext)

    return (
      <Link to="/cart" className="links">
      <div style={cartNotStyle}>
        <FontAwesomeIcon icon={faCartShopping} style={cartStyle}/>
        {countProducts() == 0 ? "" : (
          <div style={CartStatusStyle}>
            <div>{countProducts()}</div>
          </div>
        )} 

      </div>
      </Link>

    )
  }