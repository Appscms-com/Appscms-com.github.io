
var sampleJson = dataToShow.repolist;
console.log(sampleJson);
var starVal = 0;
var showArr = '';
let starsCount = 0;
let forksCount =0;
let languagefilter = '';
let licensefilter = '';
var categoryList=[];
var options = "<option value=''>All</option>";
sampleJson && sampleJson.map((item)=>{
    if(item.license){
        if (categoryList.includes(item.license) === false){
            categoryList.push(item.license);
            options += "<option>"+ item.license +"</option>";
        }   
    }
})
document.getElementById("license").innerHTML = options;

function updateInput(val) {
    document.getElementById("stars-value").innerHTML = starsCount?starsCount:0;
    document.getElementById("forks-value").innerHTML = forksCount?forksCount:0;
    if(val.name ==='stars'){
        starsCount = val.value;
    }else if(val.name ==='forks'){
        forksCount = val.value;
    }else if(val.name ==='license'){
        licensefilter =val.value;
    }else if(val.name ==='language'){
        languagefilter = val.value;
    }

    starVal = val;
    console.log(languagefilter);
    console.log(licensefilter);

    showArr = sampleJson.filter(function (e) {
        return (e.stargazersCount > starsCount && e.forks > forksCount && (e.license==licensefilter) &&  (e.language==languagefilter))
    });
    showFilterData(showArr);

  }
  if(!showArr){
    showFilterData(sampleJson);
  }
function showFilterData(showArr){
    document.getElementById("repo-count").innerHTML = `<h3>Showing ${showArr.length} results</h3>`;
    var x ="", i;
    showArr && showArr.map(item=>{
    x = x + `<div class="mt-n1">
    <div class="f4 text-normal">
    <a class="v-align-middle" href="${item.gitUrl}">${item.name}</a>
    </div>
    <p class="mb-1">
        ${item.description}
    </p>
    <div>
        
    <div class="d-flex flex-wrap text-small text-gray">
        <div class="mr-3">
            <a class="muted-link" href="${item.gitUrl}">
                <svg aria-label="star" class="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                ${item.stargazersCount}
            </a>
        </div>

        <div class="mr-3">
            <span>
            <span class="repo-language-color" style="background-color: #dea584"></span>
            <span itemprop="programmingLanguage">${item.language}</span>
            </span>
        </div>
        <div class="mr-3">
         <relative-time class="no-wrap" title="16 Nov 2020, 16:02 GMT+5:30">${item.license?item.license:''}</relative-time>
        </div>
        <div class="mr-3">
        Updated <relative-time class="no-wrap" title="16 Nov 2020, 16:02 GMT+5:30">${item.updatedAt?item.updatedAt:''}</relative-time>
        </div>

    </div>
    </div>
    </div> <hr/>`;

    }) 
    
    document.getElementById("git-card").innerHTML = x;
}