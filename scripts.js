function getP(){

  return parseFloat(document.getElementById('principal').value);
}

function getG(){

  return parseFloat(document.getElementById('get').value);
}

function getRewindTime()
{
  return parseFloat(document.getElementById('rewindTime').value);

}

function sellOff(P,G){

  var so = (1-((1000-P)/G) % 1) %1;
  so = so * G;
  document.getElementById('selloff').innerHTML = "Sell Off amount:" +so.toFixed(2);
  return so;
  }

  function sellOffRemainder(P,so){

  document.getElementById('afterselloff').innerHTML = "Amount after selloff: " +(P-so).toFixed(2);
  }

  function rewindsLeft(P,G,a)
  {
    rl = (1000-(P-a))/G;
    document.getElementById('rewindsLeft').innerHTML = "Rewinds Left: "+ rl.toFixed(1);
    return rl;
  }

function timeLeft(rl, T){
  document.getElementById('timeLeft').innerHTML = "Time Left: "+ (rl*T/60).toFixed(2)+" h";

}

  function allRun(){
    var P = getP();
    var G = getG();
    var T = getRewindTime();
    var so = sellOff(P,G);
    sellOffRemainder(P,so);
    var rl = rewindsLeft(P,G,so);
    timeLeft(rl, T);
  
  }