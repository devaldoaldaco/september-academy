import { LitElement, html, css } from 'lit';

class EventoModal extends LitElement {
  static properties = {
    openState: { type: Boolean, state: true },
    form: { type: Object, state: true },
    editing: { type: Boolean, state: true }
  };

  static styles = css`
    :host{ 
      display:block; 
    }

    .modal{ 
      background: var(--panel);       
      border: 1px solid var(--borde);  
      border-radius: 14px;             
      box-shadow: 0 10px 30px rgba(0,0,0,.5); 
      padding: 20px;
      width: min(520px, 92vw);         
      animation: aparecer .2s ease;
    }

    .head{ 
      display:flex; 
      justify-content:space-between; 
      align-items:center; 
      margin-bottom:10px;
    }

    .titulo{
      font-weight:700; 
      font-size 18px;
    }

    .grid{ 
      display:grid; 
      grid-template-columns:1fr 1fr; 
      gap:10px;
    }

    .grid-1{ 
      display:grid; 
      gap:10px;
    }
      
    label{ 
      font-size:12px; 
      color:var(--muted); 
      display:block; 
      margin-bottom:6px; 
    }

    textarea{ 
      min-height:90px; 
      padding:8px; 
    }

    .actions{ 
      display:flex;   
      justify-content:flex-end; 
      gap:8px; 
      margin-top:12px; 
    }

    .overlay {
      position: fixed;       
      inset: 0;             
      background: rgba(0,0,0,0.45); 
      display: grid;         
      place-items: center;   
      z-index: 999;         
    }

    @keyframes aparecer{
      from{ 
        transform: scale(.9); 
        opacity: 0; 
       }
      to{ 
        transform: scale(1); 
       opacity: 1; 
      }
    }
  `;

  constructor(){
    super();
    this.openState = false;
    this.form = { title:'', dateISO:'', time:'', desc:'' };
    this.editing = false;
    this._escHandler = (e)=>{ if(e.key === 'Escape') this.close(); };
  }

  open(payload){
    this.form = {
      id: payload.id || null,
      title: payload.title || '',
      dateISO: payload.dateISO || new Date().toISOString().slice(0,10),
      time: payload.time || '',
      desc: payload.desc || ''
    };
    this.editing = !!payload.id;
    this.openState = true;
    document.addEventListener('keydown', this._escHandler);
    this.updateComplete.then(()=> this.renderRoot?.querySelector('input[name=title]')?.focus());
  }

  close(){
    this.openState = false;
    document.removeEventListener('keydown', this._escHandler);
  }

  _submit(){
    const data = {
      title: this.form.title?.trim(),
      dateISO: this.form.dateISO,
      time: this.form.time?.trim(),
      desc: this.form.desc?.trim(),
    };

    if(!data.title){ 
      alert('El título es obligatorio.'); 
      return; 
    }

    if(this.editing){
      this.dispatchEvent(new CustomEvent('actualizar-evento', 
        {detail:
          { id:this.form.id, ...data }, 
          bubbles:true, 
          composed:true 
        }
      ));
    } 
    else {
      this.dispatchEvent(
        new CustomEvent('crear-evento', 
        { detail:data, 
          bubbles:true, 
          composed:true 
        }
      ));
    }
    this.close();
  }

  render(){
    if(!this.openState) return html``;

    return html`
      <div class="overlay" @click=${e=>{ if(e.target===e.currentTarget) this.close(); }}>
        <div class="modal card" role="dialog" aria-modal="true" aria-label=${this.editing?'Editar evento':'Nuevo evento'}>
          <div class="head">
            <div class="titulo">${this.editing ? 'Editar evento' : 'Nuevo evento'}</div>
            <button class="btn" @click=${this.close}>✕</button>
          </div>

          <div class="grid">
            <div class="grid-1">
              <div>
                <label>Título</label>
                <input class="input" name="title" .value=${this.form.title} 
                @input=${e=> this.form={...this.form, title:e.target.value}}/>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div>
                  <label>Fecha</label>
                  <input class="input" type="date" name="dateISO" .value=${this.form.dateISO} 
                  @input=${e=> this.form={...this.form, dateISO:e.target.value}} />
                </div>
                <div>
                  <label>Hora</label>
                  <input class="input" type="time" name="time" .value=${this.form.time} 
                  @input=${e=> this.form={...this.form, time:e.target.value}} />
                </div>
              </div>

              <div>
                <label>Descripción</label>
                <textarea class="input" name="desc" .value=${this.form.desc} 
                @input=${e=> this.form={...this.form, desc:e.target.value}}></textarea>
              </div>
            </div>
          </div>

          <div class="actions">
            ${this.editing ? html`
              <button class="btn primario" @click=${this._submit}>Guardar cambios</button>
              <button class="btn" @click=${this.close}>Cancelar</button>
            ` : html`
              <button class="btn primario" @click=${this._submit}>Crear evento</button>
              <button class="btn" @click=${this.close}>Cancelar</button>
            `}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('evento-modal', EventoModal);