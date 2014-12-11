$(function () {
    var init = function () {
        var el = $('.pull-header-username').parent().children('.commit-ref')[1];

        var userEl = $(el).children('.css-truncate-target')[0];
        var branchEl = $(el).children('.css-truncate-target')[1];

        var username = $(userEl).text();
        var branch = $(branchEl).text();
        var prNumber = $('.gh-header-number').text().replace('#', '');

        var copyBranchName = $('<button>Copy branch Name</button>')
            .addClass('minibutton enhanced-github-margin')
            .click(function () {
                copyToClipboard(branch, 'text/plain');
            });

        var copyFrbCommand = $('<button>Copy FRB command</button>')
            .addClass('minibutton enhanced-github-margin')
            .click(function () {
                copyToClipboard('git frb ' + username + ' ' + branch, 'text/plain');
            });

        var copyFprCommand = $('<button>Copy FPR command</button>')
            .addClass('minibutton enhanced-github-margin')
            .click(function () {
                copyToClipboard('git fpr ' + prNumber, 'text/plain');
            });

        $('.discussion-sidebar')
            .prepend([
                copyBranchName,
                copyFrbCommand,
                copyFprCommand
            ]);
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
