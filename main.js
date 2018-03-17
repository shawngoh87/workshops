// Init App
var myApp = new Framework7({
    modalTitle: 'Framework7',
    // Enable Material theme
    material: true,
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
});
// Add another view, which is in right panel
var rightView = myApp.addView('.view-right', {
    name: 'right'
});

// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function (e) {
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function (e) {
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
    myApp.hideIndicator();
});

$$(".add-task").on("click", function () {

    myApp.prompt("Name the task", function (data) {
        var task = `<li class="swipeout">
                        <div class="item-content swipeout-content">
                            <div class="item-inner">
                                <div class="item-title">` + data + `</div>
                            </div>
                        </div>
                        <div class="swipeout-actions-right"><a href="#" data-confirm=
"Are you sure you want to delete this item?" class="swipeout-delete">Delete</a></div>
                    </li>`;
        $$(".tasks-list").append(task);
    });

    
})