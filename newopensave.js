

let downloadBtn = document.querySelector(".fa-save");
let openBtn = document.querySelector(".fa-envelope-open");
let openInput = document.querySelector(".open_input");
downloadBtn.addEventListener("click",function(e){
    let a = document.createElement("a");
    var StringCode=encodeURIComponent(JSON.stringify(db));//encoding the file
    var dataStr = "data:text/json;charset=utf-8," +
    StringCode;
a.href = dataStr;
a.download = "file.json";
// // anchor click
a.click();
})

openBtn.addEventListener("click",(e)=>{
    openInput.click();
})
openInput.addEventListener("change",(e)=>{
    let filesArr=openInput.files;
    console.log(filesArr);
    let file=filesArr[0];  //we get options to upload the file 
    const reader= new FileReader();
    reader.readAsText(file);
    reader.addEventListener('load',(event)=>{
        let JSONdata=JSON.parse(event.target.result);
        db=JSONdata;
        console.log(db);
        setUI();
    })
});

function setUI(){
    for(let i=0;i<100;i++){
        for(let j=0;j<26;j++){
            let cellObject=db[i][j];
            let tobeChangedCell=document.querySelector(`.grid .cell[rId='${i}'][cId='${j}']`);
            tobeChangedCell.innerText = cellObject.value;
            tobeChangedCell.style.color = cellObject.color;
            tobeChangedCell.style.backgroundColor = cellObject.backgroundColor;
            tobeChangedCell.style.fontFamily = cellObject.fontFamily;
            tobeChangedCell.style.textAlign = cellObject.align;
            tobeChangedCell.style.textDecoration = cellObject.underline == false ? "none" : "underline";
            tobeChangedCell.style.fontStyle = cellObject.italic == false ? "normal" : "italic";
            tobeChangedCell.style.fontSize = cellObject.fontSize;
        }
    }
}