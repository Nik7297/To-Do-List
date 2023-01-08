
let inp =document.querySelector(".inp")

let btn =document.querySelector(".btn")
let box =document.querySelector(".box")

btn.onclick = ()=>{
    // let inpvalue = inp.value
    // alert(inpvalue)











    let ico=document.createElement("i")
    ico.setAttribute("class","fas fa-check")

    let icoedit=document.createElement("i")
    icoedit.setAttribute("class","far fa-edit")

    let icoremove=document.createElement("i")
    icoremove.setAttribute("class","fa-solid fa-xmark")


    let h5 = document.createElement("h5")
             h5.innerHTML = inp.value
    
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
                    inp.innerHTML = h5.value
                }
            

}