//document.querySelector('html').onclick = function() {
//    alert('Ouch! Stop poking me!');
//}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://pbs.twimg.com/profile_images/588130566597382145/-1EaCVVK.jpg') {
      myImage.setAttribute ('src','https://az801952.vo.msecnd.net/uploads/cd7bc391-2913-4857-967b-6d2595284695.gif');
    } else {
      myImage.setAttribute ('src','https://pbs.twimg.com/profile_images/588130566597382145/-1EaCVVK.jpg');
    }
}

