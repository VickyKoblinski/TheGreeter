const g = G('Joe', 'Bowman');

$('#login').click(function () {
  var lang = $('#lang').val();
  g.setLang(lang).$Greet('#greet');
})