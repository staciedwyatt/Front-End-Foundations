

//another try//

    function gitRepo() {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              results = JSON.parse(this.responseText);
              for(let i = 0; i < results.length; i ++){
                console.log(results[i].name);
                let ul = document.getElementById("respositories");
                let li = document.createElement("li");
                li.className = "list-group-item";
                let a = document.createElement("a");

                li.appendChild(document.createTextNode(results[i].name));
                a.appendChild(li);
                a.setAttribute("href", results[i].html_url);
                ul.appendChild(a);
            

              }
                
            }
          };
          xhttp.open("GET", "https://api.github.com/users/staciedwyatt/repos", true);
          xhttp.send();
        }

    
    