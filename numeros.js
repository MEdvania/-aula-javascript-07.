/*
1)Criar um array com os nomes de 7 cidades de Pernambuco:
a)Ordenar seus elementos na ordem invertida.
b)Exibir no console.
c)Adicionar duas cidades usando splice().
d)Exibir no console.
*/
const arr = ["Recife", "Olinda", "Jaboatão", "Camaragibe", "Igarassu", "Ipojuca", "Olinda"];
arr.reverse();
arr.splice(7, 0, "Carpina", "Goiana")
console.log(arr)


/*
2)Criar um array com os valores 1,4,8,6,9,2,6,7,3,0,5
a)Obter qual o index onde está o elemento 9.
b)Exibir no console qual a posição no array em que o elemento 9 está.
*/
const num = [1,4,8,6,9,2,6,7,3,0,5];
console.log(num.indexOf(9))
console.log(num.indexOf(9) + 1)