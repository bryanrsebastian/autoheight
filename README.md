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

### Contributing
For a pull request to be considered it must resolve a bug, or add a feature which is beneficial to a large audience.

Requests must be made against the develop branch. Pull requests submitted against the master branch will not be considered.

All pull requests are subject to approval by the repository owners, who have sole discretion over acceptance or denial.

### License
autoheight is under MIT license - http://www.opensource.org/licenses/mit-license.php