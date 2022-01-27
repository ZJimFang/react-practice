import './index.css'

const btn = document.getElementById('btn');
const div = document.getElementById('num');

btn.addEventListener('click', function () {
    let a = parseInt(num.innerText, 10);
    num.innerText = a + 1
})

class Test {
    #a = 1
}

const t1 = new Test();
console.log(t1.a)