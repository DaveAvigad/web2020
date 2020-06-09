var bookName, bookPrice;

function getBookId() {
  var aKeyValue = window.location.search.substring(1).split('&');
  var bookId = aKeyValue[ 0 ].split('=')[ 1 ];

  console.log(aKeyValue);
  console.log(bookId);

  return bookId;
}

$(document).ready(function () {
  $.getJSON('data/books.json', function (data) {
    var bookId = getBookId();
    // console.log(bookId);

    $.each(data.products, function (i, obj) {
      if (obj.id == bookId) {
        bookName = obj.name;
        bookPrice = obj.price;
      }
    });
    // console.log('bookPrice: ', bookPrice);
    $('h1').html(bookName);
    $('#bookPrice').html(bookPrice);
  });
});

/*
* example:
* http://localhost:63342/web2020/13/book.html?bookId=789
* window.location.search.substring(1).split('&')[0].split('=')[1] // 22
* */
