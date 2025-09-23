import { LitElement, html } from 'lit';
import { sharedStyles } from './styles.js';
import { CalendarUtils } from './CalendarUtils.js';

export class EventModal extends LitElement {
  static styles = [sharedStyles];

  static properties = {
    show: { type: Boolean },
    selectedDate: { type: Object },
    editingEvent: { type: Object }
  };

  constructor() {
    super();
    this.show = false;
    this.selectedDate = new Date();
    this.editingEvent = null;
  }

  dispatchClose() {
    this.dispatchEvent(new CustomEvent('modal-close', {
      bubbles: true,
      composed: true
    }));
  }

  dispatchSave(eventData) {
    this.dispatchEvent(new CustomEvent('event-save', {
      detail: { event: eventData },
      bubbles: true,
      composed: true
    }));
  }

  dispatchDelete() {
    this.dispatchEvent(new CustomEvent('event-delete', {
      detail: { eventId: this.editingEvent?.id },
      bubbles: true,
      composed: true
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const eventData = {
      id: this.editingEvent ? this.editingEvent.id : CalendarUtils.createEventId(),
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
    
    this.dispatchSave(eventData);
  }

  render() {
    if (!this.show) return html``;

    const startTime = this.editingEvent ? 
      CalendarUtils.formatTime(this.editingEvent.start) : '09:00';
    const endTime = this.editingEvent ? 
      CalendarUtils.formatTime(this.editingEvent.end) : '10:00';

    return html`
      <div class="modal-overlay" @click=${this.dispatchClose}>
        <div class="modal-content" @click=${(e) => e.stopPropagation()}>
          <div class="modal-header">
            <h2 class="modal-title">
              ${this.editingEvent ? 'Editar evento' : 'Nuevo evento'}
            </h2>
            <button class="close-button" @click=${this.dispatchClose}>×</button>
          </div>
          
          <form @submit=${this.handleSubmit}>
            <div class="form-group">
              <label class="form-label" for="title">Título</label>
              <input 
                class="form-input"
                type="text" 
                id="title" 
                name="title" 
                .value=${this.editingEvent?.title || ''}
                required
              >
            </div>
            
            <div class="form-group">
              <label class="form-label" for="description">Descripción</label>
              <textarea 
                class="form-input form-textarea"
                id="description" 
                name="description"
              >${this.editingEvent?.description || ''}</textarea>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="date">Fecha</label>
              <input 
                class="form-input"
                type="text" 
                id="date" 
                .value=${this.selectedDate.toLocaleDateString('es-ES')}
                disabled
              >
            </div>
            
            <div class="form-group">
              <label class="form-label" for="start-time">Hora de inicio</label>
              <input 
                class="form-input"
                type="time" 
                id="start-time" 
                name="start-time" 
                .value=${startTime}
                required
              >
            </div>
            
            <div class="form-group">
              <label class="form-label" for="end-time">Hora de fin</label>
              <input 
                class="form-input"
                type="time" 
                id="end-time" 
                name="end-time" 
                .value=${endTime}
                required
              >
            </div>
            
            <div class="form-group">
              <label class="form-label" for="color">Color</label>
              <input 
                class="form-input"
                type="color" 
                id="color" 
                name="color" 
                .value=${this.editingEvent?.color || '#1a73e8'}
              >
            </div>
            
            <div class="form-actions">
              ${this.editingEvent ? html`
                <button 
                  type="button" 
                  class="action-button delete-button" 
                  @click=${this.dispatchDelete}
                >
                  Eliminar
                </button>
              ` : ''}
              <button type="button" class="action-button cancel-button" @click=${this.dispatchClose}>
                Cancelar
              </button>
              <button type="submit" class="action-button save-button">
                ${this.editingEvent ? 'Actualizar' : 'Crear'}
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }
}

customElements.define('event-modal', EventModal);