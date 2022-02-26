$(document).ready(function(){
    //js header
    $(window).scroll(function() {
        if($(this).scrollTop()){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
    })

    //js gototop
    $("#gototop").hide();
    $(window).scroll(function(){
        if($(this).scrollTop() >= 500){
            $("#gototop").show("slow");
        }else{
            $("#gototop").hide("slow");
        }
    })

    $("#gototop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        },1000);
        
    })
}) 
// login
function go_TrangChu() {
    if(document.querySelector('#username').value == 'admin' && document.querySelector('#password').value == 'admin')
       {
        window.open("trangchu.html","_self");
        alert('Đăng nhập thành công!!');
       }
    else
        alert('Vui lòng Nhập tài khoản và mật khẩu hợp lệ');

}

// delete cart
$(document).ready(function(){
    $(".btn-delete").click(function(){
        $(this).parents("div").remove(".cart");
    });
  });

  

  // đăng ký

 function register() {
    window.open("trangchu.html","_self");
        alert('Đăng ký thành công!!');
}


