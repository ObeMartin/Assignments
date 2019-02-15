
let my_song; 1 [
    {note: "A", starts_at: 0, lasts: 1 },
    {note: "B", starts_at: 1, lasts: 1},
    { note:"E", starts_at: 2, lasts: 2 },
    { note:"B", starts_at: 2, lasts: 2 },

    {Bar: '1', Beat: '1', 
    play: 'A', //for one beat
    Bar: '1', Beat: '2', 
    play: 'B', // for one beat
    Bar: '1', Beat: '3', 
    play: 'E' +'B'} //for two beats
    
];

  let my_song; 2 [
    {note: "C#", starts_at: 0, lasts: 1 },
    {note: "G#", starts_at: 1, lasts: 1},
    {note: "F#", starts_at: 2, lasts: 1},
    { note:"D", starts_at: 3, lasts: 1 },

    {Bar: '1', Beat: '1', 
    play: 'C#', //for one beat
    Bar: '1', Beat: '2', 
    play: 'G#', // for one beat
    Bar: '1', Beat: '3', 
    play: 'F#', //for one beat
    Bar: '1', Beat: '4', 
    play: 'D'} // for one beat
];



 let my_song; 3 [
    {note: "D", starts_at: 0, lasts: 1 },
    {note: "C#", starts_at: 1, lasts: 1},
    {note: "E", starts_at: 2, lasts: 1},
    { note:"G", starts_at: 3, lasts: 1 },
    {note: "G#", starts_at: 0, lasts: 1 },
    {note: "A", starts_at: 1, lasts: 1},
    {note: "G", starts_at: 2, lasts: 1},
    { note:"F#", starts_at: 3, lasts: 1 },
    
    {Bar: '1', Beat: '1', 
    play: 'A', 
    play: 'C#',
    play: 'E', //an A chord and hold it for 8 beat as you add;
    Bar:'1', Beat: '3',
    play: 'G', //one beat
    Bar: '1', beat: '4',
    play: 'G#', //for one beat
    Bar: '2', Beat: '1',
    play: 'A' }// for the rest of the measure
];
   console.log( my_song  );

    