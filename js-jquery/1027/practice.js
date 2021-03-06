// we will add this content, replace for anything you want to add
var wrapper, content, test;
var more = '<div style="height:1000px; background:#EEE;"></div>';

// this is the scroll event handler
function scroller() {
    // print relevant scroll info
    test.innerHTML = wrapper.scrollTop + " + " + wrapper.offsetHeight + " + 100 > " + content.offsetHeight;

    // add more contents if user scrolled down enough
    if (wrapper.scrollTop + wrapper.offsetHeight + 100 > content.offsetHeight) {
        content.innerHTML += more; // NK: Here you can make an Ajax call and fetch content to append to content.innerHTML
    }
}

wrapper = document.getElementById("wrapper");
content = document.getElementById("content");
test = document.getElementById("test");

content.innerHTML = more;

// hook the scroll handler to scroll event
if (wrapper.addEventListener) // NK: Works on all new browsers
    wrapper.addEventListener("scroll", scroller, false);

else if (wrapper.attachEvent) // NK: Works on old IE
    wrapper.attachEvent("onscroll", scroller);