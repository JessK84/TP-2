describe("precioMaquina(componentes, precios)", () => {
    it("Debe devolver el precio de la máquina que se puede armar con esos componentes,(componentes, precios)", () => {
        const componentes = 'monitor' 
        const precios = 1345 
        const resultado = precioMaquina(componentes, precios)

      expect(resultado).to.eql(1345) // aserción
    })
})

// precioMaquina(componentes, precios): dado una lista de componentes y una lista de precios, devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

// cantidadVentasComponente(componente, ventas): dado un componente y una lista de ventas, devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió.

describe("cantidadVentasComponente(componente, ventas)", () => {
  it("Debe devolver la cantidad de veces que fue vendido un componente (componente, ventas)", () => {
      const componentes = 'monitor' 
      const precios = 1345 
      const resultado = precioMaquina(componentes, precios)

    expect(resultado).to.eql(1345) // aserción
  })
})