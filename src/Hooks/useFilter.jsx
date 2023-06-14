import { useContext } from "react"
import { FiltersContext } from "../context/filterContext"

function useFilters () {
    const {filters, setFilters} = useContext(FiltersContext);
  
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.precio >= filters.minPrice
        )
      }) 
    }
    return {filters, filterProducts, setFilters}
  }

export default useFilters