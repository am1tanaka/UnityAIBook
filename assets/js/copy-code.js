// assets/js/copy-code.js

document.addEventListener("DOMContentLoaded", function () {
    // すべてのコードブロック (Slateテーマのコードブロックのラッパー) を選択
    var codeBlocks = document.querySelectorAll('pre.highlight');

    codeBlocks.forEach(function (codeBlock, index) {
        // 各コードブロックに一意のIDを設定
        var uniqueId = 'code-block-' + index;
        codeBlock.setAttribute('id', uniqueId);

        // コピーボタンの要素を作成
        var copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';
        copyButton.innerHTML = 'Copy';
        copyButton.setAttribute('data-clipboard-target', '#' + uniqueId + ' > code'); // コピー対象は<code>タグの中身

        // ボタンをコードブロックのラッパー要素（<pre.highlight>）に追加
        codeBlock.prepend(copyButton);

        // クリップボード機能を初期化
        var clipboard = new ClipboardJS(copyButton);

        clipboard.on('success', function (e) {
            e.clearSelection();
            copyButton.innerHTML = 'Copied!';
            setTimeout(function () {
                copyButton.innerHTML = 'Copy';
            }, 2000);
        });

        clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            copyButton.innerHTML = 'Failed';
            setTimeout(function () {
                copyButton.innerHTML = 'Copy';
            }, 2000);
        });
    });
});
