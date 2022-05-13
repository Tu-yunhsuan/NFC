// 日期
function mynow(){
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hour=date.getHours();
    minute=date.getMinutes();
    second=date.getSeconds();
    if(minute < 10){displayMinute = "0" + minute.toString();}
    else{displayMinute = minute;}
    if(hour < 10){displayHour = "0" + hour.toString();}
    else{displayHour = hour;}
    if(hour < 10){displaySecond = "0" + second.toString();}
    else{displaySecond = second;}
}
function now_time(){
    mynow();
    document.getElementById("current_date").innerHTML = year + "年"+ month + "月" + day + "日" ;
    document.getElementById("current_time").innerHTML = displayHour + ":" + displayMinute ;
    setTimeout('now_time()',1000);
}

$(document).ready(function(){
    // 頁面轉換
    $('.message').click(function(){
        $('#Message_page').show();
    });
    $('.scan').click(function(){
        $('#Message_page').show();
    });
    $('#back_btn').click(function(){
        $('#Message_page').hide();
        $('#message_box').hide();
    });
    // 桌布頁面
    $('.message').hide().slideDown(800);
    // 簡訊頁面
    var $count_send=0;
    $('#send').click(function(){
        var $current_text = $('#input_text').val();
        if($('#input_text').val()!=""){
            if($count_send<1){
                $current_date = year + "年"+ month + "月" + day + "日"
                $('#content_box').append('<div class="content_date">'+$current_date+'</div>')
            }

            $('#content_box').append(
                '<div class="content_append"><div class="append_text">'
                +$current_text+'</div></div>')
            $('#input_text').val('');
            $count_send++;
        }
    });
    //預設訊息
    $('.default_btn').click(function(){
        if($count_send<1){
            $current_date = year + "年"+ month + "月" + day + "日";
            $('#content_box').append('<div class="content_date">'+$current_date+'</div>');
        }
        $count_send++;
        $('#content_box').append(
            '<div class="content_append"><div class="append_text">'
            +$(this).html()+'</div></div>');

        var $clue_1="我送的香水要乖乖噴喔！不噴的話知道後果是甚麼吧？";
        var $clue_2="騷擾？我這是愛你的表現！";
        var $clue_3="放心吧，我會很溫柔的對待你的😊";
        if(this.id == 'default_message_1'){
            $('#content_box').append(
                $('<div class="content_clue" style="display:flex;">'
                +'<img class="clue_img" src="img/user.svg" width="20px" height="20px">'
                +'<div class="clue_text"><div class="load-text">.....</div></div>'
                +'</div>').hide().fadeIn(2500).fadeOut(1500));
            setTimeout(function(){$('#content_box').append(
                $('<div class="content_clue id="clue'+$count_send+' style="display:flex;"">'
                + '<img class="clue_img" src="img/user.svg">'
                + '<p class="clue_text">'+ $clue_1 +'</p>'
                + '</div>').hide().fadeIn(1000))},4000);
           
        }
        if(this.id == 'default_message_2'){
            $('#content_box').append(
                $('<div class="content_clue" style="display:flex;">'
                +'<img class="clue_img" src="img/user.svg" width="20px" height="20px">'
                +'<div class="clue_text"><div class="load-text">.....</div></div>'
                +'</div>').hide().fadeIn(2500).fadeOut(1500));
            setTimeout(function(){$('#content_box').append(
                $('<div class="content_clue id="clue'+$count_send+' style="display:flex;"">'
                + '<img class="clue_img" src="img/user.svg">'
                + '<p class="clue_text">'+ $clue_2 +'</p>'
                + '</div>').hide().fadeIn(1000))},4000);
        }
        if(this.id == 'default_message_3'){
            $('#content_box').append(
                $('<div class="content_clue" style="display:flex;">'
                +'<img class="clue_img" src="img/user.svg" width="20px" height="20px">'
                +'<div class="clue_text"><div class="load-text">.....</div></div>'
                +'</div>').hide().fadeIn(2500).fadeOut(1500));
            setTimeout(function(){$('#content_box').append(
                $('<div class="content_clue id="clue'+$count_send+' style="display:flex;"">'
                + '<img class="clue_img" src="img/user.svg">'
                + '<p class="clue_text">'+ $clue_3 +'</p>'
                + '</div>').hide().fadeIn(1000))},4000);
        }
        
    });
    
});