/*
 * A class that renders the view of the notes to the user
 */
class View {

    //Grabs the form, input and ul elements from index.html
    constructor() {
        this.noteList = document.querySelector("#notes");
        this.newNoteForm = document.querySelector("#new-note-form");
        this. newNoteContent = document.querySelector("#new-note-content");
    }

    /*
     * Adds a onsubmit event to the form element that adds a new note to
     * localStorage then re-renders the view
     * (Model, HTMLFormElement, HTMLInputElement) => undifined
     * Model model - An instance of the MOdel class
     * HTMLInputElement newNoteContent - An instance of HTMLInputElement
     *HTMLFormElement newNoteForm - An instance of HTMLFormElement
     */
    addSubmitEvent(model, view, newNoteContent, newNoteForm) {
        newNoteForm.addEventListener("submit", function(e) {
            Controller.addNewNote(model, view, newNoteContent.value);
            newNoteContent.value = "";
            e.preventDefault();
        });
        this.render(model);
    }

    /*
     * Renders the notes that are stored in localStorage.notes
     */
    render(model) {
        let htmlStr = "";
        Controller.getNotes(model).forEach( function(note) {
            htmlStr += '<li class="note">' + note.content +
            '</li>';
        });
        this.noteList.innerHTML = htmlStr;
    }
}
