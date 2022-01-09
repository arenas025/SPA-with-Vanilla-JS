const resolveRoutes=(route)=>{
    if(route.length <= 3){ //como nuestra api no tiene más de 1000 personajes entonces validamos que si la cantidad de caracteres de es menor que 3 o sea un numero de 1 a 1000 vamos a hacer lo siguiente
        let validRoute = route === "/" ? route : "/:id:";  //se crea una let que va a tener un if ternario: si la ruta es === "/" entonces va a mostrar route y si no entonces muestra "/:id"
        return validRoute
    }
    return `/${route}`; 
};

export {resolveRoutes}