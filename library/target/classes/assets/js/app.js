$(document).ready(function(){
    var elements = $('td[title="status"]');
    for( i=0; i<elements.length; i++ ){
            var status = elements[i].innerHTML;
            var isbn = elements[i].id.slice("6");
            var realId = "#"+isbn;
            if(status == "lost")
                    {
                            $(realId).attr("disabled","disabled");
                    }
            else{
                    $(realId).removeAttr("disabled");
            }
    }
    
});
    

$(":button").click(function() {
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);
	Callback(isbn);
	$("#"+isbn).attr("disabled", "disabled");
	window.location.reload(true);
});



function Callback(isbn)
{
	$.ajax({
	    type: "PUT",
	    url: "/library/v1/books/"+isbn+"?status=lost",
	    contentType: "application/json",
	    success: function() {
            //window.location.reload(true);
	    },
	    error: function() {
            //window.location.relaod(true);
    }
	});
	$(status).text("lost")
	
	
}
