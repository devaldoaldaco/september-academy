import { LitElement, html, css } from "lit";
import {
  getMonthMatrix,
  monthLabel,
  weekdayShortLabels,
  todayISO,
  sameDayISO,
  isBetweenISO,
} from "../js/utils/fecha.js";
class DateRangePicker extends LitElement {
  static properties = {
    year: { type: Number },
    month: { type: Number },
    startISO: { type: String },
    endISO: { type: String },
  };
  static styles = css`
    :host {
      display: block;
    }
    .wrap {
      padding: 12px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .month {
      font-weight: 700;
    }
    .grid {
      display: grid;
      grid-template-rows: auto 1fr;
      gap: 8px;
    }
    .weekdays {
      display: grid;
      grid-template-columns: repeat(7, minmax(0, 1fr));
      gap: 6px;
      color: var(--muted);
      font-weight: 600;
      font-size: 12px;
    }
    .cells {
      display: grid;
      grid-template-columns: repeat(7, minmax(0, 1fr));
      grid-auto-rows: 44px;
      gap: 6px;
    }
    .day {
      border: 1px solid var(--borde);
      border-radius: 10px;
      display: grid;
      place-items: center;
      user-select: none;
      cursor: pointer;
      background: #141824;
    }
    .out {
      opacity: 0.45;
    }
    .selected {
      outline: 2px solid var(--primario);
    }
    .inrange {
      background: #1b2030;
      border-color: #2a3650;
    }
  `;
  constructor() {
    super();
    const n = new Date();
    this.year = n.getFullYear();
    this.month = n.getMonth();
    this.startISO = todayISO();
    this.endISO = null;
  }
  prev() {
    this.month === 0 ? ((this.month = 11), this.year--) : this.month--;
  }
  next() {
    this.month === 11 ? ((this.month = 0), this.year++) : this.month++;
  }
  _pick(iso) {
    if (!this.startISO || (this.startISO && this.endISO)) {
      this.startISO = iso;
      this.endISO = null;
    } else {
      if (iso < this.startISO) {
        this.endISO = this.startISO;
        this.startISO = iso;
      } else {
        this.endISO = iso;
      }
      this.dispatchEvent(
        new CustomEvent("change-range", {
          detail: { startISO: this.startISO, endISO: this.endISO },
          bubbles: true,
          composed: true,
        })
      );
    }
  }
  render() {
    const {weeks} = getMonthMatrix(this.year, this.month);
    const labels = weekdayShortLabels();
    const monthLbl = monthLabel(this.year, this.month);
    return html`<div class="wrap card">
      <div class="header">
        <div class="left">
          <button class="btn" @click=${this.prev}>◀</button
          ><span class="month">${monthLbl}</span
          ><button class="btn" @click=${this.next}>▶</button>
        </div>
        <div class="right">
          <span class="chip"
            >${this.startISO || "inicio"} → ${this.endISO || "fin"}</span
          >
        </div>
      </div>
      <div class="grid">
        <div class="weekdays">${labels.map((l) => html`<div>${l}</div>`)}</div>
        <div class="cells">
          ${weeks.flat().map((cell) => {
            const classes = ["day"];
            if (!cell.inMonth) classes.push("out");
            if (cell.iso === this.startISO || cell.iso === this.endISO)
              classes.push("selected");
            if (isBetweenISO(cell.iso, this.startISO, this.endISO))
              classes.push("inrange");
            return html`<div
              class="${classes.join(" ")}"
              @click=${() => this._pick(cell.iso)}
            >
              ${cell.day}
            </div>`;
          })}
        </div>
      </div>
    </div>`;
  }
}
customElements.define("date-range-picker", DateRangePicker);