# autoheight.js

Makes the height of all selected elements the same based on the max or min height.
    
  - Get the max or the min height
  - Enable on resize
  - Disable on specific windows width

### How to use ?

Include first the jQuery library
```sh
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
```

Include the autoheight.js
```sh
<script src="autoheight.js"></script>
```

Now initiate the autoheight.js
```sh
<script type="text/javascript">
    <!-- Default usage -->
    $( "selector" ).autoHeight();
</script>
```

### Options

| Name | Default | Description |
| ------ | ------ | ------ |
| maxMin `string` | 'max'  | Get the maximum or minimum height of the selected element. 'max' or 'min' are the only values that can be placed in this option. |
| onResize `boolean` | false | Enable/disable on resize |
| disableOnSize `boolean` `int` | false | Disables auto height when it reaches the given value. Note : the int value is the windows width (px) |