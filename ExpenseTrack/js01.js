const list = document.getElementById('list');
const deleteBtns = document.getElementsByClassName('delete-btn');
const submitBtn = document.getElementsByClassName('btn')[0];


//初始化界面
function updateUI() {
    storageResult = localStorage.getItem('storageResult');
    for (let index = 0; index < storageResult.length; index++) {
        let name = storageResult(index)[0];
        let amount = storageResult(index)[1];

        li = document.createElement('li');
        list.appendChild(li);
        li.innerText = name;

        span = document.createElement('span');
        li.appendChild(span);
        span.innerText = amount;

        if (amount >= 0) { li.setAttribute('class', 'plus') } else { li.setAttribute('class', 'minus') }

        deleteBtn = document.createElement('button');
        li.appendChild(deleteBtn);
        deleteBtn.innerText = 'x';
        deleteBtn.setAttribute('class', 'delete-btn');
    }
}

//更新localhost存储
function storageUpdate() {

}

//增加项并更新页面
function addItemAndUpdate(event) {

}

//减少项并更新页面
function reduceItemAndUpdate(event) {

}

//事件：项的增加
submitBtn.addEventListener('click', addItemAndUpdate)
    //事件：项的减少
deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', reduceItemAndUpdate)
});