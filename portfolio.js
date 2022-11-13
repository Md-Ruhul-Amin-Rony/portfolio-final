
let portfolioSection=document.getElementById("portfolioSection");
let name=document.getElementById("name");

let url= "https://api.github.com/users/Md-Ruhul-Amin-Rony/repos";
async function getTodoList() {
    let response= await fetch(url);
    if(response.ok){
        let data= await response.json();
        //debugger
        let cardHTML = '';
        data.map(element => {
        cardHTML += '<div class="portfolio-item item" style="overflow:scroll;">\
        <div class="item-details">\
        <a href='+element.html_url+' target="_blank">\
            <h3>'+element.name+'</h3> \
            <p>'+element.full_name+'</p> \
        </a>\
        </div>\
    </div>\
    ';
});

document.getElementsByClassName('portfolio')[0].innerHTML = cardHTML;
    }};
    getTodoList();
    