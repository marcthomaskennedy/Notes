/*
 *  A simple class the is the hub between the Model and View classes.
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
}
