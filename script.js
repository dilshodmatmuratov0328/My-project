let a=document.getElementById('a')
let b=document.getElementById('b')
let bos=document.getElementById('bos')
let natija=document.getElementById('natija')
bos.addEventListener('click', ()=>{
    const c=Number(a.value)+Number(b.value);
    natija.innerHTML = `<ul> <li>Yig‘indi: <span style="color:red">${c}</span> </ul>`;
})