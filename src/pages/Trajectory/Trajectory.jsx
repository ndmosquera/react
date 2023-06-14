import { Link } from "react-router-dom";

function TrajectoryPage() {
    return (
        <div className="home-container">
            <h1>ESTA ES LA PAGINA DE TRAYECTORIA</h1>
            <div className="warning">
                Pendiente por desarrollar
            </div>

            <strong>
                La tienda está en: <Link to="/partner">SOCIO DE NEGOCIO</Link>
            </strong>

        </div>
    )
}

export default TrajectoryPage