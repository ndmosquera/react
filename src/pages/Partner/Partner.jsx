import { Link } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import './PartnerPage.css'


function PartnerPage() {
    return (
        
        <div className="partner-container">
            <aside className="partner-sidebar">
                <Link className="category-links" to="/category/Cinta">
                Cintas
                </Link>
                <Link className="category-links" to="/category/Notas">
                Notas
                </Link>
                <Link className="category-links" to="/category/Dispensador">
                Dispensadores
                </Link>
                <Link className="category-links" to="/category/Pegante">
                Pegantes
                </Link>
                <Link className="category-links" to="/category/Silicona">
                Siliconas
                </Link>
            </aside>
            <h1 className="partner-tittle">Catalogo de Productos</h1>

            <ItemListContainer></ItemListContainer>
        </div>
    )
}

export default PartnerPage