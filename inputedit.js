
let inp =document.querySelector(".inp")

let btn =document.querySelector(".btn")
let box =document.querySelector(".box")

btn.onclick = ()=>{
    // let inpvalue = inp.value
    // alert(inpvalue)









    let span =document.createElement("span")
    span.setAttribute("class","valuespan")

    let ico=document.createElement("i")
    ico.setAttribute("class","fas fa-check")

    ico.onclick =()=>{
        let del=document.createElement("del")
        span.setAttribute("class","deletetag")
        // del.innerHTML = span
        del.appendChild(span)
        h5.insertAdjacentElement("afterbegin",del)
        

    }





    let icoedit=document.createElement("i")
    icoedit.setAttribute("class","far fa-edit")

    icoedit.onclick =()=>{
        // let valuediv=document.createElement("div")
        // valuediv.setAttribute("class","deletetag")
        // valuediv.innerHTML=span
        
        // valuediv.appendChild(span)
        // // h5.insertAdjacentElement("afterbegin",del)
        
        console.log("valuediv");    
    }

    let icoremove=document.createElement("i")
    icoremove.setAttribute("class","fa-solid fa-xmark")


    let h5 = document.createElement("h5")
             span.innerHTML = inp.value
             h5.insertAdjacentElement("afterbegin",span)
             

    
            //  h5.appendChild(ico,icoedit,icoremove)
             h5.insertAdjacentElement("beforeend",ico)
             h5.insertAdjacentElement("beforeend",icoedit)
             h5.insertAdjacentElement("beforeend",icoremove)

             box.appendChild(h5)
                box.insertAdjacentElement("beforeend",h5)

            //  reset input after click the btn
            inp.value=''
                icoremove.onclick = ()=>{
                    h5.remove();
                }

                icoedit.onclick=()=>{
                    h5.value
                }
            

}