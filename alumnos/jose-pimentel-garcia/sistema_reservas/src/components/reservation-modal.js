import { LitElement, html, css } from "lit";
import { addReserva } from "../js/utils/idb.js";
class ReservationModal extends LitElement {
  static properties = {
    openState: { type: Boolean, state: true },
    listing: { type: Object, state: true },
    startISO: { type: String },
    endISO: { type: String },
    nights: { type: Number, state: true },
    total: { type: Number, state: true },
  };
  static styles = css`
    :host {
      display: block;
    }
    .modal {
      background: #240d3eff; 
      padding: 20px;
      border-radius: 12px;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 8px 24px rgba(0,0,0,0.25); 
      color: #ffffffff;
    }
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .titulo {
      font-weight: 700;
      font-size: 18px;
    }
    .grid {
      display: grid;
      gap: 8px;
    }
    .overlay {
        position: fixed;
        inset: 0; 
        background: rgba(18, 14, 65, 0.5); 
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
  }
  `;
  constructor() {
    super();
    this.openState = false;
    this.listing = null;
    this.startISO = null;
    this.endISO = null;
    this.nights = 0;
    this.total = 0;
  }
  open({ listing, startISO, endISO }) {
    this.listing = listing;
    this.startISO = startISO;
    this.endISO = endISO;
    this._recalc();
    this.openState = true;
  }
  close() {
    this.openState = false;
  }
  _recalc() {
    if (!this.startISO || !this.endISO || !this.listing) {
      this.nights = 0;
      this.total = 0;
      return;
    }
    const ms = new Date(this.endISO) - new Date(this.startISO);
    const nights = Math.max(1, Math.round(ms / 86400000));
    this.nights = nights;
    this.total = nights * (this.listing?.price || 0);
  }
  async _confirm() {
    if (!this.listing || !this.startISO || !this.endISO) return;
    const reserva = {
      id: crypto.randomUUID(),
      listingId: this.listing.id,
      title: this.listing.title,
      startISO: this.startISO,
      endISO: this.endISO,
      priceNight: this.listing.price,
      total: this.total,
      createdAt: new Date().toISOString(),
    };
    await addReserva(reserva);
    this.dispatchEvent(
      new CustomEvent("reserva-creada", {
        detail: { reserva },
        bubbles: true,
        composed: true,
      })
    );
    this.close();
  }
  render() {
    if (!this.openState) return html``;
    const l = this.listing || {};
    return html`<div
      class="overlay"
      @click=${(e) => {
        if (e.target === e.currentTarget) this.close();}}>
      <div
        class="modal card"
        role="dialog"
        aria-modal="true"
        aria-label="Confirmar reserva">
        <div class="head">
          <div class="titulo">Confirmar reserva</div>
          <button class="btn" @click=${this.close}>✕</button>
        </div>
        <div class="grid">
          <div style="display:flex;gap:12px;align-items:center;">
            <img
              src="${l.img}"
              alt=""
              style="width:72px;height:72px;object-fit:cover;border-radius:10px;border:1px solid var(--borde);"
            />
            <div>
              <div style="font-weight:700">${l.title || ""}</div>
              <div class="chip">${l.location || ""} · ${l.type || ""}</div>
            </div>
          </div>
          <div class="card" style="padding:10px;display:grid;gap:6px;">
            <div>Entrada: <strong>${this.startISO || "-"}</strong></div>
            <div>Salida: <strong>${this.endISO || "-"}</strong></div>
            <div>Noches: <strong>${this.nights}</strong></div>
            <div>Total: <strong>$${this.total} MXN</strong></div>
          </div>
          <div style="display:flex;justify-content:flex-end;gap:8px;">
            <button class="btn" @click=${this.close}>Cancelar</button
            ><button class="btn primario" @click=${this._confirm}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>`;
  }
}
customElements.define("reservation-modal", ReservationModal);