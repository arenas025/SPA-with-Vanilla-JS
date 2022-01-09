import {Header} from "../templates/Header";
import {Home} from "../pages/Home";
import {Character} from "../pages/Characters";
import {Error404} from "../pages/Error404";
import {getHash} from "../utils/getHash"
import {resolveRoutes} from "../utils/resolveRoutes";


const routes={ //aqui se crean las rutas donde se va a dirigir, entonces / dirige a HOME y asi
    "/":Home,
    "/:id:": Character,
    "/contact":"Contact",
};//routes es lo que va a mostrar, entonces si se crea una pagina para about y se pone aqui asi  ("/about":about) entonces si el link devuelve about, se va a dirigir a esa sección 

const router =async()=>{ //aqui se crean las rutas para hacer render 
    const header = null || document.getElementById("header"); // se crea una constante header que va a ser null o (||) va a leer el elemento por id que tenga header
    const content = null || document.getElementById("content"); // 
    
    header.innerHTML = await Header(); //aqui se entra al innerhtml del header que ya creamos, le damos await y le empujamos la función Header() que importamos de /templates

    let hash = getHash(); //se obtiene el has por medio de la funcion importada
    let route = await resolveRoutes(hash);//la ponemos await y llamamos a la funcion resolveroutes pasandole como parametro la variable hash que declaramos anteriormente 
    let render = routes[route] ? routes[route] : Error404; // se crea una variable render que va a tener un if ternario el cual es el siguiente: si hay algun valor que genere el routes[route] entonces se devuelve ese mismo valor, sino entonces error404 (el routes[route] lo que hace es verificar si hay algun valor allí de tal manera que si lo hay entonces lo devuelva igual )
    content.innerHTML = await render();  
}

export {router}