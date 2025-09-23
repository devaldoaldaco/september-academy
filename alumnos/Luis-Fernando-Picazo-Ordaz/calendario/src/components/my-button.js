import { LitElement, html, css } from "lit";

export class MyButton extends LitElement {

    static properties = {
        noborder:{ type: Boolean},
        secondary: {type: Boolean}
    }

    constructor() {
        super();
        this.noborder = false;
        this.secondary = false;
    }


    render() {
        return html`
            <button 
            class="${this.noborder ? 'border-none': ''} ${this.secondary ? 'secondary': ''}" >
                <slot></slot>
            </button>
        `
    }

    static styles = css`
       :host{
            display: block;
            width: 90px;
            height: 35px;
            box-sizing: border-box
       }

        button {
            width: 100%;
            height: 100%;
            background-color: var(--color-blue-100);
            border-radius: 1.5rem;
            border: 1px solid var(--color-blue-20);
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        button:hover {
            background-color: var(--color-blue-20);
            cursor: pointer;
        }

        button:active {
            background-color: var(--color-blue-80);
        }

        .border-none {
            border: none;
        }

        .secondary {
            background-color: var(--color-blue-20);
            color: white;
        }

        .secondary:hover {
            background-color: var(--color-blue-60);
            color: white;
        }
        .secondary:active {
            background-color: var(--color-blue-20);
            color: white;
        }
    `

}

customElements.define('my-button', MyButton)