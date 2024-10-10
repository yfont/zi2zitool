// 防抖函数，防止频繁触发
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// 更新预览文本
const updatePreview = debounce(() => {
    const userInput = document.getElementById('userText').value.trim() || '一切有为法如梦幻泡影如露亦如电';
    document.querySelectorAll('.font-preview-text').forEach(p => {
        p.textContent = userInput;
    });
}, 300);

// 更新预览字体大小
const updateFontSize = debounce(() => {
    const fontSize = document.getElementById('fontSizeSlider').value;
    document.querySelectorAll('.font-preview-text').forEach(p => {
        p.style.fontSize = `${fontSize}px`;
    });
    document.getElementById('fontSizeValue').textContent = `${fontSize}px`;
}, 100);

// 绑定输入事件
document.getElementById('userText').addEventListener('input', updatePreview);

// 绑定滑块事件
document.getElementById('fontSizeSlider').addEventListener('input', updateFontSize);

// 初始化字体大小显示
document.addEventListener('DOMContentLoaded', () => {
    const fontSize = document.getElementById('fontSizeSlider').value;
    document.getElementById('fontSizeValue').textContent = `${fontSize}px`;
});
