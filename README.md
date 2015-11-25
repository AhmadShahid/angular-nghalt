# Angular Halt
A simple, pure  AngularJS directive to restricts the characters that may be entered into a text field.


## Usage
Install using [Bower](http://bower.io/):
```bash
# install package and add it to bower.json dependencies
$ bower install angular halt --save
```

Include the script and style:
```html
<script src="bower_modules/angular-halt/dist/ng-hide.js"></script>
```

Include the `ngHalt` dependency on your Angular module:
```html
angular.module('demoApp', ['ngHalt']);
```


#### Usage
For alpha 
```html
<input type="text" ng="alpha: true">
```
For alphanumeric
```html
<input type="text" ng="alpha: true,numeric:true">
```

For alphanumeric + special characters
```html
<input type="text" ng="alpha: true,numeric:true ,special:true">
```

AllowSpache
```html
<input type="text" ng="alpha: true,numeric:true ,special:true,allowSpace:true">
```

To pass custom regex
```html
<input type="text" ng="rexex:^[A-Za-z]*$">
```

## Options
Pass a string to `ng-hide` like this: `ng-hide="alpha: true, special: false"`

#### Available tests
| **Option** | Default | Description                                                                                                               |
|------------|---------|---------------------------------------------------------------------------------------------------------------------------|
| alpha  | true    |  A-Za-z                                                                                                                  |
| numeric     | true    | Find 0-9                                                                                                                  |
| special    | true    | A non-word character or the _ (underscore) character                                                                 |
| maxlength    | false   | Check maximum length. Defaults to 50. |
| regex    | false   | pass a custom regex to restrict user from input. |

