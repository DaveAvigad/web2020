
// #2.1

// (function () {
//     var text = 'Hello world ?? ';
//     var text2 = 'Hello world 🤩 ';
//     var button = document.getElementById('switch');
//     console.log('button is:', button);
//     var title = document.getElementById('title');
//     var counter = 0;
//
//     button.onclick = function () {
//         counter++;
//         if(counter % 2 == 0) {
//             return title.innerText = text;
//         }
//         return title.innerText = text2;
//     }
// })();


(function (){
    document.getElementById("thisbutton").onclick = function(){
        var obj= document.getElementById("headline");
        obj.innerText = "you pushed the button!!";
    }
})();
