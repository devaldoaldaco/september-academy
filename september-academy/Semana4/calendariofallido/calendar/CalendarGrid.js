import { LitElement, html } from 'lit';
import { sharedStyles } from './styles.js';
import { CalendarUtils } from './CalendarUtils.js';

export class CalendarGrid extends LitElement {
  static styles = [sharedStyles];

  static properties = {
    currentDate: { type: Object },
    events: { type: Array },
    view: { type: String }
  };

  constructor() {
    super();
    this.currentDate = new Date();
    this.events = [];
    this.view = 'month';
  }

  dispatchDateSelect(date) {
    this.dispatchEvent(new CustomEvent('date-select', {
      detail: { date },
      bubbles: true,
      composed: true
    }));
  }

  dispatchEventSelect(event) {
    this.dispatchEvent(new CustomEvent('event-select', {
      detail: { event },
      bubbles: true,
      composed: true
    }));
  }

  getCalendarDays() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const days = CalendarUtils.getMonthDays(year, month);
    
    return days.map(date => ({
      date,
      isCurrentMonth: date.getMonth() === month,
      isToday: CalendarUtils.isToday(date),
      events: this.events.filter(event => 
        CalendarUtils.isSameDay(event.start, date)
      )
    }));
  }

  renderDay(day) {
    return html`
      <div 
        class="calendar-day ${day.isCurrentMonth ? '' : 'other-month'} ${day.isToday ? 'today' : ''}"
        @click=${() => this.dispatchDateSelect(day.date)} 
      >
        <div class="day-number">${day.date.getDate()}</div>
        <div class="events-container">
          ${day.events.slice(0, 3).map(event => html`
            <div 
              class="event" 
              style="background-color: ${event.color || '#1a73e8'}; color: white;"
              @click=${(e) => {
                e.stopPropagation();
                this.dispatchEventSelect(event);
              }}
            >
              ${event.title}
            </div>
          `)}
          ${day.events.length > 3 ? html`
            <div class="more-events" @click=${(e) => {
              e.stopPropagation();
              this.dispatchDateSelect(day.date);
            }}>
              +${day.events.length - 3} más
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  render() {
    const weekDays = CalendarUtils.getWeekDays('es-ES');
    const calendarDays = this.getCalendarDays();

    return html`
      <div class="calendar-grid">
        ${weekDays.map(day => html`
          <div class="day-header">${day}</div>
        `)}
        
        ${calendarDays.map(day => this.renderDay(day))}
      </div>
    `;
  }
}

customElements.define('calendar-grid', CalendarGrid);