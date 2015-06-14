$(function () {
    var init = function () {
        $('#enhanced-github-wrapper').remove();

        var el = $('.pull-header-username').parent().children('.commit-ref')[1];

        var userEl = $(el).children('.css-truncate-target')[0];
        var branchEl = $(el).children('.css-truncate-target')[1];

        var username = $(userEl).text();
        var branch = $(branchEl).text();
        var prNumber = $('.gh-header-number').text().replace('#', '');

        var copyBranchName = $('<button>Copy branch name</button>')
            .addClass('btn btn-sm enhanced-github-margin')
            .click(function () {
                copyToClipboard(branch, 'text/plain');
            });

        var copyFrbCommand = $('<button>Copy FRB command</button>')
            .addClass('btn btn-sm enhanced-github-margin')
            .click(function () {
                copyToClipboard('git frb ' + username + ' ' + branch, 'text/plain');
            });

        var copyFprCommand = $('<button>Copy FPR command</button>')
            .addClass('btn btn-sm enhanced-github-margin')
            .click(function () {
                copyToClipboard('git fpr ' + prNumber, 'text/plain');
            });

        var $wrapper = $('<div id="enhanced-github-wrapper"></div>');
        $wrapper.append([
            copyBranchName,
            copyFrbCommand,
            copyFprCommand
        ]);

        $('.discussion-sidebar')
            .prepend($wrapper);
    };

    var copyToClipboard = function (str, mimetype) {
        var copyCallback = function (event) {
            event.clipboardData.setData(mimetype, str);
            event.preventDefault();
        };
        document.addEventListener('copy', copyCallback);
        document.execCommand('Copy', false, null);
        document.removeEventListener('copy', copyCallback);
    };

    init();
});
