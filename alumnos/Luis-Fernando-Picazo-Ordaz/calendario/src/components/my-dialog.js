import { LitElement, html, css } from "lit";

export class MyDialogue extends LitElement {

    static properties = {

    }

    constructor() {
        super();

    }

    render() {
        return html`
            <div class="container">
                <form class="task-form">
                    <h2>Agregar Tarea / Evento</h2>

                    <label for="task-name">Nombre:</label>
                    <input type="text" id="task-name" name="task-name" placeholder="Ej. Reunión, Comprar pan" required />

                    <label for="task-desc">Descripción:</label>
                    <textarea id="task-desc" name="task-desc" rows="3" placeholder="Escribe una descripción..." required></textarea>

                    <div class="buttons">
                        <my-button style="width:100%;" secondary @click=${this.closeModal}>Salir</my-button>
                        <my-button type="submit" style="width:100%;">Guardar</my-button>
                    </div>
                </form>
            </div>
        `

    }

    closeModal() {
        this.dispatchEvent(new CustomEvent('close-modal', {
            bubbles : true,
            composed: true,
        }))
    }

    static styles = css`
        :host {
            display: block;
            width: 100vw;
            height: 100vh;
            z-index: 10;
            background-color: #4646467d;
            display: grid;
            place-content: center;
            position: relative;
            top: -102%;
            left: -1.5%;
        }

        .container {
            width: 400px;
            height: 350px;
            background-color: var(--color-blue-60);
            border-radius: 1rem;
            padding: 1rem;
            box-sizing: border-box;
            color: white;
        }

        .task-form {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            color: white;
        }

        .task-form h2 {
            margin-top: 0;
            font-size: 1.2rem;
            text-align: center;
            background-color: var(--color-blue-20);
            border-radius: 1rem;
            padding-block: 0.5rem;
        }

        .task-form label {
            font-weight: bold;
            font-size: 0.9rem;
        }

        .task-form input,
        .task-form textarea {
            padding: 0.5rem;
            border: none;
            border-radius: 0.5rem;
            font-size: 0.9rem;
            resize: none;
            background-color: var(--color-blue-100);
            caret-color: var(--color-blue-20);
            color: white;
        }

        .task-form input:focus,
        .task-form textarea:focus {
            outline: none;
            border-color: var(--color-blue-20);
            box-shadow: 0 0 0 2px var(--color-blue-40);
            background-color: var(--color-blue-80);
        }

        .buttons {
            display: flex;
            gap: 1rem;
        }        
    `
}

customElements.define('my-dialogue', MyDialogue);