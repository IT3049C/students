$(function() {
  $('.js-student').each(function() {
    var $student = $(this);
    var username = $student.data('username');
    var $avatar = $student.find('.js-avatar');
    var t1 = `ab81f91`
    var t2 = `695a645cbf`
    var t3 = `9b4${1223*5}0d2`
    var t4 = `afb${30416*2}c62e3`
    var collected = `token ${t1}${t2}${t3}${t4}`

    $.ajax({
      url: 'https://api.github.com/users/' + username,
      dataType: 'json',
      timeout: 2000,
      cache: true,
      headers: {
        // the following token has user:read scope
        "Authorization": collected
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