// 13. simulación async
function consultaBD(cb){
  setTimeout(()=>{
    let ok = Math.random()>0.3
    if(ok) cb(null,"Datos obtenidos")
    else cb("Error en consulta",null)
  },1000)
}
consultaBD((err,data)=>console.log(err||data))

// 14. procesar con callbacks
function procesar(arr,filtrar,transformar,reducir){
  let filtrados = arr.filter(filtrar)
  let trans = filtrados.map(transformar)
  return trans.reduce(reducir)
}
let r = procesar([1,2,3,4,5,6],
  n=>n%2===0,
  n=>n*2,
  (a,b)=>a+b
)
console.log("resultado:", r)

// 15. login 
function login(user,pass,cb){
  const BD={u:"usuario",p:"1234"}
  setTimeout(()=>{
    if(user===BD.u && pass===BD.p) cb(null,"Datos correctos")
    else cb("Error",null)
  },1000)
}
login("usuario","1234",(err,msg)=>console.log(err||msg))

// 16. ejecutar tareas en orden
function ejecutarTareas(tareas,cb){
  let i=0
  function next(){
    if(i<tareas.length){
      console.log("en proceso:", tareas[i])
      setTimeout(()=>{i++; next()},500)
    }else cb("tareas terminadas")
  }
  next()
}
ejecutarTareas(["Tarea1","Tarea2","Tarea3"], console.log)
