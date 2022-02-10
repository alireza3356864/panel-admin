$(document).ready(function () {
  function removeAllsidebarClass() {
    // show-off
    $("#sidebar-header-toggle-show").removeClass("d-md-none");
    $("#sidebar-header-toggle-show").removeClass("d-inline");
    // hide-on
    $("#sidebar-header-toggle-hide").removeClass("d-md-inline");
    $("#sidebar-header-toggle-hide").removeClass("d-none");
  }

  // click roye menu 
  $("#sidebar-header-toggle-hide").click(function () {
    $("#sidebar-body").fadeOut(300);
    $("#main-body").animate({ width: "100%" }, 0);
    setTimeout(function () {
      removeAllsidebarClass();
      $("#sidebar-header-toggle-hide").addClass("d-none");
      $("#sidebar-header-toggle-show").removeClass("d-none");
    }, 300);
  });
  $("#sidebar-header-toggle-show").click(function () {
    $("#sidebar-body").fadeIn(300);
    setTimeout(function () {
      removeAllsidebarClass();
      $("#sidebar-header-toggle-show").addClass("d-none");
      $("#sidebar-header-toggle-hide").removeClass("d-none");
    }, 300);
  });
  // var check=true;
  // $("#show-body-header").click(function () {
  //   if(check==true){
  //     $("#body-header").addClass("d-block");
  //     check=false;
  //   }else{
  //     $("#body-header").removeClass("d-block");
  //     check=true;
  //   }

  // });

  //  braye gheyr faal kardan body header or user side code zir ra mizanim
  $("#show-body-header").click(function () {
    $("#body-header").toggle(300);
  });

  // show and hide search box click roye search icon
    $("#search-toggle").click(function () {
      // serch toggle none mishavad
    $("#search-toggle").removeClass("d-md-inline");
    // search area ke shamel input va icon ha ast display inline mishavad
    $("#search-area").addClass("d-md-inline");
    $("#search-input").animate({width: "12rem"},500);
  });
  // click roye zabdar
  $("#search-area-hide").click(function () {
  $("#search-input").animate({width: "0"},500);
  setTimeout(function(){
    $("#search-toggle").addClass("d-md-inline");
    $("#search-area").removeClass("d-md-inline");
  },500)
  });


  // drowp down menu body header
  var check=true;
  $("#body-notification-toggle").click(function(){
    $("#header-notification").fadeToggle(300);

      $("#header-comment").fadeOut(300);
      $("#header-profile").fadeOut(300);
      $("#down-icon-user").removeClass("down-icon-user-rotate");
      check=true;
  });
  $("#header-comment-toggle").click(function(){
    $("#header-comment").fadeToggle(300);

      $("#header-notification").fadeOut(300);
      $("#header-profile").fadeOut(300);
      $("#down-icon-user").removeClass("down-icon-user-rotate");
      check=true;
      
  });
  $("#header-profile-toggle").click(function(){
    if(check==true){
      console.log("true");
      $("#down-icon-user").addClass("down-icon-user-rotate");
      check=false;
    }else{
      $("#down-icon-user").removeClass("down-icon-user-rotate");
      check=true;
    }
    $("#header-profile").fadeToggle(300);

    $("#header-comment").fadeOut(300);
    $("#header-notification").fadeOut(300);
  });


  // sidebar group link click
  var clicksidebargrouplink=true;
  $(".sidebar-group-links").click(function(){ 
    // bastan tamam side bar group link ha
    $(".sidebar-group-links").removeClass("sidebar-group-links-active");
    // tamam flesh ha be samt left
    $(".sidebar-group-links").children(".sidebar-dropdown-toggle").children(".angle").removeClass("left-icon-rotate");
    // $(".sidebar-group-links").children(".sidebar-dropdown-toggle").children(".angle").addClass("fa-angle-left");

    // baz shodan haman side bar group link click shode
    if(clicksidebargrouplink==true){
      $(this).addClass("sidebar-group-links-active");
      // $(this).children(".sidebar-dropdown-toggle").children(".angle").removeClass("fa-angle-left");
      $(this).children(".sidebar-dropdown-toggle").children(".angle").addClass("left-icon-rotate");
      clicksidebargrouplink=false;
    }else{
      clicksidebargrouplink=true;
    }
  });

  $("#full-screen").click(function(){
    toggleFullScreen();
   
  });
  $('#full-screen').click(function(){
    toggleFullScreen();
 });

 function toggleFullScreen()
 {
    if((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)){
       if(document.documentElement.requestFullscreen){
          document.documentElement.requestFullscreen();
       }
       else if(document.documentElement.mozRequestFullscreen){
          document.documentElement.mozRequestFullscreen();
       }
       else if(document.documentElement.webkitRequestFullscreen){
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
       }
       $('#screen-compress').removeClass('d-none');
       $('#screen-expand').addClass('d-none');
    }
    else{
       if(document.cancelFullScreen)
       {
          document.cancelFullScreen();
       }
       else if(document.mozCancelFullScreen)
       {
          document.mozCancelFullScreen();
       }
       else if(document.webkitCancelFullScreen)
       {
          document.webkitCancelFullScreen();
       }
       $('#screen-compress').addClass('d-none');
       $('#screen-expand').removeClass('d-none');
    }
 }

});

