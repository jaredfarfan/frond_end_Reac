//definir los valores a almacenar
export const initialState = {
    usuario: {
      nombreCompleto: "",
      email: "",
      username: "",
      foto: "",
    },
    autenticado: false,
  };
//logina que va ejecutar
const sesionUsuarioReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INICIAR_SESION":
        return {
          ...state,
          usuario: action.sesion,
          autenticado: action.autenticado,
        };
      case "SALIR_SESION":
          return {
              ...state,
              usuario: action.nuevoUsuario,
              autenticado : action.autenticado
          };
      case "ACTUALIZAR_USUARIO" :
          return {
              ...state,
              usuario : action.nuevoUsuario,
              autenticado : action.autenticado
          }
      default : return state;
    }
  };
  
//exportar la funcion

export default sesionUsuarioReducer;
