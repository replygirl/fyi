fyi.controller('contact', ($scope) => {
  $scope.contact = false

  $scope.activeIfContact = s => $scope.contact == s ? 'active' : ''
  $scope.openContact = () => {
    $scope.contact = 'open'
    ga('send', 'event', 'Contact', 'Open')
  }
  $scope.sendContact = () => {
    let body = new FormData()
    body.append('key', '43b5fe9ff7818faadfae43ecaa0cab76be5ac346')
    body.append('to', 12063989614)
    body.append('long', 1)
    body.append(
      'content',
      `New from ${$scope.message.name} (${$scope.message.email}): ${$scope.message.body}`
    )

    fetch('https://api.clockworksms.com/http/send.aspx', {
      method: 'POST', body: body
    })
    $scope.contact = 'success'
    ga('send', 'event', 'Contact', 'Send', 'Success')
    heap.addUserProperties({
      "email": $scope.message.email,
      "Name": $scope.message.name
    });
  }
});
