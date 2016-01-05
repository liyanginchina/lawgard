//分类菜单下拉选择
var isOpen = false;
/**
 * 菜单分类选择
 * @return
 */
function chooseType() {
    if (!isOpen) {
        $(".tree_flag").show();
        isOpen = true;
        $("#blackDiv").addClass("hei");
        ;
    } else {
        $(".tree_flag").hide();
        isOpen = false;
        $("#blackDiv").removeClass("hei");
        ;
    }
}

/**
 * 显示搜索条
 * @return
 */
function showSearch() {
    //关闭分类菜单
    $(".tree_flag").hide();
    isOpen = false;

    //主导航栏隐藏
    $("#topDiv").hide();

    //搜索条显示
    $("#searchDiv").show();
    $("#blackDiv").addClass("hei");

    $(".sear_input").focus();
}

/**
 * 隐藏搜索条
 * @return
 */
function hideSearch() {
    //搜索条隐藏
    $("#searchDiv").hide();
    $("#blackDiv").removeClass("hei");
    ;

    //主导航栏隐藏
    $("#topDiv").show();
}


/**
 * 分类菜单选择
 * @param type
 * @return
 */
function typeSelectd(type, obj) {
    //菜单栏隐藏
    $(".tree_flag").hide();
    $("#blackDiv").removeClass("hei");
    ;
    isOpen = false;

    //搜索条内容初始化
    $(".sear_input").val("");

    $(".a_visited").removeClass("a_visited");
    $(obj).addClass("a_visited");

    /*searchNews(type,"","",0);*/
}

/*调用菜单栏隐藏*/
$(function () {
    $(".nav_ul li a").click(function () {
        $('.top_cen').html($(this).html());
        typeSelectd($(this).attr('data-id'), $(this));
    })
})