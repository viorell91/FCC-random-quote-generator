//collection of quotes
var quotes = {
  "― Dr. Seuss":"Don't cry because it's over, smile because it happened.",
  "― Marilyn Monroe":"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "― Oscar Wilde":"Be yourself; everyone else is already taken.",
  "― Albert Einstein":"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "― Bernard M. Baruch":"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  "― William W. Purkey":"You've gotta dance like there's nobody watching,</br>Love like you'll never be hurt,</br>Sing like there's nobody listening,</br>And live like it's heaven on earth.",
  "― Frank Zappa":"So many books, so little time.",
  "― Marcus Tullius Cicero":"A room without books is like a body without a soul.",
  "― Dr. Seuss":"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "― Mae West":"You only live once, but if you do it right, once is enough.",
  "― Mahatma Gandhi":"Be the change that you wish to see in the world.",
  "― Robert Frost":"In three words I can sum up everything I've learned about life: it goes on.",
  "― J.K. Rowling":"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
  "― C.S. Lewis":"Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . . .",
  "― Albert Camus":"Don’t walk in front of me… I may not follow </br>Don’t walk behind me… I may not lead </br>Walk beside me… just be my friend",
  "― Eleanor Roosevelt":"No one can make you feel inferior without your consent.",
  "― Mark Twain":"If you tell the truth, you don't have to remember anything.",
  "― Elbert Hubbard":"A friend is someone who knows all about you and still loves you.",
  "― Maya Angelou":"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  "― Oscar Wilde":"Always forgive your enemies; nothing annoys them so much.",
  "― Mahatma Gandhi":"Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "― Oscar Wilde":"To live is the rarest thing in the world. Most people exist, that is all.",
  "― Martin Luther King Jr.":"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  "― Oscar Wilde":"I am so clever that sometimes I don't understand a single word of what I am saying.",
  "― Friedrich Nietzsche":"Without music, life would be a mistake.",
  "― Ralph Waldo Emerson":"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "― Narcotics Anonymous":"Insanity is doing the same thing, over and over again, but expecting different results.",
  "― Marilyn Monroe":"I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
  "― Stephen Chbosky":"We accept the love we think we deserve.",
  "― André Gide":"It is better to be hated for what you are than to be loved for what you are not.",
  "― Marilyn Monroe":"Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring."
  
};
//background gradients
var gradients = {
  "#f46b45":"#eea849",
  "#c21500":"#ffc500",
  "#EFEFBB":"#D4D3DD",
  "#FFEEEE":"#DDEFBB",
  "#666600":"#999966",
  "#DE6262":"#FFB88C",
  "#e9d362":"#333333",
  "#d53369":"#cbad6d",
  "#a73737":"#7a2828",
  "#f857a6":"#ff5858",
  "#4b6cb7":"#182848",
  "#FC354C":"#0ABFBC",
  "#414d0b":"#727a17",
  "#e43a15":"#e65245",
  "#C04848":"#480048",
  "#5f2c82":"#49a09d",
  "#EC6F66":"#F3A183",
  "#7474BF":"#348AC7",
  "#ECE9E6":"#FFFFFF",
  "#DAE2F8":"#D6A4A4",
  "#ED4264":"#FFEDBC",
  "#DC2424":"#4A569D",
  "#24C6DC":"#514A9D",
  "#283048":"#859398",
  "#3D7EAA":"#FFE47A",
  "#1CD8D2":"#93EDC7",
  "#232526":"#414345",
  "#757F9A":"#D7DDE8",
  "#5C258D":"#4389A2",
  "#134E5E":"#71B280",
  "#2BC0E4":"#EAECC6"
};
//-----------------------
//FUNCTIONALITY
//-----------------------
//next quote button
$(document).ready(function(){
  $(".next_btn").on("click", function(){
    //generate a random number to get quotes randomly 
    randomNum = Math.floor(Math.random()*31);
    if(Object.keys(quotes).hasOwnProperty([randomNum])){
      $("#author").html("</br>"+Object.keys(quotes)[randomNum]);
      $("#quote").html(Object.values(quotes)[randomNum]);
    }
    else{
      randomNum = Math.floor(Math.random()*31);
    }
    //change background gradient
    $(".main").css("background","linear-gradient(to left,"+ Object.keys(gradients)[randomNum] + ","+ Object.values(gradients)[randomNum]+")");
  });
  //post tweet current quote 
  $(".tweet_btn").on("click",function(){ 
    window.open("https://twitter.com/share?url=<yoururl>&text="+Object.values(quotes)[randomNum].replace(/<(?:.|\n)*?>/gm, '')+" "+Object.keys(quotes)[randomNum]);
  });
});