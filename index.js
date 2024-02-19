
let links = []
const inputs = document.getElementById("inputs");
const inputbtn = document.getElementById("inputbtn");
const list = document.getElementById("list");
const dlt = document.getElementById("dltbtn")

const savedlinks = JSON.parse(localStorage.getItem("links"))

if(savedlinks){
    links = savedlinks
    renderlist()
}

inputbtn.addEventListener("click", function(){
    console.log("button clicked !!!!");
    links.push(inputs.value)
    inputs.value = ""
    localStorage.setItem("links",JSON.stringify(links))
    console.log(localStorage.getItem("links"))
    renderlist()
})

dlt.addEventListener("click", function(){
    localStorage.clear()
    links = []
    renderlist()
    console.log("deleted")
} )

function renderlist() {
    let listItems = ""
    for (let i = 0; i < links.length; i++) {
     // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${links[i]}'>
                    ${links[i]}
                </a>
            </li>
        `
    }
    list.innerHTML = listItems  
}