$(function(){
    function getinform(){
        $.ajax({
            url:"/my/userinfo",
            type:'GET',
            // headers:{
            //     Authorization:localStorage.getItem('token') || ""
            // },
            success:function(res){
                if(res.status !== 0){
                    // console.log(res);
                    layui.layer.msg('请求失败!')
                    
                }
                getPicture(res.data)
            }
        })
    }
    getinform()

    function getPicture(users){
        console.log(users);
        var name = users.nickname||users.username;
        $('#nnmm').html('欢迎&nbsp;&nbsp;'+ name);
        if(users.user_pic !== null){
            $('.layui-nav-img').attr('src',users.user_pic).show()
            $('.text-avent').hide()
            
        }else{
            
            $('.layui-nav-img').hide()
            var first = name[0].toUpperCase()
            $('.text-avent').html(first).show()
        }
    }
    $('#tuichu').on('click',function(){
        layer.confirm('您确定要退出吗？', {icon: 3, title:'提示'}, function(index){
            localStorage.removeItem('token');
            location.href="/login.html"
            layer.close(index);
        });
        // $('#tuichu').
    })
})