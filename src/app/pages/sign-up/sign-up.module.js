'use strict';

import './sign-up.scss'
import SignUpController from './sign-up.controller';

const signUpModule = angular.module('signUpModule', [])
signUpModule.controller('SignUpController', SignUpController);

export default signUpModule;