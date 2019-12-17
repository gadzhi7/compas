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

  $('.mobile_nav_menu').on('click', function() {
    $('#mobile-menu').css('left', '0');
    $('.wrapper').css({
      'transform': 'translateX(calc(100% - 40px))'
    });
  });

  $('.mobile_menu_close, .mobile_menu_overlay').on('click', function() {
    $('#mobile-menu').css('left', '-100%');
    $('.wrapper').css({
      'transform': 'translateX(0)'
    });
  });




  // tabs
  $('.tabs__links .tabs__link').on('click', function() {
    if ($(this).hasClass('active_tab')) return

    $('.tabs__links .tabs__link').removeClass('active_tab');
    $(this).addClass('active_tab');

    $('.tabs__content').html($(this).find('.tab-info').html())

    // $('.tabs__content div').removeClass('show');
    // $('.tabs__content div:eq(' + [$(this).index()] + ')').addClass('show');
  })

  //adventure

  var clicking = false;
  var advantageCount = $('.advantage_item').length;
  $('.advantage_scroll__count .count_total').text(advantageCount < 10 ? '0' + advantageCount : advantageCount)

  var advantageScrollStep = ($('.advantage_items')[0].scrollHeight - $('.advantage_items').outerHeight()) / (advantageCount - 1);
  var advantageBtnStep = ($('.advantage_scroll__btn').height() - $('.advantage_scroll__btn button').height()) / (advantageCount - 1);
  var advantageCoordY = 0

  $('.advantage_scroll__btn button').on('mousedown', function(e) {
    e.preventDefault();
    clicking = true;
    advantageCoordY = e.clientY
  });

  $('.advantage_scroll').on('mousemove', function(e) {
    e.preventDefault();
    if (clicking == false) return;

    if (advantageCoordY + 30 < e.clientY) {

      if ($('.advantage_items').scrollTop() >= ($('.advantage_items')[0].scrollHeight - $('.advantage_items').outerHeight() - 59)) return
      $('.advantage_scroll__btn button').css('top', Number($('.advantage_scroll__btn button').css('top').replace('px', '')) + advantageBtnStep)
      $('.advantage_items').scrollTop($('.advantage_items').scrollTop() + advantageScrollStep);

      $('.advantage_scroll__count .count_current').text(advantageCount < 10 ? '0' + (Number($('.advantage_scroll__count .count_current').text()) + 1) : advantageCount)

      advantageCoordY = e.clientY
    } else if (advantageCoordY - 30 > e.clientY) {

      if ($('.advantage_items').scrollTop() === 0) return
      $('.advantage_scroll__btn button').css('top', Number($('.advantage_scroll__btn button').css('top').replace('px', '')) - advantageBtnStep)
      $('.advantage_items').scrollTop($('.advantage_items').scrollTop() - advantageScrollStep);

      $('.advantage_scroll__count .count_current').text(advantageCount < 10 ? '0' + (Number($('.advantage_scroll__count .count_current').text()) - 1) : advantageCount)

      advantageCoordY = e.clientY
    }
  });


  // cost

  var costLineLength = $('.cost_elements .cost_item').length / 2;
  $('.cost_scroll_line span').height(100 / costLineLength + '%');

  var costScrollStep = ($('.cost_elements')[0].scrollHeight - $('.cost_elements').outerHeight()) / costLineLength;
  var costLineStep = ($('.cost_scroll_line').height() - $('.cost_scroll_line span').height()) / costLineLength;

  $('.cost_scroll button').on('click', function(e) {
    e.preventDefault();

    if (costLineLength <= 1) return

    if ($(e.target).hasClass('cost_scroll_dowm')) {

      if ($('.cost_elements').scrollTop() >= ($('.cost_elements')[0].scrollHeight - $('.cost_elements').outerHeight() - 59)) return
      $('.cost_scroll_line span').css('top', Number($('.cost_scroll_line span').css('top').replace('px', '')) + costLineStep)
      $('.cost_elements').scrollTop($('.cost_elements').scrollTop() + costScrollStep);

    } else if ($(e.target).hasClass('cost_scroll_up')) {

      if ($('.cost_elements').scrollTop() === 0) return
      $('.cost_scroll_line span').css('top', Number($('.cost_scroll_line span').css('top').replace('px', '')) - costLineStep)
      $('.cost_elements').scrollTop($('.cost_elements').scrollTop() - costScrollStep);

    }
  });

  // cost modile

  var touch = false;
  var countLength = $('.cost_elements .cost_item').length;
  $('.cost_line-mobile span').width(100 / countLength + '%');

  var mCostScrollStep = ($('.cost_elements')[0].scrollWidth - $('.cost_elements').outerWidth()) / costLineLength;
  var mCostLineStep = ($('.cost_line-mobile').width() - $('.cost_line-mobile span').width()) / costLineLength;
  var costCoordX = 0

  $('.cost_elements').on('mousedown touchstart', function(e) {
    e.preventDefault();
    touch = true;
    if (e.touches) {
      e = e.touches[0]
    }
    costCoordX = e.clientX
  });

  $('.cost_elements').on('mousemove touchmove', function(e) {
    e.preventDefault();
    if (touch == false) return;

    if (e.touches) {
      e = e.touches[0]
    }

    if (costCoordX + 30 < e.clientX) {

      if ($('.cost_elements').scrollLeft() === 0) return

      $('.cost_line-mobile span').css('left', Number($('.cost_line-mobile span').css('left').replace('px', '')) - mCostLineStep)
      $('.cost_elements').scrollLeft($('.cost_elements').scrollLeft() - mCostScrollStep);


      costCoordX = e.clientX
    } else if (costCoordX - 30 > e.clientX) {

      if ($('.cost_elements').scrollLeft() >= ($('.cost_elements')[0].scrollWidth - $('.cost_elements').outerWidth() - 20)) return

      $('.cost_line-mobile span').css('left', Number($('.cost_line-mobile span').css('left').replace('px', '')) + mCostLineStep)
      $('.cost_elements').scrollLeft($('.cost_elements').scrollLeft() + mCostScrollStep);



      costCoordX = e.clientX
    }
  });


  // cost full slider

  $('.cost_elements .cost_slide_right').on('click', function(e) {

    if ($('.cost_elements').scrollLeft() >= ($('.cost_elements')[0].scrollWidth - $('.cost_elements').outerWidth() - 20)) return
    // $('.cost_elements').scrollLeft($('.cost_elements').scrollLeft() + mCostScrollStep);
    $('.cost_elements').scrollLeft($('.cost_elements').scrollLeft() + $('.cost_item').outerWidth);

  })

  $('.cost_elements .cost_slide_left').on('click', function(e) {

    if ($('.cost_elements').scrollLeft() === 0) return
    // $('.cost_elements').scrollLeft($('.cost_elements').scrollLeft() - mCostScrollStep);
    $('.cost_elements').scrollLeft($('.cost_elements').scrollLeft() - $('.cost_item').outerWidth));

  })

  // rates slider

  function Slider(obj) {
    this.images = document.querySelectorAll(obj.images);
    this.auto = obj.auto;
    this.btnPrev = obj.btnPrev;
    this.btnNext = obj.btnNext;
    this.rate = obj.rate || 1000;
    this.count = obj.count || 1;

    if (obj.dots) {
      for (let j = 0; j <= this.images.length; j++) {
        let span = document.createElement('span');
        document.querySelector(obj.dots).appendChild(span);
      }
      document.querySelector(obj.dots + ' span').classList.add('active');
      this.dots = document.querySelector(obj.dots).childNodes;
    }

    var i = 0;
    var slider = this;
    this.prev = function() {
      slider.images[i].classList.remove('showed');
      slider.dots[i].classList.remove('active');
      i--;

      if (i < 0) {
        i = slider.images.length - 1;
      }

      slider.images[i].classList.add('showed');

      if (slider.dots) {
        slider.dots[i].classList.add('active');
      }
    }
    this.next = function() {
      slider.images[i].classList.remove('showed');
      slider.dots[i].classList.remove('active');
      i++;

      if (i >= slider.images.length) {
        i = 0;
      }

      slider.images[i].classList.add('showed');

      if (slider.dots) {
        slider.dots[i].classList.add('active');
      }
    }
    document.querySelector(slider.btnPrev).onclick = slider.prev;
    document.querySelector(slider.btnNext).onclick = slider.next;
    if (slider.auto) {
      setInterval(slider.next, slider.rate);
    }
  }

  if ($(window).width() <= 650) {
    new Slider({
      images: '.rates_item',
      btnPrev: '.rates_slide_left',
      btnNext: '.rates_slide_right',
      auto: false,
      dots: '.rates_dots'
    });
  }


/*****************************************************/

  $(document).on('mouseup touchend', function() {
    touch = clicking=  false;
  })

});
