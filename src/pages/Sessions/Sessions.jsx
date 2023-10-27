import { useContext, useEffect, useState } from "react";
import { login } from "../../services/data";
import { useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from '../../context/authContext'
import * as con from '../../utils/GlobalConstants'

import "./sessions.css";

function SessionPage() {
    const authContext = useContext(AuthContext)
    const { token } = authContext;
    const { getToken, destroyToken } = useAuth();
    const navigate = useNavigate();
    if (token) {
      destroyToken()
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await login(username, password)
            if (response[con.STATUS] === con.OK){
                getToken({[con.TOKEN] : response[con.DATA][con.TOKEN]})
                navigate('/products')
            }
            if(!(response[con.DATA][con.CART])){
                
            }
        } catch (error){
            console.log(error)
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="string"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default SessionPage;
