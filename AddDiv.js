 const Add = document.getElementById("Add");
 const WorkSpace = document.getElementById("WorkSpace");
 const NewBlock = document.createElement("section");
 const InnerHtml = `
 <div>
     <p>Name: </p>
     <input type="text" id="AddName">
 </div>
 <div>
     <p>Color: </p>
     <input type="color" id="AddColor">
 </div>
 <div>
     <p>Border: </p>
     <input type="checkbox" id="AddBorder">
 </div>
 <div>
     <p>Border Color: </p>
     <input type="Color" id="AddBorderColor">
 </div>
 <input type="button" value="Create" id="NewSpace">
`;
 NewBlock.innerHTML = InnerHtml;
 NewBlock.id = "Test";

 Add.addEventListener("click", function(){
   WorkSpace.appendChild(NewBlock);

   let NewSpace = document.getElementById("NewSpace");

   NewSpace.addEventListener("click", function(){
      let Name = document.getElementById("AddName").value;
      let Color = document.getElementById("AddColor").value;
      let Border = document.getElementById("AddBorder").checked;
      let BorderColor = document.getElementById("AddBorderColor").value;
      console.log(Name+" "+Color+" "+Border+" "+BorderColor);
   
      let NewTask = document.createElement("section");
      NewTask.id = Name;
      NewTask.style.backgroundColor = Color;
      NewTask.innerHTML = Name;
      NewTask.style.width = "min-content";
      NewTask.style.padding = "5px";
      NewTask.style.borderRadius = "5px"
   
      if(Border){
         console.log("test")
         NewTask.style.border = "Solid 5px "+BorderColor;
      }
   
      WorkSpace.appendChild(NewTask);
      WorkSpace.removeChild(NewBlock);
   
    })
 })