var registrationCtrl = function ($scope, $http) {
	$scope.moduleHeading = "Registration";
	$scope.step = 0;
	$scope.stepArray = [true, true];
	$scope.stepArray['pointedTo'] = 0;
	$scope.stepArray['max'] = 3;
	$scope.stepArray['min'] = 0;
	$scope.fieldValidate = {
		username : {
			pattern : /[^0-9-A-Z]+/gi,
			valid : false,
			action : function () {
				if($scope.registrationData.data.username!==undefined){
					this.valid = ($scope.registrationData.data.username.match(this.pattern) === null)
				}else{
					this.valid=false;
				}
				
				console.log('username is valid :>'+this.valid);
			}
		},
		password: {
			pattern : /[^0-9-A-Z]+/gi,
			valid: false,
			action: function(){
				if($scope.registrationData.data.password!==undefined){
					this.valid = ($scope.registrationData.data.password.match(this.pattern) !== null)
				}else{
					this.valid=false;
				}
				
				console.log('password is valid :>'+this.valid);
			}
		}
	};
	$scope.errorMessages = {
		username : {
			blank : "Username cannot be blank. Please fill it properly",
			invalid : "Username should not have any space or special character"
		},
		password : {
			blank : "Password cannot be blank. Please fill it properly",
			invalid : "Atleast one special character is required for password"
		}
	};
	$scope.registrationData = {
		data : {
			
		}

	};
	var validCredentials = function () {
		
		return ($scope.fieldValidate.username.valid && $scope.fieldValidate.password.valid);		 
	};
	
	$scope.stepValidationAction = function () {
		
		switch ($scope.stepArray['pointedTo']) {
		case 0:
		    console.log(validCredentials());
			return validCredentials();
			break;
		case 1:
			//alert(1);
			break;
		case 2:
			//alert(2);
			break;
		case 3:
			//alert(3);
			break;
		}
		
	};
	$scope.stageShifter = function (dir) {
		switch (dir) {
		case "next":
			if($scope.stepValidationAction()){
			if ($scope.stepArray['pointedTo'] < $scope.stepArray['max']) {
				$scope.stepArray['pointedTo'] = $scope.stepArray['pointedTo'] + 1;
			}
			}
			break;
		case "prev":
			if ($scope.stepArray['pointedTo'] > $scope.stepArray['min']) {
				$scope.stepArray['pointedTo'] = $scope.stepArray['pointedTo'] - 1;
			}
			break;
		}
	};
	
	$scope.registrationInit = function(){
		$scope.fieldValidate.username.action();
		$scope.fieldValidate.password.action();
	};
	
	$scope.registrationInit();
};
empDataMantSystem.controller('registrationCtrl', ['$scope', '$http', registrationCtrl]);