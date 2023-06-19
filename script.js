let heart_like=document.getElementsByClassName("heart_like")
let plus_btn=document.getElementsByClassName("plus-btn")
let Quant=document.getElementsByClassName("Quant")
let minus_btn=document.getElementsByClassName("minus-btn")
let finalPrice=document.getElementById("finalPrice")
let delete_x=document.getElementsByClassName("delete")
let Item=document.getElementsByClassName("Item")
let prices=[1379,176,500]

for(let i=0;i<heart_like.length;i++)
{
  heart_like[i].addEventListener('click',function()
    {
      if (heart_like[i].style.color==="black")
      {
        heart_like[i].style.color="red"
      }
      else{
        heart_like[i].style.color="black"
      }

    }
  )


  //plus_btn
  plus_btn[i].addEventListener('click',function()
  {
    Quant[i].value=Number(Quant[i].value)+1
    finalPrice.value=Number(finalPrice.value)+prices[i]

  

  })


  //minus-btn
  minus_btn[i].addEventListener('click',function()
  {
    if(Quant[i].value!=="0")
    {
       Quant[i].value=Number(Quant[i].value)-1
       finalPrice.value=Number(finalPrice.value)-prices[i]
    }
   

  
  })

  //delete
  delete_x[i].addEventListener('click',function()
  {

    Item[i].style="display:none"
    finalPrice.value=Number(finalPrice.value)-Number(Quant[i].value)*prices[i]

  })


  }




