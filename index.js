let palavra;
const anagrama = [];
console.log("Digite uma palavra que eu farei seu anagrama");
process.stdin.on("data", function (data) {
  palavra = data.toString().trim();
  palavra = palavra.split("");
  for (let i = 0; i < palavra.length; i++) {
    for (let j = 0; j < palavra.length; j++) {
      let aux = palavra[i];
      palavra[i] = palavra[j];
      palavra[j] = aux;
      if (!anagrama.includes(palavra.join(""))) {
        anagrama.push(palavra.join(""));
        console.log(palavra.join(""));
      }
    }
  }
});
