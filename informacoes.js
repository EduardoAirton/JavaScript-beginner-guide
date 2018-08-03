 /****************************************************************************************/
prompt("What is your name?"); // Faz um alerta com opocao de resposta do usuario
// prompt sempre retorna uma string

alert("Nice to meet you, ", + userName); // Mostra um alerta na tela
console.log("Also great to meet you, " + userName); // Mostra um alerta no console
var idade = Number(prompt("Qual sua idade?")); // Converte para um numero
-> === // Igual em valor e tipo

// Verifica se possui a palavra sim dentre a resposta
{
  var resposta = prompt("Chegamos?");
  if (resposta.indexOf("sim") != -1) {
    alert("Show");
  }
}

/****************************************************************************************/
//String methods
var str = "Hello world";

// CharArt Retorna o caractere do indice indicado
str.charAt(3) // l
// CharCodeAt Retorna o numero unicode(ASCII) referente ao caracter do indice informado
str.charCodeAt(0) // 72 porque é o valor de H na tabela ASCII
// fromCharCode Retorna um caracter referente ao codigo unicode informado
str.fromCharCode(str.charCodeAt(0)) // H
// toUpperCase transforma em maiúsculo
str.toUpperCase(); // HELLO WORLD
// toLowerCase transforma em minúsculo
str.toLowerCase() // hello world
// Split converte uma string em ARRAY
var arr = str.slipt("") // ["H", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
var arr2 = str.slipt(" ") // ["Hello", "World"]
// Replace Troca um parte espeficica de uma String
var str2 = str.replace("Hello", "Hi") // Hi World
// Substr Retorna uma subString da String original partido da posição(X) até o tamanho desejado(Y)
var part = str.substr(6,5) (x, y) //World


/****************************************************************************************/
// ForEach
arr.forEach(function callback(currentValue, index, array) {
    //your iterator
};

callback
  Function to execute for each element, taking three arguments:
currentValue
  The value of the current element being processed in the array.
index *Optional*
  The index of the current element being processed in the array.
array *Optional*
  The array that forEach() is being applied to.

/****************************************************************************************/

// METODOS ARRAY
var colors = ["red", "orange", "yellow"];

// PUSH - POP
colors.push("blue"); // PUSH retorna o tamanho do item adicionado
colors.pop(); // Retira o ultimo item do array e retorna seu valor

// SHIFT - UNSHIFT
colors.unshift("pink"); // Adiciona o valor no inicio do array
colors.shift(); // Remove o primeiro elemento do array e retorna seu valor

// INDEXOF
colors.indexOf("orange"); // Retorna o index do primeiro item encontrado no array (Retorna -1 caso nao exista)

// SLICE
var novo = colors.slice(0,2); // Copia os itens do index (Aonde começa e aonde termina(1 numero a mais do desejado))

// SPLICE
colors.splice(index,1)//Apaga a parti do index a quantidade informada



/****************************************************************************************/
// Documents

document.getElementById('id');
document.getElementsByClassName('className');
document.getElementsByTagName('tagName');

// Querry Selector

document.querySelector('CSS Element');
document.querySelectorALL('CSS Element');

/****************************************************************************************/
// Manipulating Style

//Worst way
var tag = document.getElementById('id');
tag.style.color = "blue";
tag.style.border = "10px solid red";

//Better way
//Define a class
.nomeClasse{
  color:blue;
  border: 10px solid red;
}
var tag = document.getElementById('id');
//Adiciona a classe
tag.classList.add('nomeClasse');
//Remove the  class
tag.classList.remove('nomeClasse');
//Toggle
tag.classList.toggle('nomeClasse'); // Se o elemento já tiver a classe ele remove, caso não tenha ele adiciona.
//InnerHTML
document.body.innerHTML = "<h1>Hello!</h1>"; //Muda a algum elemento permitindo colocar tags html que seram reconhecidas
//TextContent
a.textContent = "SomeThing" //Muda o valor do texto do link
//SetAttribute()
tag.setAttribute("href", "www.site.com");//Alterar um atributo como href ou src

//AddEventListener()
var h1 = document.querySelector("h1");
h1.AddEventListener("click", function(){ //Adiciona um evento na tag selecionada
  h1.style.color = "pink"
})
//Better way
document.querySelector("h1").AddEventListener("click", function(){
  h1.style.color = "pink"
})

//Change specific element
var h1s = document.querySelectorALL("h1");
for (var i = 0; i < h1s.lenght; i++) {
  h1s[i].AddEventListener("click", function(){
    this.style.color = "pink"; // THIS fala que somente o objeto selecionado sera ativado
    document.body.classList.toggle("CSS CLASS NAME");//se já tiver sido ativado ele desativa e se nao ativa.
  })
}

/****************************************************************************************/
//JQUERY
/** jQuery é uma frameWork do JavaScript que facilita a escrita, porém pode deixar o programa mais
    lento dependendo da aplicação para a qual está utilizando. **/

//Selecionar todas as img tags
$("h1");
$(Selector).css(property, value);
$("#special").css("border", "2px solid red");

//.text()
$("h1").text() //Retorna o texto de todos os h1's
$("h1").text("Texto") //Muda o valor do h1

//.html()
$("ul").html(<li>Novo item na lista</li>)//Muda o valor html de um ou varios elementos

//.attr()
<img src="http://i.imgur.com/zvANQeG.jpg">
$("img").attr("src", "http://i.imgur.com") //Muda um atributo da tag
$("img:first-of-type").attr("src", "http://i.imgur.com") //Muda apenas a primeira tag img

//.val()
$("input").val("");//Muda o valor dentro do input
$("select").val()//Apresenta qual valor o usuario selecionou

//class
  //.addClass
$("p").addClass("MyClass yourClass")//Adiciona classes em todos os paragrafos
  //.removeClass
$("p").removeClass("MyClass yourClass")//Remove classes em todos os paragrafos
  //.toggleClass
$("p").toggleClass("MyClass yourClass")//Adciona essas classes caso elas já estejam adicionadas apaga

//.click()
$("button").click(function(){ //Adiciona uma evento de click no objeto selecionado
  alert("butão clicado!");
})


/****************************************************************************************/
