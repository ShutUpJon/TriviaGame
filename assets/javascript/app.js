var score = 0; //Set score to 0
var total = 4; //Total Number of Questions
var point = 1; //Points per correct answer
var highest = total * point; 

//Initializer

function init() {
    //set correct answers
    sessionStorage.setItem ('a1', 'c');
    sessionStorage.setItem ('a2', 'a');
    sessionStorage.setItem ('a3', 'd');
    sessionStorage.setItem ('a4', 'c');
}

$(document).ready(function (){
    //Hide All Questions
    $('.questionForm').hide();

    //Show First Question
    $('#q1').show();

    $('#q1 #submit').click(function (){
        $('.questionForm').hide();
        process('q1')
        $('#q2').fadeIn(300);
        return false;
    });

    $('#q2 #submit').click(function (){
        $('.questionForm').hide();
        process('q2')
        $('#q3').fadeIn(300);
        return false;
    });

    $('#q3 #submit').click(function (){
        $('.questionForm').hide();
        process('q3')
        $('#q4').fadeIn(300);
        return false;
    });

    $('#q4 #submit').click(function (){
        $('.questionForm').hide();
        process('q4')
        $('#results').fadeIn(300);
        return false;
    });

});

//Process the answers
function process(q) {
    if (q == "q1"){
        var submitted = $('input[name=q1]:checked').val();
        if (submitted == sessionStorage.a1) {
            score++;
        }
    }
    if (q == "q2"){
        var submitted = $('input[name=q2]:checked').val();
        if (submitted == sessionStorage.a2) {
            score++;
        }
    }
    if (q == "q3"){
        var submitted = $('input[name=q3]:checked').val();
        if (submitted == sessionStorage.a3) {
            score++;
        }
    }
    if (q == "q4"){
        var submitted = $('input[name=q4]:checked').val();
        if (submitted == sessionStorage.a4) {
            score++;
        }
        $('#results').html('<h3>Your Final Score Is: ' +score+ ' out of 4</h3><a href="index.html">Take Quiz Again?</a>');
    }
    return false;
}

//Add Event Listener
window.addEventListener ('load',init,false);