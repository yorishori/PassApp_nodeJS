
/*-----------Passwords-------------*/
/*Copy password text to clipboard*/function copyPassword() {
    var elementToCopy = event.target;
    var range = document.createRange();
    range.selectNode(elementToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

/*-----------Navigation Bar-------------*/
/* Set the width of the side navigation*/function openNav() {
    nav = document.getElementsByClassName("nav-bar")[0];
    nav.style.borderColor = "blue"
    nav.style.width = "20%";
}
/* Set the width of the side navigation to 0*/function closeNav() {
    nav = document.getElementsByClassName("nav-bar")[0];
    nav.style.borderColor = "darkgray"
    nav.style.width = "0";
}


/*-----------Filter Bar-----------------*/
/*Filter out options search input*/function filterFunction() {
    var input, filter, passwordsList, row, site, i, txtValue;
    
    input = event.target;
    filter = input.value.toUpperCase();
    row = document.getElementsByClassName("password-row");

    for (i = 0; i < row.length; i++) {
        website = row[i].getElementsByTagName("div")[0];
        txtValue = website.textContent || website.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            row[i].style.display = "";
        } else {
            row[i].style.display = "none";
        }
    }
}

/*Go to search bar when icon is hit*/function toFilter(){
    div = document.getElementsByClassName("search-bar")[0].getElementsByTagName("INPUT")[0];
    icon = document.getElementsByClassName("search-bar")[0].getElementsByTagName("DIV")[0];
    
    div.style.display = "block";
    icon.style.display = "none";
    div.focus();
}
/*Hide search bar when out of focus*/function outFilter(){
    div = document.getElementsByClassName("search-bar")[0].getElementsByTagName("INPUT")[0];
    icon = document.getElementsByClassName("search-bar")[0].getElementsByTagName("DIV")[0];
    
    div.style.display = "none";
    div.value = "";
    icon.style.display = "block";
    filterFunction();
}