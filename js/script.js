$('#my-select-menu').on('change', function() {
    const selected = $(this).val();
    if (selected !== '') {
      console.log('The value you picked is: ' + selected);
    }
  });

$.ajax({
    method:'get',
    url:'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=D5H6I9oboArY2CG6wjPNy9BAvjnLZOey'
  })
  .done(function(data){
    console.log(data);
  });
  