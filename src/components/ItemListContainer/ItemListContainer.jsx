import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getData, getCategoryData } from "../../services/firebase";

function ItemListContainer() {
  let [isLoading, setIsLoading] = useState(true);
  let [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  const catchData = categoryId === undefined ? getData : getCategoryData;

  useEffect(() => {
    catchData(categoryId)
    .then((answer) => setProducts(answer))
    .finally(() => {
      setIsLoading(false);
    });
  }, [categoryId]);

  return (
    <ItemList isLoading={isLoading} products={products}/>);
}

export default ItemListContainer;
