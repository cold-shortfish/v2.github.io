// //wait for all iamges to load
// const $grid =  $('.grid').imagesLoaded(() => {
//     //activate masonry
//     $('.grid').masonry ({
//         //select items
//         itemSelector: '.grid-item',
//         //set width
//         columnWidth: '.grid-item',
//         fitWidth: true,
//     })
// });

$(document).ready(function() {
    // Select the grid
    var $grid = $('.grid');

    // Initialize Masonry after all images have loaded
    $grid.imagesLoaded().done(function() {
        // Initialize Masonry
        $grid.masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
        });

        // Initialize Isotope after Masonry
        $grid.isotope({
            itemSelector: '.grid-item',
            masonry: {
                gutter: 100,
                horizontalOrder: true,
            }
        });
    });

    // Bind filter button click
    $('.filters').on('click', '.filter', function() {
        var filterValue = $(this).attr('data-filter');
        // Use filterFn if matches value
        $grid.isotope({ filter: filterValue });

        // Update the active class
        $('.filter').removeClass('active');
        $(this).addClass('active');
    });
});
