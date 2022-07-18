
    const playButton=document.getElementsByClassName("play")[0];
    const lapButton=document.getElementsByClassName("lap")[0];
    const resetButton=document.getElementsByClassName("reset")[0];
    const clearButton=document.getElementsByClassName("lap-clear-button")[0];
    const minute=document.getElementsByClassName("min")[0];
    const second=document.getElementsByClassName("sec")[0];
    const centiSecond=document.getElementsByClassName("msec")[0];
    const laps=document.getElementsByClassName("laps")[0];
    

    let PlayOn=false;
    let secCounter=0;
    let sec;
    let centiCounter=0;
    let centiSec;
    let min;
    let minCounter=0;
    let ResetOn=false;
    let lapItem=0;

    const toggleButton=()=> {
      lapButton.classList.remove("hidden");
      resetButton.classList.remove("hidden");
    }

    const play= ()=>{
      if(!PlayOn && !ResetOn){
        
        playButton.innerHTML='Pause';
        min=setInterval(()=>{
          minute.innerHTML=`${++minCounter} : `;
        },60*1000);
        sec=setInterval(()=>{
          if(secCounter===60){
            secCounter=0;
          }
          second.innerHTML=`&nbsp;${++secCounter} : `;
        },1000);

        centiSec=setInterval(()=>{
          if(centiCounter===100){
            centiCounter=0;
          }
          centiSecond.innerHTML=`&nbsp;${++centiCounter}`;
        },10)
        PlayOn=true;
        ResetOn=true;
      }
      else{
        
        
        playButton.innerHTML='Play';
        clearInterval(sec);
        clearInterval(min);
        clearInterval(centiSec);
        PlayOn=false;
        ResetOn=false;
      }
      toggleButton();
    }


    const reset =()=>{
      ResetOn=true;
       play();
       clearAll();
      lapButton.classList.add("hidden");
      resetButton.classList.add("hidden");
      second.innerHTML=`&nbsp;00 :`;
      minute.innerHTML=`00 :`;
      centiSecond.innerHTML=`&nbsp;00`;
    }

    const lap=()=>{
      const li=document.createElement("li");
      const number=document.createElement("span");
      const timeStamp=document.createElement("span");

      li.setAttribute("class","lap-item");
      number.setAttribute("class","number");
      timeStamp.setAttribute("class","time-stamp");

      number.innerText=`${++lapItem}.`;
      timeStamp.innerHTML=`${minCounter} : ${secCounter} : ${centiCounter}` ;

      li.append(number,timeStamp);
      laps.append(li);

      clearButton.classList.remove("hidden");
    }

    const clearAll=()=>{
      laps.innerHTML='';
      laps.append(clearButton);
      lapItem=0;
      clearButton.classList.add("hidden");
    }

    playButton.addEventListener("click",play);
    resetButton.addEventListener("click",reset);
    lapButton.addEventListener("click",lap);
    clearButton.addEventListener("click",clearAll);
