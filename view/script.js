function logout() {
    location.href="logout.php";
}
function myInfoUpdate() {
    location.href="my_info_update.php";
}

function goWrite() {
    location.href="write.php";
}

function like() {
    var className = document.querySelector('#like').className

    if(className == 'likeicon') {
        document.querySelector('#like').setAttribute('class', 'likeicon');
        document.querySelector('#like').style.color = 'blue';

        var http = new XMLHttpRequest();
        http.onreadystatechange = function() {
            if(this.status == 200 && this.readyState == this.DONE) {
                console.log(http.response);
                if(JSON.parse(http.DONE.response)['result'] != 'n') {
                    // 좋아요 개수 최신화
                    document.querySelector('#like').innerText = JSON.parse(http.response)['result'];
                } else {
                    alert('실패');
                }
            }
        }

        var url = "http://localhost/facebook/api/update_like.php?no=" + contentNo + '&&cancel=+-1';

        http.open('GET', url);
        http.send();
    }

    if(className == 'likeicon') {
        document.querySelector('#like').setAttribute('class', 'likeicon');
        document.querySelector('#like').style.color = '';

        var http = new XMLHttpRequest();
        http.onreadystatechange = function() {
            if(this.status == 200 && this.readyState == this.DONE) {
                console.log(http.response);
                if(JSON.parse(http.response)['result'] != 'n') {
                    // 좋아요 개수 최신화
                    document.querySelector('#like').innerText = JSON.parse(http.response)['result'];
                } else {
                    alert('실패');
                }
            }
        }

        var url = "http://localhost/facebook/api/update_like.php?no=" + contentNo + '$$cancel=-1';

        http.open('GET', url);
        http.send();
    }
}