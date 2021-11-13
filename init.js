
let clr=document.querySelector(".far.fa-tint");
let txt=document.querySelector(".text_color")

let bgclr=document.querySelector(".far.fa-fill-drip");
let bg=document.querySelector(".bg_color")
clr.addEventListener("click",()=>{
txt.click();
})
txt.addEventListener("change",()=>{
    console.log("hello");
    let color=txt.value;
    console.log(txt);
    let prevAddress=addressInput.value;
     let ricidObj=getAdress(prevAddress);
            
    let prevCell=document.querySelector(`.grid .cell[rid='${ricidObj.rid}'][cid='${ricidObj.cid}']`);
    let {rid,cid}=getAdress(prevAddress);
    db[rid][cid].color=color;
    prevCell.style.color=color;
    console.log(db);
})


bgclr.addEventListener("click",()=>{
    bg.click();
    })

bg.addEventListener("change",()=>{
        console.log("hello");
        let color=bg.value;
        
        let prevAddress=addressInput.value;
         let ricidObj=getAdress(prevAddress);
                
        let prevCell=document.querySelector(`.grid .cell[rid='${ricidObj.rid}'][cid='${ricidObj.cid}']`);
        prevCell.style.backgroundColor=color;
        let {rid,cid}=getAdress(prevAddress);
    db[rid][cid].backgroundColor=color;
    })

let fontSize=document.querySelector(".font_size_input");
fontSize.addEventListener("change",()=>{
    let fs=fontSize.value;
    let prevAddress=addressInput.value;
    let ricidObj=getAdress(prevAddress);
            
    let prevCell=document.querySelector(`.grid .cell[rid='${ricidObj.rid}'][cid='${ricidObj.cid}']`);
    prevCell.style.fontSize=fs+"px";
    let {rid,cid}=getAdress(prevAddress);
    db[rid][cid].fontSize=fs;
    
   
})
let fontFam=document.querySelector(".font_family_input");
fontFam.addEventListener("change",()=>{
    let fs=fontFam.value;
    let prevAddress=addressInput.value;
    let ricidObj=getAdress(prevAddress);
            
    let prevCell=document.querySelector(`.grid .cell[rid='${ricidObj.rid}'][cid='${ricidObj.cid}']`);
    prevCell.style.fontFamily=fs;
    let {rid,cid}=getAdress(prevAddress);
    db[rid][cid].fontFamily=fs;


})

let bold=document.querySelector(".fa-bold");
bold.addEventListener("click",()=>{
    // console.log("hello");
    let prevAddress=addressInput.value;
    let ricidObj=getAdress(prevAddress);
            
    let prevCell=document.querySelector(`.grid .cell[rid='${ricidObj.rid}'][cid='${ricidObj.cid}']`);
    prevCell.style.fontWeight=700;
    bold.classList.add("selected");
    console.log(prevCell.style.fontWeight);
    let {rid,cid}=getAdress(prevAddress);
    db[rid][cid].bold=700;
})

let italic=document.querySelector(".fa-italic");
italic.addEventListener("click",()=>{
    console.log("hello");
    let prevAddress=addressInput.value;
    let ricidObj=getAdress(prevAddress);
            
    let prevCell=document.querySelector(`.grid .cell[rid='${ricidObj.rid}'][cid='${ricidObj.cid}']`);
    prevCell.style.fontStyle="italic";
    let {rid,cid}=getAdress(prevAddress);
    db[rid][cid].italic="italic";
    
})

let uderline=document.querySelector(".fa-underline");
uderline.addEventListener("click",()=>{
    console.log("hello");
    let prevAddress=addressInput.value;
    let ricidObj=getAdress(prevAddress);
            
    let prevCell=document.querySelector(`.grid .cell[rid='${ricidObj.rid}'][cid='${ricidObj.cid}']`);
    prevCell.style.textDecoration="underline";
    let {rid,cid}=getAdress(prevAddress);
    db[rid][cid].underline="underline";
    
})
let alignment_container=document.querySelector(".alignment_container");
alignment_container.addEventListener("click",(event)=>{
  if(event.target.classList[1]!=undefined){
    let prevAddress=addressInput.value;
    let ricidObj=getAdress(prevAddress);
    let prevCell=document.querySelector(`.grid .cell[rid='${ricidObj.rid}'][cid='${ricidObj.cid}']`);
    let arr=event.target.classList[1].split("-");
   
    prevCell.style.textAlign=arr[2];
    let {rid,cid}=getAdress(prevAddress);
    db[rid][cid].align=arr[2];
  }
})
// let rgt=document.querySelector(".fa-align-right");

// rgt.addEventListener("click",()=>{
//     console.log("hello");
//     let prevAddress=addressInput.value;
//     let ricidObj=getAdress(prevAddress);
            
//     let prevCell=document.querySelector(`.grid .cell[rid='${ricidObj.rid}'][cid='${ricidObj.cid}']`);
//     prevCell.style.textAlign="right";
    
// })
// let lft=document.querySelector(".fa-align-left");

// lft.addEventListener("click",()=>{
//     console.log("hello");
//     let prevAddress=addressInput.value;
//     let ricidObj=getAdress(prevAddress);
            
//     let prevCell=document.querySelector(`.grid .cell[rid='${ricidObj.rid}'][cid='${ricidObj.cid}']`);
//     prevCell.style.textAlign="left";
    
// })
// let center=document.querySelector(".fa-align-center");

// center.addEventListener("click",()=>{
//     console.log("hello");
//     let prevAddress=addressInput.value;
//     let ricidObj=getAdress(prevAddress);
            
//     let prevCell=document.querySelector(`.grid .cell[rid='${ricidObj.rid}'][cid='${ricidObj.cid}']`);
//     prevCell.style.textAlign="center";
    
// })
// let jst=document.querySelector(".fa-align-justify");

// jst.addEventListener("click",()=>{
//     console.log("hello");
//     let prevAddress=addressInput.value;
//     let ricidObj=getAdress(prevAddress);
            
//     let prevCell=document.querySelector(`.grid .cell[rid='${ricidObj.rid}'][cid='${ricidObj.cid}']`);
//     prevCell.style.textAlign="justify";
    
// })