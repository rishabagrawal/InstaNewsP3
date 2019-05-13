
$(function() {

 

  const loadingIcon=$('.loader');
  const articles=$('.articles');

  loadingIcon.hide();
  $('.selection').on('change','.selectors',function(){
    loadingIcon.show()
    const selectors=$(this).val();
    if (selectors===''){return}
    $.ajax({
          method:'get',
          url:'https://api.nytimes.com/svc/topstories/v2/' +selectors+ '.json?api-key=D5H6I9oboArY2CG6wjPNy9BAvjnLZOey',
        }).done(function(data) {
          articles.empty();
          loadingIcon.hide();
          
         
          const results=data.results.filter((element)=>{return element.multimedia[4];}).slice(0,12);
          // console.log(results);
      $.each(results, function(_key, value) {
        const url=value.url;
        const link=value.multimedia[4].url;
        const text=value.abstract;
        const html='<li><div class="art-content"><a href='+url+' target=“_blank”><img src='+link+'><div class="text-content" ><p>'+text+'</p></div></a></div></li>';
        articles.append(html);
      });

      
    }).always(function(){
     
    }
    )
  });
});
 
