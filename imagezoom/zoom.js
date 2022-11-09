$('.product-img--main')
    .on('mouseover', function () {
        $(this).children('.product-img--main__image').css({ 'transform': 'scale(' + $(this).attr('data-scale') + ')' });
    })
    .on('mouseout', function () {
        $(this).children('.product-img--main__image').css({ 'transform': 'scale(1)' });
    })
    .on('mousemove', function (e) {
        $(this).children('.product-img--main__image').css({ 'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%' });    })
    .each(function () {
        $(this)
            .append('<div class="product-img--main__image"></div>')
            .children('.product-img--main__image').css({ 'background-image': 'url(' + $(this).attr('data-image') + ')' });
    });
