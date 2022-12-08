// let lines = 7;
// let str = '';
// let star = '*';
// for (let i = 0; i< lines; i++){
//     str +=star;
//     console.log(str);
// }

// for (let i = 1; i < 101; i++) {
//     if (i % 5==0) console.log("FizzBuzz");
//     if (i % 3 == 0) console.log("Fizz");
//     if (i % 5 == 0) console.log("Buzz");
//     console.log(i);
// }

// let num=0;

// for (let i=0; i<8; i++){

//     for (let a=0; a<8; i++){
//         if(num %2 ==a);
//     }
    

function filterUsers(a, b) {
    let arr1 = "# ";
    let arr2 = " #";
    let odd = "";
    let even = "";
    for (var i = 0; i < a / 2; i += 1) {
      odd += arr2;
      even += arr1;
    }
    for (let i = 0; i < b; i += 1) {
      if ([i] % 2 == 0) {
        console.log(odd);
      } else {
        console.log(even);
      }
    }
  }
  
  filterUsers(10, 10);