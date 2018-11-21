$(document).ready(function() {
  // Insert quotes as arrays
  var quotes = [
    '"Sweep the leg"',
    '"Wax on, wax off"',
    "\"Can you tell me what's going on and don't tell me about another bike accident?\"",
    '"Here’s your RADIO!"',
    '"Get him a body bag….yeah!!!"',
    '"...No such thing as bad student, only bad teacher."',
    '"This school sucks man!"',
    '"Finish him!"',
    '"You’re a pushy little bastard, aren’t ya?  But I like that, I like that!"',
    '"I see she’s beautiful. I think she’s beautiful."',
    '"Fear does not exist in this dojo, does it?"',
    '"Paint the fence. Up…down.  Up!  Down!"',
    '"It’s Ali…with an “I.”"',
    '"What\'s the matter? Mommy not here to dress you?"',
    "\"I'm sorry! I didn't mean it.\""
  ];

  // Author of quotes
  var author = [
    "John Creese",
    "Mr. Miyagi",
    "Lucille Larusso",
    "Johnny Lawrence",
    "Tommy",
    "Mr. Miyagi",
    "Daniel Larusso",
    "John Creese",
    "John Creese",
    "Daniel Larusso",
    "John Creese",
    "Mr. Miyagi",
    "Ali Mills",
    "Dutch",
    "Bobby Brown"
  ];

  // Have initial quote appear as page loads
  fetchQuote(quotes, author);
  // Have image fade in when page loads
  $("#image")
    .hide()
    .fadeIn(7000);
  // Have quotes fade in when clicking on button
  $("#nxtQuote").click(function() {
    fetchQuote(quotes, author);
    $("#quoteText")
      .hide()
      .fadeIn(1000);
  });

  // Here we're generating random quotes.
  function fetchQuote(q, a) {
    var quoteNum = Math.floor(Math.random() * quotes.length);
    $("#quoteText").text(" " + q[quoteNum] + " ");
    $("#quoteAuthor").text("-" + a[quoteNum]);
    $(".tweet-btn").attr(
      "href",
      "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
        encodeURIComponent('"' + q[quoteNum] + '."' + "by - " + a[quoteNum])
    );
  }
});
