

const {vendedoras, sucursales, ventas, precios} = local

// precioMaquina(componentes, precios): dado una lista de componentes y una lista de precios, devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
//TERMINADO!!!
const precioMaquina = (componentes, precios) => {
   
    const precioPorComponente = precio => componentes.includes(precio.componente)
    console.log(local.precios.filter(precioPorComponente))

    const precioTotalMaquina = (componente1, componente2, precio) => {
        return componente1.precio + componente2.precio
    }
        
    return local.precios
    .filter(precioPorComponente)
    .reduce(precioTotalMaquina)
}

const ventaTotal = (componentes, precios) => {
     
    const aVentas = venta => venta.componentes  
    console.log(local.ventas.map(aVentas))
    
    const precioTotalMaquina = (ventaParcial, venta) => ventaParcial + venta
    console.log(local.ventas.filter(precioTotalMaquina))

    return local.ventas
    .map(aVentas)
    .map(precioMaquina)
    .reduce(precioTotalMaquina)
}


// cantidadVentasComponente(componente, ventas): dado un componente y una lista de ventas, devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió.
//TERMINADO!!!
const cantidadVentasComponente = (componente, ventas) =>{
    
      const componenteVendido = (cuentaParcial, componente) => {
        cuentaParcial[componente] =+ cuentaParcial[componente] + 1 || 1
        return cuentaParcial
    }
    const cantidadDeVeces = (listaParcial, componente) => [
        ...listaParcial,
        ...componente.componentes
    ]
    const vendidos = ventas.reduce(cantidadDeVeces, []).reduce(componenteVendido, {})

    return vendidos[componente]
}

// vendedoraDelMes(mes, anio, local): dados dos parámetros numéricos (mes, anio) y un objeto local, devuelve el nombre de la vendedora que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const vendedoraDelMes = (mes, anio, local) => {
    const aMes = venta => venta.fecha.getMonth() + 1 === mes
    const aAnio =  venta => venta.fecha.getFullYear() === anio
    
    const ventasPorVendedora = venta => venta.nombreVendedora

    const aVentas = venta => venta.componentes  
    const precioTotalMaquina = (ventaParcial, venta) => ventaParcial + venta

    const filtroPorVentas = (cuentaParcial, componente) => {
        cuentaParcial[venta.componente] =+ cuentaParcial[venta.componente] + 1 || 1
        return cuentaParcial
    }
    
    const conMayorVenta = (conMasVentas, vendedora) => lasVendedoras[vendedora] > lasVendedoras[conMasVentas] ? vendedora : conMasVentas
    
    const lasVendedoras = local.ventas
    .filter(aMes)
    .filter(aAnio)
    .reduce(ventasVendedora(nombre, local))
    console.log(lasVendedoras)
    return Object
    .keys(lasVendedoras)
    .reduce(conMayorVenta)
}

// const ventasVendedora = (nombre, local) => {

//     const aVendedora = venta => venta.nombreVendedora === nombre
//     const aVentas = venta => venta.componentes  
//     const precioTotalMaquina = (ventaParcial, venta) => ventaParcial + venta

//     return local.ventas
//     .filter(aVendedora)
//     .map(aVentas)
//     .map(precioMaquina)
//     .reduce(precioTotalMaquina)
// }



// const deMayorVenta = (masVendido, componentes) => losComponentes[componentes] > losComponentes[masVendido] ? componentes : masVendido
// return Object
// .keys(losComponentes)
// .reduce(deMayorVenta)


// ventasMes(mes, anio, local): obtiene el valor total de las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
//TERMINADO!!!
const ventasMes = (mes, anio, local) => {
    const ventasEnElMes = venta => venta.fecha.getMonth() +1 === mes
    const ventaEnElAnio =  venta => venta.fecha.getFullYear() === anio
    const aVentas = venta => venta.componentes  
    const precioTotalMaquina = (ventaParcial, venta) => ventaParcial + venta

    return local.ventas
    .filter(ventasEnElMes)
    .filter(ventaEnElAnio)
    .map(aVentas)
    .map(precioMaquina)
    .reduce(precioTotalMaquina)
}

// ventasVendedora(nombre, local): obtiene el valor total de todas las ventas realizadas por una vendedora sin límite de fecha.
// TERMINADO!!!!
const ventasVendedora = (nombre, local) => {

    const aVendedora = venta => venta.nombreVendedora === nombre
    const aVentas = venta => venta.componentes  
    const precioTotalMaquina = (ventaParcial, venta) => ventaParcial + venta

    return local.ventas
    .filter(aVendedora)
    .map(aVentas)
    .map(precioMaquina)
    .reduce(precioTotalMaquina)
}

// componenteMasVendido(local): devuelve el nombre del componente que más cantidad de ventas tuvo históricamente en un local. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
// TERMINADO!!!!
const componenteMasVendido = local =>{

    const cantidadDeVenta = (cuenta, componente) => {
        cuenta[componente] =+ cuenta[componente] + 1 || 1
        return cuenta
    }

    const aComponentes = (listaParcial, componente) => [
        ...listaParcial,
        ...componente.componentes
    ]
   
    const deMayorVenta = (masVendido, componentes) => losComponentes[componentes] > losComponentes[masVendido] ? componentes : masVendido

    const losComponentes = local.ventas.reduce(aComponentes, []).reduce(cantidadDeVenta, {})
 
    return Object
    .keys(losComponentes)
    .reduce(ventaTotalNegocio(nombreVendedora, ventas))
}


// huboVentas(mes, anio, ventas): indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
// TERMINADO!!!!
const huboVentas = (mes, anio, ventas) => {
    const ventasEnElMes = venta => venta.fecha.getMonth() +1 === mes 
  
    const ventaEnElAnio =  venta => venta.fecha.getFullYear() === anio

    const ventasPorPeriodo = ventas.some(ventasEnElMes) && ventas.some(ventaEnElAnio) 

    if(ventasPorPeriodo) {
        return `Hubo ventas en el mes ${mes} del ${anio}`
    } 
    return `No hubo ventas en el mes ${mes} del ${anio}`
}

// ventasSucursal(sucursal, local): obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
// COMPLETO!!!!
const ventasSucursal = (sucursal, local) => {
    const sucursalElegida = venta => venta.sucursal.includes(sucursal)
    const aVentas = venta => venta.componentes  
    const precioTotalMaquina = (ventaParcial, venta) => ventaParcial + venta
    return local.ventas
    .filter(sucursalElegida)
    .map(aVentas)
    .map(precioMaquina)
    .reduce(precioTotalMaquina)
} 

// Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?
// TERMINADO!!!!
const ventaTotalNegocio = (filtroPorVariable, local) => {

    const elijoFiltro = venta => venta.sucursal.includes(filtroPorVariable) || venta.nombreVendedora.includes(filtroPorVariable)
    const deVentas = venta => venta.componentes  
    const ventaTotal = (ventaParcial, venta) => ventaParcial + venta
            
        return local.ventas
        .filter(elijoFiltro)
        .map(deVentas)
        .map(precioMaquina)
        .reduce(ventaTotal)
} 

// sucursalDelMes(mes, anio, local): dado dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
const sucursalDelMes = (mes, anio, local) => {


    
    const aMes = venta => venta.fecha.getMonth() + 1 === mes
    const aAnio =  venta => venta.fecha.getFullYear() === anio
    
    const aVentas = venta => venta.sucursal === sucursal
    console.log(local.ventas.map(aVentas))
    return local.ventas
    .filter(aMes)
    .filter(aAnio)
    .reduce(ventasSucursal(aVentas, local))
  
     
  
    // .reduce(ventasSucursal(sucursal, local))

}

// return estudiantes.filter(estudiante => 
//     obtenerPromedioDeEstudiante(estudiante) > numero)

// renderPorMes(local): Muestra una lista ordenada del importe total vendido por cada mes/año, p. ej. (los mostrados datos no son los resultados reales):

// Ventas por mes:
//    Total de enero 2019: XXXX
//    Total de febrero 2019: XXXX


// renderPorSucursal(local): Muestra una lista del importe total vendido por cada sucursal, p. ej. (los datos mostrados no son los resultados reales):
// Ventas por sucursal:
// ----------------------------
//   - Total de Centro: 4195
//   - Total de Caballito: 1265

// render(local): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó, p. ej. (los datos mostrados no son los resultados reales):
// Reporte
// ==========================================
//  Ventas por mes:
//   - Total de enero 2019: 1250
//   - Total de febrero 2019: 4210
// ------------------------------------------
//  Ventas por sucursal:
//   - Total de Centro: 4195
//   - Total de Caballito: 1265
// ------------------------------------------
//  Producto estrella: Monitor GPRS 3000
// ------------------------------------------ 
//  Vendedora que más ingresos generó: Grace