var count1:number=0,count2:number=0; 
var count3:number=0;
    function add1():void {
        count1=count1+1;
        document.getElementById("disp-item1").innerHTML =`Quantity : ${count1}`
    }
    function add2():void{
        count2=count2+1;
        document.getElementById("disp-item2").innerHTML=`Quantity : ${count2}`
    }
    function add3():void{
        count3=count3+1;
        document.getElementById("disp-item3").innerHTML=`Quantity : ${count3}`
    }
    function remove1():void{
        if(count1==1){
            document.getElementById("disp-item1").innerHTML=null;
        }
        else{
            count1--;
            document.getElementById("disp-item1").innerHTML=`Quantity : ${count1}`
        }
    }

    