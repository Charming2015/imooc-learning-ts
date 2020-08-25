import $ from 'jquery'

$(function() {
  console.log(1234)
  $('body').html('<div>abdc</div>')

  new $.fn.init()
})