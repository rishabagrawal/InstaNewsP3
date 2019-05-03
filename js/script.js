$(function() {

  const loadingIcon=$('.loading');
  const articles=$('.articles');

  loadingIcon.hide();
  $('.selection').on('change','.selectors',function(){
    const selectors=$(this).val();
    //if(selectors==='home')return;
    $.ajax({
          method:'get',
          url:'https://api.nytimes.com/svc/topstories/v2/' +selectors+ '.json?api-key=D5H6I9oboArY2CG6wjPNy9BAvjnLZOey',
        }).done(function(data) {
          articles.empty();
          loadingIcon.hide();
          //const results=data.results;
          const results=data.results.filter((element)=>{return element.multimedia;}).slice(0,12);
      $.each(results, function(key, value) {
        const title=value.title;
        const link=value.multimedia[4].url;
        const text=value.abstract;
        const html='<img src='+link+'><h1>'+title+'</h1><p>'+text+'</p>';
        articles.append(html);
      });
    }).always(function(){
      loadingIcon.show();
    }
    )
  });
});
 
/*
    <img src='link'/><h1>title</h1><p>text</p>
*/