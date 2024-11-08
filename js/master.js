const title =  'password Game'
const heading = document.getElementById("heading")
const rule = document.querySelectorAll('.rule .rule1')
const rule1 = document.querySelector('#rule1')
const rule2 = document.querySelector('#rule2')
const rule3 = document.querySelector('#rule3')
const rule4 = document.querySelector('#rule4')
const rule5 = document.querySelector('#rule5')
const rule6 = document.querySelector('#rule6')
const rule7 = document.querySelector('#rule7')
const rule8 = document.querySelector('#rule8')
const rule9 = document.querySelector('#rule9')
const h5 = document.querySelectorAll('.rule>.rule1>h5')
const inp = document.querySelector('.inp')
const rule1H5 = rule1.querySelector('h5');
const rule2H5 = rule2.querySelector('h5');
const rule3H5 = rule3.querySelector('h5');
const rule4H5 = rule4.querySelector('h5');
const rule5H5 = rule5.querySelector('h5');
const rule6H5 = rule6.querySelector('h5');
const rule7H5 = rule7.querySelector('h5');
const rule8H5 = rule8.querySelector('h5');
const rule9H5 = rule9.querySelector('h5');
const txt = document.querySelector('h2')
console.log(txt);

let x = new Date()
let hours = x.getHours().toString().padStart(2, '0');
console.log(hours);
/////password txt////
let count = 0
let interval = setInterval(() =>{
    if(count == title.length){
        count=0;
        heading.innerText='';

    }else{
        heading.innerText += title[count];
        count++;
    }
},200)
/////password txt////
inp.addEventListener('input' , ()=>{
    
    console.log(inp.value.length);

    if(inp.value.length>4){
       rule1H5.style.transition='.4s'
       rule1H5.style.background='#00b61b'
       rule1.classList.add('border')
       rule2.classList.remove('pos')
     
       if(inp.value.search(/[0-9]/)>=0){
        rule2H5.style.transition='.4s'
        rule2H5.style.background='#00b61b'
        rule2.classList.add('border')
        rule3.classList.remove('pos')

        if(inp.value.search(/[A-Z]/)>=0){
            rule3H5.style.transition='.4s'
            rule3H5.style.background='#00b61b'
            rule3.classList.add('border')
            rule4.classList.remove('pos')

            if(inp.value.search(/[@#$%^&&**()]/)>=0){
                rule4H5.style.transition='.4s'
                rule4H5.style.background='#00b61b'
                rule4.classList.add('border')
                rule5.classList.remove('pos')

                if(inp.value.search(/may|june|july|January|february|march|april|august|september|october|november|december/)>=3){
                    rule5H5.style.transition='.4s'
                    rule5H5.style.background='#00b61b'
                    rule5.classList.add('border')
                    rule6.classList.remove('pos')
                    if(inp.value.search(/I|II|III|IV|V|VI|VII|VIII|IX|X/)>=0){
                        rule6H5.style.transition='.4s'
                        rule6H5.style.background='#00b61b'
                        rule6.classList.add('border')
                        rule7.classList.remove('pos')
                        if(inp.value.search(/Amir Bagheri/)>=10){
                            rule7H5.style.transition='.4s'
                            rule7H5.style.background='#00b61b'
                            rule7.classList.add('border')
                            rule8.classList.remove('pos')
                            if(inp.value.search(hours) >=0){
                                rule8H5.style.transition='.4s'
                                rule8H5.style.background='#00b61b'
                                rule8.classList.add('border')
                                rule9.classList.remove('pos')
                                txt.innerHTML ='your password:'+ inp.value


                            }
                        }
                    }
                }
            }
        }
    }
    }
    
})