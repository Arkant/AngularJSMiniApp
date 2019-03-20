'use strict';

// eslint-disable-next-line no-unused-vars
function runBlock($rootScope, $transitions, authenticationService) {
	'ngInject';
	
	const limitedPermission = {
		to: state => !$rootScope.currentUser || state.data.role.every(item => item !== $rootScope.currentUser.role)
	}


	$transitions.onBefore(limitedPermission, function(transition) {
		const toSignPage = transition.to().name === 'sign-in' || transition.to().name === 'sign-up';

		const toAdminPages = transition.to().name === 'admin' || transition.to().name === 'transactionsList';

		const toUserOrAdminPage = transition.to().name !== 'sign-in' && transition.to().name !== 'sign-up';


		// abort if not authorized user try to go to any page
		if (!$rootScope.currentUser && toUserOrAdminPage) {
			return transition.abort();
		}

		// abort if authorized user or admin try to go to sign-in/up page
		if ($rootScope.currentUser && toSignPage) {
			return transition.abort()
		}

		// sign out if authorized user try to go to admin page
		if ($rootScope.currentUser && toAdminPages) {
			return authenticationService.signOutFromFirebase();
		}
	})
}

export default runBlock;
