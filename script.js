
function about(){
  if (document.getElementById("faq-bar").style.display=="none"){
    document.getElementById("faq-bar").style.display="flex";
    document.getElementById("prompts-bar").style.display="none";
    document.getElementById("screenshots-bar").style.display="none";
    document.getElementById("app").style.display="none";
      document.getElementById("qc").style.display="none";
    document.getElementById("features").style.display="none";
  }
  else{
  document.getElementById("faq-bar").style.display="none";
  }
}

function prompts(){
  if (document.getElementById("prompts-bar").style.display=="none"){
    document.getElementById("faq-bar").style.display="none";
    document.getElementById("prompts-bar").style.display="flex";
    document.getElementById("screenshots-bar").style.display="none";
     document.getElementById("app").style.display="none";
      document.getElementById("qc").style.display="none";
    document.getElementById("features").style.display="none";
  }
  else{
  document.getElementById("prompts-bar").style.display="none";
  }
}


function screenshots(){
  if (document.getElementById("screenshots-bar").style.display=="none"){
    document.getElementById("faq-bar").style.display="none";
    document.getElementById("prompts-bar").style.display="none";
    document.getElementById("screenshots-bar").style.display="flex";
     document.getElementById("app").style.display="none";
    document.getElementById("features").style.display="none";
      document.getElementById("qc").style.display="none";
  }
  else{
  document.getElementById("screenshots-bar").style.display="none";
  }
}


function app(){    
  if( document.getElementById("app").style.display=="none"){
     document.getElementById("app").style.display="flex";
     document.getElementById("faq-bar").style.display="none";
    document.getElementById("prompts-bar").style.display="none";
    document.getElementById("screenshots-bar").style.display="none";
    document.getElementById("qc").style.display="none";
    document.getElementById("features").style.display="none";
  }
   else{
      document.getElementById("app").style.display="none"
   }
  

}


function qc(){    
  if( document.getElementById("qc").style.display=="none"){
     document.getElementById("qc").style.display="flex";
     document.getElementById("faq-bar").style.display="none";
    document.getElementById("prompts-bar").style.display="none";
    document.getElementById("screenshots-bar").style.display="none";
    document.getElementById("app").style.display="none"
    document.getElementById("features").style.display="none";
  }
   else{
      document.getElementById("qc").style.display="none"
   }
  

}


function features(){    
  if( document.getElementById("features").style.display=="none"){
     document.getElementById("features").style.display="flex";
     document.getElementById("faq-bar").style.display="none";
    document.getElementById("prompts-bar").style.display="none";
    document.getElementById("screenshots-bar").style.display="none";
    document.getElementById("app").style.display="none"
    document.getElementById("qc").style.display="none"
  }
   else{
      document.getElementById("features").style.display="none"
   }
  

}

