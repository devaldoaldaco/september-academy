import {LitElement, html, css } from 'lit';


export class Calendario extends LitElement{

    constructor(){
        super();
    }

    static properties= {

    };
    
    static styles= css`
    .calendario{
        display:grid;
        grid-template-columns: repeat(7,1fr);
        grid-template-rows: repeat(5,10rem);
        border: solid 2px black;
        margin: 1rem;
        background-color: rgba(148, 163, 217, 1);
    }    
        .calendario > div {
            border: solid 2px #47476fff;
        
        }

        .title{
        display:flex;
        justify-content:center;}
    `;

    render(){
        return html`

        <div class="calendario">
        <div class="title">
        <p>Domingo</p>
        </div>
        <div class="title">
        <p>Lunes</p>
        </div>
        <div class="title">
        <p>Martes</p>
        </div>
        <div class="title">
        <p>Miercoles</p>
        </div>
        <div class="title">
        <p>Jueves</p>
        </div>
        <div class="title">
        <p>Viernes</p>
        </div>
        <div class="title">
        <p>Sabado</p>
        </div>

        <div class="domingo">
        </div>
        <div class="lunes">
        </div>
        <div class="martes">
        </div>
        <div class="miercoles">
        </div>
        <div class="jueves">
        </div>
        <div class="viernes">
        </div>
        <div class="sabado">
        </div>

        <div class="domingo">
        </div>
        <div class="lunes">
        </div>
        <div class="martes">
        </div>
        <div class="miercoles">
        </div>
        <div class="jueves">
        </div>
        <div class="viernes">
        </div>
        <div class="sabado">
        </div>

        <div class="domingo">
        </div>
        <div class="lunes">
        </div>
        <div class="martes">
        </div>
        <div class="miercoles">
        </div>
        <div class="jueves">
        </div>
        <div class="viernes">
        </div>
        <div class="sabado">
        </div>

        <div class="domingo">
        </div>
        <div class="lunes">
        </div>
        <div class="martes">
        </div>
        <div class="miercoles">
        </div>
        <div class="jueves">
        </div>
        <div class="viernes">
        </div>
        <div class="sabado">
        </div>
        

        </div>
        
            
        
        `;
    }
} 