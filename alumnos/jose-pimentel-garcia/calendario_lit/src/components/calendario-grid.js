import { LitElement, html, css } from 'lit';
import { weekdayShortLabels, todayISO, sameDayISO } from '../js/utils/fecha.js';

class CalendarioGrid extends LitElement {
  static properties = {
    year: { type: Number }, 
    month: { type: Number },
    weeks: { type: Array }, 
    selectedISO: { type: String },
    events: { type: Array }
  };

  static styles = css`
    :host{ 
      display:block; 
      padding:12px; 
    }

    .grid{ 
      display:grid; 
      grid-template-rows:auto 1fr; 
      gap:10px; 
      height:100%; 
    }

    .weekdays{ 
      display:grid; 
      grid-template-columns:repeat(7, minmax(0,1fr)); 
      gap:8px; color:var(--muted); 
      font-weight:600; 
      font-size:12px; 
    }

    .cells{ 
      display:grid; 
      grid-template-columns:repeat(7, minmax(0,1fr)); 
      grid-auto-rows:120px; 
      gap:8px; 
    }

    .day{ 
      border:1px solid var(--borde); 
      border-radius:12px; 
      padding:8px; 
      background:#141824; 
      display:flex; 
      flex-direction:column; 
      cursor:pointer; 
      transition:transform .06s, border-color .06s, box-shadow .06s; 
    }

    .day:hover{ 
      transform:translateY(-1px); 
      box-shadow:0 8px 20px rgba(0,0,0,.2); 
    }

    .out{ 
      opacity:.45; 
    }

    .top{ 
      display:flex; 
      justify-content:space-between; 
      align-items:center; 
    }

    .num{ 
      width:28px; 
      height:28px; 
      display:grid; 
      place-items:center; 
      border-radius:8px; 
      font-weight:700; 
    }

    .today{ 
      outline:2px solid var(--primario); 
    }

    .selected{ 
      background:#1b2030; 
      border-color:#2a3650; 
    }

    .badge{ 
      display:inline-flex; 
      align-items:center; 
      gap:6px; 
      font-size:12px; 
      padding:4px 6px; 
      border-radius:8px; 
      background:#121520; 
      border:1px solid var(--borde); 
    }

    .counter{ 
      font-weight:700; 
      opacity:.9; 
    }
  `;

  constructor(){
    super();
    this.weeks = [];
    this.events = [];
  }

  _eventsByISO(){
    const map = new Map();
    for(const e of this.events){
      map.set(e.dateISO, (map.get(e.dateISO) || 0) + 1);
    }
    return map;
  }

  _onDayClick(iso){
    this.dispatchEvent(new CustomEvent('seleccionar-dia', { detail:{ iso }, bubbles:true, composed:true }));
  }

  render(){
    const labels = weekdayShortLabels();
    const today = todayISO();
    const count = this._eventsByISO();

    return html`
      <div class="grid">
        <div class="weekdays">${labels.map(l => html`<div>${l}</div>`)}</div>
        <div class="cells">
          ${this.weeks.flat().map(cell => {
            const classes = ['day'];
            if(!cell.inMonth) classes.push('out');
            if(sameDayISO(cell.iso, this.selectedISO)) classes.push('selected');
            const isToday = sameDayISO(cell.iso, today);
            const n = count.get(cell.iso) || 0;

            return html`
              <div class=${classes.join(' ')} @click=${() => this._onDayClick(cell.iso)}>
                <div class="top">
                  <div class="num ${isToday ? 'today' : ''}">${cell.day}</div>
                  ${n>0 ? html`<span class="badge"><span class="counter">${n}</span> evento${n>1?'s':''}</span>` : null}
                </div>
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }
}

customElements.define('calendario-grid', CalendarioGrid);
