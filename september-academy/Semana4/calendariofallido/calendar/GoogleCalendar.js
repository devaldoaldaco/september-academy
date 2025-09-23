import { LitElement, html } from 'lit';
import { sharedStyles } from './styles.js';
import { CalendarHeader } from './CalendarHeader.js';
import { CalendarGrid } from './CalendarGrid.js';
import { EventModal } from './EventModal.js';
import { getMonthDays, formatDateKey } from './CalendarUtils.js';
import { loadEvents, saveEvents } from './EventStorage.js';

export class GoogleCalendar extends LitElement {
  static styles = [sharedStyles];

  static properties = {
    currentMonth: { type: Number },
    currentYear: { type: Number },
    events: { type: Object },
    selectedDate: { type: Object },
    showModal: { type: Boolean },
  };

  constructor() {
    super();
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.events = loadEvents();
    this.selectedDate = null;
    this.showModal = false;
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
  }

  selectDate(date) {
    this.selectedDate = date;
    this.showModal = true;
  }

  saveEvent(title) {
    if (!title) return;
    const key = formatDateKey(this.selectedDate);
    if (!this.events[key]) this.events[key] = [];
    this.events[key].push(title);
    saveEvents(this.events);
    this.showModal = false;
    this.requestUpdate();
  }

  render() {
    const { days } = getMonthDays(this.currentYear, this.currentMonth);
    const monthName = new Date(this.currentYear, this.currentMonth).toLocaleString('es-ES', {
      month: 'long',
    });

    return html`
      <div class="calendar">
        ${CalendarHeader({
          month: monthName,
          year: this.currentYear,
          onPrev: () => {
            this.prevMonth();
            this.requestUpdate();
          },
          onNext: () => {
            this.nextMonth();
            this.requestUpdate();
          },
        })}
        ${CalendarGrid({
          days,
          events: this.events,
          onSelect: (d) => this.selectDate(d),
        })}
      </div>

      ${this.showModal
        ? EventModal({
            date: this.selectedDate,
            onSave: (title) => this.saveEvent(title),
            onClose: () => (this.showModal = false),
          })
        : ''}
    `;
  }
}

customElements.define('google-calendar', GoogleCalendar);
