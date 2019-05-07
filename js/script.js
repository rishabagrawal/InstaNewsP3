
$(function() {

  //  loadingIcon.hide();

  const loadingIcon=$('.loading');
  const articles=$('.articles');

  loadingIcon.show();
  $('.selection').on('change','.selectors',function(){
    const selectors=$(this).val();
    if (selectors===''){return}
    $.ajax({
          method:'get',
          url:'https://api.nytimes.com/svc/topstories/v2/' +selectors+ '.json?api-key=D5H6I9oboArY2CG6wjPNy9BAvjnLZOey',
        }).done(function(data) {
          articles.empty();
          // loadingIcon.hide();
          //const results=data.results;
          const results=data.results.filter((element)=>{return element.multimedia;}).slice(0,12);
          // console.log(results);
      $.each(results, function(_key, value) {
        const url=value.url;
        const link=value.multimedia[4].url;
        const text=value.abstract;
        const html='<a href='+url+' target=“_blank”><img src='+link+'><p>'+text+'</p></a>';
        articles.append(html);
      });

      
    }).always(function(){
      loadingIcon.hide();
    }
    )
  });
});
 
/*
    <img src='link'/><h1>title</h1><p>text</p>
*/