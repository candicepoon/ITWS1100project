$(document).ready(function(){
        $.ajax({
                type: "GET",
                url: "problems.json",
                dataType: "json",
                success: function(responseData, status){
                        var the_fix = '<select class="platformPicker"><option></option>';
                        $.each(responseData.platforms, function(i, item){
                                the_fix += ''
                        });
 
                }, error: function(msg){
                        alert('There was a problem')
                }
        });
});
 
/*To do:
Currently working out the loop. The plan is to try to first loop through the platform names then
to get a second loop to get the problems.