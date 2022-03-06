function fizzBuzz(n) {
    let fizzBuzz = prompt("Enter Your Limit");
    (n != NaN)
  
    for (i = 1; i <= fizzBuzz; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            document.write("fizzBuzz" + " ")
        else if (i % 3 === 0)
            document.write("fizz" + " ");
        else if (i % 5 === 0)
            document.write("buzz" + " ");
        else
            document.write(i + " ");
    }
    
}
