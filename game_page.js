function send(){
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;
    actual_answer = parseInt(player1_name) * parseInt(player2_name);
    question_number = "h4" + player1_name + " X "+ player2_name +"</h4>";
    input_box = "<br>Answer = <input type='text' id='input_check_box> ";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row = question_number + input_box + check_button ; 
     document.getElementById("output").innerHTML = row;
      document.getElementById("player1_name").value = "";
      document.getElementById("player2_name").value = "";
}

var question_turn ="player1";
var answer_turn ="player2";
function check(){
    get_answer =document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
           update_player1_score = player1_score +1;
           document.getElementById("player1_score").innerHTML=update_player1_score;
        }
        else{
            update_player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML=update_player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML="Turno para preguntar "+player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML="Turno para preguntar "+player1_name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML="Turno para responder "+player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML="Turno de responder "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}

