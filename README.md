# use-form-error
**useFormError** is a angularjs directive, which is designed to create custom checks.
 - The directive itself set key/value pair with the `ngModel` **$error** object (which stores a key/value state of validation errors).
 - `useformError` depending on the value of the expression useErrorExpression establishes the validity of input form, and accordingly, the entire form.
# Usage
It can be used in three versions.
# Using with ngModel
	  <input ng-model="expression" use-form-error="keyValue" use-error-expression="expression" />

# Using without ngModel, but with the name of input form
	  <input ng-model="expression" name="nameInput">
	  <any use-form-error="keyValue" use-error-expression="expression" use-error-input="nameInput" />
# Using without ngModel, but without the name of input form. 
 In this case, the validity of the forms to be used.
 
	  <input ng-model="expression">
	  <any use-form-error="keyValue" use-error-expression="expression" />
# Description params
Parameter Description directive.
 - `@param` {string} **useFormError** this is the key is to be set in the object **$error** form or input form.
- `@param` {expression} **useErrorExpression** an angular expression evaluating to set validity to form or input form.
- `@param` {?object} **useErrorInput** an optional parameter that contains a form or the input form. If this parameter is not set, the validity will be set in the form.
	  
# Example	 
Examples of using.
#  Using with ngModel
```
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
# Using without ngModel
```
	      <form name="myForm">
	        <label>Enter your odd digit:</label>
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
# Using both together with ngModel and without ngModel
```
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
# Using with ngModel, ngForm and without ngModel
```
	     <form name="myForm" use-form-error="formInvalid" use-error-expression="digit==9">
	 			<div ng-messages="myForm.$error" style="color:maroon">
	 				<div ng-message="formInvalid">You form is not valid</div>
	 			</div>
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


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [marked]: <https://github.com/chjj/marked>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   
   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]:  <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>


