
    
    setInterval(updateTime, 1000);
    
    function updateTime(){
        var d = new Date();
        var day = d.getDate();
        var hour=d.getHours();
        var min=d.getMinutes();
        var sec=d.getSeconds();
           
        $(".day").text(day);   
        $(".hour").text(hour);
        $(".min").text(min);
        $(".sec").text(sec);

    }
