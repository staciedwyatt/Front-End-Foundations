let getInfo = new XMLHttpRequest();
getInfo.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        let infoObject = JSON.parse(this.responseText);
        document.getElementById("name").innerHTML = infoObject.name;
        document.getElementById("birthday").innerHTML = infoObject.birthday;
     }
    };

getInfo.open("GET","einstein.json",true);
getInfo.send();

// button section//
function showBio() {
getInfo.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        let infoObject = JSON.parse(this.responseText);
        document.getElementById("bio").innerHTML = infoObject.bio;
        }
   
    };
getInfo.open("GET","einstein.json",true);
getInfo.send();
}


