let searchForm = document.getElementById("searchForm")
let searchBox = document.getElementById("searchBox")
let submitBtn = document.getElementById("submitBtn")
let searchResult = document.getElementById("searchResult")
let showMoreBtn = document.getElementById("showMoreBtn")



let keyword='';
let page=1;
async function searchImages(){
    keyword = searchBox.value;
    url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=_na1riDB5KFgQdwe5_y-FDLuSj8Ga5VbERZ6ob6f9qY&per_page=12`;

    let response = await fetch(url);
    let data = await response.json();
    const results = data.results;

    results.map((e)=>{
        const aTag = document.createElement("a");
        aTag.href=e.links.html;
        aTag.target = "_blank";
        const imgTag = document.createElement("img");
        imgTag.src=e.urls.small;
        aTag.appendChild(imgTag);
        searchResult.appendChild(aTag);
    })
    showMoreBtn.style.display = "block"
}


searchForm.addEventListener("submit",(e)=>{
    page=1
    e.preventDefault();
    searchImages();
})

showMoreBtn.addEventListener("click",(e)=>{
    page++;
    searchImages();
})






//_na1riDB5KFgQdwe5_y-FDLuSj8Ga5VbERZ6ob6f9qY
// https://api.unsplash.com/search/photos?page=1&query=office&client_id=_na1riDB5KFgQdwe5_y-FDLuSj8Ga5VbERZ6ob6f9qY