const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
       notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv){
        notes.removeNote(argv.title)

    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read your notes',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

console.log(yargs.argv)
















//*************From prev lesson ***************/
// console.log(process.argv)
// const command = process.argv[2]

// if (command === 'add'){
//     console.log('Adding Note!')
// } else if ( command === 'remove'){
//     console.log('Removing Note!')
// }




// const msg = getNotes()
// console.log(msg)


// console.log(chalk.blue.bold.inverse('Success!'))

// console.log(process.argv[2])










// const validator = require('validator')
// console.log(validator.isURL('jeromesus'))










// const add = require('./utils.js')

// const sum = add(4,-2)

// console.log(sum)



// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My Name is Jerome.')

// fs.appendFileSync('notes.txt', '   I live in Danao.')