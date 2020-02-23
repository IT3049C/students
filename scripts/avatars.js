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
        "Authorization": "token 99df6097038ef7cb78328f25160a24ced65528ed"
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
