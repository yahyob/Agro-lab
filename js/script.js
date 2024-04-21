$('.load').click(function () {

    console.log($(this).data('url')+"/load")

    var countBlock = $('.news-block').length; 

    $.ajax({

        url: $(this).data('url')+"/load",

        dataType: 'json',

        type: 'POST',

        data: {"count":countBlock},

        success: function(data){

    console.log(data)

            for (var i = 0; i < data.news.length; i++) {

                addLoadMoreNews(data.news[i])

            }

            var afterCountBlock = $('.news-block').length; 

            if (data.allCount <= afterCountBlock) {

                $('.load').hide()

            }

            console.log(data.allCount)

            console.log(afterCountBlock)

        },

        error: function(error){

            console.log(error)

        }

    })



    //addLoadMoreNews();

});



function addLoadMoreNews(Inews) {

    var newRow = 

        '                        <div class="col-lg-3 col-md-6 news-block">\n' +

        '                            <a href="'+Inews.slug+'">\n' +

        '                                <div class="item">\n' +

        '                                    <div class="newsImg" style="background-image: url('+Inews.thumb+')"></div>\n' +

        '                                    <div class="info">\n' +

        '                                        <div class="date">\n' +

        '                                            <p>'+Inews.date+'</p>\n' +

        '                                        </div>\n' +

        '                                        <div class="title">\n' +

        '                                            <h3>'+Inews.defaultTranslation.title+'</h3>\n' +

        '                                        </div>\n' +

        '                                        <div class="desc">\n' +

        '                                            <p>'+Inews.defaultTranslation.description+'</p>\n' +

        '                                        </div>\n' +

        '                                    </div>\n' +

        '                                </div>\n' +

        '                            </a>\n' +

        '                        </div>';



    $('.news .aboutCol .row').append(newRow);

}

$('#nav-icon3').click(function(){
    $(this).toggleClass('open');
    $('.burgerMenu').addClass('open');
});
$('.closeBtn').click(function(){
    $('#nav-icon3').removeClass('open');
    $('.burgerMenu').removeClass('open');
});

// $('.plusIcon').click(function(){
//     $(this).toggleClass('minus');
//     $(this).closest('.item').toggleClass('open').find('.desc p').toggleClass('open');
// });


$('.vacancyElem .plusIcon, .partners .plusIcon').click(function(){
    $(this).toggleClass('minus');
    var p = $(this).closest('.item').toggleClass('open').find('.desc p');
    if ($(this).hasClass('minus')) {
        p.height(p[0].scrollHeight)
    }
    else{
        p.height(50)
    }
});

$('.services .plusIcon').click(function(){
    $(this).toggleClass('minus');
    var p = $(this).closest('.item').toggleClass('open').find('p');
    if ($(this).hasClass('minus')) {
        p.height(p[0].scrollHeight)
    }
    else{
        p.height(0)
    }
});



$('#vacancyform-cvfile').change(function(){
    if ($(this).val() == '') {
        $('.fileForm span').html('.docx, .pdf')
    }
    else{
        $('.fileForm span').html($(this)[0].files[0].name);
        console.log($(this)[0].files[0].mozFullPath);
    }
})

$("#contactform-phone").inputmask("888-888-88-88");