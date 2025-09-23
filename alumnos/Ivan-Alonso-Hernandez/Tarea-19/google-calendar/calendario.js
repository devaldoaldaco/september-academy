import { LitElement, html, css } from "lit";

export class CalendarioMes extends LitElement {
    static properties = {
        fechaActual: { type: Object },
        tareas: { type: Array }
    }

    static styles = css`
.contenedor-calendario {
            width: 100%;
            height: 100%;
        }

        .encabezado-calendario {
            text-align: center;
            margin-bottom: 20px;
        }

        .encabezado-calendario h2 {
            margin: 0;
            color: #3c4043;
            font-size: 22px;
            font-weight: 400;
        }

        .cuadricula-calendario {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 1px;
            background-color: #e0e0e0;
            border: 1px solid #e0e0e0;
        }

        .dia-semana {
            background: #f8f9fa;
            padding: 12px;
            text-align: center;
            font-weight: 500;
            color: #5f6368;
        }

        .dia-calendario {
            background: white;
            min-height: 120px;
            padding: 8px;
            cursor: pointer;
        }

        .dia-calendario:hover {
            background-color: #f8f9fa;
        }

        .dia-calendario.otro-mes {
            background: #fafafa;
            color: #dadce0;
        }

        .numero-dia {
            font-size: 14px;
            color: #3c4043;
            margin-bottom: 4px;
        }

        .dia-calendario.otro-mes .numero-dia {
            color: #dadce0;
        }

        .tarea {
            background: #e3f2fd;
            margin: 2px 0;
            padding: 4px 6px;
            border-radius: 3px;
            font-size: 12px;
            color: #1976d2;
        }
    `;

    constructor() {
        super();
        this.fechaActual = new Date();
        this.tareas = [];
    }

    getTareasDelDia(dia) {
        if (!this.tareas || !dia) return [];

        return this.tareas.filter(tarea => {
            const tareaFecha = new Date(tarea.fecha);
            return tareaFecha.getUTCDate() === dia.dia &&
                tareaFecha.getUTCMonth() === this.fechaActual.getMonth() &&
                tareaFecha.getUTCFullYear() === this.fechaActual.getFullYear();
        });
    }


    obtenerDiasDelMes() {
        const año = this.fechaActual.getFullYear();
        const mes = this.fechaActual.getMonth();
        
        const primerDia = new Date(año, mes, 1);
        const ultimoDia = new Date(año, mes + 1, 0);
        const diasEnMes = ultimoDia.getDate();
        
        const dias = [];
        
        const diaInicioSemana = primerDia.getDay();
        for (let i = 0; i < diaInicioSemana; i++) {
            dias.push({ dia: null, mesActual: false });
        }
        
        for (let i = 1; i <= diasEnMes; i++) {
            dias.push({ 
                dia: i, 
                mesActual: true,
                fecha: new Date(año, mes, i)
            });
        }
        
        return dias;
    }

    render() {
        const dias = this.obtenerDiasDelMes();
        const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                           "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        
        return html`
            <div class="contenedor-calendario">
                <div class="encabezado-calendario">
                    <h2>${nombresMeses[this.fechaActual.getMonth()]} ${this.fechaActual.getFullYear()}</h2>
                </div>
                
                <div class="cuadricula-calendario">
                    <div class="dia-semana">Dom</div>
                    <div class="dia-semana">Lun</div>
                    <div class="dia-semana">Mar</div>
                    <div class="dia-semana">Mié</div>
                    <div class="dia-semana">Jue</div>
                    <div class="dia-semana">Vie</div>
                    <div class="dia-semana">Sáb</div>
                    
                ${dias.map(dia => html`
                    <div class="dia-calendario">
                        <div class="numero-dia">${dia.dia}</div>
                        ${dia.mesActual ? this.getTareasDelDia(dia).map(tarea => html`
                            <div class="tarea">${tarea.titulo}</div>
                        `) : ''}
                    </div>
                `)}
                </div>
            </div>
        `;
    }
}

customElements.define('calendario-mes', CalendarioMes);