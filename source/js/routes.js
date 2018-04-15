fyi.config(($urlMatcherFactoryProvider, $stateProvider, $locationProvider) => {
  $urlMatcherFactoryProvider.strictMode(false)
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })

  for (const route of [
      ['about',    ''],
      ['music',    '/music'],
      ['design',   '/design'],
      ['thoughts', '/thoughts']
  ]) {
    $stateProvider.state({
      name: route[0],
      url: route[1],
      templateUrl: `templates/${route[0].replace('.', '-')}.html`
    })
  }
});
