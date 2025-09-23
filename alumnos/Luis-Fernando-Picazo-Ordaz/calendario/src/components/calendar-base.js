import { LitElement, html, css } from "lit";
import './my-header'
import './my-main'
import './my-dialog'
import './my-aside'

export class Calendar extends LitElement {

    static properties = {
        showAside: { type: Boolean },
        showModal: { type: Boolean }
    }

    constructor() {
        super();
        this.showAside = true
        this.showModal = false
    }

    static get is() {
        return 'my-calendar'
    }

    render() {
        return html`
            <div class="container ${this.showAside ? 'show-aside' : 'hide-aside'}">

                <my-header @hide-aside=${this.hideAside}></my-header>
                ${this.showAside ? html`<my-aside></my-aside>` : ''}
                <my-main @open-modal=${this.openModal}></my-main>

            </div>
            
            <my-dialogue 
                class="${this.showModal ? '' : 'hide-modal'}"
                @close-modal=${this.closeModal}
            >
            </my-dialogue>
        `
    }

    hideAside() {
        return this.showAside = !this.showAside
    }

    closeModal() {
        return this.showModal = false
    }
    openModal() {
        return this.showModal = true
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            background-color: var(--color-blue-80);
            color: white;
            padding: 1rem;
            box-sizing: border-box;
            font-family: arial;
            overflow: hidden;
        }

        .container {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 4fr;
            grid-template-rows: 1fr 10fr;
        }

        .show-aside {
        grid-template-columns: 1fr 4fr;
        }

        .hide-aside {
        grid-template-columns: 0fr 1fr;
        }

        my-header {
            grid-column: 1 / 3;
            grid-row: 1 / 2;
        }

        my-aside {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }

        my-main {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
        }

        .hide-modal {
            display: none;
        }
    `;
}