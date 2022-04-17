const content = document.getElementById('content');
const date = document.getElementById('date');
const time = document.getElementById('time');
const addedBtn = document.getElementById('addedBtn');
const deletedBtn = document.getElementById('deletedBtn');
const list = document.getElementById('list');

const listContent = [];

addedBtn.addEventListener('click',function(){
    //console.log(content.value)
    //console.log(date.value)
    //console.log(time.value)


    listContent.push({
        content: content.value,
        date: date.value,
        time:time.value
    })

    let htmlStr=''

    listContent.forEach(function(item){
        //模板語法
        htmlStr =   htmlStr + `
        <div class="item">
            <div>
                <p>內容:${item.content}</p>
                <p>時間:${item.date}${item.time}</p>
            </div>
        </div>
        `
    })
