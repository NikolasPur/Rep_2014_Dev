/**
 * Created by Len1 on 10/6/2015.
 */

import mongoose from 'mongoose';

/* create new chema */

const Schema = mongoose.Schema;
/*we have 4 parameters : title, texxt of note, color and creation date*/
const NoteSchema = new Schema({
    title:      {type: String},
    text:       {type: String,requred:true}, /*requred means this paramter is mandatory.*/
    color:      {type: String},
    cretedAt:   {type: Date}
});

/* Based on our scheme let's create model */
const Note = mongoose.model('Note', NoteSchema);
