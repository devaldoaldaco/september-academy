import {LitElement, html, css } from 'lit';

export class Nav1 extends LitElement{

    constructor(){
        super();
    }

    static properties= {

    };
    
    static styles= css`
        .nav-title {
            display: flex;
            align-items:center;
            gap:10px;
        }

        .nav-title > img{
            width: 4rem;
        }

        .nav-title > svg{
            margin-left:2rem;
        }
        
    `;

    render(){
        return html`
        <div class="nav-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
            </svg>
            <img src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_23_2x.png" alt="logo-calendario">
            <h3>Calendario</h3>
        </div>
        `;
    }
} 