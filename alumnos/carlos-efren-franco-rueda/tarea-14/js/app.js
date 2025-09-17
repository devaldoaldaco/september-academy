const $ = (id) => document.getElementById(id);
    const out = (id, data) => $(id).textContent = (typeof data === 'string') ? data : JSON.stringify(data, null, 2);

    function run1(){
      const n = Number($("e1-num").value || 0);
      const cur = $("e1-cur").value || 'MXN';
      const fmt = new Intl.NumberFormat('es-MX',{style:'currency',currency:cur,minimumFractionDigits:2});
      out('e1-out', fmt.format(n));
    }

    function run2(){
      const text = ($("e2-text").value || '').toLowerCase()
        .normalize('NFD').replace(/\p{Diacritic}/gu,'');
      const freq = {};
      for(const ch of text){
        if(/\p{L}/u.test(ch)) freq[ch] = (freq[ch]||0)+1;
      }
      out('e2-out', freq);
    }

    function run3(){
      const raw = $("e3-str").value || '';
      const arr = raw.split(',').map(s=>s.trim()).filter(Boolean).map(f=>{
        const [y,m,d] = f.split('-').map(Number);
        return {año:y, mes:m, día:d};
      });
      out('e3-out', arr);
    }

    function run4(){
      const raw = $("e4-str").value || '';
      const parts = raw.split(';').map(s=>s.trim()).filter(Boolean);
      const re = /^[\w.!#$%&'*+/=?^`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;
      const validos = parts.filter(e=>re.test(e));
      out('e4-out', {entrada:parts, validos});
    }

    const pl = {
      list: [],
      addSong(){
        const t=$("e5-titulo").value, a=$("e5-artista").value, s=Number($("e5-dur").value||0);
        if(!t||!a||!s) return out('e5-out','Completa los campos');
        this.list.push({titulo:t, artista:a, seg:s});
        out('e5-out', this.list);
      },
      removeSong(){ this.list.pop(); out('e5-out', this.list); },
      totalTime(){
        const total = this.list.reduce((acc,x)=>acc+x.seg,0);
        const min = Math.floor(total/60), seg = total%60;
        out('e5-out', {canciones:this.list.length, totalSeg:total, formato:`${min}m ${seg}s`});
      }
    };

    const lib = {
      libros: [],
      add(){ const t=$("e6-titulo").value; if(!t) return; this.libros.push({titulo:t, estado:'disponible'}); out('e6-out', this.libros); },
      prestar(){ const t=$("e6-titulo").value; const b=this.libros.find(x=>x.titulo===t && x.estado==='disponible'); if(b){b.estado='prestado';} out('e6-out', this.libros); },
      devolver(){ const t=$("e6-titulo").value; const b=this.libros.find(x=>x.titulo===t && x.estado==='prestado'); if(b){b.estado='disponible';} out('e6-out', this.libros); },
      disponibles(){ out('e6-out', this.libros.filter(x=>x.estado==='disponible')); }
    };

    const cart = {
      items: [],
      umbral: 1000, // aplica 10% si supera
      add(){
        const n=$("e7-nombre").value, p=Number($("e7-precio").value||0), c=Number($("e7-cant").value||1);
        if(!n||!p||!c) return; this.items.push({n,p,c}); out('e7-out', this.items);
      },
      clear(){ this.items=[]; out('e7-out', this.items); },
      total(){
        const bruto = this.items.reduce((s,it)=>s+it.p*it.c,0);
        const desc = bruto>this.umbral ? bruto*0.10 : 0;
        const neto = bruto-desc;
        out('e7-out', {bruto, descuento:desc, neto});
      }
    };

    const bank = {
      cuentas: {},
      crear(){ const u=$("e8-user").value; if(!u) return; if(!this.cuentas[u]) this.cuentas[u]=0; out('e8-out', this.cuentas); },
      depos(){ const u=$("e8-user").value, m=Number($("e8-monto").value||0); if(!this.cuentas[u]) this.cuentas[u]=0; this.cuentas[u]+=m; out('e8-out', this.cuentas); },
      retirar(){ const u=$("e8-user").value, m=Number($("e8-monto").value||0); if((this.cuentas[u]||0)>=m){ this.cuentas[u]-=m;} out('e8-out', this.cuentas); },
      transferir(){ const de=$("e8-user").value, a=$("e8-user2").value, m=Number($("e8-monto").value||0); if((this.cuentas[de]||0)>=m){ this.cuentas[de]-=m; if(!this.cuentas[a]) this.cuentas[a]=0; this.cuentas[a]+=m;} out('e8-out', this.cuentas); }
    };

    function run9(){
      const nums = ($("e9-arr").value||'').split(',').map(s=>Number(s.trim())).filter(n=>!Number.isNaN(n));
      const suma = nums.reduce((a,b)=>a+b,0);
      const max = Math.max(...nums), min = Math.min(...nums);
      const promedio = nums.length? (suma/nums.length):0;
      out('e9-out', {max,min,promedio,suma});
    }

    function run10(){
      const s = ($("e10-str").value||'').toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/[^a-z0-9]/g,'');
      const es = s === [...s].reverse().join('');
      out('e10-out', es);
    }

    function run11(){
      try{ const arr = JSON.parse($("e11-json").value||'[]');
        const mayor = arr.reduce((m,p)=> p.edad> (m?.edad??-Infinity) ? p : m, null);
        out('e11-out', mayor || {});
      }catch(e){ out('e11-out','JSON inválido'); }
    }

    function run12(){
      const r = ($("e12-rom").value||'').toUpperCase().trim();
      const map = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
      let total=0;
      for(let i=0;i<r.length;i++){
        const v = map[r[i]]||0, next = map[r[i+1]]||0;
        total += v < next ? -v : v;
      }
      out('e12-out', total);
    }

    function simAsync(payload, ok, cb){
      setTimeout(()=>{
        if(ok) cb(null, {ok:true, data:payload});
        else cb(new Error('Fallo en la consulta'));
      }, 600);
    }
    function run13(){
      const payload = $("e13-payload").value; const ok = $("e13-ok").value==='1';
      simAsync(payload, ok, (err,res)=>{
        out('e13-out', err? ('Error: '+err.message) : res);
      });
    }

    function procesar(arr, filtrarCb, transformarCb, reducirCb){
      const f = arr.filter(filtrarCb);
      const t = f.map(transformarCb);
      return t.reduce(reducirCb, 0);
    }
    function run14(){
      const arr = ($("e14-arr").value||'').split(',').map(x=>Number(x.trim())).filter(n=>!Number.isNaN(n));
      const res = procesar(
        arr,
        (n)=> n%2===0,   // filtrar: pares
        (n)=> n*n,       // transformar: cuadrado
        (acc,n)=> acc+n  // reducir: suma
      );
      out('e14-out', res);
    }

    const USERS = { "carlos":"1234", "efren":"abcd" };
    function login(user, pass, cb){
      setTimeout(()=>{
        if(USERS[user] && USERS[user]===pass) cb(null,{ok:true,user});
        else cb(new Error('Credenciales inválidas'));
      }, 500);
    }
    function run15(){
      const u=$("e15-user").value, p=$("e15-pass").value;
      login(u,p,(err,res)=> out('e15-out', err? ('Error: '+err.message):res));
    }

    function ejecutarTareas(tareas, cb){
      let i=0;
      function next(){
        if(i>=tareas.length) return cb();
        const t = tareas[i++];
        setTimeout(()=>{ out('e16-out', `Hecha: ${t}`); next(); }, 400);
      }
      next();
    }
    function run16(){
      try{
        const arr = JSON.parse($("e16-tareas").value||'[]');
        const logs = [];
        const oldOut = out;
        // interceptar para acumular
        const capture = (id,msg)=>{ logs.push(String(msg)); document.getElementById(id).textContent = logs.join('\n'); };
        ejecutarTareas(arr, ()=> capture('e16-out','Todas listas ✔'));
        window.out = capture; // parche local
        setTimeout(()=> window.out = oldOut, arr.length*450 + 600);
      }catch(e){ out('e16-out','JSON inválido'); }
    }