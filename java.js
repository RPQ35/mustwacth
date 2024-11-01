var baru = document.getElementsByClassName('nav-item');
var loby =document.getElementById('loby');
var content =document.getElementById('main-content-window-user');

Array.from(baru).forEach(function(item) {
    item.addEventListener('click', function() {
        let value=this.getAttribute('data-value')
        console.log(value)

        Array.from(baru).forEach(function(innerItem) {
            innerItem.style.backgroundColor = 'transparent';});

        if(value==1){wind1fun();this.style.backgroundColor="#8ABFA3";}
        else if(value==2){wind2fun();this.style.backgroundColor="#8ABFA3";}
        else if (value ==3){wind3fun();this.style.backgroundColor="#8ABFA3";}
    });
});


function wind1fun (){
content.style.display='none';
loby.style.display='block';
}

function wind2fun(){
    content.style.display='block';
    loby.style.display='none';
    // bikin code khusus untuk ngebuat foto dan isinya sesuai nama window
}

function wind3fun(){
    content.style.display='block';
    loby.style.display='none'; 
     // bikin code khusus untuk ngebuat foto dan isinya sesuai nama window
}
