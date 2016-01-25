var authenticateCtrl = function ($scope, $http) {
	$scope.auth = {
		data : {
			username : '',
			password : '',
			type : ''
		}
	};
	$scope.user = [{
			type : "Admin",
			code : 'admin',
			text : "Admin",
			icon : "wrench",
			desc : "This section is only for administrators.",
			style : {
				loginBg : 'bg-info',
				heading : 'text-info',
				btn : 'btn-info'
			}
		}, {
			type : "Resource",
			text : "Resource",
			code : 'resource',
			icon : "user",
			desc : "This section is only for allready registered resources. Resources are permitted here to update their complete profiles, skills, projects and other data.",
			style : {
				loginBg : 'bg-success',
				heading : 'text-success',
				btn : 'btn-success'
			}
		}, {
			type : "Admin of admin",
			text : "Admin of admin",
			code : 'superadmin',
			icon : "king",
			desc : "Prohibited area",
			style : {
				loginBg : 'bg-default',
				heading : 'text-default',
				btn : 'btn-default'
			}

		}
	];

	$scope.selectedUserType = null;

	$scope.selectOption = function (e) {
		var all = angular.element(document.querySelectorAll('.bs-callout'));
		all.removeClass('bs-callout-selected');
		var el = angular.element(e.currentTarget);
		el.addClass('bs-callout-selected');

	}

	$scope.userTypeSwitcher = function (e) {
		$scope.selectOption(e);
		$scope.selectedUserType = angular.element(e.currentTarget).data('value');
		$scope.auth = {
			data : {
				username : '',
				password : '',
				type : $scope.user[$scope.selectedUserType].code
			}
		};
	};

	$scope.processAuthenticate = function () {
		var authenticationPath = 'http://localhost:4500/rest/authenticate';
        //var testPath = 'http://localhost:4500/rest/exp';
        $http.post(authenticationPath, $scope.auth).then(function (response) {
			console.log(response.data);
		});
	};
};

empDataMantSystem.controller('authenticateCtrl', ['$scope', '$http', authenticateCtrl]);