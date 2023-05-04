import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"


const cartNotStyle = {
  display: "flex",


}


const cartStyle = {
  fontSize: "1.5em",
  fontWeight: "bolder",

};

const CartStatusStyle = {
  width: "1.3em",
  height:" 1.3em",
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
    return (
      <div style={cartNotStyle}>
        <FontAwesomeIcon icon={faCartShopping} style={cartStyle}/>
        <div style={CartStatusStyle}>
          <div>!</div>
        </div>
      </div>
      
    )
  }