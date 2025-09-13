let progress = 0;       

const TOTAL_STEPS = 3;



function openModal(num) {
  document.querySelectorAll('.step').forEach(s => s.hidden = true);
  const step = document.getElementById('step' + num);
  if (step) step.hidden = false;


}

function closeModal(num) {
  const step = document.getElementById('step' + num);
  if (step) step.hidden = true;

}

function updateProgress() {
  const meter = document.getElementById('progressMeter');
  meter.value = progress;

  const pct = Math.round((progress / TOTAL_STEPS) * 100);
  document.getElementById('progressText').textContent = pct + '%';
}

function validateStep(num) {
  const step = document.getElementById('step' + num);
  const controls = step.querySelectorAll('input, select, textarea');
  const groupsChecked = {};

  for (const el of controls) {
    if (el.type === 'radio' || el.type === 'checkbox') {
      if (el.required) {
        const any = step.querySelector(`input[name="${el.name}"]:checked`);

        if (!any && !groupsChecked[el.name]) {
          groupsChecked[el.name] = false;
        } else {
          groupsChecked[el.name] = true;
        }
      }
    } else if (!el.checkValidity()) {
      el.reportValidity();
      return false;
    }
  }
  for (const k in groupsChecked) {
    if (!groupsChecked[k]) {
      const anyFromGroup = step.querySelector(`input[name="${k}"]`);

      if (anyFromGroup) anyFromGroup.reportValidity();
      return false;
    }
  }
  return true;
}

function nextModal(num) {
  if (!validateStep(num)) return;

  closeModal(num);
  progress = Math.min(TOTAL_STEPS, num); 
  updateProgress();

  const next = num + 1;
  if (next <= TOTAL_STEPS) openModal(next);
}

function finishForm() {
  if (!validateStep(3)) return;

  closeModal(3);
  progress = TOTAL_STEPS;
  updateProgress();

  alert('¡Finalizaste el formulario!');
}

const form = document.querySelector('#formulario');
form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  ev.stopPropagation();
  finishForm();
});

const color = document.querySelector('input[type="color"]');
color.addEventListener('click', (ev) => console.log('color click', ev));


openModal(1);
updateProgress();