/*
 * A class that renders the view of the notes to the user
 */
class View {

    //Grabs the form, input and ul elements from index.html
    constructor() {
        this.noteList = document.querySelector("#notes");
        this.newNoteForm = document.querySelector("#new-note-form");
        this. newNoteContent = document.querySelector("#new-note-content");
        console.log("" + this.newNoteForm);
        console.log("" + this.newNoteContent);
    }

    /*
     * Adds a onsubmit event to the form element that adds a new note to
     * localStorage then re-renders the view
     * (Model, HTMLFormElement, HTMLInputElement) => undifined
     * Model model - An instance of the MOdel class
     * HTMLInputElement newNoteContent - An instance of HTMLInputElement
     *HTMLFormElement newNoteForm - An instance of HTMLFormElement
     */
    addSubmitEvent(model, newNoteContent, newNoteForm) {
        newNoteForm.addEventListener("submit", function(e) {
            Controller.addNewNote(model, view, newNoteContent.value);
            newNoteContent.value("");
            e.preventDefault();
        });
        this.render();
    }

    render() {

    }
}
