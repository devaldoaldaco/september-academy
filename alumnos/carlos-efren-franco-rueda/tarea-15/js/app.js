(function(){
  var input   = document.getElementById('todo-input');
  var addBtn  = document.getElementById('add-btn');
  var listEl  = document.getElementById('todo-list');
  var pending = document.getElementById('pending');
  var clearBtn= document.getElementById('clear-btn');

  var todos = load();

  render();

  addBtn.addEventListener('click', add);
  input.addEventListener('keydown', function(e){
    if (e.key === 'Enter') add();
  });

  listEl.addEventListener('click', function(e){
    var li = e.target.closest('li');
    if (!li) return;
    var index = Number(li.getAttribute('data-index'));

    if (e.target.classList.contains('del')) {
      remove(index);
    } else if (e.target.tagName === 'SPAN') {
      toggle(index);
    }
  });

  clearBtn.addEventListener('click', function(){
    todos = [];
    save(); render();
  });

  function add(){
    var text = (input.value || '').trim();
    if (!text) return;
    todos.push({ text: text, done: false });
    input.value = '';
    save(); render();
  }

  function remove(i){
    if (i >= 0 && i < todos.length) {
      todos.splice(i, 1);
      save(); render();
    }
  }

  function toggle(i){
    if (i >= 0 && i < todos.length) {
      todos[i].done = !todos[i].done;
      save(); render();
    }
  }

  function render(){
    listEl.innerHTML = '';
    for (var i = 0; i < todos.length; i++) {
      var li = document.createElement('li');
      li.className = 'item' + (todos[i].done ? ' done' : '');
      li.setAttribute('data-index', i);

      var span = document.createElement('span');
      span.textContent = todos[i].text;

      var btn = document.createElement('button');
      btn.className = 'del';
      btn.textContent = '🗑';

      li.appendChild(span);
      li.appendChild(btn);
      listEl.appendChild(li);
    }

    var pendientes = 0;
    for (var j = 0; j < todos.length; j++) {
      if (!todos[j].done) pendientes++;
    }
    pending.textContent = 'You have ' + pendientes + ' pending task' + (pendientes === 1 ? '' : 's');
    clearBtn.disabled = todos.length === 0;
  }

  function save(){
    try {
      localStorage.setItem('todos-basic', JSON.stringify(todos));
    } catch(e) {}
  }

  function load(){
    try {
      var data = localStorage.getItem('todos-basic');
      if (data) return JSON.parse(data);
    } catch(e) {}
    return [];
  }
})();