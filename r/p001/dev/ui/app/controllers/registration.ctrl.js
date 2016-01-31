var registrationCtrl = function ($scope, $http) {
	$scope.moduleHeading = "Registration";
	$scope.step = 0;
	$scope.stepArray = [true, true];
	$scope.stepArray['max'] = 3;
	$scope.stepArray['min'] = 0;	
	$scope.stepArray['pointedTo'] = $scope.stepArray['min'];
	//$scope.stepArray['pointedTo'] = 1;
	$scope.stepArray['progress'] = ($scope.stepArray['pointedTo']/$scope.stepArray['max'])*100;

	$scope.fieldValidate = {
		username : {
			pattern : /[^0-9-A-Z]+/gi,
			valid : false,
			action : function () {
				if ($scope.registrationData.data.username !== undefined) {
					if ($scope.registrationData.data.username.length > 5) {
						this.valid = ($scope.registrationData.data.username.match(this.pattern) === null)
					} else {
						this.valid = false;
					}

				} else {
					this.valid = false;
				}

				//console.log('username is valid :>' + this.valid);
			}
		},
		password : {
			pattern : /[^0-9-A-Z]+/gi,
			valid : false,
			action : function () {
				if ($scope.registrationData.data.password !== undefined) {
					if ($scope.registrationData.data.password.length > 5) {
						this.valid = ($scope.registrationData.data.password.match(this.pattern) !== null)
					} else {
						this.valid = false;
					}

				} else {
					this.valid = false;
				}

				//console.log('password is valid :>' + this.valid);
			}
		},
		name : {
			pattern : null,
			valid : false,
			action : function () {
				if ($scope.registrationData.data.name !== undefined) {
					this.valid = true;
				} else {
					this.valid = false;
				}
			}

		},
		surname : {
			pattern : null,
			valid : false,
			action : function () {
				if ($scope.registrationData.data.surname !== undefined) {
					this.valid = true;
				} else {
					this.valid = false;
				}
			}

		},
		email : {
			pattern : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			valid : false,
			action : function(){
				if ($scope.registrationData.data.email !== undefined) {
					this.valid = true;
				} else {
					this.valid = false;
				}
			}
			
		},
		
		phone : {
			pattern : /[^0-9]/,
			valid : false,
			action : function(){
				return false;
			}
			
		}
	};
	$scope.errorMessages = {
		username : {
			blank : "Username cannot be blank. Please fill it properly",
			invalid : "Username should have at least 5 letters and without any space or special character"
		},
		password : {
			blank : "Password cannot be blank. Please fill it properly",
			invalid : "Password should have at least 5 letters and one special character"
		},
		name : {
			blank : "Name is mandatory"
		},
		surname : {
			blank : "Surname is mandatory"
		},
		email : {
			blank : "Email is mandatory",
			invalid : "Your email is invalid"
		},
		phone :{
			blank : "Phone is mandatory",
			invalid : "Only numbers are allowed"
		}
	};
	$scope.registrationData = {
		data : {}

	};
	var validCredentials = function () {

		return ($scope.fieldValidate.username.valid && $scope.fieldValidate.password.valid);
	};

	var validBasicInfo = function () {
		return ($scope.fieldValidate.name.valid && $scope.fieldValidate.surname.valid);
	};
	
	var validContactInfo = function () {
		return ($scope.fieldValidate.email.valid && $scope.fieldValidate.phone.valid);
	}

	$scope.stepValidationAction = function () {

		switch ($scope.stepArray['pointedTo']) {
		case 0:
			return validCredentials();
			break;
		case 1:
			return validBasicInfo();
			break;
		case 2:
			//alert(2);
			break;
		case 3:
			//alert(3);
			break;
		}

	};
	
	var evaluateProgress = function(){
		$scope.stepArray['progress'] = (($scope.stepArray['pointedTo'])/($scope.stepArray['max']+1))*100;		
	}
	
	$scope.stageShifter = function (dir) {
		
		switch (dir) {
		case "next":
			if ($scope.stepValidationAction()) {
				if ($scope.stepArray['pointedTo'] < $scope.stepArray['max']) {
					$scope.stepArray['pointedTo'] = $scope.stepArray['pointedTo'] + 1;
					evaluateProgress();
				}
			}
			break;
		case "prev":
			if ($scope.stepArray['pointedTo'] > $scope.stepArray['min']) {
				$scope.stepArray['pointedTo'] = $scope.stepArray['pointedTo'] - 1;
				evaluateProgress();
			}
			break;
		}
	};

	$scope.registrationInit = function () {
		$scope.fieldValidate.username.action();
		$scope.fieldValidate.password.action();
	};

	$scope.registrationInit();
};
empDataMantSystem.controller('registrationCtrl', ['$scope', '$http', registrationCtrl]);