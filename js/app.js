$(document).ready(function(){
  page.init();
});

var page = {
  init : function(){
    page.initEvents();
  },
  initEvents : function(){
    $('.menuClick').on('click', function(){
      event.preventDefault();
      $('body, html').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
    });

    $('.topClick').on('click', function(){
      event.preventDefault();
      $('body, html').animate({
        scrollTop: 0
      }, 500);
    });

    $('.learnMore').on('click', function(){
      event.preventDefault();
      $(this).closest('.projectMain').next('.projectSummary').addClass('activeProject');
      $(this).closest('.projectMain').addClass('deactiveTitle');
    });

    $('.fa-times-circle-o').closest('a').on('click', function(){
      event.preventDefault();
      $(this).closest('.projectSummary').removeClass('activeProject');
      $(this).parent().siblings('.projectMain').removeClass('deactiveTitle');
    });

    $('.regularLink').on('click', function(event){
      var url = $(this).attr('href');
      var newWindow = window.open(url, '_blank');
        if(newWindow){
          event.preventDefault();
          newWindow.focus();
        }
      });

      $('.toolLogo').on('mouseenter', function(event){
        $(this).addClass('colored');
      });

      $('.toolLogo').on('mouseleave', function(event){
        $(this).removeClass('colored');
      });

    }
};
