$(function() {
    const model = new Model();
    const view = new View();
    view.addSubmitEvent(
        model,
        view,
        view.newNoteContent,
        view.newNoteForm
    );
});
