import { LitElement, html, css } from "lit";
import { searchListings } from "../js/utils/api.js";
class ListingsGrid extends LitElement {
  static properties = {
    filters: { type: Object },
    items: { type: Array },
    loading: { type: Boolean },
  };
  static styles = css`
    :host {
      display: block;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 12px;
    }
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }
  `;
  constructor() {
    super();
    this.filters = {};
    this.items = [];
    this.loading = false;
  }
  async updated(changed) {
    if (changed.has("filters")) {
      this.loading = true;
      this.items = await searchListings(this.filters || {});
      this.loading = false;
    }
  }
  _onReservar(ev) {
    this.dispatchEvent(
      new CustomEvent("reservar", {
        detail: ev.detail,
        bubbles: true,
        composed: true,
      })
    );
  }
  render() {
    return html`<div class="top">
        <div>${this.items.length} alojamientos encontrados</div>
        ${this.loading ? html`<span class="chip">Buscando…</span>` : null}
      </div>
      <div class="grid">
        ${this.items.map(
          (i) =>
            html`<listing-card
              .item=${i}
              @reservar=${this._onReservar}
            ></listing-card>`
        )}
      </div>`;
  }
}
customElements.define("listings-grid", ListingsGrid);