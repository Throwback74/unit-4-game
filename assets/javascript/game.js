$(document).ready(function() {

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

    console.log(SaphNum);
    console.log(RubyNum);
    console.log(EmerNum);
    console.log(DiaNum);

    var reset = function () {
        $("#cNumber").text(comNum);
        $("#scoreTotal").html(0);
    }
    
    reset();

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




})