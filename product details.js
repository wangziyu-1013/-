// 文字更替
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchTerms = [
        '净水器家用直饮',
        '组合购',
        '家居焕新',
        'AI节能王子',
        '洗衣机排名前十名',
        '家用净水器',
        '净水器配件大全'
    ];

    let currentIndex = 0;
    let isTyping = false;

    function updateSearchTerm() {
        if (!isTyping) {
            searchInput.value = searchTerms[currentIndex];
            currentIndex = (currentIndex + 1) % searchTerms.length;
        }
    }

    // 更新搜索框内容，每隔5秒更新一次
    setInterval(updateSearchTerm, 5000);

    searchInput.addEventListener('input', function () {
        isTyping = true;
        searchInput.value = searchInput.value;
    });

    searchInput.addEventListener('blur', function () {
        isTyping = false;
    });

    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            window.location.href = `search_results.html?query=${encodeURIComponent(searchTerm)}`;
        }
    });
});


// 第二个导航滑动时改变背景颜色
var div = document.getElementById('nav2');
// 更改为白色
if (div) {
    div.style.backgroundColor = 'white';
}

// 点击按钮，按钮消失,播放视频
var div2 = document.getElementById('zanting');
div2.onclick=function(a){
    div2.style.display='none'
}
a();

// 选项卡

