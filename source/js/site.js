angular.module('fyi', [])
  .controller('fyiController', ($scope) => {
    let fyi = $scope
    fyi.state = 'design.product'
    fyi.contact = false

    fyi.to = (s) => fyi.state = s
    fyi.activeIf = (s) => fyi.state.includes(s) ? 'active':''

    fyi.activeIfContact = (s) => fyi.contact == s ? 'active':''
    fyi.openContact = () => fyi.contact = 'open'
    fyi.sendContact = () => {
      fyi.contact = 'success'
    }
  });
