angular.module('fyi', [])
  .controller('fyiController', ($scope) => {
    let fyi = $scope
    fyi.state = 'design.product'
    fyi.contact = false

    fyi.activeIf = s => fyi.state.includes(s) ? 'active' : ''
    fyi.to = s => {
      fyi.state = s
      ga('send', 'pageview', `/${s.replace('.','/')}`)
    }

    fyi.activeIfContact = s => fyi.contact == s ? 'active' : ''
    fyi.openContact = () => {
      fyi.contact = 'open'
      ga('send', 'event', 'Contact', 'Open')
    }
    fyi.sendContact = () => {
      let body = new FormData()
      body.append('key', '43b5fe9ff7818faadfae43ecaa0cab76be5ac346')
      body.append('to', 12063989614)
      body.append('long', 1)
      body.append(
        'content',
        `New from ${fyi.message.name} (${fyi.message.email}): ${fyi.message.body}`
      )

      fetch('https://api.clockworksms.com/http/send.aspx', {
        method: 'POST', body: body
      })
      .catch(error => {
        console.error('Contact send error:', error)
        fyi.contact = 'error'
        alert('something went wrong :(')
        ga('send', 'event', 'Contact', 'Send', 'Error')
      })
      .then(res => {
        console.log('Contact send success:', res)
        fyi.contact = 'success'
        ga('send', 'event', 'Contact', 'Send', 'Success')
      })
    }

    (((i, s, o, g, r, a, m) => {i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)}))(window,document,'script','https://www.google-analytics.com/analytics.js','ga')

    ga('create', 'UA-99993107-1', 'auto')
    ga('send', 'pageview', '/design/product')
  })
