import { LitElement, html, css } from "lit";
class ListingCard extends LitElement {
  static properties = { item: { type: Object } };
  static styles = css`
    :host {
      display: block;
    }
    .cardx {
      overflow: hidden;
    }
    .img {
      width: 100%;
      height: 180px;
      background: #000;
      object-fit: cover;
      display: block;
      border-top-left-radius: 14px;
      border-top-right-radius: 14px;
    }
    .body {
      padding: 12px;
      display: grid;
      gap: 6px;
    }
    .title {
      font-weight: 700;
    }
    .meta {
      color: var(--muted);
      font-size: 13px;
    }
    .price {
      font-weight: 800;
    }
    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
    }
  `;
  constructor() {
    super();
    this.item = {};
  }
  _reserve() {
    this.dispatchEvent(
      new CustomEvent("reservar", {
        detail: { listing: this.item },
        bubbles: true,
        composed: true,
      })
    );
  }
  render() {
    const i = this.item || {};
    return html`<div class="card cardx">
      <img class="img" src="${i.img}" alt="${i.title}" />
      <div class="body">
        <div class="title">${i.title}</div>
        <div class="meta">${i.location} · ${i.type}</div>
        <div class="price">$${i.price} MXN / noche</div>
        <div class="meta">${i.desc || ""}</div>
        <div class="actions">
          <span class="chip">ID: ${i.id}</span
          ><button class="btn primario" @click=${this._reserve}>
            Reservar
          </button>
        </div>
      </div>
    </div>`;
  }
}
customElements.define("listing-card", ListingCard);