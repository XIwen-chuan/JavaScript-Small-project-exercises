const list = document.getElementById('list');
const deleteBtns = document.getElementsByClassName('delete-btn');
const submitBtn = document.getElementsByClassName('btn')[0];
const text = document.getElementById('text');
const amount = document.getElementById('amount');


//初始化界面
function updateUI() {
    storageResult = localStorage.getItem('storageResult');
    //storageResult的数据结构：[ [name1,amount1],[name2,amount2],...,[nameN,amountN] ]
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
function addItemAndUpdate() {
    let name = text.innerText;
    let money = amount.innerText;

    storageResult = localStorage.getItem('storageResult');
    storageResult.push([name, money]);
    localStorage.setItem('storageResult', storageResult)
    updateUI();
}

//减少项并更新页面
function reduceItemAndUpdate(event) {
    let deleteBtn
}

//事件：项的增加
submitBtn.addEventListener('click', addItemAndUpdate)
    //事件：项的减少
deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', reduceItemAndUpdate)
});