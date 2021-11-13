let tRow=document.querySelector(".top_row");
let lCol=document.querySelector(".left_col");
for(let i=0;i<26;i++){
    let my=document.createElement("div");
    my.setAttribute("class","cell");
    my.textContent=String.fromCharCode(65+i); //creating the columns 
    tRow.append(my);

}

for(let i=0;i<100;i++){
    let my=document.createElement("div");
    my.setAttribute("class","cell");
    my.textContent=i; //creating the columns 
    lCol.append(my);

}


let grid=document.querySelector(".grid");
console.log(grid);
for(let i=0;i<100;i++){
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for(let j=0;j<26;j++){
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
       // div.textContent = i + "," + j;
       div.setAttribute("contentEditable", "true")
       div.setAttribute("rId", i);
        div.setAttribute("cId", j);
        
        row.appendChild(div);
    }
    grid.appendChild(row);
}
let allgridscells=document.querySelectorAll(".grid .cell");
let addressInput=document.querySelector(".address-input");

// window.onload = function(){
//     allgridscells[0].click();
//   }

for(let i=0;i<allgridscells.length;i++){
    allgridscells[i].addEventListener("click",(e)=>{
        let prevAddress=addressInput.value;
        if(prevAddress !=""){
            
            let ricidObj=getAdress(prevAddress);
            console.log(ricidObj);
            let prevCell = document
            .querySelector
        (`.grid .cell[rId='${ricidObj.rid}'][cId='${ricidObj.cid}']`);
        
        prevCell.style.border ="0.1px solid gray";
        prevCell.style.borderRight="none";
        prevCell.style.borderTop="none";
        }
        let rid=allgridscells[i].getAttribute("rId");
        let cid=allgridscells[i].getAttribute("cId");
        rid=Number(rid);
        cid=Number(cid);
        rid+=1;
        
        addressInput.value=String.fromCharCode((cid + 65))+rid;
        let cCell=allgridscells[i];
        cCell.style.border = "2px solid #1B9CFC";
    })
    
}
let firstCell = document.querySelector(".grid .cell[rId='0'][cId='0']");
firstCell.click();
firstCell.focus();
function getAdress(address){
    let AsciVal=address.charCodeAt(0);
    let cid=AsciVal - 65;
    let rid=Number(address.substring(1))-1;
    return {
        rid,cid
    }
}

//applying 2 way binding
let db=[]
for(let i=0;i<100;i++){
    let rowArr=[]
    for(let j=0;j<26;j++){
        let cellObj={
            color:"black",
            backgroundColor:"white",
            fontFamily:"'Courier New'",
            fontSize:14,
            align:"center",
            italic:"none",
            underline:"none",
            bold:"normal"
        }
        rowArr.push(cellObj);
    }
    db.push(rowArr);
}
console.log(db);


