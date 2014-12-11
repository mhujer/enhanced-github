$(function () {
    var init = function () {
        var el = $('.pull-header-username').parent().children('.commit-ref')[1];

        var userEl = $(el).children('.css-truncate-target')[0];
        var branchEl = $(el).children('.css-truncate-target')[1];

        var username = $(userEl).text();
        var branch = $(branchEl).text();

        var copyFrbCommand = $('<button>Copy FRB command</button>')
            .addClass('minibutton')
            .click(function () {
                copyToClipboard('git frb ' + username + ' ' + branch, 'text/plain');
            })
            .insertAfter(el);

        var copyBranchName = $('<button>Copy branch Name</button>')
            .addClass('minibutton')
            .click(function () {
                copyToClipboard(branch, 'text/plain');
            })
            .insertAfter(el);
    };

    var copyToClipboard = function (str, mimetype) {
        document.oncopy = function (event) {
            event.clipboardData.setData(mimetype, str);
            event.preventDefault();
        };
        document.execCommand("Copy", false, null);
    };

    init();
});
