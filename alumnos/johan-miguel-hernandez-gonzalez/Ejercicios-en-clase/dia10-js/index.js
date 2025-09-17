function Microfono(nombre,edad){
    this.name=nombre;
    this.age=edad;
    this.saludar= function (){
        console.log(`Hola mi nombre es: ${this.name}`);
    }
}

const hyperx1= new Microfono('Johan',2);

console.log(hyperx1.name);

hyperx1.saludar();

//las arron function no pueden utilizarse para constructores
const Bocina =(nombre) =>{
    this.name=nombre;

    return {
        name:nombre
    }
}

const bose=  Bocina();
//con ner colpasa debidp que no pede haber constructor en una arron fuction
console.log(bose);


console.log('------------------CLASES---------------------');
//clases
//Es un molde o plantilla que se usa como abstraccion para describir objetos del avida real

class Animal{
    constructor(name,foodType,color,sound,duenio){
        this.name= name;
        //propiedad privada
        //privada variable
        this._duenio= duenio;
        this.foodType= foodType;
        this.color= color;
        ///privada variable
        this._sound=sound;
    }

    roncar(){
        console.group('roncaaaa');
    }
    //metodos de instancia
    hablar(){
        console.log(`El animal: ${this.sound}`);
    }

    //metodo privado
    _hablarSonido(){
        return this._sound;
    }

    duenioMethod(){
        console.log(this._duenio);
    }

    static calcularPeso(tamanio){
        return tamanio *2 / 3.1416;

    }
}

const perro= new Animal('Perro','Carnivoro','Tricolor','Gua Guaa Guaaa','Johan');

console.log(perro.name);
console.log(perro.foodType);
console.log(perro.color);
console.log(perro.sound);
perro.hablar();

//no hay propiedades privadas
perro.duenioMethod();


//metodos estaticos que no se necesita d euna instancia como un objeto
let peso=Animal.calcularPeso(1.5);

console.log(peso);


class Utilidades{
    constructor(){

    }

    static pi (){
        return 3-1416;
    }

    
    static sumar(a,b){
        return a+b;
    }

    static areaCirculo(radio){
        return Math.PI * Math.pow(radio,2);
    }
}

const suma= Utilidades.sumar(6,8);
console.log(suma);
const radio= Utilidades.areaCirculo(7);
console.log(radio); 

class Cuenta{
    constructor(number, balance){
        this._accountNumber= Number;
        this._balance= balance ?? 0;
    }

    //tomas datos
    get balance(){
        return this._balance;
    }

    //editar datos
    set balance(balance){
        if(balance>0){
            this._balance= balance;
        }else{
            console.log(('nelno se pudo'));
        }
    }
}

const johan= new Cuenta(101544);

console.log(johan.balance);

johan.balance=50000;

console.log(johan.balance);

//encapsulamiento
class Usuario {
    //forzamos a js a indicar que es una variable privada
    #password;
    constructor(user,password){
        this.user=user ?? 'jonn';
        this.#password= password ?? '101544';
    }

    validarPassword(pass){
        return this.#password === pass;
    }
}

const johann= new Usuario('jonn','101544');

console.log(johann);

if(johann.validarPassword('171679')){
    console.log('eS correcto');
}else{
    console.log('incorrceti');
}


//herencia genetras una plnatilla con las mismas caracteristicas de la plantilla padre, tambien es conocido como un proptotipo
//cadena de prototipos
//no hay herencia multiple
class Perro extends Animal{
    constructor(patas, name,foodType,color,sound,duenio){
        super(name,foodType,color,sound,duenio);
        this.patas= patas;
    }

    hablar(){
        super.hablar();
        //console.log('el perrod hace gau gua gua gai');
    }
}

const kira= new Perro(3,'kira','carnivoro','tricolor','gua','johan');
console.log(kira);
kira.hablar();
kira.roncar();

class Motor{
    encender(){
        console.log('run run run run');
    }

}

//compposicion (tiene un) es como diagramas de flujo de uno a uno, uno a muchos y asi
class Carro{
    constructor(motor){
        this.motor= new Motor(); //composicion
    }

    arrancar(llave){
        if(llave){
            this.motor.encender();
        }else{
            console.log('se requiere la llave');
        }
        
    }
}

const audi= new Carro();
audi.arrancar(true);

//agregacion, es una ralcion dond eun pbjeto puede existir sin la necesidad de otro

class Estudiante{
    constructor(name){
        this.name= name ?? '';
    }
}

class Curso{
    constructor(nombre,profesor){
        this.nombre= nombre;
        this.profe= profesor;
        this.alumnos=[];
    }

    agregarAluno(alumno){
        this.alumnos.push(alumno);
    }
}

const curso= new Curso('full stack','aldo aldaco');
const ivan= new Estudiante('iVAN');

console.log(curso);

//mixin es una funcion ue se basa en otra con propiedasdes de otra clase, debido que no hay erencia. ultiplwe

//dom
