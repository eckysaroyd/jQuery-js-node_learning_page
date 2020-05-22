document.addEventListener("click",function(e){
    //delete Feature
    if (e.target.classList.contains("delete-me"))
    {
        if(confirm("Do you Really want to delete this Permanent....?")){
            axios.post('/delete-item',{ id : e.target.getAttribute("data-id")}).then(function(){
                //do something interest here in next video
               e.target.parentElement.parentElement.remove()
               }).catch(function(){
                console.log("please try again leter")
            })
        }

    }
    
    //update feature
    if (e.target.classList.contains("edit-me"))
    {
     let userinput =  prompt("Enter your desire new Test",e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
    
     //console.log(userinput)
     if(userinput){
        axios.post('/update-item',{text : userinput, id : e.target.getAttribute("data-id")}).then(function(){
            //do something interest here in next video
           e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userinput
           }).catch(function(){
            console.log("pleasw try again leter")
        })
         
     }
    }


})