$(document).ready(function() {

  // fixed menu
  var heightAfterShowMenu = Number($('header').outerHeight(true)) + Number($('.banner').outerHeight(true)) + Number($('.main_types').outerHeight());
  var menu = $("#fixed_menu");

  $(window).resize(function() {
    heightAfterShowMenu = Number($('header').outerHeight(true)) + Number($('.banner').outerHeight(true)) + Number($('.main_types').outerHeight());
  });

  $(document).scroll(function() {
    var y = $(document).scrollTop()
    if (y >= heightAfterShowMenu) {
      $(menu).slideDown(300);
    } else {
      $(menu).slideUp(300);
    }
  });

  // mobile menu

  $('.mobile_nav_menu').on('click', function () {
    $('#mobile-menu').show();
  });


  // tabs
  $('.tabs__link a').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active_tab')) return

    $('.tabs__link a').removeClass('active_tab');
    $(this).addClass('active_tab');

    $('.tabs__content div').removeClass('show');
    $('.tabs__content div:eq(' + [$(this).index()] + ')').addClass('show');
  })

  //adventure

  var clicking = false;

  $('.advantage_scroll__btn button').on('mousedown', function(e) {
    clicking = true;
    console.log('mousedown', e);
    $('.advantage_items').scrollTop(160)
  });

  $(document).mouseup(function() {
    clicking = false;
    console.log('mouseup');
  })

  $('.advantage_scroll__btn button').on('mousemove', function(e) {
    if (clicking == false) return;

    console.log('mouse moving', e);
  });

});
