// Extra:
(function () {
  $('input[type="color"]').change(function () {
    $('body').css('background', $(this).val());
  });

  // debugger;
  var firstNameInput = $('input[name="fullName"]');
  var error = $('<span class="error">FullName must start with UpperCase</span>')
    .insertAfter(firstNameInput)
    .hide();

  firstNameInput.blur(function () {
    var isValid = /^[A-Z]/.test($(this).val());

    if (!isValid)
      error.show();
    else
      error.hide('slow');
  });

  // 1. Create form dynamically & hide checkbox
  /*
  var myForm = $(
    '<form>' +
          '<input type = "button" value = "Input Button" >' +
          '<input type = "checkbox" >' +
          '<input type = "checkbox" >' +
          '<input type = "hidden" >' +
          '<input type = "button" value = "Output Button" >' +
          '<select >' +
              '<option > Option < /option>' +
          '</select>' +
      '</form >'
  );
  $('main').append(myForm).find('input[type="checkbox"]').hide();
  */

  // 2. append title and add highlight
  /*
  $('main')
    .prepend('<h1> jQuery 📝 Form </h1>');

  $('h1').click(function () {
    $(this).toggleClass('highlight');
  });
  */

  // 3. change text size
  /*
  var title = $('h1');
  var input = $('input[name="coffee"]');

  input.change(function (e) {
    var currentFontSize = parseInt(title.css('font-size'));

    // debugger;
    title.css('font-size', currentFontSize + Number(input.val()) * 10 + 'px');
  });
  */
}());
