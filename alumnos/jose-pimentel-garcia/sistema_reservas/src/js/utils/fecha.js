export function getMonthMatrix(year, month) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startWeekday = first.getDay();
  const weeks = [];
  let dayCounter = 1 - startWeekday;
  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const cur = new Date(year, month, dayCounter);
      week.push({
        date: cur,
        inMonth: cur.getMonth() === month,
        day: cur.getDate(),
        iso: cur.toISOString().slice(0, 10),
      });
      dayCounter++;
    }
    weeks.push(week);
  }
  return { weeks, first, last };
}
export function monthLabel(year, month) {
  const fmt = new Intl.DateTimeFormat("es-MX", {
    month: "long",
    year: "numeric",
  });
  return capitalize(fmt.format(new Date(year, month, 1)));
}
export function weekdayShortLabels() {
  return ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
}
export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}
export function sameDayISO(a, b) {
  return a === b;
}
export function isBetweenISO(iso, startIso, endIso) {
  if (!startIso || !endIso) return false;
  return iso >= startIso && iso <= endIso;
}
export function addDaysISO(iso, days) {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d + days);
  return dt.toISOString().slice(0, 10);
}
export function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
