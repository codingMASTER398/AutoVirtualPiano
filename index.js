var robot = require("robotjs");
robot.setKeyboardDelay(0)
var map = {};

map["C2"] = "1"
map["Db2"] = "!"
map["D2"] = "2"
map["Eb2"] = "@"
map["E2"] = "3"
map["F2"] = "4"
map["Gb2"] = "$"
map["G2"] = "5"
map["Ab2"] = "%"
map["A2"] = "6"
map["Bb2"] = "^"
map["B2"] = "7"

map["C3"] = "8"
map["Db3"] = "*"
map["D3"] = "9"
map["Eb3"] = "("
map["E3"] = "0"
map["F3"] = "q"
map["Gb3"] = "Q"
map["G3"] = "w"
map["Ab3"] = "W"
map["A3"] = "e"
map["Bb3"] = "E"
map["B3"] = "r"

map["C4"] = "r"
map["Db4"] = "T"
map["D4"] = "y"
map["Eb4"] = "Y"
map["E4"] = "0"
map["F4"] = "i"
map["Gb4"] = "I"
map["G4"] = "o"
map["Ab4"] = "O"
map["A4"] = "p"
map["Bb4"] = "P"
map["B4"] = "a"

map["C5"] = "s"
map["Db5"] = "S"
map["D5"] = "d"
map["Eb5"] = "D"
map["E5"] = "f"
map["F5"] = "g"
map["Gb5"] = "G"
map["G5"] = "h"
map["Ab5"] = "H"
map["A5"] = "j"
map["Bb5"] = "J"
map["B5"] = "k"

map["C6"] = "l"
map["Db6"] = "L"
map["D6"] = "z"
map["Eb6"] = "Z"
map["E6"] = "x"
map["F6"] = "c"
map["Gb6"] = "C"
map["G6"] = "v"
map["Ab6"] = "V"
map["A6"] = "b"
map["Bb6"] = "B"
map["B6"] = "n"

map["C7"] = "m"

var MidiPlayer = require('midi-player-js');
const beeper = require('beeper');

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

var notes = []

// Initialize player and register event handler
var Player = new MidiPlayer.Player(async function(event) {

    if(event.name == "Note on"){
        if(map[event.noteName]){
            console.log("NOTE")
            robot.keyTap(map[event.noteName])
            notes.push([map[event.noteName],event.tick])
        }
    }
});

process.on('SIGINT',()=>{
    process.exit()
})

// Load a MIDI file
Player.loadFile('./midi.mid');

console.log(Player.tempo)

setTimeout(() => {
    console.log(Player.tempo)
    Player.tempo = 1000
    Player.play();
}, 5000);

//48-72