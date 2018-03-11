fyi.controller('old-state', ($scope) => {
  $scope.state = 'design.product'
  $scope.contact = false

  $scope.activeIf = s => $scope.state.includes(s) ? 'active' : ''
  $scope.to = s => {
    $scope.state = s
    ga('send', 'pageview', `/${s.replace('.','/')}`)
  }
})
