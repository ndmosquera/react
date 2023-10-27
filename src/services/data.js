import axios from 'axios';
import { useAuth } from '../context/authContext.jsx';
import * as con from '../utils/GlobalConstants.js'


export const getProducts = async (parameter) => {
    try {
        let URL = con.URL_SERVER + "/api/products"
        if(parameter){
            URL = URL + `/{"category":"${parameter}"}`
        }
      const response = await axios.get(URL);
      if(response[con.DATA][con.STATUS] === con.OK){
        return response[con.DATA][con.DATA];
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  export const login = async (username, password) => {
    try {
      let URL = con.URL_SERVER + "/api/auth/login"
      const response = await axios.post(URL, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const createCart = async() => {
    try {
      let URL = con.URL_SERVER + "/api/auth/login"
    } catch (error) {
      
    }
  }
  
