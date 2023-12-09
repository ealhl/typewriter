const sentence = "hello there from lighthouse labs";
const sentenceTest = "ahshddgfhfjgjgkgk gjjf";

let time = -50;
for (const char of sentenceTest) {
  setTimeout(() => {
    // print the char here
    time += 50;
    process.stdout.write(char);
  }, time); // <= 1s delay to make it noticeable. Can dial it down later.
}
