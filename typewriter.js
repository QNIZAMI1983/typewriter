const sentence = "hello there from lighthouse labs";
let index = 0;

const interval = setInterval(() => {
  if (index < sentence.length) {
    process.stdout.write(sentence[index]);
    index++;
  } else {
    clearInterval(interval); // Stop the interval when all characters are printed
    console.log();
  }
}, 100);