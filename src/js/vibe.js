const vibes = [
  '...and you are awesome!',
  '...have a wonderful day!',
  '...and you have got this!',
  '...and so is this puppy!',
];

//choose random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

//display a good vibe
document.querySelector('.vibe').append(vibe);
