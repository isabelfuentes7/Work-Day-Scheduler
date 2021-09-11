
// Current Day and time
$(document).ready(function(){
    initPage()
     backgroundColor() 

    var interval = setInterval(function() {
    var current_date = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
    var current_time = moment().format('h:mm A');
        $('#current_day').html(current_date);
        $('#current_time').html(current_time);
        
        }, 100);    

})

//Getting event data from the local storage
function initPage() {
    for(var i=0;i<10;i++){
        $("#0"+i+"am").val(JSON.parse(localStorage.getItem("0"+i+" AM")));    
    }
    for(var i=10;i<12;i++){
        $("#"+i+"am").val(JSON.parse(localStorage.getItem(i+" AM")));    
    }
    for(var i=1;i<10;i++){
        console.log("#"+(i+ + +12)+"pm","0"+i+" PM")
        $("#"+(i+ + +12)+"pm").val(JSON.parse(localStorage.getItem("0"+i+" PM")));    
    }
    for(var i=10;i<12;i++){
        console.log("#"+(i+ + +12)+"pm",i+" PM")
        $("#"+(i+ + +12)+"pm").val(JSON.parse(localStorage.getItem(i+" PM")));    
    }
  } 


//Save event details in local storage
$(document).on('click', '#saveEvent', function() {
    {
        eventData = $(this).siblings(".form-control").val().trim();
        eventTime = $(this).siblings(".event-time").text().trim();
        localStorage.setItem(eventTime, JSON.stringify(eventData));
    }
});

      
//Background color change
function backgroundColor() {
      
    $(".form-control").each(function () {
        var time = parseInt($(this).attr("id"));
         String($(this).attr("id")).slice(2);
        var current_time = moment().format('h:mm A');
        var current_hour= current_time.substr(0, current_time.indexOf(':')); 
        var amOrPm=moment().format('a');
        
        if(amOrPm=='pm'){
            current_hour=Number(current_hour)+ + +12
        }
        if (Number(current_hour) > Number(time) ) {
            // if( amOrPm== String($(this).attr("id")).slice(2)){
                
            $(this).addClass("past");
            // }
            
        } else if (Number(current_hour) < Number(time) ) {
            console.log(time,amOrPm)
            $(this).addClass("future");
        } else if (Number(current_hour) == Number(time)){
            
            $(this).addClass("present");
        }
    });
  }