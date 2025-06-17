(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()




  document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("searchInput").value.toLowerCase();
    const listings = document.querySelectorAll(".listing-card");

    listings.forEach(card => {
      const text = card.querySelector(".card-text").textContent.toLowerCase();

      if (text.includes(query)) {
        card.parentElement.style.display = "block";  // <a> element
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });

    let taxtSwitch = document.getElementById("switchCheckDefault");
    taxtSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("taxInfo")
    for(info of taxInfo){
       if(info.style.display != "inline"){
        info.style.display = "inline";
       }else{
        info.style.display = "none";
       }
    }
    }) 
