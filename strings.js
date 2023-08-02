// string methods
const song = document.querySelector('h2')
let note = song.textContent
const lists = document.querySelectorAll('ol li')

//length of string
lists[0].innerText = `String length: ${note.length}`

//uppercase
lists[1].innerText = `Change to uppercase: ${note.toUpperCase()}`

//lowercase
lists[2].innerText = `Change to lowercase: ${note.toLowerCase()}`

//indexOf
lists[3].innerText = `dog index is: ${note.indexOf('dog')}`
lists[4].innerText = `dogs index is: ${note.indexOf('dogs')}`
lists[5].innerText = `Dog index is: ${note.indexOf('Dog')}`
lists[6].innerText = `First index of 'e' is: ${note.indexOf('e')}`
lists[8].innerText = `Next index of 'e' is: ${note.indexOf('e', 3)}`
lists[9].innerText = `Next index of 'e' is: ${note.indexOf('e', 29)}`

//lastIndexOf
lists[7].innerText = `The last index of "e" is: ${note.lastIndexOf('e')}`

// split
lists[10].innerHTML = `Remove all the spaces on this text: [${note.split(' ')}]`

// slice
lists[11].innerHTML = `"${note.slice(note.indexOf('q'),note.indexOf('j'))}"`

// replace
lists[12].innerText = `Replace quick with slow: ${note.replace('quick', 'slow')}`

// replaceAll
lists[13].innerText = `Replace all 'o' with 'x': ${note.replaceAll('o', 'x')}`

// charAt
lists[14].innerText = `The character at 20 is: ${note.charAt(20)}`

// repeat
lists[15].innerHTML = `Repeat 'fox' 4x: ${'fox '.repeat(4)}`
lists[16].innerHTML = `Repeat 'quick' 4x: ${note.slice(note.indexOf('q'), note.indexOf('k')+1).repeat(4)}`

// includes
lists[17].innerHTML = `Does our note contain fox: ${note.includes('fox')}`
lists[18].innerHTML = `Does our note contain goat: ${note.includes('goat')}`

//startsWith
lists[19].innerText = `Does it start with 'The': ${note.startsWith('The')} `

//endsWith
lists[20].innerText = `Does it end with 'dog': ${note.endsWith('dog')} `