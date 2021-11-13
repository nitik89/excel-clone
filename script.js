let tRow=document.querySelector(".top_row");
let lCol=document.querySelector(".left_col");

let italicIcon=document.querySelector(".fa-italic");
let boldIncon=document.querySelector(".fa-bold");
let underlineIcon=document.querySelector(".fa-underline");
let alignment_containers=document.querySelector(".alignment_container");
let fontSizeInput=document.querySelector(".font_size_input");

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
            italic:false,
            underline:false,
            bold:false,
            value:""
        }
        rowArr.push(cellObj);
    }
    db.push(rowArr);
}

for(let i=0;i<allgridscells.length;i++){
    allgridscells[i].addEventListener("input",(e)=>{
        
        let prevAddress=addressInput.value;
        if(prevAddress !=""){
            
            let ricidObj=getAdress(prevAddress);
            
            let prevCell = document
            .querySelector
        (`.grid .cell[rId='${ricidObj.rid}'][cId='${ricidObj.cid}']`);
      
        db[ricidObj.rid][ricidObj.cid].value=e.target.innerHTML;
        }
    })
    allgridscells[i].addEventListener("click",(e)=>{
        console.log(e.target);
        let prevAddress=addressInput.value;
        if(prevAddress !=""){
            
            let ricidObj=getAdress(prevAddress);
            
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
        
        
        
        addressInput.value=String.fromCharCode((cid + 65))+(rid+1);
        let cCell=allgridscells[i];
        cCell.style.border = "2px solid #1B9CFC";
       

        // // 2way binding menu
        let cellObj=db[rid][cid];
       
        let fontSize=cellObj.fontSize;
        fontSizeInput.value=fontSize;
        boldIncon.classList.remove("selected");
        italicIcon.classList.remove("selected");
        underlineIcon.classList.remove("selected");
        let optionElements=alignment_containers.children;
        for (let i = 0; i < optionElements.length; i++) {
            
            let arr=optionElements[i].classList[1].split("-")[2];
            
            if (arr== cellObj.align) {
               
                optionElements[i].classList.add("selected");
            }
            else{
            optionElements[i].classList.remove("selected");
            }
        }
        if(cellObj.bold){
            boldIncon.classList.add("selected");
        }
        if(cellObj.italic){
            italicIcon.classList.add("selected");
        }
        if(cellObj.underline){
            underlineIcon.classList.add("selected");
        }
    
   
          
        
       
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




