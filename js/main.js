let a = parseInt(prompt('Enter the number '));
let num=a;
let sum=0;
let rem;

document.write(`Given number ${num} <br>`)

 while (num != 0)
    {
        rem = num % 10;
		num= (num-rem)/10;
        sum = sum + rem;
       
    }
	document.write(`sum of digits ${sum}`)
	