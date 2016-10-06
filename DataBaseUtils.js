/* Created by Nikolas 06.05.2015 */

/* Connect to mangoos and to model we created "Note" we created in note.js */

import mongoose from 'mongoose';
import 'C:/Users/Len1/WebstormProjects/note-app/server/models/Note';

const Note = mongoose.model('Note');
// to connetc to DB implement the following

export function setUpConnection(){
    mongoose.connect('mongodb://localhost/notes');
}

//implemet function to get all db content from Note
export function listNotes(){
    return Note.find();
}

//implenet function to create an new note

export function createNote(data){
    const note = new Note({
        title: data.title,
        text:  data.text,
        color: data.color,
        cretedAt: new Date()
    })
    return note.save();// save in db the new note
}

export function deleteNote(id){
    return Note.findById(id).remove();
}