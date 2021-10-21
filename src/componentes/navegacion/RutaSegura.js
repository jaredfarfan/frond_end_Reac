import React from "react";
import { useStateValue } from "../../contexto/store";
import { Route, Redirect } from "react-router-dom";
//...rest = propiedades que puede tener
function RutaSegura({ component: Component, ...rest }) {
    
  const [{ sesionUsuario }, dispatch] = useStateValue();
//render = pintar un componente de un lugar específico de la pantalla
  return (
    <Route 
        {...rest}
        //la condicion tiene que ver con el estado de mi sesion usuario
        render = { (props) =>
            //evaluo que exista como tal sesionUsuario 
            sesionUsuario ? (
                //si ese objecto existe ver si la sesion autenticado es true
                sesionUsuario.autenticado == true ? (
                    //pinte mi componente original
                    <Component {...props} {...rest} />
                )
                : <Redirect to="/auth/login" />
            ): <Redirect to="/auth/login" />
        }
    />
  );
}

export default RutaSegura;
