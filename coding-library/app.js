//coding library list
//keyword should always be included in first element of tag.
// first tag should be the name of keyword
codeList = [
    {
        keyword:"Math.random()",
        description: "produces a number from 0 to 1 but not including 1.",
        language: "JavaScript",
        examples:"let randomNum = Math.random()",
        tags: ["math","generate","random","number"]
    },
    {
        keyword: "Math.floor()",
        description: "rounds down the The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number. to the nearest whole number",
        language: "JavaScript",
        examples: "let wholeNum = Math.floor(Math.random()*5)",
        tags: ["math","floor","round down","whole number"]
    },
    {
        keyword: ".sort(function(a,b)...)",
        description: "sorting an object by one of its properties in alphabetical order. edited3/5/23",
        language:"JavaScript",
        examples:`objArray.sort(function(a, b) {
            return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0;
        });
        `,
        tags:["sort","object","alphabetical"]
    },
    {
        keyword:".sort(function(a,b)...)",
        description:"sorting an object by one of its properties from smallest to largest integer",
        language:"JavaScript",
        examples:`objArray.sort((a,b) => a.age - b.age));`,
        tags:["sort","numerical","smallest to largest", "sort number"]
    },
    {
        keyword:".toUpperCase() /.toLowerCase()",
        description:"converts string to upper or lowercase. Does not mutate the original string",
        language:"JavaScript",
        examples:"string.<span class='HLkeyword'>toUpperCase()</span>",
        tags:["touppercase","capitalize","uppercase","lowercase"]
    },
    {
        keyword:".join(' ')",
        description: "To merge a split string in an array. .join(' ') merges with space between phrases. .join('') merges with no spaces between phrases.",
        language:"JavaScript",
        examples:`const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let text = fruits.join(" and ");
        console.log(text) = Banana and Orange and Apple and Mango`,
        tags:["join","merge"]
    },
    {
        keyword:"instanceOf",
        description: "allows you to compare an object to a constructor. It will return true if the object IS an instance of the constructor, and false if it is not.",
        language:"JavaScript",
        examples:"crow <span class='HLkeyword'>instanceOf</span> Bird;",
        tags:["instanceOf","instanceof","constructor"]
    },
    {
        keyword:"prototype",
        description:"Here is how you check which properties are <i>owned properties</i> and which ones are prototype.",
        language:"JavaScript",
        examples:`let ownProps=[]; let prototypeProps=[]; for(let property in duck) { if(duck.hasOwnProperty(property)) {ownProps.push(property);} else { prototypeProp.push(property)}}`,
        tags:["prototype","owned", "properties"]
    },
    {
        keyword:".addEventListener('input'...",
        description:"This formula allows this function to be ran everytime a new change is made to input",
        language:"JavaScript",
        examples:`search.addEventListener("input", e => {
            const value = e.target.value.toLowerCase()})`,
        tags:["addEventListener","input","search box"]
    },
    {
        keyword:".map",
        description:"The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.",
        language:"JavaScript",
        examples:`var newArray = Obj<span class="HLkeyword">.map</span>(item => item.elementname);`,
        tags:["map"]
    },
    {
        keyword:"filter positive integer",
        description:"how to filter out positive integer from an array of numbers",
        language:"JavaScript",
        examples:`let newArr = arr.filter(positive => positive > 0)
        .filter(integer => integer % parse(integer))`,
        tags:["filter","positive","integer"]
    }
]
//constants
const main = document.querySelector(".main")
const table = document.querySelector(".table")
const search = document.querySelector("[data-search]")
const darkModeToggle = document.querySelector("#darkmode-toggle")

//rendering the codeList on the landing page
function render(item) {
    let listItems = ""
    for (let i = 0; i < item.length; i++) {
        listItems += `<tr>
        <td class="keyword">${item[i].keyword}</td>
        <td class="description">${item[i].description}</td>
        <td class="examples"><code>${item[i].examples}</code></td>
        <td class="language">${item[i].language}</td>
    </tr>`         
    }
    table.innerHTML = `<tr>
    <th>Keyword</th>
    <th>Description</th>
    <th>Example</th>
    <th>Language</th>
</tr>` + listItems
}

render(codeList) //automatically renders the codeList

//sort codeList in alphabetical order
const sortAZBtn = document.querySelector("#sortaz-btn")
sortAZBtn.addEventListener("click",function() {
    codeList.sort(function(a, b) { 
        var textA = a.keyword.toUpperCase(); 
        var textB = b.keyword.toUpperCase(); 
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0; });
    render(codeList)
})

//search using tags, can include multiple tags and produce all matching results
search.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    let filteredList =[]
    let valueArr = value.split(" ")
    if(value==="") {
        render(codeList)
    } else {
        let filteredListBeta =[]
        for (let i = 0; i < valueArr.length; i++) {
            for(let j = 0; j < codeList.length; j++) {
                if(codeList[j].tags.includes(valueArr[i]) || codeList[j].tags[0].includes(valueArr[i])) { // the "or" second condition ensures result shows up even if search word isn't complete
                    filteredListBeta.push(codeList[j])
                }
            }
        }
        for (const item of filteredListBeta) {
            const isDuplicate = filteredList.find((obj) => obj.description === item.description);
          if (!isDuplicate) {
            filteredList.push(item);
          }
        }
        render(filteredList)
    }
    
})



//toggle darkmode
darkModeToggle.addEventListener("click", function() {
   main.classList.toggle("dark-mode");
   document.body.classList.toggle("dark-mode")
})