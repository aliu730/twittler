$(document).ready(function(){
    var $body = $('body');
    //$body.html('');
    var index = streams.home.length - 1;
    var staticindex = streams.home.length-1;
    while(index >= 0){
      var tweet = streams.home[index];
      $tweet = $('<div class=tweet>' + '<span class=user>' + tweet.user + '</span>' + ': ' + tweet.message + " at " + tweet.created_at + '</div>'); //this way we can click on the username.
      $tweet.appendTo($('.textbody'));
      index -= 1;
    }
    $('button').on('click', function() { // display the recent tweets made.
      var $body = $('body');
      var newIndex = streams.home.length-1;
      var tempindex = newIndex;
      while(newIndex > staticindex){
        var tweet = streams.home[newIndex];
        $newtweet = $('<div class=tweet>' + '<span class=user>' + tweet.user + '</span>' + ': ' + tweet.message + " at " + tweet.created_at + '</div>');
        $newtweet.appendTo('.textbody');
        newIndex -= 1;
      }
      $('.user').on('click', function () { //this allows to show user specific tweets.
        var newButton = $('.newTweet');
        var newTweet = $('<button class=backBut>' + "Home" + '</button>');
        document.body.innerHTML = ''; //this hopefully clears the page as we need to display user specifc tweets.
        $('body').append(newTweet);
        $('body').append('<span class=textbody></span>');
        //$('body').append(newTweet);
        for (var i = 0; i < streams.home.length; i++) {
          if (streams.home[i].user.includes($(this).text())) {
            $('.textbody').append('<div class=tweet>' + '<span class=user>' + streams.home[i].user + '</span>' + ': ' + streams.home[i].message + " at " + streams.home[i].created_at + '</div>');
          }
        }     
        $('.backBut').on('click', function () { // this allows us to go back to previous 'home'
          location.reload();
        });
      });
      staticindex = tempindex; 
    });
    $('.user').on('click', function () { //this allows the username pick to work without clicking the button.
      var newButton = $('<button class=backBut>' + "Home" + '</button>');
      //var header = $('<h1 id=head' + "Twittler" + '</h1>');
      document.body.innerHTML = ''; //this hopefully clears the page as we need to display user specifc tweets.
      $('body').append(newButton);
      $('body').append('<span class=textbody></span>')
      //$('.textbody').append(newButton);
      for (var i = 0; i < streams.home.length; i++) {
        if (streams.home[i].user.includes($(this).text())) {
          $('.textbody').append('<div class=tweet>' + '<span class=user>' + streams.home[i].user + '</span>' + ': ' + streams.home[i].message + " at " + streams.home[i].created_at + '</div>');
        }
      }
      $('button').on('click', function () { // this allows us to go back to previous home'
        location.reload();
      });
    });
  });
