
$('selectors').on('click', 'button', function() {
  const selected = $(this).val();
  if (selected !== '') 

  // $('.loading').show(1500);
$.ajax({
    method:'get',
    url:'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=D5H6I9oboArY2CG6wjPNy9BAvjnLZOey'
  })
  .done(function(data){
    console.log(data);
  });



$('#travels').on('change', function() {
    const selected = $(this).val();
    if (selected !== '') {
      console.log('The value you picked is: ' + selected);
    }
  });
});


// $("button").on("click", function() {
//   $.ajax({
//     method: 'GET',
//     url:'https://api.github.com/users/octocat/repos?client_id=a37c6077034750f953fc&client_secret=8ff75658b21aa8c5830b7efeae85f559b4d36a02'})
//     .done(function(data) {
//     $.each(data, function(key, value) {
      
//        $('.repo-list').append('<li>'+value.name+'</li>');
  