export class MyButton extends HTMLElement {
    constructor() {
        super();
        this.text = 'Ejemplo de texto';
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
        this.render();
    }

    adoptedCallback() {
        console.log('adopted');
    }
    
    render() {
        const template = `
            <span style="background-color: ${this.color};color: ${this.textColor};">${this.text}</span>
        `; // HTML template
        this.shadowRoot.innerHTML = template;
    }
};