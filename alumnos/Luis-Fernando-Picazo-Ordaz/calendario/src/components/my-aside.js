import { LitElement, html, css } from "lit";

export class MyAside extends LitElement {

    static properties = {

    }

    constructor() {
        super();

    }

    render() {
        return html`
            <my-button style="width: 100%; height: 50px;">Create</my-button>
            <input type="date" class="date">
            <details>
                <summary>My calendars</summary>
                <section>
                    <div>
                        <label for="luis">Luis</label>
                        <input type="checkbox" name="luis" id="luis">
                    </div>
                    <div>
                        <label for="birthday">Bithdays</label>
                        <input type="checkbox" name="birthday" id="birthday">
                    </div>
                    <div>
                        <label for="tasks">Tasks</label>    
                        <input type="checkbox" name="tasks" id="tasks">
                    </div>
                </section>
            </details>
        `

    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 3fr 3fr 3fr;
            place-items: center;
            padding: 1rem;
        }

        details > section{
            display: flex;
            flex-direction: column;
        }

        details {
            background-color: var(--color-blue-100);
            border-radius: 1rem;
            border: 1px solid var(--color-blue-20);
            padding: 1rem;
            box-sizing: border-box;
            height: 70%;
            width: 100%;
        }

        details > summary {
            cursor: pointer;
        }

        .date {
            width: 100%;
            height: 30%;
            background-color: var(--color-blue-100);
            border-radius: 1rem;
            color: white;
            text-align: center;
            border: 1px solid var(--color-blue-20);
            cursor: pointer;
        }

        section {
            margin-top: 0.5rem;
        }
    `
}

customElements.define('my-aside', MyAside);