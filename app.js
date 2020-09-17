//function checking validity of credit card
function validateCred() {
    let input = document.getElementById('input').value;
    let result = document.getElementById('result');
    if(!isNaN(input)) {
      //converts the input to an array of numbers
      const cred = Array.from(input.split(''), Number)
      //copy the array and reverse its order
      let x = cred.slice()
      x.reverse()
    
      let sum = 0;
      for(i = 0; i < x.length; i++) {
        //doubles every second number and subtracts 9 if the result is > 9
        if(i%2==1){
          x[i] *= 2;
          if(x[i] > 9){
            x[i] -= 9
          }
        }
        //sums up all numbers in the array
        sum += x[i];
      }
      if (sum%10==0) {
        result.innerHTML = 'This card is valid'
      } else {
        result.innerHTML = 'This card is invalid'
      }
      return true
    } else {
      alert('Enter a valid number')
      return false
    }
}