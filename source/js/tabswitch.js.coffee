###
requires jquery
###

### need sass
.hidden-left.hidden-right {
  transition-duration: 0ms
}
###

###
0. CHK  organize tab switchers with a data-link-tabs attr
1. CHK get tab index
2. CHK find target tab from index
3. CHK compare current tab index against target tab index
4. CHK apply l/r hide to target tab
5. CHK apply l/r hide to current tab, unhide target tab
6. swap active styles within tab controller
###

$(document).ready ->
  $(".io-tab-switcher > header > button").on "click", ->
    tabs = $(this).siblings.andSelf()
    tabs.addClass "disabled"
    current_tab = tabs.filter ".active"
    current_index = current_tab.index()
    target_index = $(this).index()
    unless target_index == current_index
      if target_index > current_index
        target_hide_class = "hidden-right"
        current_hide_class = "hidden-left"
      else
        target_hide_class = "hidden-left"
        current_hide_class = "hidden-right"
      $(this).add(current_tab).toggleClass "active"
      frames = $(this).closest(".io-tab-switcher").children "ul"
      frames.eq target_index
        .addClass target_hide_class
        .removeClass current_hide_class
      frames.eq current_index
        .addClass current_hide_class
        .on "transitionend", ->
          $(this).off "transitionend"
          frames.eq(target_index).removeClass target_hide_class
          tabs.removeClass "disabled"
