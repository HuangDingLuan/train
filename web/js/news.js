  
$(document).ready(function () {

    function get(page) {
        $('#loading').css('display', 'block');
        axios.get('https://mock-api.com/Zn5Moxnj.mock/new?page=' + page)
            .then(function (res) {
                console.log("res", res.data);
                var i;
                var item;
                $('#introduce tr:not(:first-child)').remove();
                for (i = 0; i < res.data.length; ++i) {
                    item = res.data[i];
                    console.log('item', item);
                    $('#introduce').append(" <div class='space' > <div class='card' style='width:400px'><img class='card-img-top' src=" + item.src + " alt='Card image' style='width:100%'><div  class='card-body'><h4 class='card-title'>" + item.title + "</h4><p class='card-text'> 发布日期：" + item.date + "<br>" + item.text + "</p><a href='" + item.url + "'class='btn btn-primary'>了解更多</a></div></div></div>");
                }
                $('#loading').css('display', 'none');

            })
            .catch(function (e) {
                console.log('e', e);
            });
    }
    get(1);
    $('#pagination button').click(function (){
        var page = Number($(this).text());
        get(page);
        $('#pagination button').removeClass('active');
        $(this).addClass('active');
    });

});