import { LitElement, html } from 'lit';
import { sharedStyles } from './styles.js';

export class CalendarHeader extends LitElement {
  static styles = [sharedStyles];

  static properties = {
    currentDate: { type: Object },
    view: { type: String }
  };

  constructor() {
    super();
    this.currentDate = new Date();
    this.view = 'month';
  }

  dispatchNavigation(direction) {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { direction },
      bubbles: true,
      composed: true
    }));
  }

  dispatchViewChange(view) {
    this.dispatchEvent(new CustomEvent('view-change', {
      detail: { view },
      bubbles: true,
      composed: true
    }));
  }

  dispatchToday() {
    this.dispatchEvent(new CustomEvent('go-today', {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const monthName = this.currentDate.toLocaleDateString('es-ES', {
      month: 'long',
      year: 'numeric'
    });

    return html`
      <div class="calendar-header">
        <div class="navigation-buttons">
          <button class="header-button" @click=${() => this.dispatchNavigation('prev')}>
            ‹
          </button>
          <button class="header-button" @click=${this.dispatchToday}>
            Hoy
          </button>
          <button class="header-button" @click=${() => this.dispatchNavigation('next')}>
            ›
          </button>
          <span class="current-month">${monthName}</span>
        </div>
        
        <div class="view-buttons">
          <button 
            class="view-button ${this.view === 'month' ? 'active' : ''}"
            @click=${() => this.dispatchViewChange('month')}
          >
            Mes
          </button>
          <button 
            class="view-button ${this.view === 'week' ? 'active' : ''}"
            @click=${() => this.dispatchViewChange('week')}
          >
            Semana
          </button>
          <button 
            class="view-button ${this.view === 'day' ? 'active' : ''}"
            @click=${() => this.dispatchViewChange('day')}
          >
            Día
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('calendar-header', CalendarHeader);