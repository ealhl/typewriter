const sentence = "hello there from lighthouse labs";
const sentenceTest = "hello there from lighthouse labs";

let time = 0;
for (const char of sentenceTest) {
  setTimeout(() => {
    // print the char here
    time += 50;
    process.stdout.write(char);
  }, time); // <= 1s delay to make it noticeable. Can dial it down later.
}
setTimeout(() => {
  // print the char here
  console.log("\n");
}, time);
