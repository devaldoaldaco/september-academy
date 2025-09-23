import { LitElement, html, css } from 'lit';

export class MyButton extends LitElement {

  static properties = {
    label: { type: String }
  };

  static styles = css`
    :host { display: inline-block; font-family: system-ui, sans-serif; }
    button {
      padding: 0.45rem 0.9rem;
      border-radius: 6px;
      border: 1px solid rgba(0,0,0,0.12);
      background: linear-gradient(#fff,#f6f6f6);
      cursor: pointer;
      font-size: 1rem;
    }
  `;

  constructor() {
    super();
    this.label = 'Click';
  }

  render() {
    return html`<button @click=${this._onClick}>${this.label}</button>`;
  }

  _onClick() {
    // ejemplo: dispatch event y log
    alert("click");
  }
}


