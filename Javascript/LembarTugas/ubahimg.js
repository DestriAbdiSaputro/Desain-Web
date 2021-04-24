var myImg = document.querySelector('img');

myImg.onclick = function(){
    var mySrc = myImg.getAttribute('src');

    if(mySrc == 'welcome.png'){
        myImg.setAttribute('src','welcome2.png');
    }else{
        myImg.setAttribute('src','welcome.png');
    }
}
