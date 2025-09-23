import { LitElement, html, css } from "lit";
import './calendario.js';
import './tarea.js';

export class GoogleCalendar extends LitElement {
    static properties = {
        fechaActual: { type: Object },
        modalAbierto: { type: Boolean },
        tareas: { type: Array }
    }

    static styles = css`
    :host {
        height: 100vh;
        font-family: 'Roboto', Arial, sans-serif;
        background-color: #f8f9fa;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 16px;
        border-bottom: 1px solid #e0e0e0;
        background-color: white;
        height: 64px;
    }

    .icono-menuYlogo {
        display: flex;
        align-items: center;
        gap: 16px;
        min-width: 200px;
    }

    .icono-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
    }

    .icono-menu:hover {
        background-color: #f1f3f4;
    }

    .logo-titulo {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 22px;
        font-weight: 400;
        color: #5f6368;
    }

    .logo-titulo svg {
        width: 40px;
        height: 40px;
        color: #4285f4;
    }

    .fecha {
        display: flex;
        align-items: center;
        gap: 16px;
        flex: 1;
        justify-content: flex-start;
        margin-left:72px;
    }

    .today-button {
        background-color: white;
        border: 1px solid #dadce0;
        border-radius: 4px;
        padding: 8px 16px;
        font-size: 14px;
        color: #3c4043;
        cursor: pointer;
    }

    .today-button:hover {
        background-color: #f8f9fa;
    }

    .flechas-fecha {
        display: flex;
        gap: 8px;
    }

    .flechas-fecha svg {
        width: 20px;
        height: 20px;
        padding: 8px;
        border-radius: 50%;
        cursor: pointer;
    }

    .flechas-fecha svg:hover {
        background-color: #f1f3f4;
    }

    .config-account {
        display: flex;
        align-items: center;
        gap: 16px;
        min-width: 200px;
        justify-content: flex-end;
    }

    .select {
        border: 1px solid #dadce0;
        border-radius: 4px;
        padding: 8px 12px;
        font-size: 14px;
        background-color: white;
        color: #3c4043;
        cursor: pointer;
    }

    .search, .config, .account {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
    }

    .search:hover, .config:hover, .account:hover {
        background-color: #f1f3f4;
    }

    .account {
        display: flex;
        gap: 8px;
    }

    .account svg:last-child {
        width: 32px;
        height: 32px;
        color: #5f6368;
    }

    .box-contenido {
        display: flex;
        height: calc(100vh - 64px);
    }

    .menu-lateral {
        width: 256px;
        background-color: white;
        border-right: 1px solid #e0e0e0;
        padding: 16px;
    }

    .button-create button {
        width: 100%;
        background-color: #1a73e8;
        color: white;
        border: none;
        border-radius: 24px;
        padding: 12px 24px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
    }

    .button-create button:hover {
        background-color: #1669d9;
    }

    .mini-calendar {
        margin: 24px 0;
        height: 200px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background-color: #f8f9fa;
    }

    .paginasDeReserva {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #e0e0e0;
        color: #3c4043;
        font-size: 14px;
        font-weight: 500;
    }

    .paginasDeReserva svg {
        width: 16px;
        height: 16px;
        cursor: pointer;
    }

    .my-calendar {
        margin-top: 16px;
    }

    .panel-calendar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        color: #3c4043;
        font-size: 14px;
        font-weight: 500;
    }

    .button-panel {
        background: none;
        border: none;
        font-size: 12px;
        color: #5f6368;
        cursor: pointer;
        padding: 4px;
    }

    .panel-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .panel-list li {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 0;
        font-size: 13px;
        color: #3c4043;
    }

    .panel-list input[type="checkbox"] {
        width: 16px;
        height: 16px;
        cursor: pointer;
    }

    .box-calendar {
        flex: 1;
        background-color: white;
        padding: 16px;
    }
    `;

    constructor() {
        super();
        this.fechaActual = new Date();
        this.modalAbierto = false;
        this.tareas = [];
    }

    abrirModal() {
        this.modalAbierto = true;
    }

    cerrarModal() {
        this.modalAbierto = false;
    }

    guardarTarea(evento) {
        this.tareas = [...this.tareas, evento.detail]; 
    }

    mesAnterior() {
        this.fechaActual = new Date(
        this.fechaActual.getFullYear(),
        this.fechaActual.getMonth() - 1, 1);
    }

    mesSiguiente() {
        this.fechaActual = new Date(
        this.fechaActual.getFullYear(),
        this.fechaActual.getMonth() + 1, 1);
    }

    irAHoy() {
        this.fechaActual = new Date();
    }

    render() {
        return html`
            <header>
                <div class="icono-menuYlogo">       
                    <div class="icono-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </div>
                    <div class="logo-titulo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
                        <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"/>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                        </svg>
                        <span>calendar</span>
                    </div>
                </div>
                <div class="fecha">
                    <div class="box-today">
                        <button class="today-button" @click=${this.irAHoy}>Hoy</button>
                    </div>
                    <div class="flechas-fecha">
                        <svg @click=${this.mesAnterior} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg>
                        <svg @click=${this.mesSiguiente} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </div>
                </div>
                <div class="config-account">
                        <div class="select-day-week-month-year">
                            <select class="select">
                                <option value="week">Semana</option>
                                <option value="day">Dia</option>
                                <option value="month" selected>Mes</option>
                                <option value="year">Año</option>
                            </select>
                        </div>
                        <div class="search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </div>
                        <div class="config">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                            </svg>
                        </div>
                        <div class="account">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        </div>                    
                </div>
            </header>   
            <div class="box-contenido">
                <div class="menu-lateral">
                    <div class="button-create">
                        <button @click=${this.abrirModal}>Crear</button>
                    </div>
                    <div class="mini-calendar">
                        <div class="fecha-hoy">
                            <div class="dia-numero">${new Date().getDate()}</div>
                            <div class="mes-actual">${new Date().toLocaleDateString('es', { month: 'long' })}</div>
                            <div class="ano-actual">${new Date().getFullYear()}</div>
                        </div>
                    </div>
                    <div class="paginasDeReserva">
                        <span>Paginas de reserva</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>
                    </div>
                    <div class="my-calendar">
                        <div class="panel-calendar">
                            <span>Otros calendarios</span>
                            <button class="button-panel">▼</button>
                        </div>
                        <ul class="panel-list">
                            <li><input type="checkbox" id="fesitvos"><label for="festivos">Festivos</label></li>
                            <li><input type="checkbox" id="parcial1"><label for="parcial1">Parcial 1</label></li>
                            <li><input type="checkbox" id="reuniones"><label for="reuniones">reuniones</label></li>
                            <li><input type="checkbox" id="parcial2"><label for="parcial2">parcial2</label></li>
                            <li><input type="checkbox" id="parcial3"><label for="parcial3">parcial3</label></li>
                        </ul>
                    </div>
                </div>
                <div class="box-calendar">
                    <calendario-mes .fechaActual=${this.fechaActual} .tareas=${this.tareas}></calendario-mes>
                </div>
            </div>

            <modal-tarea .abierto=${this.modalAbierto} .fechaSeleccionada=${this.fechaActual}
                @cerrar-modal=${this.cerrarModal}
                @guardar-tarea=${this.guardarTarea}
            ></modal-tarea>
        `;
    }
}

customElements.define('google-calendar', GoogleCalendar);