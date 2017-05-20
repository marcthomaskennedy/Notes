/*
 * A simple class that stores some notes in localStorage.
 * Example:
 *    [
 *        {content: "Remember to book hair cut appointment"}
 *        {content: "Return Arnold Schwarzenneggers call"}
 *        {content: "Study JavaScript to become a legend!"}
 *    ]
 */
class Model {
    // Creates localStorage.notes
    constructor() {
        if (!localStorage.notes) {
            localStorage.notes = JSON.stringify([]);
        }
    }

    /*
     * Adds a new note to localStorage.notes
     * (Object) throws TypeError => undefined
     * Object obj - The note object to add
     * Example call:
     *     add({content: "Hello, world!"});
     */
    add(obj) {
        if (!(obj.constructor === Object)) {
            throw new TypeError("obj must be of type Object");
        }
        const data = JSON.parse(localStorage.notes);
        data.push(obj);
        localStorage.notes = JSON.stringify(data);
    }

    /*
     * Gets all of the notes from localStorage
     * () => Array
     * Returns an Array of note Objects
     * Example:
     *    getAllNotes()
     *    =>  [
     *            {content: "Remember to book hair cut appointment"}
     *            {content: "Return Arnold Schwarzenneggers call"}
     *            {content: "Study JavaScript to become a legend!"}
     *        ]
     */
     getAllNotes() {
         return JSON.parse(localStorage.notes);
     }
}
