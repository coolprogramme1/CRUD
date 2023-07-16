var row=null;
function Submit(){
let data=reterieve();
if(data==false){
    document.getElementById("msg").innerHTML="Plz Fill The Data";
}
else{
    document.getElementById("msg").innerHTML="Data Is Filled";

var read=readdataoflocalstorage(data);
if(row==null){
Insert(read);
}
else{
update();
}
}
}
function reterieve(){
    let name1=document.getElementById("name").value;
    let job=document.getElementById("job").value;
    let exp=document.getElementById("experiance").value;

    var arr=[name1,job,exp];
    if(arr.includes("")){
        return false;
    }
    else{
    return arr;
    }
}

//local storage create
function readdataoflocalstorage(data){
    var n=localStorage.setItem("Name",data[0]);
    var j=localStorage.setItem("Job",data[1]);
    var e=localStorage.setItem("Experiance",data[2]);
    var n1=localStorage.getItem("Name",n);
    var j1=localStorage.getItem("Job",j);
    var e1=localStorage.getItem("Experiance",e);
    var arr1=[n1,j1,e1];
   
    return arr1;
}
//Insert data in tables
function Insert(read){
    var row=table.insertRow();
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);                               // here this keyword take data od this complete row
    var cell4=row.insertCell(3).innerHTML=`<Button id="edit"onclick=edit(this)>Edit</Button><Button id="remove"onclick=remove(this)>Delete</Button>`;
    cell1.innerHTML=read[0];
    cell2.innerHTML=read[1];
    cell3.innerHTML=read[2];
    
}
function edit(td){
row=td.parentElement.parentElement;
document.getElementById("name").value=row.cells[0].innerHTML;
document.getElementById("job").value=row.cells[1].innerHTML;
document.getElementById("experiance").value=row.cells[2].innerHTML;
}
function update(){
    row.cells[0].innerHTML=document.getElementById("name").value
    row.cells[1].innerHTML=document.getElementById("job").value
    row.cells[2].innerHTML=document.getElementById("experiance").value
    row=null;
}
function remove(td){
var ans=confirm("You want to delete this function");
row=td.parentElement.parentElement;
if(ans==true){
document.getElementById("table").deleteRow(row.rowIndex);
}
}