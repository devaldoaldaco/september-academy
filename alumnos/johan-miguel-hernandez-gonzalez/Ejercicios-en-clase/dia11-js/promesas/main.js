async function ejer1(){
    try {
        const response= await fetch('https://pokeapi.co/api/v2/pokemon/1/');
        console.log(response);
        const data= await response.json();
        //pruebas
        console.log(data);
        console.log(data.base_experience);
        console.log(data.moves[1].move.name);

        const h2= document.getElementById('title-1');
        const base= document.getElementById('text-base1');
        const mov1= document.getElementById('mov-1-1');
        const mov2= document.getElementById('mov-1-2');
        const mov3= document.getElementById('mov-1-3');
        h2.textContent= data.forms[0].name;
        base.textContent= data.base_experience;
        mov1.textContent=data.moves[0].move.name;
        mov2.textContent=data.moves[1].move.name;
        mov3.textContent=data.moves[2].move.name;
        
    } catch (error) {
        console.log('No existe los datos',error);
        
    }
}

async function ejer2(){
    try {
        const response= await fetch('https://pokeapi.co/api/v2/pokemon/2/');
        console.log(response);
        const data= await response.json();
        //pruebas
        console.log(data);
        console.log(data.base_experience);
        console.log(data.moves[1].move.name);

        const h2= document.getElementById('title-2');
        const base= document.getElementById('text-base2');
        const mov1= document.getElementById('mov-2-1');
        const mov2= document.getElementById('mov-2-2');
        const mov3= document.getElementById('mov-2-3');
        h2.textContent= data.forms[0].name;
        base.textContent= data.base_experience;
        mov1.textContent=data.moves[0].move.name;
        mov2.textContent=data.moves[1].move.name;
        mov3.textContent=data.moves[2].move.name;
        
    } catch (error) {
        console.log('No existe los datos',error);
        
    }
}


async function ejer3(){
    try {
        const response= await fetch('https://pokeapi.co/api/v2/pokemon/3/');
        console.log(response);
        const data= await response.json();
        //pruebas
        console.log(data);
        console.log(data.base_experience);
        console.log(data.moves[1].move.name);

        const h2= document.getElementById('title-3');
        const base= document.getElementById('text-base3');
        const mov1= document.getElementById('mov-3-1');
        const mov2= document.getElementById('mov-3-2');
        const mov3= document.getElementById('mov-3-3');
        h2.textContent= data.forms[0].name;
        base.textContent= data.base_experience;
        mov1.textContent=data.moves[0].move.name;
        mov2.textContent=data.moves[1].move.name;
        mov3.textContent=data.moves[2].move.name;
        
    } catch (error) {
        console.log('No existe los datos',error);
        
    }
}

async function ejer4(){
    try {
        const response= await fetch('https://pokeapi.co/api/v2/pokemon/4/');
        console.log(response);
        const data= await response.json();
        //pruebas
        console.log(data);
        console.log(data.base_experience);
        console.log(data.moves[1].move.name);

        const h2= document.getElementById('title-4');
        const base= document.getElementById('text-base4');
        const mov1= document.getElementById('mov-4-1');
        const mov2= document.getElementById('mov-4-2');
        const mov3= document.getElementById('mov-4-3');
        h2.textContent= data.forms[0].name;
        base.textContent= data.base_experience;
        mov1.textContent=data.moves[0].move.name;
        mov2.textContent=data.moves[1].move.name;
        mov3.textContent=data.moves[2].move.name;
        
    } catch (error) {
        console.log('No existe los datos',error);
        
    }
}

async function ejer5(){
    try {
        const response= await fetch('https://pokeapi.co/api/v2/pokemon/5/');
        console.log(response);
        const data= await response.json();
        //pruebas
        console.log(data);
        console.log(data.base_experience);
        console.log(data.moves[1].move.name);

        const h2= document.getElementById('title-5');
        const base= document.getElementById('text-base5');
        const mov1= document.getElementById('mov-5-1');
        const mov2= document.getElementById('mov-5-2');
        const mov3= document.getElementById('mov-5-3');
        h2.textContent= data.forms[0].name;
        base.textContent= data.base_experience;
        mov1.textContent=data.moves[0].move.name;
        mov2.textContent=data.moves[1].move.name;
        mov3.textContent=data.moves[2].move.name;
        
    } catch (error) {
        console.log('No existe los datos',error);
        
    }
}

async function ejer6(){
    try {
        const response= await fetch('https://pokeapi.co/api/v2/pokemon/6/');
        console.log(response);
        const data= await response.json();
        //pruebas
        console.log(data);
        console.log(data.base_experience);
        console.log(data.moves[1].move.name);

        const h2= document.getElementById('title-6');
        const base= document.getElementById('text-base6');
        const mov1= document.getElementById('mov-6-1');
        const mov2= document.getElementById('mov-6-2');
        const mov3= document.getElementById('mov-6-3');
        h2.textContent= data.forms[0].name;
        base.textContent= data.base_experience;
        mov1.textContent=data.moves[0].move.name;
        mov2.textContent=data.moves[1].move.name;
        mov3.textContent=data.moves[2].move.name;
        
    } catch (error) {
        console.log('No existe los datos',error);
        
    }
}

async function ejer7(){
    try {
        const response= await fetch('https://pokeapi.co/api/v2/pokemon/7/');
        console.log(response);
        const data= await response.json();
        //pruebas
        console.log(data);
        console.log(data.base_experience);
        console.log(data.moves[1].move.name);

        const h2= document.getElementById('title-7');
        const base= document.getElementById('text-base7');
        const mov1= document.getElementById('mov-7-1');
        const mov2= document.getElementById('mov-7-2');
        const mov3= document.getElementById('mov-7-3');
        h2.textContent= data.forms[0].name;
        base.textContent= data.base_experience;
        mov1.textContent=data.moves[0].move.name;
        mov2.textContent=data.moves[1].move.name;
        mov3.textContent=data.moves[2].move.name;
        
    } catch (error) {
        console.log('No existe los datos',error);
        
    }
}