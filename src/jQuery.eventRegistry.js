/*
   eventRegistry is a jQuery plugin designed to register new events and remove them
   before a new page is loaded via AJAX, preventing the same events from being
   registered twice. This plugin is particularly useful in projects utilizing
   libraries like https://github.com/MoOx/pjax
*/

(function($) {
  const eventRegistry = [];

  /**
   * $.fn.addEvent - Adds events to selected elements
   *
   * @param {string} event - Event type (e.g., 'click', 'mouseover')
   * @param {string|function} selectorOrHandler - Selector or handler function associated with the event
   * @param {function} handler - Event handler function
   *
   * Loops through each element in the jQuery object and attaches event listeners,
   * while storing event details in 'addedEvents' array for each element.
   */
  $.fn.addEvent = function(event, selectorOrHandler, handler) {
    if (typeof selectorOrHandler === 'function') {
      // If only two arguments are provided, treat the second as the handler
      handler = selectorOrHandler;
      selectorOrHandler = null;
    }

    // Store the added event details in the global registry
    const elements = this;
    elements.each(function() {
      const element = this;
      if (!element.addedEvents)
        element.addedEvents = [];

      eventRegistry.push(element);

      element.addedEvents.push({
        event: event,
        selector: selectorOrHandler,
        handler: handler
      });
    });

    // Attach the event listener to the selected elements
    if(eventRegistry.length !== 0)
      return this.on(event, selectorOrHandler, handler);
  };

  /**
   * $.removeEvents - Removes all added events from all elements
   *
   * Iterates through the eventRegistry to remove events associated with each element,
   * clearing the 'addedEvents' array and the eventRegistry itself.
   */
  $.removeEvents = function() {
    // Remove all events registered through addEvent from elements in the registry
    eventRegistry.forEach(function(element) {
      if (element.addedEvents) {
        element.addedEvents.forEach(function(eventData) {
          $(element).off(eventData.event, eventData.selector, eventData.handler);
        });
        element.addedEvents = [];
      }
    });

    // Clear the event registry
    eventRegistry.length = 0;
  };
})(jQuery);