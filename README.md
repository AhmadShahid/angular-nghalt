# Angular Halt
A simple, pure  AngularJS directive to restricts the characters that may be entered into a text field.


## Usage
Install using [Bower](http://bower.io/):
```bash
# install package and add it to bower.json dependencies
$ bower install angular-nghalt --save
```

Include the script and style:
```html
<script src="bower_modules/angular-nghalt/src/ng-hide.js"></script>
```

Include the `ngHalt` dependency on your Angular module:
```html
angular.module('demoApp', ['ngHalt']);
```


#### Usage
For alpha 
```html
<input type="text" ng-halt="alpha: true">
```
For alphanumeric
```html
<input type="text" ng-halt="alpha: true,numeric:true">
```

For alphanumeric + special characters
```html
<input type="text" ng-halt="alpha: true,numeric:true ,special:true">
```

AllowSpace
```html
<input type="text" ng-halt="alpha: true,numeric:true ,special:true,allowSpace:true">
```

To pass custom regex
```html
<input type="text" ng-halt="rexex:^[A-Za-z]*$">
```

## Options
Pass a string to `ng-halt` like this: `ng-halt="alpha: true, special: false"`

#### Available tests
| **Option** | Default | Description                                                                                                               |
|------------|---------|---------------------------------------------------------------------------------------------------------------------------|
| alpha  | true    |  Can accept alphabet(A-Za-z).                                                                                                                  |
| numeric     | true    | Can accept Number(0-9).                                                                                                                  |
| special    | true    |  Can accept non-word character                                                                |
| maxlength    | false   | Check maximum length. Defaults to 50. |
| regex    | false   | Pass a custom regex to restrict user from input. |

