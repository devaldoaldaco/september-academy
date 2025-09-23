import { LitElement, html, css } from "lit";
import './my-button'

export class MyHeader extends LitElement {

    render() {
        return html`
            <header>
                <section>
                    <my-button style="width:60px; height: 30px;" @click=${this.hideAside} noborder>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
                    </my-button>
                    <span>Calendar</span>                  
                </section>
                <section>
                    <div>
                        <my-button>
                            Today
                        </my-button>
                        <my-button style="width: 2rem; height: 2rem; border-radius: 50%;"> < </my-button>
                        <my-button style="width: 2rem; height: 2rem; border-radius: 50%;"> > </my-button>
                        <span>Septiembre 23</span>
                    </div>
                    <div>
                        <my-button style="width: 2rem; height: 2rem; border-radius: 50%;" noborder>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#fcfcfc" d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>
                        </my-button>
                        <my-button style="width: 2rem; height: 2rem; border-radius: 50%; border: none;" noborder>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z"/></svg>
                        </my-button>
                        <my-button style="width: 2rem; height: 2rem; border-radius: 50%; border: none;" noborder>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>
                        </my-button>
                        <select name="" id="">
                        <option value="month">Mes</option>
                        <option value="year">Año</option>
                        <option value="week">Semana</option>
                        <option value="day">Día</option>
                        </select>
                    
                    </div>
                </section>
            </header>
        `
    }

    hideAside() {
        this.dispatchEvent(new CustomEvent('hide-aside', {
            bubbles : true,
            composed: true,
        }))
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        header {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

        }

        
        section {
            justify-content: center;
            align-items: center;
            display: flex;
            gap: 3rem;
        }

        section:first-child{
            gap: 0.5rem;
        }
        
        section > span {
            font-size: 22px
        }


        div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
        }

        div > span {
            font-size: 22px;
        }

        select {
            padding-left: 0.5rem;
            width: 90px;
            height: 35px;
            background-color: var(--color-blue-100);
            border-radius: 1.5rem;
            border: 1px solid var(--color-blue-20);
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
    `

}

customElements.define('my-header', MyHeader)