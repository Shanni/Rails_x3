// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// welcome page
var st = new SplitText('.text', {type: 'words, chars'});

// Animate each character
TweenMax.staggerFrom(st.chars, 0.8, {y: -60, opacity: 0, ease:Back.easeOut}, 0.02, resetChars);

// Fade in each word
//TweenMax.staggerFrom(st.words, 1.2, {opacity:0, ease:Linear.easeNone}, 0.04, resetChars);

function resetChars() {
  st.revert();
}
