$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var score = 0;

    var comNum = function () {
        console.log(Math.floor(Math.random() * (120-19)) + 19);
    }
    
    var SaphNum = function () {
        console.log(Math.floor(Math.random() * (12-1)) + 1);
    }

    var RubyNum = function () {
        console.log(Math.floor(Math.random() * (12-1)) + 1);
    }

    var EmerNum = function () {
        console.log(Math.floor(Math.random() * (12-1)) + 1);
    }

    var DiaNum = function () {
        console.log(Math.floor(Math.random() * (12-1)) + 1);
    }

    var reset = function () {
        $("#cNumber").html(0);
        $("#scoreTotal").html(0);
    }


})