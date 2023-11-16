# EventRegistry jQuery Plugin

EventRegistry is a jQuery plugin designed to register new events and remove them before a new page is loaded via AJAX, preventing the same events from being registered twice. This plugin is particularly useful in projects utilizing libraries like [pjax](https://github.com/MoOx/pjax).

## Installation

Include jQuery and the EventRegistry plugin in your HTML file:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="path/to/jquery.eventRegistry.js"></script>
```

## Usage

Adding Events

```javascript
// Adding a click event to elements with class 'example'
$('.example').addEvent('click', function() {
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

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>EventRegistry Example</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/path/to/jquery.eventRegistry.js"></script>
</head>
<body>

<button class="click1">Click me</button>
<button class="click2">Click me also</button>
<script>
    // Adding a clicks to buttons and on the document
    $(function() {
        $('.click1').addEvent('click', function() {
            console.log('Click1 event triggered!');
        });

        $('.click2').addEvent('click', function() {
            console.log('Click2 event triggered! ');
        });

        //Delete all registered events on any click.
        $(document).addEvent('click', function() {
            console.log('Document click registered');
            console.log('Next time you click anywhere event won\'t be triggered');
            $.removeEvents();
        });
    });
</script>
</body>
</html>
```



## Example with [pjax](https://github.com/MoOx/pjax)


```javascript
// load pjax.js
$(function () {
    var pjax = new Pjax({selectors: [".content"]});

    $(document).on('pjax:send', function() {
        $.removeEvents();
    });
});
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.