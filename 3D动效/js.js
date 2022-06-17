var words = [
    '健康码常绿',
    '越来越漂亮',
    '财源广进',
    '天天开心，没烦恼',
    '心想事成',
    '永远十八',
    '美梦成真',
    '五福临门',
    '吉祥如意',
    '鸿运当头',
    '百事顺遂',
    '一心一意',
    '二龙腾飞',
    '三阳开泰',
    '四季平安',
    '五福临门',
    '六六大顺',
    '七星高照',
    '八方来财',
    '九九归一',
    '十全十美',
    '不感冒，不发烧',
    '天天好吃好喝',
    '天天有人想你'
];

// 生成指定范围的随机数保留小数点后两位
function randomNum(min,max){
    var num = (Math.random() * (max - min +1) + min ).toFixed(2);
    return num;
}

// 初始函数
function init(){
    var container = document.querySelector('.container');
    var f = document.createDocumentFragment(); //创建文档片段对象

    words.forEach(w =>{
        var word_box = document.createElement('div');
        var word = document.createElement('div');

        word.innerText = w;
        word.classList.add('word');

        // 随机生成色相值 0为红色 120为绿色 240为蓝色 360为红色
        var hue = randomNum(0,240);
        word.style.color = 'hsl('+hue+',100%,65%)'
        
        word_box.classList.add('word-box');
        // 生成随机数值并赋值给自定义属性
        word_box.style.setProperty('--margin-top',randomNum(-40,20)+'vh');
        word_box.style.setProperty('--margin-left',randomNum(6,35)+'vw');
        word_box.style.setProperty('--animation-duration',randomNum(8,20)+'s');
        word_box.style.setProperty('--margin-delay',randomNum(-20,0)+'s');

        word_box.appendChild(word);
        f.appendChild(word_box)
        })
        container.appendChild(f);
}

// 绑定加载事件

window.addEventListener('load',init);