// Adds a listener to the login button
$('#login').click(function () {

  //Creates a new TheGreeter object for Joe Bowman
  const g = G('Joe', 'Bowman');

  //Gets the language option from the selector
  const lang = $('#lang').val();

  //Sets TheGreeter language and passes the '#greet' selector to render Joe's greeting to the screen.
  g.setLang(lang).$Greet('#greet');
})