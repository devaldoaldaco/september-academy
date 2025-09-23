const STORAGE_KEY = 'google-calendar-events';

export class EventStorage {
  static loadEvents() {
    try {
      const storedEvents = localStorage.getItem(STORAGE_KEY);
      if (storedEvents) {
        const events = JSON.parse(storedEvents);
        // Convertir strings de fecha a objetos Date
        return events.map(event => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end)
        }));
      }
    } catch (error) {
      console.error('Error loading events from storage:', error);
    }
    return [];
  }

  static saveEvents(events) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    } catch (error) {
      console.error('Error saving events to storage:', error);
    }
  }

  static getEventsForDate(events, date) {
    return events.filter(event => 
      CalendarUtils.isSameDay(event.start, date)
    );
  }

  static addEvent(events, newEvent) {
    const updatedEvents = [...events, newEvent];
    this.saveEvents(updatedEvents);
    return updatedEvents;
  }

  static updateEvent(events, updatedEvent) {
    const index = events.findIndex(e => e.id === updatedEvent.id);
    if (index !== -1) {
      const updatedEvents = [...events];
      updatedEvents[index] = updatedEvent;
      this.saveEvents(updatedEvents);
      return updatedEvents;
    }
    return events;
  }

  static deleteEvent(events, eventId) {
    const updatedEvents = events.filter(e => e.id !== eventId);
    this.saveEvents(updatedEvents);
    return updatedEvents;
  }
}