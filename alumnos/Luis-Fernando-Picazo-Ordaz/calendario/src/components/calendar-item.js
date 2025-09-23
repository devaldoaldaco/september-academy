import { LitElement, html, css } from "lit";

export class ItemCalendar extends LitElement {

    static properties = {
        day: {type: Number},
    }

    constructor() {
        super();
        this.day = null;
    }

    render() {
        const date = new Date();
        const today = date.getDate();
        return html`
            <span class="${this.day === today ? 'today': ''}">
                ${this.day}
            </span>

            <p class="task"></p>
        `

    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            background-color: var(--color-blue-100);
            border: 1px solid var(--color-border);
            color: white;
            cursor: pointer;
            transition: all 0.5s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        span {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            display: block;
            margin-top: 0.5rem;
            display: grid;
            place-content: center;
        }
        
        .today {
            background-color: var(--color-blue-20);
        }

        .task {
            text-align: center;
            font-size: 15px;
            background-color: var(--color-blue-20);
        }
    `
}

customElements.define('calendar-item', ItemCalendar);