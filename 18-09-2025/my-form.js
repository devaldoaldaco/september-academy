export class MyForm extends HTMLElement {
    constructor() {
        super();
        this.btnText = 'Ejemplo de texto';
        this.color = 'black';
        this.textColor = 'white';
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        console.log('conected');
        this.render();
    }

    disconnectedCallback() {
        console.log('disconected');
    }

    static get observedAttributes() {
        return ['color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'color') {
            console.log(newValue, oldValue);
            this.color = newValue;
        }

        if(name === 'colorBtn') {
            console.log(newValue, oldValue);
            this.color = newValue;
        }

        if(name === 'colorInput') {
            console.log(newValue, oldValue);
            this.color = newValue;
        }

        if(name === 'colorInputError') {
            console.log(newValue, oldValue);
            this.color = newValue;
        }
    }

    adoptedCallback() {
        console.log('adopted');
    }
    
    render() {
        const template = `
           <my-button text="${this.btnText}"></my-button>
           <my-list list="[Object object]"></my-list>
           <carousel-images images="['url1', 'url2']">
        `; // HTML template
        this.shadowRoot.innerHTML = template;
    }
};