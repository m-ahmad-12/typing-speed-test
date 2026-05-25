let passage=document.querySelector(".passage");
let typingArea=document.querySelector(".typingArea");
let wpmdiv=document.querySelector(".WPM");
let accuracydiv=document.querySelector(".accuracy");
let reset=document.querySelector(".reset");
let passages=[
"The sun sets behind the quiet mountains",
"I drink coffee while reading a good book",
"Fast typing improves accuracy and saves time",
"Small habits can create big changes every day"
];
let startTime = null;
let timerStarted=false;
let currentPassage=Math.floor(Math.random() * 4);
passage.innerHTML=passages[currentPassage];
typingArea.addEventListener("input",function(){
  if(timerStarted === false){
    startTime = Date.now();
    timerStarted = true
}
if(typingArea.value.length==passages[currentPassage].length){
   let endtime=Date.now();
let timeTaken = (endtime - startTime) / 1000 / 60;
   let wordCount = passages[currentPassage].split(" ").length;
let wpm = Math.round(wordCount / timeTaken);
wpmdiv.innerHTML=`WPM:${wpm}`;
let match=0
for(let i=0;i<typingArea.value.length;i++){
   if(typingArea.value.charAt(i)==passages[currentPassage].charAt(i)){
  match+=1;
   }

  
}
 let accuracy = Math.round((match/typingArea.value.length) * 100);
   accuracydiv.innerHTML=`Accuracy:${accuracy}`;
}

});
reset.onclick=function(){
typingArea.value="";
wpmdiv.innerHTML=`WPM:${0}`;
accuracydiv.innerHTML=`Accuracy:${0}`;
currentPassage = Math.floor(Math.random() * 4)
passage.innerHTML = passages[currentPassage]
timerStarted = false
startTime = null
};

