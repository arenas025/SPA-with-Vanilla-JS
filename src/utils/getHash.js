const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/"; //vamos a acceder a location, despues al hash, el slice es para que elimine el primer elemento, el localelowercase es para pasar en minuscula, el split lo que hace es convertir en array y le pasamos la regla ("/") de que elimine esos /, despues decimos que si no encuentra nada || entonces devueva al "/"
    
    export {getHash}