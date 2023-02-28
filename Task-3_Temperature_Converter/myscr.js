submit1.addEventListener("click",function(){
    console.log("submit1 clicked");
    document.getElementById("myid1").innerHTML = "Celsius";

    document.getElementById("celbn").style.display = "none";
    document.getElementById("fbn").style.display = "block";
    document.getElementById("kelbn").style.display = "block";
});


submit2.addEventListener("click",function(){
    console.log("submit2 clicked");
    document.getElementById("myid1").innerHTML = "Fahrenheit";

    document.getElementById("fbn").style.display = "none";
    document.getElementById("celbn").style.display = "block";
    document.getElementById("kelbn").style.display = "block";
});

submit3.addEventListener("click",function(){
    console.log("submit3 clicked");
    document.getElementById("myid1").innerHTML = "Kelvin";

    document.getElementById("kelbn").style.display = "none";
    document.getElementById("celbn").style.display = "block";
    document.getElementById("fbn").style.display = "block";
});

celbn.addEventListener("click",function(){
    let mytemp = document.getElementById("mytemp").value;

    if(document.getElementById("myid1").innerHTML == "Fahrenheit"){
        let mytemp1 = (mytemp-32)*(5/9);
        document.getElementById("res").innerHTML= "The Celsius Temperature is : "+mytemp1.toFixed(2);
    }

    if(document.getElementById("myid1").innerHTML == "Kelvin"){
        let mytemp1 = (mytemp-273.15);
        document.getElementById("res").innerHTML= "The Celsius Temperature is : "+mytemp1.toFixed(2);
    }
});

fbn.addEventListener("click",function(){
    let mytemp = document.getElementById("mytemp").value;

    if(document.getElementById("myid1").innerHTML == "Celsius"){
        let mytemp1 = (mytemp*(9/5))+32;
        document.getElementById("res").innerHTML= "The Fahrenheit Temperature is : "+mytemp1.toFixed(2);
    }

    if(document.getElementById("myid1").innerHTML == "Kelvin"){
        let mytemp1 = (mytemp-273.15)*(9/5)+32;
        document.getElementById("res").innerHTML= "The Fahrenheit Temperature is : "+mytemp1.toFixed(2);
    }
});

kelbn.addEventListener("click",function(){
    let mytemp = document.getElementById("mytemp").value;

    if(document.getElementById("myid1").innerHTML == "Celsius"){
        let mytemp1 = mytemp+273.15;
        document.getElementById("res").innerHTML= "The Kelvin Temperature is : "+mytemp1;
    }

    if(document.getElementById("myid1").innerHTML == "Fahrenheit"){
        let mytemp1 = (mytemp-32)*(5/9)+273.15;
        document.getElementById("res").innerHTML= "The Kelvin Temperature is : "+(mytemp1).toFixed(2);
    }
});