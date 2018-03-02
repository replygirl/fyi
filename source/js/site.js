angular.module('fyi', [])
  .controller('fyiController', ($scope) => {
    let fyi = $scope
    fyi.state = 'design.product'

    fyi.to = (s) => fyi.state = s
    fyi.activeIf = (s) => fyi.state.includes(s) ? 'active' : ''
  });
