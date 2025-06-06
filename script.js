const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

addBtn.addEventListener("click", () => addNewNote());

function  addNewNote(text = "") {
    const note = document.createElement("div");

    note.classList.add("note");

    note.innerHTML = `
        <div class= "tools">
            <button class= "edit">

            </button>

            <button class= "delete">

            </button>
    
    `
}
