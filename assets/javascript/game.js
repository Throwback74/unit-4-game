// $(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var score = 0;

    var comNum = Math.floor(Math.random() * (120-19)) + 19;
    console.log("Computer Number: " + comNum);


    // var comNum = function () {
    //     console.log(Math.floor(Math.random() * (120-19)) + 19);
    // }
    // comPick = comNum()

    //var yourPick = $(this).val();
    //       console.log("Your Pick: " + yourPick);
    // var assignVal = function () {
        var genNum = function(min,max,cnt) {
            var arr = [];
            for(var i = min,j=0; i <= max;j++,i++)
            arr[j] = i
                arr.sort(function() {
                return Math.floor((Math.random() * 3 ) - 1)
            });
            
            return arr.splice(0,cnt)
        };
        console.log(genNum(1,12,4));
        
        var randNum = genNum(1,12,4);
        var SaphNum = randNum[0];
        var RubyNum = randNum[1];
        var EmerNum = randNum[2];
        var DiaNum = randNum [3];
        
        console.log(randNum);
        console.log(SaphNum);
        console.log(RubyNum);
        console.log(EmerNum);
        console.log(DiaNum);
    // };
    // console.log(assignVal());

    var reset = function () {
        console.log("Computer Number: " + comNum);
        $("#cNumber").text(comNum);
        var score = 0
        $("#scoreTotal").html(score);
        // console.log(genNum(1,12,4));
        $(".btn1").attr("value", assignVal.SaphNum);
        $(".btn2").val(assignVal.RubyNum);
        $(".btn3").val(assignVal.EmerNum);
        $(".btn4").val(assignVal.DiaNum);
    }
    
    reset();

    $('.crystal-btn').on("click", function(){
        var crystalValue = parseInt($(this).val());
        score += crystalValue;
        console.log(score);
        $("#scoreTotal").html(score);
        if (score == comNum) {
            alert("You win!");
            wins++;
            $("#wins").html("Wins: " + wins);
            var score = 0;
            reset();
        }  
        else if (score >= comNum) {
            alert("You lose!!");
            losses++;
            $("#losses").html("Losses: " + losses);
            var score = 0;
            reset();
        }
    });


    // $("#btn1").click(function() {
    //     $("#scoreTotal").html(score + SaphNum);
    // })

    // $("#btn2").click(function() {
    //     $("#scoreTotal").html(score + RubyNum);
    // })

    // $("#btn3").click(function() {
    //     $("#scoreTotal").html(score + EmerNum);
    // })

    // $("#btn4").click(function() {
    //     $("#scoreTotal").html(score + DiaNum);
    // })
    // var SaphNum = function () {
    //     console.log(Math.floor(Math.random() * (12-1)) + 1);
    // }
    // SaphNum()
    // var RubyNum = function () {
    //     console.log(Math.floor(Math.random() * (12-1)) + 1);
    // }
    // RubyNum()
    // var EmerNum = function () {
    //     console.log(Math.floor(Math.random() * (12-1)) + 1);
    // }
    // EmerNum()
    // var DiaNum = function () {
    //     console.log(Math.floor(Math.random() * (12-1)) + 1);
    // }
    // DiaNum()




