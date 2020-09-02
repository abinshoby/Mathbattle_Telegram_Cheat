function abc(){
    x=parseInt(document.getElementById('task_x').innerText);
    y=parseInt(document.getElementById('task_y').innerText);
    r=parseInt(document.getElementById('task_res').innerText);
    op=document.getElementById('task_op').innerText;
    console.log(x+" "+y+" "+r);
    if(op=="+"){
        console.log("hi");
        if(x+y==r){
            document.getElementById('button_correct').click();
        }
        else{
            document.getElementById('button_wrong').click();
        }
    }
    else if(op=="–"){
        console.log("hi");
        if(x-y==r){
            document.getElementById('button_correct').click();
        }
        else{
            document.getElementById('button_wrong').click();
        }

    }
    else if(op=="×"){
        console.log("hi");
        if(x*y==r){
            document.getElementById('button_correct').click();
        }
        else{
            document.getElementById('button_wrong').click();
        }
    }
    else if(op=="/"){
        console.log("hi");
        if(y!=0 && x/y==r){
            document.getElementById('button_correct').click();
        }
        else{
            document.getElementById('button_wrong').click();
        }
    }
  

}
var i=0;
var req_score=500;
while(i<req_score){
    setTimeout(() => {  abc(); }, 10000);
    i++;
}