search()

function search(){
     var data = 
     document.getElementById ("date").value
    $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=nOMvQGfEkc5jY74fODeaScAbg0hDqAC1elGwmpgr&date=${data}`,
    
        success: function(param) {
        $('#img').attr('src', param.url)
        $('#title').text( param.title)
        $('#explanation').text( param.explanation)
        $('#copyright').text( param.copyright);}})}
  