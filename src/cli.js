import readlinesync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlinesync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

export default greetings;
