let fruits=["Apple", "Banana", "Orange", "Mango", "Grapes", 
 "Pineapple", "Papaya", "Watermelon", "Kiwi", "Guava", 
 "Strawberry", "Blueberry", "Cherry", "Peach", "Plum", 
 "Pomegranate", "Apricot", "Lychee", "Coconut", "Dragonfruit"]

let movies=[
  ["Inception", "Interstellar", "The Dark Knight", "Tenet", "Memento"],   // Sci-Fi
  ["Avengers", "Iron Man", "Captain America", "Thor", "Black Panther"],   // Superhero
  ["Titanic", "The Notebook", "La La Land", "A Star is Born", "Pride & Prejudice"], // Romance
  ["The Conjuring", "Insidious", "Annabelle", "It", "The Exorcist"]       // Horror
]

for(i of fruits){
    console.log(i)
}

for(element of movies){
    for(i of element){
        console.log(i);
    }
}

// for(let i=0;i<movies.length;i++){ 
//     for(let j=0;j<movies[i].length;j++){
//         console.log(i,j,movies[i][j])
//     }
// }

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

// console.log("in reverse order:?");

// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }
