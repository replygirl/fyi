###
requires jquery
###

###
getParameterByName by James Padolsey & Andy Earnshaw
https://stackoverflow.com/a/5158301/2467656
###
getParam = (name) ->
  match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search)
  match and decodeURIComponent(match[1].replace(/\+/g, ' '))

###
statesman by imogen
###
config =
  html_dir: "html"
  home:
    root: "page"
    target: "about"
  container: $("body")
generateSlug = (key, value) ->
  return "?" + key + "=" + value
generatePath = (root, target) ->
  return [config.html_dir, root, target].join("/") + ".html"
clearState = -> history.pushState null, null, "/"
applyState = (root, target) ->
  home = config.home
  if root == home.root and target == home.target
    clearState()
  else
    history.pushState null, null, generateSlug root, target
renderState = (root, target, apply_state = false) ->
  container = config.container
  container
    .addClass "loading"
    .on "transitionend", ->
      container.off "transitionend"
      home = config.home
      if root == home.root
        $("[data-link-target]").removeClass "disabled"
      else
        $("[data-link-root!='" + home.root + "'][data-link-target]").removeClass "disabled"
      $("[data-link-root='" + root + "'][data-link-target='" + target + "']").addClass "disabled"
      $.get generatePath(root, target), (content) ->
        roots = "[data-link-root]:not([data-link-target])"
        $(roots).each ->
          if $(this).attr("data-link-root") != home.root or root == home.root
            $(this).addClass "hidden"
          else
            $(this).addClass "obscured"
        container
          .removeClass "loading"
          .on "transitionend", roots, ->
            container.off "transitionend", roots
            base = $("[data-link-root='" + root + "']:not([data-link-target])")
            base.html content
            show = -> base.removeClass "hidden obscured"
            setTimeout show, 1
            applyState(root, target) if apply_state
renderStateFromURL = ->
  root = null
  target = null
  $("[data-link-root]:not([data-link-target])").each ->
    root = $(this).attr "data-link-root"
    return true unless root
    target = getParam root
    return false if target
  if target?
    renderState root, target
  else
    renderState config.home.root, config.home.target
initializeStateFromURL = ->
  renderStateFromURL()
  home = config.home
  unless getParam(home.root)?
    base = $("[data-link-root=" + home.root + "]:not([data-link-target])")
    $.get generatePath(home.root, home.target), (content) ->
      initialize = ->
        base.addClass "hidden"
        populate = ->
          base.html content
          show = -> base.removeClass "hidden"
          setTimeout show, 1
        setTimeout populate, 500
      setTimeout initialize, 500
$(document).ready ->
  initializeStateFromURL()
  $(window).on "popstate", ->
    renderStateFromURL()
  $("[data-link-root][data-link-target]").on "click", ->
    root = $(this).attr "data-link-root"
    target = $(this).attr "data-link-target"
    renderState root, target, true
  config.container.on "click", "[data-io-role='close']", ->
    $(this).closest("[data-link-root]").addClass "hidden"
    root = config.home.root
    $("[data-link-root='" + root + "']:not([data-link-target])").removeClass "obscured"
    $("[data-link-root!='" + root + "'][data-link-target]").removeClass "disabled"
    target = $("[data-link-root='" + root + "'][data-link-target].disabled").attr "data-link-target"
    history.pushState null, null, generateSlug root, target
