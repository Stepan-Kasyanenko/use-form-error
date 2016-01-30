/**
 * Created by Stepan Kasyanenko on 30.01.16.
 */
(function(window,angular,undefined){
	'use strict';
	angular.module('use',[])
	/**
	 * @ngdoc directive
	 * @module use
	 * @name useFormError
	 * @restrict A
	 *
	 * @description
	 * `useFormError` is a directive, which is designed to create custom checks. The directive itself set key/value
	 * pair with the `ngModel` $error object (which stores a key/value state of validation errors).
	 * `useformError` depending on the value of the expression useErrorExpression establishes the validity of input
	 * form, and accordingly, the entire form.
	 *
	 * @usage
	 * ```html
	 * <!-- using with ngModel -->
	 * <input ng-model="expression" use-form-error="keyValue" use-error-expression="expression" />
	 *
	 * <!-- using without ngModel, but with the name of input form -->
	 * <input ng-model="expression" name="nameInput">
	 * <any use-form-error="keyValue" use-error-expression="expression" use-error-input="nameInput" />
	 *
	 * <!-- using without ngModel, but with the name of input form. In this case, the validity of the forms to be used -->
	 * <input ng-model="expression">
	 * <any use-form-error="keyValue" use-error-expression="expression" />
	 * ```
	 *
	 * @param {string} useFormError this is the key is to be set in the object $error form or input form.
	 * @param {expression} useErrorExpression an angular expression evaluating to set validity to form or input form.
	 * @param {?object} useErrorInput an optional parameter that contains a form or the input form. If this parameter is not set, the validity will be set in the form.
	 *
	 * @example
	 *<!-- using with ngModel -->
	 *<example name="useFormError-directive" module="use"
	 *          deps="use-form-error.js"
	 *          animations="false" fixBase="true">
	 *   <file name="index.html">
	 *     <form name="myForm">
	 *       <label>Enter your odd digit:</label>
	 *       <input type="text"
	 *              ng-model="digit"
	 *              name="myDigit"
	 *              ng-minlength="1"
	 *              ng-maxlength="20"
	 *              required
	 *              use-form-error="isEven"
	 *              use-error-expression="digit%2==0"
	 *              />
	 *
	 *       <pre>myForm.myDigit.$error = {{ myForm.myDigit.$error | json }}</pre>
	 *
	 *       <div ng-messages="myForm.myDigit.$error" style="color:maroon">
	 *         <div ng-message="required">You did not enter a digit</div>
	 *         <div ng-message="minlength">Your digit is too short</div>
	 *         <div ng-message="maxlength">Your digit is too long</div>
	 *         <div ng-message="isEven">Your digit is even</div>
	 *       </div>
	 *     </form>
	 *   </file>
	 * </example>
	 *
	 * @example
	 *<!-- using without ngModel -->
	 *<example name="useFormError-directive" module="use"
	 *          deps="use-form-error.js"
	 *          animations="false" fixBase="true">
	 *   <file name="index.html">
	 *     <form name="myForm">
	 *       <label>Enter your odd digit:</label>
	 *       <input type="text"
	 *              ng-model="digit"
	 *              name="myDigit"
	 *              ng-minlength="1"
	 *              ng-maxlength="20"
	 *              required
	 *              />
	 *       <span use-form-error="isDividedThree" use-error-expression="digit%3==0" use-error-input="myForm.myDigit"></span>
	 *       <pre>myForm.myDigit.$error = {{ myForm.myDigit.$error | json }}</pre>
	 *
	 *       <div ng-messages="myForm.myDigit.$error" style="color:maroon">
	 *         <div ng-message="required">You did not enter a digit</div>
	 *         <div ng-message="minlength">Your digit is too short</div>
	 *         <div ng-message="maxlength">Your digit is too long</div>
	 *         <div ng-message="isEven">Your digit is even</div>
	 *         <div ng-message="isDividedThree">Your digit is divided by three</div>
	 *       </div>
	 *     </form>
	 *   </file>
	 * </example>
	 *
	 * @example
	 *<!-- using with ngModel and without ngModel -->
	 *<example name="useFormError-directive" module="use"
	 *          deps="use-form-error.js"
	 *          animations="false" fixBase="true">
	 *   <file name="index.html">
	 *     <form name="myForm">
	 *       <label>Enter your odd digit:</label>
	 *       <input type="text"
	 *              ng-model="digit"
	 *              name="myDigit"
	 *              ng-minlength="1"
	 *              ng-maxlength="20"
	 *              required
	 *              use-form-error="isEven"
	 *              use-error-expression="digit%2==0"
	 *              />
	 *       <span use-form-error="isDividedThree" use-error-expression="digit%3==0" use-error-input="myForm.myDigit"></span>
	 *       <pre>myForm.myDigit.$error = {{ myForm.myDigit.$error | json }}</pre>
	 *
	 *       <div ng-messages="myForm.myDigit.$error" style="color:maroon">
	 *         <div ng-message="required">You did not enter a digit</div>
	 *         <div ng-message="minlength">Your digit is too short</div>
	 *         <div ng-message="maxlength">Your digit is too long</div>
	 *         <div ng-message="isEven">Your digit is even</div>
	 *         <div ng-message="isDividedThree">Your digit is divided by three</div>
	 *       </div>
	 *     </form>
	 *   </file>
	 * </example>
	 *
	 * @example
	 *<!-- using with ngModel and withoit ngModel and with form valid  -->
	 *<example name="useFormError-directive" module="use"
	 *          deps="use-form-error.js"
	 *          animations="false" fixBase="true">
	 *   <file name="index.html">
	 *    <form name="myForm" use-form-error="formInvalid" use-error-expression="digit==9">
	 *			<div ng-messages="myForm.$error" style="color:maroon">
	 *				<div ng-message="formInvalid">You form is not valid</div>
	 *			</div>
	 *			<label>Enter your odd digit:</label>
	 *			<input type="text"
	 *						 ng-model="digit"
	 *						 name="myDigit"
	 *						 ng-minlength="1"
	 *						 ng-maxlength="20"
	 *						 required
	 *						 use-form-error="isEven"
	 *						 use-error-expression="digit%2==0"
	 *				/>
	 *			<span use-form-error="isDividedThree" use-error-expression="digit%3==0" use-error-input="myForm.myDigit"></span>
	 *			<span use-form-error="formInvalid" use-error-expression="digit==7" use-error-input="myForm.myDigit"></span>
	 *			<span use-form-error="formInvalid" use-error-expression="digit==6"></span>
	 *			<pre>myForm.myDigit.$error = {{ myForm.myDigit.$error | json }}</pre>
	 *
	 *			<div ng-messages="myForm.myDigit.$error" ng-messages-multiple="true" style="color:maroon">
	 *				<div ng-message="required">You did not enter a digit</div>
	 *				<div ng-message="minlength">Your digit is too short</div>
	 *				<div ng-message="maxlength">Your digit is too long</div>
	 *				<div ng-message="isEven">Your digit is even</div>
	 *				<div ng-message="isDividedThree">Your digit is divided by three</div>
	 *			</div>
	 *		</form>
	 *   </file>
	 * </example>
	 */
		.directive('useFormError',['$log',function($log){
			return {
				restrict:'A',
				require :['?ngModel','^form'],
				scope   :{
					useFormError      :'@',
					useErrorExpression:"=",
					useErrorInput     :"=?",
				},
				link    :function(scope,elem,attrs,ctrls){
					//We expect that the directive will be applied either on the ng-model, ng-form or another element as an attribute
					var validityObject=scope.useErrorInput || ctrls[0] || ctrls[1];
					if(validityObject && angular.isFunction(validityObject.$setValidity)){
						if(!angular.isDefined(scope.useFormError))
							$log.error('You must define a key for the form input "'+attrs.useErrorInput+'"');
						//We watch the changes of expression
						scope.$watch('useErrorExpression',function(newVal){
							$log.debug('Key: '+attrs.useFormError+'. Expression: '+attrs.useErrorExpression+' is '+newVal);
							if(newVal)
								validityObject.$setValidity(scope.useFormError,false);
							else
								validityObject.$setValidity(scope.useFormError,true);
						});
					}else
						$log.error('Form input "'+attrs.useErrorInput+'" not defined for the key: "'+scope.useFormError+'"');
				}
			};
		}])
})(window,window.angular);
