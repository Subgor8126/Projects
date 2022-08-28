// document.getElementById('input-btn').addEventListener('click', function(){
//     console.log('So this is addEventListener');
// })
let myLeads = [];
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.martingarrix.com");
// myLeads = JSON.stringify(myLeads);
// console.log(myLeads);
// console.log(typeof myLeads);

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');
const ulEl = document.getElementById('ul-el');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));



tabBtn.addEventListener('click', function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){

        // Uncaught TypeError: Cannot read properties of undefined (reading 'query')
        // The above error occurs because the chrome.tabs API only works when we have 
        // opened it as a chrome extension
        // Hence, just open the extension and the error will go away

        console.log(tabs);
        // console.log(tabs[0].url);
        //Use the . notation to get a value from a key in an object
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        render(myLeads);
    })
    
})

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
    let listItems = "";
    for (let i=0; i<leads.length; i++){
        listItems+=`
        <li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
        </li>`;
    
        // VVIMP:- If anchor tag link is not opening, or opens in 127.0.0.0 or something, 
        // just add two front slashes before the link in the href statement of the anchor tag
        // like href='//www.openai.com
    
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    
    ulEl.innerHTML = listItems;
    }

// localStorage.setItem("myLeads", "www.openai.com");
// console.log( localStorage.getItem("myLeads") );
// console.log("Look at the link above")
// localStorage.clear()
// console.log( localStorage.getItem("myLeads") );
// console.log("Hey, are you there")

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear();
    myLeads = [];
    // ulEl.innerHTML = null;
    render(myLeads);
})

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    // The value property sets or returns the value of the value attribute of a text field
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    console.log(localStorage.getItem("myLeads"));
})

