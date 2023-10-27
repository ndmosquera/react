import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../../services/data";

function ItemListContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts(categoryId);
      setProducts(data);
      setIsLoading(false);
    };

    fetchData();
  }, [categoryId]);

  return <ItemList isLoading={isLoading} products={products} />;
}

export default ItemListContainer;
