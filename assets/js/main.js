$(document).ready(function () {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  document.querySelector("#date").innerHTML += date;


  if ($(".my-news-slider").length) {
    $(".my-news-slider").slick({
      arrows: false,
      dots: false,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".slider-news").length) {
    $(".carousel").carousel();
  }

  if ($(".books-slider").length) {
    $(".books-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      Infinit: true,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

});

var api_url = "https://api.pray.zone/v2/times/today.json?ip=auto";
document.addEventListener("DOMContentLoaded", function () {
  PrayerTimesApi();
});

