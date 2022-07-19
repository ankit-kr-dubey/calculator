let area = document.getElementById("area")
let bito = document.querySelectorAll(".bito")
Array.from(bito).forEach(function(bito){
    bito.addEventListener("click",function(e){
        console.log(e.target.innerText)
        e.preventDefault()
       switch (e.target.innerText) {
        case "=":try{ 
            area.innerText=eval(area.innerText)
        }
        catch{
            area.innerText= '😬 ERROR! 😬'
            area.style.textAlign=center
        }
            break;
            case "←":
                area.innerText = area.innerText.slice(0,-1)
                break;
                case "AC":

        area.innerText =""
                    break;
       
           default:      
           area.innerText += bito.innerText
       }
      
    })
})

switch (key) {
    case value:
        
        break;

    default:
        break;
}