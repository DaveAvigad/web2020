$(document).ready(function () {
  $.getJSON('data/books.json', function (data) {
    console.log(data);
    $('h1').html(data.category);
    $('#books-list').append('<ul>');
    $.each(data.products, function () {
      $('#books-list ul').append(
        '<li><a href="book.html?bookId=' +
          this.id +
          '">' +
          this.name +
          '</a></li>'
      );
    });
  });
});

/*
 *******************************************************************
*/

// #1
/*

$(document).ready(function () {
  $.getJSON('data/books.json', function (books) {
    console.log(books);
    $('h1').html(books.category);
  });
});

*/
