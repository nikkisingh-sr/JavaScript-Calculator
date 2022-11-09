document.getElementById('data').readOnly=true;
let screen = document.getElementById('data');
let button = document.querySelectorAll('button');

let result = '';
button.forEach( (b) => {

    b.addEventListener('click', (e)=>{
        let bText = e.target.innerText;
        if(bText == 'C'){
            result = '';
            screen.value = result;
        }
        else if(bText == 'x'){
            console.log(result.slice(0,result.length-1));
            result = result.slice(0,result.length-1);
            screen.value = result;
        }else if(bText == '='){
            if(isNaN(screen.value.charAt(0))){

            }
            // screen.value = eval(result);
            // result='';
            // console.log(result);
            compute();
        //     let numArr = screen.value.split(/[*+-/%]/g);
        //     let operatorArr = screen.value.match(/[*+-/%]/g);
        


        //     let r = 0.0;
        //     for(let j=0; j<operatorArr.length; j++){
        //     for(let i=j; i<j+2; i++){
        //         r += numArr[i]+operatorArr[j];
        //       // console.log(typeof screen.value.charAt(i));
        //        //Number(screen.value.charAt(i));
        //        console.log(r);
               

               

        //     }
        // }
        }
        else {
            result += bText;
            console.log(result)
            screen.value = result;
        }


    })
})

window.addEventListener('keydown', (event)=>{


if (
    event.key <= 9 ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "." ||
    event.key == "/" ||
    event.key == "%" 
) {
    result += event.key;
    screen.value = result;
}
if(event.key == "="){
    compute();
}

});

function compute(){
    screen.value = eval(result);
    result='';
    console.log(result);

}

window.onerror = function () {
    alert("PLEASE INPUT VALID EXPRESSION");
    result='';
    screen.value = result;
    console.clear();
};