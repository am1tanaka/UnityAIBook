// assets/js/copy-code.js

document.addEventListener("DOMContentLoaded", function () {
    // すべてのコードブロック (Slateテーマのコードブロックのラッパー) を選択
    var codeBlocks = document.querySelectorAll('pre.highlight');

    codeBlocks.forEach(function (codeBlock, index) {
        // 各コードブロックに一意のIDを設定
        var uniqueId = 'code-block-' + index;
        codeBlock.setAttribute('id', uniqueId);

        // 💡 変更点: コピーしたいコードのテキスト全体を取得 (改行を保持)
        // <code>要素のtextContentプロパティを使う
        var codeElement = codeBlock.querySelector('code');
        if (!codeElement) return; // <code>要素がない場合はスキップ

        var codeText = codeElement.textContent; // <pre><code>...</code></pre> の中身を改行ごと取得

        // コピーボタンの要素を作成
        var copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';
        copyButton.innerHTML = 'Copy';

        // 💡 変更点: コピーしたいテキスト全体を data-clipboard-text 属性に設定
        copyButton.setAttribute('data-clipboard-text', codeText);

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
