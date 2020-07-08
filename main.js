$(document).ready(function($) {
    $('.popup-open').click(function() {
        $('.popup-fade').fadeIn();
        return false;
    });
    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });
    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });
    var now = new Date();
    var month = now.getMonth();
    var months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Ноябрь',
        'Декабрь',
    ];

    var dayWeek = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
    ];
    var cal_body;
    createCalendar();
    function createCalendar(num = 0) {
        month+=num;
        var monthVal = " " + months[month]+ ", " + now.getFullYear() + " ";
        $(".curr_mouth").html(monthVal);
        now.setMonth(month);
        now.setDate(1);
        var blank = (now.getDay()==0)?6:now.getDay() - 1;
        cal_body = "<div class=\"row \">";
        cell_count = 0;
        for(i = 0;i < blank; i++){
            cal_body += "<div class=\"col cell\"></div>"
            cell_count++;
        }
        var daysCount=0;
        for(i = blank; i < 7;i++){
            cal_body+="<div class=\"col cell\"> "+dayWeek[i]+", "+ now.getDate() +" </div>";
            daysCount = now.getDate();
            now.setDate(now.getDate()+1);
            cell_count++;
        }
        cal_body+="</div>";
        now.setDate(0);
        cal_body += "<div class='row'>";
        for(i = daysCount + 1; i <= now.getDate(); i++){
            cal_body+="<div class='col cell'>"+i+"</div>";
            cell_count++;
            if(cell_count % 7 == 0){
                cal_body+="</div><div class='row'>";
            }
        }
        now.setMonth(month);
        var lastCell = 7 - now.getDay();
        for(i=0;i<lastCell;i++){
            cal_body+="<div class='col cell'></div>";
        }
        cal_body +="</div></div>";
        $(".calendar_body").html(cal_body);
    }

    $(".next").click(function () {
        createCalendar(1);
    });

    $(".back").click(function () {
        createCalendar(-1);
    });

    $(".now").click(function () {
        date = new Date();
        month = date.getMonth();
        createCalendar();

    })
});