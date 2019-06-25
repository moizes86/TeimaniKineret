

//  ===== VARIABLES =====
let 
modal = document.querySelector(".my-modal");
footnotesArr = document.querySelectorAll("#bibliography ol li");      // Array of all footnotes
modalNote = document.querySelector(".my-modal-content p");            // Content of footnote in modal
modalGoToBtn = document.querySelector("#modal-go-to-btn");
closeBtn = document.querySelector(".close");
backBtn = null;
backBtnOffset = null;
index = null;
noteContent = null;
currNote = null;                                                                // note = <li> id + index
isBiblioCollapsed = document.querySelector("#collapsePart6");     // Is bibliography section collapsed?
isFootnoteBold = null;


// Keep the back-button HTML in a variable for reusability
const backBtnHTML = `<div id="backBtnDiv" class="d-flex justify-content-center">    
                        <br> <button class="butn">
                            <a href="javascript:history.back()">חזור</a>
                        </button>
                    </div>`;



// ADD ID's TO FOOTNOTES
footnotesArr.forEach((e, i) => {
  e.setAttribute("id", ("note" + i));
});

// CLICK on a FOOTENOTE OPENS MODAL with RESPECTIVE CONTENT 
$(".article div p span").click((e) => {
  e.stopPropagation();
  isBiblioCollapsed.classList.value = "show";                         // open bibliography section so goToBtn would work
  clearNotes();                                             // Previous Note had been clicked? clear it and make room for a new one!
  index = parseInt($(e.target).html());                    // get value from clicked footnote
  currNote = footnotesArr[index - 1];
  noteContent = footnotesArr[index - 1].innerHTML;          // get the <p> content of note clicked
  modalNote.innerHTML = `${index}. ${noteContent}`;         // note's content appears in modal
  modalGoToBtn.setAttribute("href", "#note" + (index - 1));
  modal.style.display = "block";
});


window.onclick = (e) => {
  if (e.target == modal) {              // Click anywhere outside of the modal closes it
    modal.style.display = "none";
  }

  else if (e.target == modalGoToBtn) {
    modal.style.display = "none";
    isFootnoteBold = currNote.classList.value;
    currNote.classList.add("bold");
    insretBackBtn();
  }

  else if (e.target == closeBtn) {                          // click on closeBtn closes bibliography section
    isBiblioCollapsed.value = "collapse";
    modal.style.display = "none";
  }

  else if (e.target == backBtn) {
    removeBackBtn();
    removeBold();
  }
};

insretBackBtn = () => {
  footnotesArr[(index - 1)].innerHTML += backBtnHTML;
  backBtn = document.querySelector(".butn a");
}

removeBackBtn = () => {
  document.querySelector("#backBtnDiv") !== null?
  document.querySelector("#backBtnDiv").remove():
  null;
}

removeBold = () => {
  footnotesArr[(index - 1)].classList.remove("bold");
}

clearNotes = () =>{
  currNote !== null?
  removeBold()& removeBackBtn() :
  null;
}