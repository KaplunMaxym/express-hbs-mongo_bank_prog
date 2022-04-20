function getdetails(obj) {
    var to_data = document.getElementById(obj.id + 'to')
    var from_data = document.getElementById(obj.id + 'from')
    var save = document.getElementById(obj.id + 'save')

    if (to_data.style.cssText == "display: none;"){
        to_data.style.cssText = "display: contents;";
        save.style.cssText = "display: contents;";
        from_data.style.cssText = "display: none;";
    }
    else if(to_data.style.cssText == ""){
        to_data.style.cssText = "display: contents;";
        save.style.cssText = "display: contents;";
        from_data.style.cssText = "display: none;";
    }
    else {
        to_data.style.cssText = "display: none;";
        save.style.cssText = "display: none;";
        from_data.style.cssText = "display: contents;";
    }
}

var add_cur = document.getElementById('add_cur')
add_cur.onclick = function(){
    var add_cur = document.getElementsByClassName('add_div')
    console.log(add_cur[0].style.cssText);
    if (add_cur[0].style.cssText == "display: none;"){
        add_cur[0].style.cssText = "display: flex;";
    }
    else if(add_cur[0].style.cssText == ""){
        add_cur[0].style.cssText = "display: flex;";
    }
    else {
        add_cur[0].style.cssText = "display: none;";
    }
}