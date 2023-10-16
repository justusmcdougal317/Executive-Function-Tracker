document.addEventListener("DOMContentLoaded", function () {
    
    function updateHourBlocks() {
      const now = new Date();
      const currentHour = now.getHours();
  
     
      for (let hour = 9; hour <= 17; hour++) {
        const timeBlock = document.getElementById(`hour-${hour}`);
        const textArea = timeBlock.querySelector("textarea");
  
        if (hour < currentHour) {
         
          timeBlock.classList.add("past");
          textArea.setAttribute("disabled", "disabled");
        } else if (hour === currentHour) {
          
          timeBlock.classList.add("present");
        } else {
         
          timeBlock.classList.remove("past");
        }
      }
    }
  
   
    function saveTextToLocalStorage() {
      const now = new Date();
      const currentHour = now.getHours();
  
      for (let hour = 9; hour <= 17; hour++) {
        const timeBlock = document.getElementById(`hour-${hour}`);
        const textArea = timeBlock.querySelector("textarea");
        localStorage.setItem(`hour-${hour}`, textArea.value);
      }
    }
  
    
    function loadTextFromLocalStorage() {
      for (let hour = 9; hour <= 17; hour++) {
        const timeBlock = document.getElementById(`hour-${hour}`);
        const textArea = timeBlock.querySelector("textarea");
        textArea.value = localStorage.getItem(`hour-${hour}`);
      }
    }
  
    
    updateHourBlocks();
    loadTextFromLocalStorage();
  
  
    setInterval(updateHourBlocks, 60000);
  
    
    const saveButtons = document.querySelectorAll(".saveBtn");
    saveButtons.forEach((button) => {
      button.addEventListener("click", saveTextToLocalStorage);
    });
  });