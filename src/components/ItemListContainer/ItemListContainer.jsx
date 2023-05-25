import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../data/products";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { categoryid } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryid) {
      const filterProducts = productos.filter((item) => item.categoria === categoryid);
      setProducts(filterProducts);
    } else {
      setProducts(productos);
    }
  }, [categoryid]);

  return <ItemList products={products} />;
}

export default ItemListContainer;
