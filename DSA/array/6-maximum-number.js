/*
You are given a positive integer `num` consisting only of digits `6` and `9`.

Return *the maximum number you can get by changing **at most** one digit (*`6` *becomes* `9`*, and* `9` *becomes* `6`*)*.

*/

function maximizeNumber(num) {
    num = num.toString();
    num = num.split("").map(Number)  

      for(let index = 1; index < num.length ; index++){
          if(num[index - 1] == 6){
              num[index-1] = 9;
              break;
          } 

          if(index == num.length - 1 && num[index] == 6){
             num[index] = 9 
          }
      }
      num = +(num.join(''));
      return num
  }

  let num = 9996;
  let final = maximizeNumber(num);
  console.log(final);