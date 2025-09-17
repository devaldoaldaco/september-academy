let texto = "javascript es genial";
    let frecuencia = {};
    for (let letra of texto.replace(/\s/g, "")) 
    {
      frecuencia[letra] = (frecuencia[letra] || 0) + 1;
    }
    console.log("2) Frecuencia de letras:", frecuencia);

    let fechas = "2025-09-15, 2023-02-10, 2024-06-25";
    let arregloFechas = fechas.split(", ").map(f => 
    {
      let [año, mes, dia] = f.split("-");
      return { año, mes, dia };
    });
    console.log("3) Arreglo de fechas:", arregloFechas);

    let correos = "juan@mail.com; ana@mail.com ; pedro@mail ; maria@mail.com";
    let lista = correos.split(";")
      .map(c => c.trim())
      .filter(c => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c));
    console.log("4) Correos válidos:", lista);

   
    //  OBJETOS
    

 
    let playlist = 
    {
      canciones: [],
      agregar(titulo, artista, duracion) 
      {
        this.canciones.push({ titulo, artista, duracion });
      },
      eliminar(titulo) 
      {
        this.canciones = this.canciones.filter(c => c.titulo !== titulo);
      },
      duracionTotal() 
      {
        return this.canciones.reduce((acc, c) => acc + c.duracion, 0);
      }
    };
    playlist.agregar("Song 1", "Artista A", 200);
    playlist.agregar("Song 2", "Artista B", 180);
    console.log("5) Playlist duración total:", playlist.duracionTotal());

    
    let biblioteca = 
    {
      libros: 
      [
        { titulo: "Libro A", estado: "disponible" },
        { titulo: "Libro B", estado: "disponible" }
      ],
      prestar(titulo) 
      {
        let libro = this.libros.find(l => l.titulo === titulo);
        if (libro && libro.estado === "disponible") libro.estado = "prestado";
      },
      devolver(titulo) 
      {
        let libro = this.libros.find(l => l.titulo === titulo);
        if (libro && libro.estado === "prestado") libro.estado = "disponible";
      },
      disponibles() 
      {
        return this.libros.filter(l => l.estado === "disponible");
      }
    };
    biblioteca.prestar("Libro A");
    console.log("6) Libros disponibles:", biblioteca.disponibles());

    
    let carrito = 
    {
      items: [],
      agregar(nombre, precio) 
      {
        this.items.push({ nombre, precio });
      },
      total() 
      {
        let suma = this.items.reduce((acc, i) => acc + i.precio, 0);
        return suma > 1000 ? suma * 0.9 : suma;
      }
    };
    carrito.agregar("Laptop", 1200);
    carrito.agregar("Mouse", 200);
    console.log("7) Total carrito:", carrito.total());

   
    let banco = 
    {
      usuarios: 
      {
        juan: { saldo: 1000 },
        ana: { saldo: 2000 }
      },
      depositar(usuario, monto) 
      {
        this.usuarios[usuario].saldo += monto;
      },
      retirar(usuario, monto) 
      {
        if (this.usuarios[usuario].saldo >= monto) {
          this.usuarios[usuario].saldo -= monto;
        }
      },
      transferir(origen, destino, monto) 
      {
        if (this.usuarios[origen].saldo >= monto) {
          this.usuarios[origen].saldo -= monto;
          this.usuarios[destino].saldo += monto;
        }
      }
    };
    banco.transferir("juan", "ana", 500);
    console.log("8) Saldos banco:", banco.usuarios);

   
    // FUNCIONES
   

   
    function estadisticas(arr) {
      let suma = arr.reduce((a, b) => a + b, 0);
      return {
        max: Math.max(...arr),
        min: Math.min(...arr),
        promedio: suma / arr.length,
        suma
      };
    }
    console.log("9) Estadísticas:", estadisticas([5, 10, 15]));

   
    function esPalindromo(str) {
      let limpio = str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "");
      return limpio === [...limpio].reverse().join("");
    }
    console.log("10) Es palíndromo 'Anita lava la tina'?", esPalindromo("Anita lava la tina"));

    // 11. Persona mayor edad
    function mayorEdad(personas) {
      return personas.reduce((mayor, p) => p.edad > mayor.edad ? p : mayor);
    }
    console.log("11) Persona mayor:", mayorEdad([{nombre:"Ana", edad:20}, {nombre:"Luis", edad:30}]));

    // 12. Romanos a enteros
    function romanoAEntero(str) {
      const valores = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
      let total = 0;
      for (let i = 0; i < str.length; i++) {
        let actual = valores[str[i]];
        let siguiente = valores[str[i+1]] || 0;
        total += actual < siguiente ? -actual : actual;
      }
      return total;
    }
    console.log("12) XIV en números:", romanoAEntero("XIV"));

    
    // CALLBACKS
    


    function consultaDB(callback) {
      setTimeout(() => {
        let exito = Math.random() > 0.3;
        if (exito) callback(null, "Datos encontrados");
        else callback("Error en la consulta", null);
      }, 1000);
    }
    consultaDB((err, data) => {
      console.log("13) Consulta DB:", err || data);
    });

   
    function procesarNumeros(numeros, filtrar, transformar, reducir) {
      let filtrados = numeros.filter(filtrar);
      let transformados = filtrados.map(transformar);
      return transformados.reduce(reducir);
    }
    let resultado = procesarNumeros(
      [1,2,3,4,5,6],
      n => n % 2 === 0,
      n => n * 2,
      (a,b) => a + b
    );
    console.log("14) Procesar números:", resultado);

    
    function login(usuario, contraseña, callback) {
      const usuarios = { juan: "1234", ana: "abcd" };
      setTimeout(() => {
        if (usuarios[usuario] === contraseña) callback(true);
        else callback(false);
      }, 500);
    }
    login("juan", "1234", exito => {
      console.log("15) Login:", exito ? "Correcto" : "Fallido");
    });

    
    function ejecutarTareas(tareas, callback) {
      let i = 0;
      function siguiente() {
        if (i < tareas.length) {
          setTimeout(() => {
            console.log("Ejecutando:", tareas[i]);
            i++;
            siguiente();
          }, 500);
        } else {
          callback();
        }
      }
      siguiente();
    }
    ejecutarTareas(["Tarea 1", "Tarea 2", "Tarea 3"], () => {
      console.log("16) Todas las tareas completadas");
    });