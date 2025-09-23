import { LitElement, html, css } from "lit";

export class ModalTarea extends LitElement {
    static properties = {
        abierto: { type: Boolean },
        fechaSeleccionada: { type: Object }
    }

    static styles = css`
.fondo-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .contenido-modal {
            background: white;
            border-radius: 8px;
            width: 480px;
            max-width: 90vw;
        }

        .encabezado-modal {
            padding: 16px 24px;
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .titulo-modal {
            margin: 0;
            font-size: 18px;
            font-weight: 500;
            color: #3c4043;
        }

        .boton-cerrar {
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
            color: #5f6368;
            padding: 4px;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .boton-cerrar:hover {
            background-color: #f1f3f4;
        }

        .cuerpo-modal {
            padding: 24px;
        }

        .grupo-formulario {
            margin-bottom: 16px;
        }

        .etiqueta {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: #3c4043;
            font-weight: 500;
        }

        .campo-input {
            width: 100%;
            padding: 12px;
            border: 1px solid #dadce0;
            border-radius: 4px;
            font-size: 14px;
            box-sizing: border-box;
        }

        .campo-input:focus {
            outline: none;
            border-color: #1a73e8;
        }

        .campo-fecha {
            width: 100%;
            padding: 12px;
            border: 1px solid #dadce0;
            border-radius: 4px;
            font-size: 14px;
            box-sizing: border-box;
        }

        .pie-modal {
            padding: 16px 24px;
            border-top: 1px solid #e0e0e0;
            display: flex;
            justify-content: flex-end;
            gap: 12px;
        }

        .boton-secundario {
            background: white;
            border: 1px solid #dadce0;
            border-radius: 4px;
            padding: 8px 16px;
            font-size: 14px;
            color: #3c4043;
            cursor: pointer;
        }

        .boton-secundario:hover {
            background-color: #f8f9fa;
        }

        .boton-primario {
            background: #1a73e8;
            border: none;
            border-radius: 4px;
            padding: 8px 16px;
            font-size: 14px;
            color: white;
            cursor: pointer;
        }

        .boton-primario:hover {
            background: #1669d9;
        }

        .oculto {
            display: none;
        }
    `;

    constructor() {
        super();
        this.abierto = false;
        this.fechaSeleccionada = new Date();
    }

    cerrarModal() {
        this.abierto = false;
        this.dispatchEvent(new CustomEvent('cerrar-modal'));
    }

    guardarTarea() {
        const titulo = this.shadowRoot.querySelector('#titulo-tarea').value;
        const fecha = this.shadowRoot.querySelector('#fecha-tarea').value;
        
        if (titulo.length <= 0 ) {
            alert('Por favor ingresa un título para la tarea');
            return;
        }

        const evento = {
            id: Date.now(),
            titulo: titulo.trim(),
            fecha: new Date(fecha),
            fechaCreacion: new Date()
        };

        this.dispatchEvent(new CustomEvent('guardar-tarea', {
            detail: evento
        }));

        this.cerrarModal();
        this.limpiarFormulario();
    }

    limpiarFormulario() {
        this.shadowRoot.querySelector('#titulo-tarea').value = '';
        this.shadowRoot.querySelector('#fecha-tarea').value = this.formatearFecha(new Date());
    }

    formatearFecha(fecha) {
        return fecha.toISOString().split('T')[0];
    }

    render() {
        return html`
            <div class="fondo-modal ${this.abierto ? '' : 'oculto'}">
                <div class="contenido-modal">
                    <div class="encabezado-modal">
                        <h3 class="titulo-modal">Crear nueva tarea</h3>
                    </div>
                    
                    <div class="cuerpo-modal">
                        <div class="grupo-formulario">
                            <label class="etiqueta" for="titulo-tarea">Título</label>
                            <input 
                                type="text" 
                                id="titulo-tarea" 
                                class="campo-input" 
                                placeholder="Ingresa Evento"
                                maxlength="100"
                            >
                        </div>
                        
                        <div class="grupo-formulario">
                            <label class="etiqueta" for="fecha-tarea">Fecha</label>
                            <input 
                                type="date" 
                                id="fecha-tarea" 
                                class="campo-fecha"
                                value=${this.formatearFecha(this.fechaSeleccionada)}
                            >
                        </div>
                    </div>
                    
                    <div class="pie-modal">
                        <button class="boton-secundario" @click=${this.cerrarModal}>Cancelar</button>
                        <button class="boton-primario" @click=${this.guardarTarea}>Guardar</button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('modal-tarea', ModalTarea); 