// write out the functions that need to be assigned to each button 
var gemTotal = 0; 
var wins = 0;
var losses = 0
var CPguess 
// place random number in div
$( document ).ready(function(){
CPguess = Math.floor((Math.random()*120)+19);

// Appending random number to the Computer pick on page  
    $('#computer-pick').text(CPguess);
});

// assign random number to buttons (hidden)
var mcCrystal = Math.floor((Math.random()*12)+1)
var emerald = Math.floor((Math.random()*12)+1)
var diamond = Math.floor((Math.random()*12)+1)
var ruby = Math.floor((Math.random()*12)+1)
var sapphire = Math.floor((Math.random()*12)+1)

// score

console.log(mcCrystal,emerald,diamond,ruby,sapphire)
console.log(CPguess)
// assign random number to buttons (displayed)
$('#button-1').on('click', function(){
    gemTotal = gemTotal + mcCrystal;
    console.log('New gem total = ' + gemTotal);
    console.log('You clicked a gem!!');
    $('#gem-worth').text(gemTotal); 
    if (CPguess == gemTotal){
        win();
    }
    else if (CPguess < gemTotal){
        loss();
    }   
});  
$('#button-2').on('click', function(){
    gemTotal = gemTotal + emerald;
    console.log('New gem total = ' + gemTotal);
    console.log('You clicked a gem!!');
    $('#gem-worth').text(gemTotal); 
        if (CPguess == gemTotal){
            win();
        }
        else if (CPguess < gemTotal){
            loss();
        }   
}); 
$('#button-3').on('click', function(){
    gemTotal = gemTotal + diamond;
    console.log('New gem total = ' + gemTotal);
    console.log('You clicked a gem!!');
    $('#gem-worth').text(gemTotal); 
        if (CPguess === gemTotal){
            win();
        }
        else if (CPguess < gemTotal){
            loss();
        }   
}); 
$('#button-4').on('click', function(){
    gemTotal = gemTotal + ruby;
    console.log('New gem total = ' + gemTotal);
    console.log('You clicked a gem!!');
    $('#gem-worth').text(gemTotal); 
        if (CPguess === gemTotal){
            win();
        }
        else if (CPguess < gemTotal){
            loss();
        }   
});  
$('#button-5').on('click', function(){
    gemTotal = gemTotal + sapphire;
    console.log('New gem total = ' + gemTotal);
    console.log('You clicked a gem!!');
    $('#gem-worth').text(gemTotal); 
        if (CPguess === gemTotal){
            win();
        }
        else if (CPguess < gemTotal){
            loss();
        }   
});  

// when score matches alert (you win!!!) or not alert (you lose!!!)
// record wins and losses
function win(){
    alert('You are a true Gem!!!');
      wins++; 
      $('#winResult').text(wins);
      restart();
    }
function loss(){
    alert ('One day you will be a true Gem collector, but not today');
        losses++;
        $('#lossResult').text(losses);
        restart()
}

// after win or loss restart game
function restart(){
    CPguess = Math.floor(Math.random()*100);
    console.log(CPguess)
    $('#computer-pick').text(CPguess);
    mcCrystal = Math.floor(Math.random()*20);
    emerald = Math.floor(Math.random()*20);
    diamond = Math.floor(Math.random()*20);
    ruby = Math.floor(Math.random()*20);
    gemTotal = 0;
    $('#gem-worth').text(gemTotal);
};






