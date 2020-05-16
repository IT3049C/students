$(function() {
  $('.js-student').each(function() {
    var $student = $(this);
    var username = $student.data('username');
    var $avatar = $student.find('.js-avatar');

    $.ajax({
      url: 'https://api.github.com/users/' + username,
      dataType: 'json',
      timeout: 2000,
      cache: true,
      headers: {
        "Authorization": "token a20e98005f0a5ea463585b918ac9d212d4852b6b"
      },
      success: function(data) {
        console.log(data)
        $avatar.attr('src', data.avatar_url);
        var $name = $student.find('.js-name');
        $name.text(data.name || username);
      },
      error: function() {
        $avatar.attr('src', 'https://github.com/identicons/' + username + '.png');
      }
    })
  });
});
