const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created!');
    notes.displayNote(note);
  } else {
    console.log('Note title taken');
  }

} else if (command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)...`);
  allNotes.forEach((note) => {
    notes.displayNote(note);
  });

} else if (command === 'read'){
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found!');
    notes.displayNote(note);
  } else {
    console.log('Note not found');
  }

} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = (noteRemoved) ? `Note successfully removed!` : `Title not found!`;
  console.log(message);

} else {
  console.log('Command not recognized');
}
