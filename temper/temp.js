var cel=document.getElementById("Celsius");
var fah=document.getElementById("Fahrenheit");
var kel=document.getElementById("kelvin");

cel.addEventListener('input', function(){
    let c=this.value;
    let f=(c*9/5)+32;
    if(!Number.isInteger(f)){
        f=f.toFixed(2);
    }
    fah.value=f;
    let k=(c*1)+273;
    if(!Number.isInteger(k)){
        k=k.toFixed(2);
    }
    kel.value=k
})
fah.addEventListener('input', function(){
    let f=this.value;
    let c=((f-32)*5)/9;
    if(!Number.isInteger(c)){
          c=c.toFixed(2);
      }
    cel.value=c;
    let k=((f-32)*5)/9+32;
    if(!Number.isInteger(k)){
          k=k.toFixed(2);
      }
    kel.value=k;
  })
  kel.addEventListener('input', function(){
      let k=this.value;
      let c=(k-273);
      if(!Number.isInteger(c)){
          c=c.toFixed(2);
      }
      cel.value=c;
      let f=((k-273)*9)/5+32;
      if(!Number.isInteger(f)){
          f=f.toFixed(2);
      }
      fah.value=f;
  })