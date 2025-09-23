export class CalendarUtils {
  static getMonthDays(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    const days = [];
    
    // Días del mes anterior
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push(new Date(year, month - 1, prevMonthLastDay - i));
    }
    
    // Días del mes actual
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    // Días del mes siguiente
    const totalCells = 42;
    const nextMonthDays = totalCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push(new Date(year, month + 1, i));
    }
    
    return days;
  }

  static formatDateKey(date) {
    return date.toISOString().split('T')[0];
  }

  static getMonthName(date, locale = 'es-ES') {
    return date.toLocaleDateString(locale, { 
      month: 'long', 
      year: 'numeric' 
    });
  }

  static getWeekDays(locale = 'es-ES') {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(2023, 0, i + 1);
      weekDays.push(date.toLocaleDateString(locale, { weekday: 'short' }));
    }
    return weekDays;
  }

  static isToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  static isSameDay(date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  static formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  static createEventId() {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }
}