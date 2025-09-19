async function ejer(numero){
    try {
        let num= numero;
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
        console.log(response);
        const data= await response.json();
        //pruebas
        console.log(data);
        console.log(data.base_experience);
        console.log(data.moves[1].move.name);

        const h2= document.getElementById(`title-${num}`);
        const base= document.getElementById(`text-base${num}`);
        const mov1= document.getElementById(`mov-${num}-1`);
        const mov2= document.getElementById(`mov-${num}-2`);
        const mov3= document.getElementById(`mov-${num}-3`);
        h2.textContent= data.forms[0].name;
        base.textContent= data.base_experience;
        mov1.textContent=data.moves[0].move.name;
        mov2.textContent=data.moves[1].move.name;
        mov3.textContent=data.moves[2].move.name;
        
    } catch (error) {
        console.log('No existe los datos',error);
        
    }
}

