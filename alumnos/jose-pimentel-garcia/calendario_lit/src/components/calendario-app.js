import { LitElement, html, css } from 'lit';
import { getMonthMatrix, monthLabel, todayISO } from '../js/utils/fecha.js';

class CalendarioApp extends LitElement {
  static properties = {
    year: { type: Number },
     month: { type: Number },
    selectedISO: { type: String }, 
    events: { type: Array },
    query: { type: String }
  };

  static styles = css`
    :host{ 
    display:block; 
    }

    header{
      position:sticky; 
      top:0; 
      z-index:10;
      background:linear-gradient(180deg,rgba(22,25,34,.95),rgba(22,25,34,.65));
      backdrop-filter: blur(8px); 
      border-bottom:1px solid var(--borde);
    }

    .header-inner{ 
      max-width:1200px; 
      margin:0 auto; 
      padding:14px 16px; 
      display:flex; 
      justify-content:space-between; 
      gap:12px; 
      align-items:center; 
    }

    .left, .right, .toolbar{ 
     display:flex; 
     gap:8px; 
     align-items:center; 
    }

    .month{ 
      font-weight:700; 
      font-size:18px; 
      letter-spacing:.3px;
    }

    .today-btn{ 
      border:1px dashed var(--borde); 
    }

    .search{ 
      display:flex; 
      align-items:center; 
      gap:8px; 
      background:#121520; 
      border:1px solid var(--borde); 
      border-radius:10px; 
      padding:0 10px; 
      height:36px; 
    }

    .search input{ 
      border:none; 
      outline:none; 
      background:transparent; 
      color:var(--texto); 
      width:220px; 
    }

    .layout{ 
      max-width:1200px; 
      margin:0 auto; 
      padding:16px; 
      display:grid; 
      grid-template-columns:280px 1fr; 
      gap:16px; 
    }

    aside.card{
     padding:16px; 
    }

    h3{ 
      margin:0 0 10px; 
      font-size:14px; 
      color:var(--muted); 
      font-weight:600; 
    }

    .event-item{ 
      padding:10px; 
      border:1px solid var(--borde);
      border-radius:10px; 
      margin-bottom:10px; 
      background:#121520; 
    }

    .event-item small{ 
      color:var(--muted); 
      display:block; 
      margin-top:4px; 
    }

    .empty{ 
      color:var(--muted); 
      font-style:italic; 
    }
  `;

  constructor(){
    super();
    const now = new Date();
    this.year = now.getFullYear();
    this.month = now.getMonth();
    this.selectedISO = todayISO();
    this.events = this._loadEvents();
    this.query = '';
  }

  _loadEvents(){
    try{ 
    return JSON.parse(localStorage.getItem('calendar.events.v1') || '[]'); 
    }catch
    { 
      return []; 
    }
  }
  _saveEvents(){ 
    localStorage.setItem('calendar.events.v1', JSON.stringify(this.events)); 
  }

  prevMonth(){ 
    this.month === 0 ? (this.month=11, this.year--) : this.month--; 
  }
  nextMonth(){ 
    this.month === 11 ? (this.month=0, this.year++) : this.month++; 
  }
  goToday(){ 
    const n=new Date(); this.year=n.getFullYear(); this.month=n.getMonth(); this.selectedISO=todayISO(); 
  }

  createEvent(e){
    const data = e.detail;
    const id = crypto.randomUUID();
    this.events = [...this.events, { id, ...data }];
    this._saveEvents();
  }

  updateEvent(e){
    const upd = e.detail;
    this.events = this.events.map(x => x.id === upd.id ? { ...x, ...upd } : x);
    this._saveEvents();
  }

  deleteEvent(e){
    const { id } = e.detail;
    this.events = this.events.filter(x => x.id !== id);
    this._saveEvents();
  }

  onSelectDay(e){
    this.selectedISO = e.detail.iso; 
  }

  get eventsOfSelectedDay(){
    const q = (this.query||'').toLowerCase().trim();
    return this.events
      .filter(ev => ev.dateISO === this.selectedISO)
      .filter(ev => q ? (ev.title.toLowerCase().includes(q) || (ev.desc||'').toLowerCase().includes(q)) : true)
      .sort((a,b) => (a.time||'').localeCompare(b.time||''));
  }

  openCreateModal(){ 
    this._openModal({
       dateISO: this.selectedISO 
      }); 
    }
  openEditModal(ev){ 
    this._openModal(ev); 
  }
  _openModal(payload){ 
    this.renderRoot?.querySelector('evento-modal')?.open(payload); 
  }

  render(){
    const { weeks } = getMonthMatrix(this.year, this.month);
    const etiquetaMes = monthLabel(this.year, this.month);

    return html`
      <header>
        <div class="header-inner">
          <div class="left">
            <button class="btn" @click=${this.prevMonth}>◀</button>
            <div class="month">${etiquetaMes}</div>
            <button class="btn" @click=${this.nextMonth}>▶</button>
            <button class="btn today-btn" @click=${this.goToday}>Hoy</button>
          </div>
          <div class="toolbar">
            <div class="search">
              🔎
              <input class="input" placeholder="Buscar en el día seleccionado…"
                .value=${this.query} @input=${e => this.query = e.target.value} />
            </div>
            <button class="btn primario" @click=${this.openCreateModal}>+ Evento</button>
          </div>
        </div>
      </header>

      <div class="layout">
        <aside class="card">
          <h3>Eventos del día</h3>
          <small>Fecha: ${this.selectedISO}</small>
          <div style="margin-top:12px;">
            ${this.eventsOfSelectedDay.length === 0 ? html`
              <div class="empty">No hay eventos para esta fecha.</div>
            ` : this.eventsOfSelectedDay.map(ev => html`
              <div class="event-item">
                <strong>${ev.title}</strong>
                <small>${ev.time ? ev.time + ' · ' : ''}${ev.dateISO}</small>
                ${ev.desc ? html`<div style="margin-top:6px;">${ev.desc}</div>` : null}
                <div style="display:flex; gap:8px; margin-top:10px;">
                  <button class="btn" @click=${() => this.openEditModal(ev)}>Editar</button>
                  <button class="btn peligro" @click=${() => this.deleteEvent({ detail:{ id: ev.id }})}>Eliminar</button>
                </div>
              </div>
            `)}
          </div>
        </aside>

        <calendario-grid
          class="card"
          .year=${this.year}
          .month=${this.month}
          .weeks=${weeks}
          .selectedISO=${this.selectedISO}
          .events=${this.events}
          @seleccionar-dia=${this.onSelectDay}>
        </calendario-grid>
      </div>

      <evento-modal
        @crear-evento=${this.createEvent}
        @actualizar-evento=${this.updateEvent}>
      </evento-modal>
    `;
  }
}

customElements.define('calendario-app', CalendarioApp);
