'use strict';

export default function (app) {
  app
    .service('usersMocksService', function ($rootScope) {
      'ngInject';

        this.currentUserInfo = {
          firstName: 'Vasya',
          lastName: 'Poopkin',
          phone: '380672386289',
          email: 'vasya@gmail.com',
          role: 'user',
          ava: []
        };

        this.currentUserDeals = [
          { date: '10.10.2010', currencyFrom: 'EUR', currencyTo: 'USD', comission: 0, rate: 1.11, amountFrom: 200, amountTo: 222 },
          { date: '11.11.2011', currencyFrom: 'UAH', currencyTo: 'USD', comission: 0, rate: 27.1, amountFrom: 271, amountTo: 10 },
          { date: '12.12.2012', currencyFrom: 'EUR', currencyTo: 'USD', comission: 0, rate: 1.11, amountFrom: 100, amountTo: 111 }
        ];

        this.listOfUsers = [
          {"id":1,"name":"Alex","description":"alex@gmail.com","field3":"user","field4":"field4 1","field5 ":"field5 1"}, 
          {"id":2,"name":"Bill","description":"bill@gmail.com","field3":"user","field4":"field4 2","field5 ":"field5 2"}, 
          {"id":3,"name":"Bob","description":"bob@gmail.com","field3":"user","field4":"field4 3","field5 ":"field5 3"}, 
          {"id":4,"name":"Brian","description":"brian@gmail.com","field3":"user","field4":"field4 4","field5 ":"field5 4"}, 
          {"id":5,"name":"Cendrick","description":"cendrick@gmail.com","field3":"user","field4":"field4 5","field5 ":"field5 5"}, 
          {"id":6,"name":"Evan","description":"evan@gmail.com","field3":"admin","field4":"field4 6","field5 ":"field5 6"}, 
          {"id":7,"name":"Dan","description":"dan@gmail.com","field3":"user","field4":"field4 7","field5 ":"field5 7"}, 
          {"id":8,"name":"Diana","description":"diana@gmail.com","field3":"user","field4":"field4 8","field5 ":"field5 8"}, 
          {"id":9,"name":"name 9","description":"description 1","field3":"field3 9","field4":"field4 9","field5 ":"field5 9"}, 
          {"id":10,"name":"name 10","description":"description 1","field3":"field3 10","field4":"field4 10","field5 ":"field5 10"}, 
          {"id":11,"name":"name 11","description":"description 1","field3":"field3 11","field4":"field4 11","field5 ":"field5 11"}, 
          {"id":12,"name":"name 12","description":"description 1","field3":"field3 12","field4":"field4 12","field5 ":"field5 12"}, 
          {"id":13,"name":"name 13","description":"description 1","field3":"field3 13","field4":"field4 13","field5 ":"field5 13"}, 
          {"id":14,"name":"name 14","description":"description 1","field3":"field3 14","field4":"field4 14","field5 ":"field5 14"}, 
          {"id":15,"name":"name 15","description":"description 1","field3":"field3 15","field4":"field4 15","field5 ":"field5 15"}, 
          {"id":16,"name":"name 16","description":"description 1","field3":"field3 16","field4":"field4 16","field5 ":"field5 16"}, 
          {"id":17,"name":"name 17","description":"description 1","field3":"field3 17","field4":"field4 17","field5 ":"field5 17"}, 
          {"id":18,"name":"name 18","description":"description 1","field3":"field3 18","field4":"field4 18","field5 ":"field5 18"}, 
          {"id":19,"name":"name 19","description":"description 1","field3":"field3 19","field4":"field4 19","field5 ":"field5 19"}, 
          {"id":20,"name":"name 5","description":"description 1","field3":"field3 5","field4":"field4 5","field5 ":"field5 5"}
        ];

        this.userRole = 'user',
        this.adminRole = 'admin',
      
        this.initMocks = () => {
          $rootScope.currentUserInfo = this.currentUserInfo;
          $rootScope.currentUserDeals = this.currentUserDeals;
          $rootScope.userRole = this.userRole;
          $rootScope.adminRole = this.adminRole;
          $rootScope.listOfUsers = this.listOfUsers;
        }
    });
}
