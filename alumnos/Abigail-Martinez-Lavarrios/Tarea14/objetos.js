// 5. playlist
let playlist = {
  canciones: [],
  agregar(t,a,d){
    this.canciones.push({titulo:t, artista:a, duracion:d})
  },
  eliminar(t){
    this.canciones = this.canciones.filter(c=>c.titulo!==t)
  },
  duracionTotal(){
    return this.canciones.reduce((acc,c)=>acc+c.duracion,0)
  }
}
playlist.agregar("Valentine","Maneskin",200)
playlist.agregar("Specter","BadOmens",180)
console.log("duración:", playlist.duracionTotal())

// 6. biblioteca
let biblioteca = {
  libros: [
    {titulo:"Diario del búnker", disponible:true},
    {titulo:"Las aventuras de Sherlock Holmes", disponible:true}
  ],
  prestar(t){
    let l = this.libros.find(x=>x.titulo===t && x.disponible)
    if(l) l.disponible=false
  },
  devolver(t){
    let l = this.libros.find(x=>x.titulo===t && !x.disponible)
    if(l) l.disponible=true
  },
  disponibles(){
    return this.libros.filter(l=>l.disponible)
  }
}
biblioteca.prestar("Las aventuras de Sherlock Holmes")
console.log("libros libres:", biblioteca.disponibles())

// 7. carrito
let carrito = {
  items: [],
  agregar(prod,precio){
    this.items.push({prod,precio})
  },
  total(){
    let suma = this.items.reduce((a,i)=>a+i.precio,0)
    return suma>1000? suma*0.9 : suma
  }
}
carrito.agregar("Blusa azul",200)
carrito.agregar("Conjunto blanco",900)
console.log("total:", carrito.total())

// 8. sistema bancario
let banco = {
  usuarios:{
    Salma:{saldo:1000},
    Vianey:{saldo:500}
  },
  depositar(u,m){
    this.usuarios[u].saldo+=m
  },
  retirar(u,m){
    if(this.usuarios[u].saldo>=m) this.usuarios[u].saldo-=m
  },
  transferir(de,a,m){
    if(this.usuarios[de].saldo>=m){
      this.usuarios[de].saldo-=m
      this.usuarios[a].saldo+=m
    }
  }
}
banco.transferir("Salma","Vianey",200)
console.log("cuentas:", banco.usuarios)
