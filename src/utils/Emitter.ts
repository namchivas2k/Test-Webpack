type Listener = (...args: any[]) => void;

export default class Emitter {
  private listeners: { [event: string]: Listener[] };

  constructor() {
    this.listeners = {};
  }

  on(event: string, listener: Listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  off(event: string, listener: Listener) {
    const listeners = this.listeners[event];
    if (listeners) {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }

  once(event: string, listener: Listener) {
    const onceListener = (...args: any[]) => {
      listener(...args);
      this.off(event, onceListener);
    };
    this.on(event, onceListener);
  }

  emit(event: string, ...args: any[]) {
    const listeners = this.listeners[event];
    if (listeners) {
      listeners.forEach((listener) => {
        listener(...args);
      });
    }
  }
}
