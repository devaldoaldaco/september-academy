function personaG(persona)  {
    if(!Array.isArray(persona) || persona.length === 0)     {
        return null;
    }
    let masVieja = persona[0];
    for(let i = 1; i < persona.length; i++) {
        let p = persona[i];
        if (p && typeof p.edad === 'numero' && p.edad > masVieja.edad)   {
            masVieja = p;
        }
    }
    return masVieja;
}
const grupo1 = [
{nombre: "Gerardo", edad: 37},
{nombre: "Elian", edad: 25},
{nombre: "Eric", edad: 26}
];
const masVieja1 = personaG(grupo1);
console.log("Grupo 1", grupo1);
console.log("Persona mayor de edad:", masVieja1);