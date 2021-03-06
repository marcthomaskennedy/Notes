/*
 *  A simple class that is the hub between the Model and View classes.
 * Author: Marc Kennedy
 */
class Controller {

    /*
     * Gets all the notes from localStorage
     * (Object) => Array
     * Object model - An instance of the Model class
     * Returns an Array of notes from localStorage.notes
     */
    static getNotes(model) {
        return model.getAllNotes();
    }

    /*
     * Adds a note to localStorage
     * (Model, View, String) throws TypeError => undefined
     * Model model - An instance of the Model class
     * View view - An instance of the View class
     * String note - The note text to add to localStorage
     * Modifies localStorage.note
     */
     static addNewNote(model, view, note) {
         if (!(note.constructor === String)) {
            throw new TypeError("note argument must be of type String");
         }
         model.add({
             content: note
         });
         view.render(model);
     }
}
