const pizzas = [
    {id: 1, nombre: "muzza", ingredientes: ["harina","sal","aceite","levadura","muzzarella"], precio: "500"},
    {id: 2, nombre: "napo", ingredientes: ["harina","sal","aceite","levadura","ajo","tomate","muzzarella"], precio: "550"},
    {id: 3, nombre: "calabresa", ingredientes: ["harina","sal","aceite","levadura","muzzarella","salame"], precio: "550"},
    {id: 4, nombre: "cuatroQuesos", ingredientes: ["harina","sal","aceite","levadura","muzzarella","roquefort"], precio: "600"},
    {id: 5, nombre: "palmitos", ingredientes: ["harina","sal","aceite","levadura","muzzarella","palmitos"], precio: "700"},
    {id: 6, nombre: "especial", ingredientes: ["harina","sal","aceite","levadura","muzzarella","jamon","morron"], precio: "600"},
]



// // a)


pizzas.forEach(impares =>{
    if(impares.nombre === "muzza"){
        console.log("La pizza muzza es impar por que es ", impares.id);
    }
    if(impares.nombre === "calabresa"){
        console.log("La pizza calabresa es impar por que es ", impares.id);
    }
    if(impares.nombre === "palmitos"){
        console.log("La pizza palmitos es impar por que es ", impares.id);
    }
});



// // b)


pizzas.forEach(precios =>{
    if(precios.nombre === "muzza"){
        console.log("La pizza muzza vale $", precios.precio);
    }
    if(precios.nombre === "calabresa"){
        console.log("La pizza calabresa vale $", precios.precio);
    }
    if(precios.nombre === "napo"){
        console.log("La pizza napo vale $", precios.precio);
    }
});



// c)


pizzas.forEach(infoNombrePrecio =>{
    if(infoNombrePrecio.nombre === "muzza"){
        console.log("La pizza ",infoNombrePrecio.nombre ,"vale $", infoNombrePrecio.precio);
    }
    if(infoNombrePrecio.nombre === "calabresa"){
        console.log("La pizza ",infoNombrePrecio.nombre ,"vale $", infoNombrePrecio.precio);
    }
    if(infoNombrePrecio.nombre === "napo"){
        console.log("La pizza ",infoNombrePrecio.nombre ,"vale $", infoNombrePrecio.precio);
    }
    if(infoNombrePrecio.nombre === "cuatroQuesos"){
        console.log("La pizza ",infoNombrePrecio.nombre ,"vale $", infoNombrePrecio.precio);
    }
    if(infoNombrePrecio.nombre === "palmitos"){
        console.log("La pizza ",infoNombrePrecio.nombre ,"vale $", infoNombrePrecio.precio);
    }
    if(infoNombrePrecio.nombre === "especial"){
        console.log("La pizza ",infoNombrePrecio.nombre ,"vale $", infoNombrePrecio.precio);
    }
});


// d 


pizzas.forEach(ingredientesPizzas =>{
    if(ingredientesPizzas.nombre === "muzza"){
        const ingredientesMuzza = (ingredientesPizzas.ingredientes);
        console.log("La pizza de Muzza se prepara con " + ingredientesMuzza)
        
    }
    if(ingredientesPizzas.nombre === "calabresa"){
        const ingredientesCalabresa = (ingredientesPizzas.ingredientes)
        console.log("La pizza de Calabresa se prepara con " + ingredientesCalabresa)                
    }
    if(ingredientesPizzas.nombre === "napo"){
        const ingredientesNapo = (ingredientesPizzas.ingredientes)
        console.log("La pizza de Napo se prepara con " + ingredientesNapo)
    }
    if(ingredientesPizzas.nombre === "cuatroQuesos"){
        const ingredientesCuatroQ = (ingredientesPizzas.ingredientes)
        console.log("La pizza de Cuatro Quesos se prepara con " + ingredientesCuatroQ)
    }
    if(ingredientesPizzas.nombre === "palmitos"){
        const ingredientesPalmitos = (ingredientesPizzas.ingredientes)
        console.log("La pizza de Palmitos se prepara con " + ingredientesPalmitos)
    }
    if(ingredientesPizzas.nombre === "especial"){
        const ingredientesEspecial = (ingredientesPizzas.ingredientes)
        console.log("La pizza de Especial se prepara con " + ingredientesEspecial)
    }
});

