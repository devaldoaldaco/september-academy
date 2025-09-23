import { LitElement, html, css } from "lit";
import './calendar-item'
export class MyMain extends LitElement {

    static properties = {
    }

    constructor() {
        super();

    }

    render() {
        const days = [];
        for (let i = 1; i <= 30; i++) {
            days.push(html`
            <calendar-item @click=${this.openModal} day=${i}></calendar-item>
            `);
        }
        return html`${days}`;
    }


    openModal() {
        this.dispatchEvent(new CustomEvent('open-modal', {
            bubbles: true,
            composed: true,
        }));
    }


    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-template-rows: repeat(5, 1fr);
            border-radius: 1rem;
            background-color: var(--color-blue-100);
            box-sizing: border-box;
        }

        calendar-item:hover {
            background-color: var(--color-blue-60);
        }

        calendar-item:active {
            background-color: var(--color-blue-100);
        }
    `
}

customElements.define('my-main', MyMain);