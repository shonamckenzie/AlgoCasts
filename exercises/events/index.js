// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  // create events object to store events and their callbacks
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    // take event name and add as key to events object, containing the value of an array
    // if there's already something populated there must be an array and we can push the callback in
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      // for every callback in array - call it
      for (const cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
