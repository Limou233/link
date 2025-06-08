
const textElement = document.getElementById('textToCopy');

textElement.addEventListener('click', () => {
    const text = textElement.innerText;

    navigator.clipboard.writeText(text).then(() => {
        // 创建提示框
        const toast = document.createElement('div');
        toast.className = 'copy-toast';
        toast.textContent = '已复制到剪切板';

        document.body.appendChild(toast);

        // 强制重排以确保动画重新播放
        void toast.offsetWidth;

        // 触发动画
        toast.style.animation = 'toastIn 0.4s ease forwards, toastOut 0.4s 1.2s ease forwards';

        // 设置定时器移除提示
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 1600); // 总动画时间：0.4s + 1.2s
    }).catch(err => {
        console.error('复制失败:', err);
    });
});
