# use-form-error
**useFormError** is a directive, which is designed to create custom checks.
 - The directive itself set key/value pair with the `ngModel` **$error** object (which stores a key/value state of validation errors).
 - `useformError` depending on the value of the expression `useErrorExpression` establishes the validity of input form, and accordingly, the entire form.

#Table of contents
 - [Usage](#usage)
 - [Description params](#description-parameters)
 - [Examples](#examples)

---

# Usage

You must connect the module `use` under the project dependencies.
```javascript
angular.module('ExampleApp', ['use']);
```

It can be used in three versions:
 - Used on tags with `ngModel`, like `input`, `select`, `textarea`.
 - Used on tags without `ngModel` with the name of input form, like `div`, `span`, `form`.
 - Used on tags without `ngModel`, like `div`, `span`, `form`. In this case, the validity of the forms to be used.

## Using with ngModel
```html
	  <input ng-model="expression" use-form-error="keyValue" use-error-expression="expression" />
```
## Using without ngModel, but with the name of input form
```html
	  <input ng-model="expression" name="nameInput">
	  <any use-form-error="keyValue" use-error-expression="expression" use-error-input="nameInput" />
```	  
## Using without ngModel, but without the name of input form. 

 In this case, the validity of the forms to be used.
```html 
	  <input ng-model="expression">
	  <any use-form-error="keyValue" use-error-expression="expression" />
```
---

# Description parameters

Parameters description directive.
- `@param` {string} **useFormError** this is the key is to be set in the object **$error** form or input form.
- `@param` {expression} **useErrorExpression** an angular expression evaluating to set validity to form or input form.
- `@param` {?object} **useErrorInput** an optional parameter that contains a form or the input form. If this parameter is not set, the validity will be set in the form.

---

# Examples	 
Examples of using.
## Using with ngModel. 
Example on [jsfiddle](https://jsfiddle.net/Stepan_Kasyanenko/gugq2o6n)
```html
	      <form name="myForm">
	        <label>Enter your odd digit:</label>
	        <input type="text"
	               ng-model="digit"
	               name="myDigit"
	               ng-minlength="1"
	               ng-maxlength="20"
	               required
	               use-form-error="isEven"
	               use-error-expression="digit%2==0"
	               />
	 
	        <pre>myForm.myDigit.$error = {{ myForm.myDigit.$error | json }}</pre>
	 
	        <div ng-messages="myForm.myDigit.$error" style="color:maroon">
	          <div ng-message="required">You did not enter a digit</div>
	          <div ng-message="minlength">Your digit is too short</div>
	          <div ng-message="maxlength">Your digit is too long</div>
	          <div ng-message="isEven">Your digit is even</div>
	        </div>
	      </form>
```	 
## Using without ngModel
Example on [jsfiddle](https://jsfiddle.net/Stepan_Kasyanenko/crsqs5nd)
```html
	      <form name="myForm">
	        <label>Your number is not to be divided by three:</label>
	        <input type="text"
	               ng-model="digit"
	               name="myDigit"
	               ng-minlength="1"
	               ng-maxlength="20"
	               required
	               />
	        <span use-form-error="isDividedThree" use-error-expression="digit%3==0" use-error-input="myForm.myDigit"></span>
	        <pre>myForm.myDigit.$error = {{ myForm.myDigit.$error | json }}</pre>
	 
	        <div ng-messages="myForm.myDigit.$error" style="color:maroon">
	          <div ng-message="required">You did not enter a digit</div>
	          <div ng-message="minlength">Your digit is too short</div>
	          <div ng-message="maxlength">Your digit is too long</div>
	          <div ng-message="isDividedThree">Your digit is divided by three</div>
	        </div>
	      </form>
```	 
## Using both together with ngModel and without ngModel
Example on [jsfiddle](https://jsfiddle.net/Stepan_Kasyanenko/woqck67w)
```html
	      <form name="myForm">
	        <label>Your number should be even and not divisible by three.</label>
	        <input type="text"
	               ng-model="digit"
	               name="myDigit"
	               ng-minlength="1"
	               ng-maxlength="20"
	               required
	               use-form-error="isEven"
	               use-error-expression="digit%2==0"
	               />
	        <span use-form-error="isDividedThree" use-error-expression="digit%3==0" use-error-input="myForm.myDigit"></span>
	        <pre>myForm.myDigit.$error = {{ myForm.myDigit.$error | json }}</pre>
	 
	        <div ng-messages="myForm.myDigit.$error" style="color:maroon">
	          <div ng-message="required">You did not enter a digit</div>
	          <div ng-message="minlength">Your digit is too short</div>
	          <div ng-message="maxlength">Your digit is too long</div>
	          <div ng-message="isEven">Your digit is even</div>
	          <div ng-message="isDividedThree">Your digit is divided by three</div>
	        </div>
	      </form>
```	 
## Using with ngModel, ngForm and without ngModel
Example on [jsfiddle](https://jsfiddle.net/Stepan_Kasyanenko/wL9c2feo)
```html
	     <form name="myForm" use-form-error="formInvalid" use-error-expression="digit==9">
	 			<div ng-messages="myForm.$error" style="color:maroon">
	 				<div ng-message="formInvalid">You form is not valid</div>
	 			</div>
	 			<label>Your number should be even, not divisible by three and should not be 6,7,9:</label>
	 			<input type="text"
	 						 ng-model="digit"
	 						 name="myDigit"
	 						 ng-minlength="1"
	 						 ng-maxlength="20"
	 						 required
	 						 use-form-error="isEven" 
	 						 use-error-expression="digit%2==0"
	 				/>
	 			<span use-form-error="isDividedThree" use-error-expression="digit%3==0" use-error-input="myForm.myDigit"></span>
	 			<span use-form-error="formInvalid" use-error-expression="digit==7" use-error-input="myForm.myDigit"></span>
	 			<span use-form-error="formInvalid" use-error-expression="digit==6"></span>
	 			<pre>myForm.myDigit.$error = {{ myForm.myDigit.$error | json }}</pre>
	 
	 			<div ng-messages="myForm.myDigit.$error" ng-messages-multiple="true" style="color:maroon">
	 				<div ng-message="required">You did not enter a digit</div>
	 				<div ng-message="minlength">Your digit is too short</div>
	 				<div ng-message="maxlength">Your digit is too long</div>
	 				<div ng-message="isEven">Your digit is even</div>
	 				<div ng-message="isDividedThree">Your digit is divided by three</div>
	 			</div>
	 		</form>
```	 

