import {router} from "./routes";


window.addEventListener("load",router);//aqui se añade este listener para que cuando la pagina cargue, se llame a la funcion router que importamos
window.addEventListener("hashchange",router);

