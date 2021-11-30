const { profile } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profileText = ""
rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  profileText += `Hello, my name is ${answer}! And I would like to introduce myself :))`
  rl.question('What\'s an activity you like doing? ', (answer) => {
    profileText += ` I like ${answer} whenever I have free time.`
    rl.question('What do you listen to while doing that? ', (answer) => {
      profileText += ` And I enjoy listening to ${answer} as well.`
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        profileText += ` I really LOVE having ${answer}.`
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          profileText += ` And I cannot live a single day without ${answer}.`
          rl.question('Which sport is your absolute favourite?', (answer) => {
            profileText += ` Among all kinds of sports I like ${answer} most of all.`
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              profileText += ` I do not like boasting, but my real superpower is ${answer}. This is what makes me absolutely special!`
              console.log(profileText);
              rl.close();
            });
          });
        });
      });
    });
  });
});