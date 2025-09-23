import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class GoogleCalendar extends LitElement {
  static properties = {
    currentDate: { type: Object },
    events: { type: Array },
    selectedDate: { type: Object },
    showEventModal: { type: Boolean },
    editingEvent: { type: Object },
    view: { type: String } // 'month', 'week', 'day'
  };

  static styles = css`
    :host {
      display: block;
      font-family: 'Roboto', Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .calendar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 15px;
      background-color: #f8f9fa;
      border-radius: 8px;
    }

    .navigation-buttons {
      display: flex;
      gap: 10px;
    }

    button {
      background-color: #1a73e8;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }

    button:hover {
      background-color: #0d62d9;
    }

    .view-buttons {
      display: flex;
      gap: 5px;
    }

    .view-buttons button {
      background-color: transparent;
      color: #5f6368;
      border: 1px solid #dadce0;
    }

    .view-buttons button.active {
      background-color: #1a73e8;
      color: white;
    }

    .current-month {
      font-size: 22px;
      font-weight: 500;
      color: #3c4043;
    }

    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 1px;
      background-color: #e0e0e0;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
    }

    .day-header {
      background-color: #f8f9fa;
      padding: 12px;
      text-align: center;
      font-weight: 500;
      color: #5f6368;
    }

    .calendar-day {
      background-color: white;
      min-height: 120px;
      padding: 8px;
      position: relative;
      cursor: pointer;
    }

    .calendar-day.other-month {
      background-color: #f8f9fa;
      color: #9aa0a6;
    }

    .calendar-day.today {
      background-color: #e8f0fe;
    }

    .day-number {
      font-size: 14px;
      margin-bottom: 5px;
    }

    .events-container {
      max-height: 90px;
      overflow-y: auto;
    }

    .event {
      font-size: 12px;
      padding: 2px 4px;
      margin-bottom: 2px;
      border-radius: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }

    .event:hover {
      opacity: 0.8;
    }

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-content {
      background-color: white;
      padding: 24px;
      border-radius: 8px;
      width: 90%;
      max-width: 500px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .modal-title {
      font-size: 20px;
      font-weight: 500;
      margin: 0;
    }

    .close-button {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #5f6368;
    }

    .form-group {
      margin-bottom: 16px;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #3c4043;
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #dadce0;
      border-radius: 4px;
      font-size: 14px;
      box-sizing: border-box;
    }

    textarea {
      min-height: 80px;
      resize: vertical;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 20px;
    }

    .delete-button {
      background-color: #d93025;
    }

    .delete-button:hover {
      background-color: #c5221f;
    }

    .more-events {
      font-size: 12px;
      color: #1a73e8;
      margin-top: 5px;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .calendar-header {
        flex-direction: column;
        gap: 15px;
      }
      
      .calendar-day {
        min-height: 80px;
      }
    }
  `;

  constructor() {
    super();
    this.currentDate = new Date();
    this.selectedDate = new Date();
    this.events = this.loadEventsFromStorage();
    this.showEventModal = false;
    this.editingEvent = null;
    this.view = 'month';
  }

  // Cargar eventos desde localStorage
  loadEventsFromStorage() {
    const storedEvents = localStorage.getItem('calendarEvents');
    if (storedEvents) {
      const events = JSON.parse(storedEvents);
      // Convertir strings de fecha a objetos Date
      return events.map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end)
      }));
    }
    return [];
  }

  // Guardar eventos en localStorage
  saveEventsToStorage() {
    localStorage.setItem('calendarEvents', JSON.stringify(this.events));
  }

  // Navegar al mes anterior
  previousMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
  }

  // Navegar al mes siguiente
  nextMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
  }

  // Ir al mes actual
  goToToday() {
    this.currentDate = new Date();
    this.selectedDate = new Date();
  }

  // Obtener el nombre del mes
  getMonthName() {
    return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  }

  // Obtener los días de la semana
  getWeekDays() {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(2023, 0, i + 1); // Un domingo como referencia
      weekDays.push(date.toLocaleString('default', { weekday: 'short' }));
    }
    return weekDays;
  }

  // Generar los días del mes para la cuadrícula del calendario
  getCalendarDays() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    // Primer día del mes
    const firstDay = new Date(year, month, 1);
    // Último día del mes
    const lastDay = new Date(year, month + 1, 0);
    
    // Día de la semana del primer día (0 = Domingo, 1 = Lunes, etc.)
    const firstDayOfWeek = firstDay.getDay();
    
    // Días del mes anterior a mostrar
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    const days = [];
    
    // Días del mes anterior
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = new Date(year, month - 1, prevMonthLastDay - i);
      days.push({
        date: day,
        isCurrentMonth: false,
        isToday: this.isToday(day),
        events: this.getEventsForDay(day)
      });
    }
    
    // Días del mes actual
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const day = new Date(year, month, i);
      days.push({
        date: day,
        isCurrentMonth: true,
        isToday: this.isToday(day),
        events: this.getEventsForDay(day)
      });
    }
    
    // Días del mes siguiente
    const totalCells = 42; // 6 semanas * 7 días
    const nextMonthDays = totalCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      const day = new Date(year, month + 1, i);
      days.push({
        date: day,
        isCurrentMonth: false,
        isToday: this.isToday(day),
        events: this.getEventsForDay(day)
      });
    }
    
    return days;
  }

  // Verificar si una fecha es hoy
  isToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  // Obtener eventos para un día específico
  getEventsForDay(date) {
    return this.events.filter(event => {
      const eventDate = new Date(event.start);
      return eventDate.getDate() === date.getDate() &&
             eventDate.getMonth() === date.getMonth() &&
             eventDate.getFullYear() === date.getFullYear();
    });
  }

  // Seleccionar un día
  selectDay(day) {
    this.selectedDate = day.date;
    this.openEventModal();
  }

  // Abrir modal para crear/editar evento
  openEventModal(event = null) {
    this.editingEvent = event;
    this.showEventModal = true;
  }

  // Cerrar modal
  closeEventModal() {
    this.showEventModal = false;
    this.editingEvent = null;
  }

  // Manejar envío del formulario de evento
  handleEventSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const eventData = {
      id: this.editingEvent ? this.editingEvent.id : Date.now().toString(),
      title: formData.get('title'),
      description: formData.get('description'),
      start: new Date(
        this.selectedDate.getFullYear(),
        this.selectedDate.getMonth(),
        this.selectedDate.getDate(),
        parseInt(formData.get('start-time').split(':')[0]),
        parseInt(formData.get('start-time').split(':')[1])
      ),
      end: new Date(
        this.selectedDate.getFullYear(),
        this.selectedDate.getMonth(),
        this.selectedDate.getDate(),
        parseInt(formData.get('end-time').split(':')[0]),
        parseInt(formData.get('end-time').split(':')[1])
      ),
      color: formData.get('color') || '#1a73e8'
    };
    
    if (this.editingEvent) {
      // Actualizar evento existente
      const index = this.events.findIndex(e => e.id === this.editingEvent.id);
      if (index !== -1) {
        this.events[index] = eventData;
      }
    } else {
      // Agregar nuevo evento
      this.events.push(eventData);
    }
    
    this.events = [...this.events]; // Forzar actualización
    this.saveEventsToStorage();
    this.closeEventModal();
  }

  // Eliminar evento
  deleteEvent() {
    if (this.editingEvent) {
      this.events = this.events.filter(e => e.id !== this.editingEvent.id);
      this.saveEventsToStorage();
      this.closeEventModal();
    }
  }

  // Cambiar vista
  changeView(view) {
    this.view = view;
  }

  render() {
    const weekDays = this.getWeekDays();
    const calendarDays = this.getCalendarDays();
    
    return html`
      <div class="calendar-header">
        <div class="navigation-buttons">
          <button @click=${this.previousMonth}>‹</button>
          <button @click=${this.goToToday}>Hoy</button>
          <button @click=${this.nextMonth}>›</button>
          <span class="current-month">${this.getMonthName()}</span>
        </div>
        
        <div class="view-buttons">
          <button 
            class="${this.view === 'month' ? 'active' : ''}" 
            @click=${() => this.changeView('month')}
          >
            Mes
          </button>
          <button 
            class="${this.view === 'week' ? 'active' : ''}" 
            @click=${() => this.changeView('week')}
          >
            Semana
          </button>
          <button 
            class="${this.view === 'day' ? 'active' : ''}" 
            @click=${() => this.changeView('day')}
          >
            Día
          </button>
        </div>
      </div>
      
      <div class="calendar-grid">
        ${weekDays.map(day => html`
          <div class="day-header">${day}</div>
        `)}
        
        ${calendarDays.map(day => html`
          <div 
            class="calendar-day ${day.isCurrentMonth ? '' : 'other-month'} ${day.isToday ? 'today' : ''}"
            @click=${() => this.selectDay(day)}
          >
            <div class="day-number">${day.date.getDate()}</div>
            <div class="events-container">
              ${day.events.slice(0, 3).map(event => html`
                <div 
                  class="event" 
                  style="background-color: ${event.color}; color: white;"
                  @click=${(e) => {
                    e.stopPropagation();
                    this.openEventModal(event);
                  }}
                >
                  ${event.title}
                </div>
              `)}
              ${day.events.length > 3 ? html`
                <div class="more-events">+${day.events.length - 3} más</div>
              ` : ''}
            </div>
          </div>
        `)}
      </div>
      
      ${this.showEventModal ? html`
        <div class="modal">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">
                ${this.editingEvent ? 'Editar evento' : 'Nuevo evento'}
              </h2>
              <button class="close-button" @click=${this.closeEventModal}>×</button>
            </div>
            
            <form @submit=${this.handleEventSubmit}>
              <div class="form-group">
                <label for="title">Título</label>
                <input 
                  type="text" 
                  id="title" 
                  name="title" 
                  value="${this.editingEvent ? this.editingEvent.title : ''}" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="description">Descripción</label>
                <textarea 
                  id="description" 
                  name="description"
                >${this.editingEvent ? this.editingEvent.description : ''}</textarea>
              </div>
              
              <div class="form-group">
                <label for="date">Fecha</label>
                <input 
                  type="text" 
                  id="date" 
                  value="${this.selectedDate.toLocaleDateString()}" 
                  disabled
                >
              </div>
              
              <div class="form-group">
                <label for="start-time">Hora de inicio</label>
                <input 
                  type="time" 
                  id="start-time" 
                  name="start-time" 
                  value="${this.editingEvent ? this.formatTime(this.editingEvent.start) : '09:00'}" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="end-time">Hora de fin</label>
                <input 
                  type="time" 
                  id="end-time" 
                  name="end-time" 
                  value="${this.editingEvent ? this.formatTime(this.editingEvent.end) : '10:00'}" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="color">Color</label>
                <input 
                  type="color" 
                  id="color" 
                  name="color" 
                  value="${this.editingEvent ? this.editingEvent.color : '#1a73e8'}"
                >
              </div>
              
              <div class="form-actions">
                ${this.editingEvent ? html`
                  <button type="button" class="delete-button" @click=${this.deleteEvent}>
                    Eliminar
                  </button>
                ` : ''}
                <button type="submit">
                  ${this.editingEvent ? 'Actualizar' : 'Crear'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ` : ''}
    `;
  }

  // Formatear hora para input time
  formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}

customElements.define('google-calendar', GoogleCalendar);


