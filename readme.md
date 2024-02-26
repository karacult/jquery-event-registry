# EventRegistry jQuery Plugin

EventRegistry is a jQuery plugin designed to register new events and remove them before a new page is loaded via AJAX, preventing the same events from being registered twice. This plugin is particularly useful in projects utilizing libraries like [pjax](https://github.com/MoOx/pjax).

## Installation

Include jQuery and the EventRegistry plugin in your HTML file:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="/src/jquery.eventRegistry.js"></script>
```

## Usage

Adding Events

```javascript
$(document).addEvent('click', function() {
  console.log('Click event triggered!');
});

$(body).addEvent('load', function() {
  console.log('Click event triggered!');
});
```

## Removing Events

```javascript
// Removing all added events
$.removeEvents();
```

## Example

Here's a simple example demonstrating how to use the EventRegistry plugin:
Check ./test/example.html to see it in action


```html
<script>
    $(function() {
        // removeEvents has to be on each page before events or on pjax:send event.
        $.removeEvents();

        $(document).addEvent('click', function() {
            console.log('Click event triggered! - Event ');
        });
    });
</script>
```



## Example with [pjax](https://github.com/MoOx/pjax)


```javascript
// load pjax.js
$(function () {
    var pjax = new Pjax({selectors: [".content"]});
  
    $(document).on('pjax:send', function() {
      // Removing all previously added events
      $.removeEvents();
    });
});
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.