//const sentence = "hello there from lighthouse labs";
let result = 0;
const animation = function(sentence) {
  let result = null;
for (let i = 0; i < sentence.length; i++) {
  //console.log(char);
 result =  setTimeout(() => { 
    process.stdout.write(sentence[i]);
  },50 * i);
  
}
return result + '\n';

}

console.log(animation("hello there from lighthouse labs"));