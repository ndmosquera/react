
import Flex from "../Flex/Flex";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';


function ItemList({ products, isLoading }) {
    if (isLoading) return <Loader/>;

    if (products.length === 0) {
        Swal.fire(
            '¡Lo sentimos!',
            'No tenemos con estas caraterísticas',
            'error'
          )
        return (
            <>
            <div className="empty-cart-container">
            <strong>
                Te invitamos a revisar nuestro catagolo haciendo: <a href="/partner">CLIC AQUÍ</a>
            </strong>

            </div>
            </>
        )
    }
    return(
        <div>
            
            <Flex>
                {products.map((itemInArray) => (
                    <Item key={itemInArray.SKU} {...itemInArray}/>
                ))}
            </Flex>
        </div>
    );
}

export default ItemList