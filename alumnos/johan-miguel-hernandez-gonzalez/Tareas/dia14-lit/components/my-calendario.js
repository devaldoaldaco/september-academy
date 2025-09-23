import { LitElement, html, css } from 'lit';

export class Calendario extends LitElement {
    constructor() {
        super();
        // Fecha actual
        this._now = new Date();
        this._year = this._now.getFullYear();
        this._month = this._now.getMonth(); 
        this._cells = this._buildCells(this._year, this._month);
    }

    static properties = {

    };

    static styles = css`
    
    .calendario{
        display:grid;
        grid-template-columns: repeat(7,1fr);
        grid-template-rows: repeat(5,9rem);
        border: solid 2px black;
        margin: 0 1rem 1rem 1rem;
        background-color: rgba(148, 163, 217, 1);
        gap: 0;
        box-sizing: border-box;
    }    
    .calendario > .day {
        border: solid 1px #47476fff;
        box-sizing: border-box;
        padding: .4rem;
        position:relative;
        display:flex;
        align-items:flex-start;
        justify-content:flex-start;
    }

    .weekday {
      display:flex;
      justify-content:center;
      align-items:center;
      padding:.6rem 0;
      background: rgba(255,255,255,0.08);
      border-bottom: 1px solid rgba(71,71,111,0.25);
    }

    .number {
      position: absolute;
      top: .4rem;
      left: .5rem;
      
    }

    .today {
      outline: 3px solid rgba(59, 88, 255, 0.9);
      border-radius: .2rem;
    }

  `;

    //  arreglo de celdas
    _buildCells(year, month) {
        // primer día del mes 
        const firstDay = new Date(year, month, 1).getDay();
        // cantidad de días en el mes
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // array de 35
        const total = 35;
        const cells = new Array(total).fill('');

        // rellenar con números del 1..daysInMonth a partir de firstDay
        for (let i = 0; i < daysInMonth; i++) {
            const pos = firstDay + i; // índice en el grid donde va el día 1+i
            cells[pos] = String(i + 1);
        }
        return cells;
    }

    
    _monthName(monthIndex) {
        const names = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return names[monthIndex] || '';
    }

    render() {
        const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const todayIso = this._now.toISOString().slice(0, 10);
        return html`
      <div class="container">
        <div class="header">
          <div class="month-title">${this._monthName(this._month)} ${this._year}</div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(7,1fr); margin:0 1rem;">
          ${weekdays.map(d => html`<div class="weekday">${d}</div>`)}
        </div>

        <div class="calendario">
          ${this._cells.map((val, idx) => {
            let isToday = false;
            if (val) {
                const day = String(val).padStart(2, '0');
                const month = String(this._month + 1).padStart(2, '0');
                const iso = `${this._year}-${month}-${day}`;
                isToday = iso === todayIso;
            }

            return html`
              <div class="day ${isToday ? 'today' : ''}">
                ${val ? html`<div class="number">${val}</div>` : null}
              </div>
            `;
        })}
        </div>
      </div>
    `;
    }
}
