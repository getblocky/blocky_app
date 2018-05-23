/* eslint-disable */

if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ?
        ':' + window.location.port : '');
}
$(document).ready(function () {
    window.addEventListener('hashchange', getProjectData, false);
    var script = {
        name: '',
        xml: '',
        python: '',
        mode: 'block'
    };
    getProjectData();

    function getProjectData() {
        var projectId = window.location.hash.substr(1);
        $('.content').hide();
        $.ajax({
            type: 'GET',
            url: 'https://api.getblocky.com/prod/share/scripts/' + projectId,
            dataType: 'json',
            success: function (data) {
                $('#project-name').text(data.name);
                script.name = data.name;
                script.xml = data.xml;
                script.python = data.python;
                script.mode = data.mode;
                if (data.mode === 'block') {
                    $('#blocklyArea').show();
                    $('#blocklyDiv').show();
                    showBlock(data.xml);
                } else if (data.mode === 'python') {
                    $('#codeArea').show();
                    showPython(data.python);
                }
            },
            error: function () {
                $('#message').html(
                    '<p style="color:red;">Error : The resource you are looking for is not available'
                );
            }
        });
    }

    $('#edit-project').click(function () {
        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem('script', JSON.stringify(script));
            window.open(window.location.origin + '/#/codelab', '_blank');
        }
    });
});

function showBlock(xmlText) {
    var blocklyArea = document.getElementById('blocklyArea');
    var blocklyDiv = document.getElementById('blocklyDiv');
    var workspace = Blockly.inject('blocklyDiv', {
        grid: {
            spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true
        },
        toolbox: document.getElementById('toolbox'),
        zoom: {
            controls: true,
            wheel: false
        }
    });

    if (inIframe()) {
        $('.blocklyFlyout').addClass('overlay');
        $('.blocklyBlockCanvas').addClass('overlay');
    }

    var onresize = function () {
        // Compute the absolute coordinates and dimensions of blocklyArea.
        var element = blocklyArea;
        var x = 0;
        var y = 0;
        do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent;
        } while (element);
        // Position blocklyDiv over blocklyArea.
        blocklyDiv.style.left = x + 'px';
        blocklyDiv.style.top = '48px';
        blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        blocklyDiv.style.height = blocklyArea.offsetHeight - 48 + 'px';
    };
    window.addEventListener('resize', onresize, false);
    onresize();
    Blockly.svgResize(workspace);

    var xml = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(xml, workspace);
}

function showPython(code) {
    $('code').html(code);
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
        hljs.lineNumbersBlock(block);
    });
}

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}