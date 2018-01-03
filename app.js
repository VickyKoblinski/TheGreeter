const g = G('Joe', 'Bowman');

$('#login').click(function () {
  var lang = $('#lang').val();
  $('#greet').text(JSON.stringify(g.setLang(lang).greet()));
});