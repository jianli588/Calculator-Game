

$("#addition_button_toggle").on("click", () => collapseAllOpenContent(0));
$("#subtraction_button_toggle").on("click", () => collapseAllOpenContent(1));
$("#multiplication_button_toggle").on("click", () => collapseAllOpenContent(2));
$("#division_button_toggle").on("click", () => collapseAllOpenContent(3));



var collapsible = [];
collapsible[0]= document.getElementById("collapse-btn-1");
collapsible[1]= document.getElementById("collapse-btn-2");
collapsible[2]= document.getElementById("collapse-btn-3");
collapsible[3]= document.getElementById("collapse-btn-4");



  function collapseAllOpenContent(num) {

    for(let i=0; i<collapsible.length; i++){ 
      if(num != i){ 
        collapsible[i].classList.remove('show');
      }

      console.log(collapsible[i]);

    }
    

  }