/* eslint-env node, es6 /
/ eslint-parserOptions.ecmaVersion: 6 */
(function (document) {
    'use strict';

    var symbol = document.getElementById('pyramid-symbol'),
        height = document.getElementById('pyramid-size'),
        value = document.getElementById('pyramid-size-value'),
        pyramid = document.getElementById('pyramid');

    function printPyramid(options) {
        var height = options.hei || 5,
            symbol = options.sym || '#';
        var brick = `<span class="brick">${symbol}</span>`,
            space = '<span class="space">&nbsp;</span>';
        var pyramid = new Array(height),
            i, DOMnode;

        pyramid[height - 1] = new Array(height + 2).join(brick);
        for (i = height - 2; i >= 0; i--) {
            pyramid[i] = pyramid[i + 1].replace(brick, space);
        }

        return pyramid;
    }

    function getCurrentSelection() {
        return {
            sym: symbol.options[symbol.selectedIndex].value,
            hei: +height.value
        };
    }

    function render() {
        var params = getCurrentSelection(),
            builtPpyramid = printPyramid(params);
        var DOMnode = document.createElement('p');

        DOMnode.innerHTML = builtPpyramid.join('<br>');
        pyramid.innerHTML = DOMnode.innerHTML;
//        document.getElementById('construction').textContent = '';
        value.textContent = params.hei;
    }

    window.addEventListener('input', render);

    render();
})(window.document);
