$(document).ready(function() {


  // tabs
  $('.tabs__link a').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active_tab')) return

    $('.tabs__link a').removeClass('active_tab');
    $(this).addClass('active_tab');

    $('.tabs__content div').removeClass('show');
    $('.tabs__content div:eq('+ [$(this).index()] +')').addClass('show');
  })

});
