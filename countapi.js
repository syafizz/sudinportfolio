const count= document.getElementById('count');
portfoliVisits();
console.log(count.innerHTML);
function portfoliVisits(){
    fetch('https://api.countapi.xyz/get/Hunter/khanweb')
    .then((res)=> res.json())
    .then((res)=>{
        console.log(res);
        
        count.innerHTML = res.value;
    })
}