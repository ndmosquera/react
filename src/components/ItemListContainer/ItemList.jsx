import Flex from "../Flex/Flex";
import Item from "../Item/Item";


function ItemList({ products }) {
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