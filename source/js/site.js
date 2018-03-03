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
      fetch('https://api.clockworksms.com/http/send.aspx', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({
          'key': '43b5fe9ff7818faadfae43ecaa0cab76be5ac346',
          'to': 12063989614,
          'content':
            `New from ${fyi.message.name} (${fyi.message.email}): ${fyi.message.body}`,
          'long': 1
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    }
  });
