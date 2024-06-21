// 모바일 모드에서 메뉴 숨김
$(".btn").click(function () {
  $(".line1").toggleClass("deg45");
  $(".line2").toggleClass("hide");
  $(".line3").toggleClass("deg-45");
  $(".menu").fadeToggle(500);
});

/**** 메뉴버튼 ****/
// 모바일 모드에서 메뉴 버튼 클릭하면 메뉴 숨김
/*
  .menu>li>a 클릭하면
  만약, 브라우저의 width가 768px 미만이면
    - .menu 숨김
    - .line1에 deg45클래스 제거
    - .line2에 y90deg클래스 제거
    - .line3에 deg-45클래스 제거
  */
$(".menu>li>a").click(function () {
  if (parseInt($(window).width()) < 1024) {
    $(".menu").fadeOut(500);
    $(".line1").removeClass("deg45");
    $(".line2").removeClass("hide");
    $(".line3").removeClass("deg-45");
  }
});

// 숨긴메뉴 보이도록
/* 브라우저의 윗스가 변경(resize)되면 함수 실행
    만약 브라우저의 윗스가 1023px 이상이면 
    - .menu 보이도록
    아니면
    - .menu 숨김
    - .line1에 deg45클래스 제거
    - .line2에 hide클래스 제거
    - .line3에 deg-45클래스 제거
     */
$(window).resize(function () {
  if (parseInt($(window).width()) > 1023) {
    $(".menu").show();
  } else {
    $(".menu").hide();
    $(".line1").removeClass("deg45");
    $(".line2").removeClass("hide");
    $(".line3").removeClass("deg-45");
  }
});

/***** 하이퍼링크 *****/
/*
  scrolling 이라는 함수를 작성
  1-1. 만약 브라우저의 폭이 1023px 이상이면
    - 변수 pos는 top: -40px로 설정
  1-2. 아니면
    - 변수 pos는 top:0으로 설정
  2. 각각의 article의 위치가 top:pos 의 위치로 이동하는 시간을 0.5초로 설정
  */
let pos = 0;
function scrolling(parameter) {
  if (parseInt($(window).width()) > 1023) {
    pos = $(parameter).offset().top - 40;
  } else {
    pos = $(parameter).offset().top;
  }
  $("html", "body").animate(
    {
      screenTop: pos,
    },
    500
  );
}
// 헤더 스크롤
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});

/* 슬라이드 */
let auto = 0; // 자동실행조건
function autoplay() {
  if (auto === 0) {
    auto = setInterval(function () {
      $(".slide ul").animate({ left: "-100%" }, 200, function () {
        $(".slide ul").append($(".slide li:first")).css("left", 0);
      });
    }, 2000);
  }
}
autoplay();
/*
1-1. .slide ul에 마우스오버하면
  - 변수 auto 안에 들어있는 자동실행함수를 삭제
  - 변수 auto에 다시 0을 넣어줌 (자동실행함수 실행 조건)
1-2. 마우스아웃하면
  - 함수 autoplay 재실행
*/
$(".slide ul,.prev,.next")
  .mouseover(function () {
    clearInterval(auto);
    auto = 0;
  })
  .mouseout(function () {
    autoplay();
  });
/* 다음 버튼 */
$(".next").click(function () {
  $(".slide ul").animate({ left: "-100%" }, 200, function () {
    $(".slide ul").append($(".slide li:first")).css("left", 0);
  });
});
/* 이전 버튼 */
$(".prev").click(function () {
  $(".slide ul")
    .prepend($(".slide li:last"))
    .css("left", "-100%")
    .animate({ left: 0 }, 200);
});
// 메뉴클릭유지
// $(".menu li a").click(function () {
//   let nth = $(this).index();
//   $(".menu li a").removeClass("check").eq(nth).addClass("check");
// });
