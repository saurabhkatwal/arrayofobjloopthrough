let xhttp=new XMLHttpRequest();
xhttp.addEventListener('load',function(){
    const myobj=JSON.parse(this.responseText);
    let x;
    for(i in myobj.pets){
        console.log(myobj.pets[i]);
        for(let j in myobj.pets[i]){
            console.log(myobj.pets[i][j]);
        }
    }
    // document.getElementById('demo').innerHTML=myobj.pets;
})
xhttp.open('GET','json_demo.txt');
xhttp.send();
