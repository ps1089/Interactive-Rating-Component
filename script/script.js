// Variables
const submit_btn = document.querySelector("#submit");
const rating_pg = document.querySelector("#rating-page");
const feedback_pg = document.querySelector("#feedback-page");
const rating_content = document.querySelector("#rate-content");
const button_grp = document.querySelector("#btns-grp"); // Adding event listener to entire button grp 

var rating = 0;
var flag = false;
var prev_sel;
var temp = 0;

// Adding rating circles using JS.
function rating_creator()
{
    var temp1 ="";
    for(var i = 1 ; i <= 5 ; i++)
    {
        temp1 += `<button class="btn">${i}</button>`; 
    }
    button_grp.innerHTML = temp1;
}
rating_creator();

button_grp.addEventListener("click",function(dets)
{
    current_sel = dets.target;
    rating = Number(current_sel.textContent);  // Nan or Rating
    
    if(!isNaN(rating))
    {
        if(prev_sel != current_sel || temp == 0)
        {
            current_sel.classList.add("btn-color-change");
            temp = 1;
            console.log("Run1",temp);
        }
        else
        {
            temp = 0;
            rating = 0;
            console.log("Run2",temp);
        }    
        
        if(!flag)
            flag = true;
        else
        {   
            prev_sel.classList.remove("btn-color-change");
        }
        prev_sel = dets.target;
    }

});

submit_btn.addEventListener("click",function()
{
    if(rating > 0)
    {
        rating_pg.style.display = "none";
        feedback_pg.style.display = "block";
        rating_content.innerText = `You selected ${rating} out of 5`;
    }
    else
        alert("Please Rate First!");
    
});

 