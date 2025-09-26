import { LitElement, html, css } from "lit";
import { getReservas } from "../js/utils/idb.js";
class BookingApp extends LitElement {
  static properties = {
    filters: { type: Object },
    startISO: { type: String },
    endISO: { type: String },
    reservas: { type: Array },
  };
  static styles = css`
    :host {
      display: block;
    }
    header {
      position: sticky;
      top: 0;
      z-index: 10;
      background: linear-gradient(
        180deg,
        rgba(22, 25, 34, 0.95),
        rgba(22, 25, 34, 0.65)
      );
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--borde);
    }
    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 14px 16px;
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: center;
    }
    .filters {
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }
    .layout {
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px;
      display: grid;
      grid-template-columns: 360px 1fr;
      gap: 16px;
    }
    aside.card {
      padding: 12px;
      display: grid;
      gap: 12px;
      height: fit-content;
      position: sticky;
      top: 88px;
    }
    .sec {
      display: grid;
      gap: 8px;
    }
    .reservas-list {
      display: grid;
      gap: 8px;
    }
  `;
  constructor() {
    super();
    this.filters = {
      minPrice: null,
      maxPrice: null,
      location: "",
      type: "",
    };
    this.startISO = null;
    this.endISO = null;
    this.reservas = [];
  }
  async connectedCallback() {
    super.connectedCallback();
    this.reservas = await getReservas();
  }
  _onRange(ev) {
    const { startISO, endISO } = ev.detail || {};
    this.startISO = startISO;
    this.endISO = endISO;
  }
  _applyFilters(e) {
    e?.preventDefault();
    const form = this.renderRoot?.querySelector("#filtros");
    const data = Object.fromEntries(new FormData(form).entries());
    const minPrice = data.minPrice ? Number(data.minPrice) : null;
    const maxPrice = data.maxPrice ? Number(data.maxPrice) : null;
    this.filters = {
      ...this.filters,
      minPrice,
      maxPrice,
      location: data.location || "",
      type: data.type || "",
    };
  }
  _clearFilters() {
    const form = this.renderRoot?.querySelector("#filtros");
    form.reset();
    this.filters = {
      minPrice: null,
      maxPrice: null,
      location: "",
      type: "",
    };
  }
  _openReserva(ev) {
    const modal = this.renderRoot?.querySelector("reservation-modal");
    if (!this.startISO || !this.endISO) {
      alert("Primero selecciona un rango de fechas en el calendario.");
      return;
    }
    modal.open({
      listing: ev.detail.listing,
      startISO: this.startISO,
      endISO: this.endISO,
    });
  }
  async _reservaCreada() {
    this.reservas = await getReservas();
  }
  render() {
    return html` <header>
        <div class="header-inner">
          <div style="display:flex;align-items:center;gap:10px;">
            <strong>Sistema de Reservas</strong>
            <span class="chip">
              ${this.startISO || "inicio"} → ${this.endISO || "fin"}</span
            >
          </div>
          <form id="filtros" class="filters" @submit=${this._applyFilters}>
            <input
              class="input"
              name="location"
              placeholder="Ubicación (ej. Cancún)"
            />
            <select name="type">
              <option value="">Tipo</option>
              <option>Casa</option>
              <option>Departamento</option>
              <option>Cabaña</option>
              <option>Loft</option>
            </select>
            <input
              class="input"
              name="minPrice"
              type="number"
              min="0"
              placeholder="Precio mín."
            />
            <input
              class="input"
              name="maxPrice"
              type="number"
              min="0"
              placeholder="Precio máx."
            />
            <button class="btn primario" type="submit">Filtrar</button>
            <button class="btn" type="button" @click=${this._clearFilters}>
              Limpiar
            </button>
          </form>
        </div>
      </header>
      <div class="layout">
        <aside class="card">
          <div class="sec">
            <h3 style="margin:8px 0 0;">Calendario</h3>
            <date-range-picker
              @change-range=${this._onRange}
            ></date-range-picker>
          </div>
          <div class="sec">
            <h3 style="margin:8px 0 0;">Mis reservas</h3>
            <div class="reservas-list">
              ${this.reservas.length === 0
                ? html`<div class="chip">Aún no tienes reservas</div>`
                : this.reservas.map(
                    (r) =>
                      html`<div
                        class="card"
                        style="padding:10px;display:grid;gap:6px;"
                      >
                        <div style="font-weight:700">${r.title}</div>
                        <div class="chip">${r.startISO} → ${r.endISO}</div>
                        <div>Total: <strong>$${r.total} MXN</strong></div>
                      </div>`
                  )}
            </div>
          </div>
        </aside>
        <section>
          <listings-grid
            .filters=${this.filters}
            @reservar=${this._openReserva}
          ></listings-grid>
        </section>
      </div>
      <reservation-modal
        @reserva-creada=${this._reservaCreada}
      ></reservation-modal>`;
  }
}
customElements.define("booking-app", BookingApp);