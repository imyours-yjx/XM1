$(function(){
    $('#dlu').on('click',function(){
        $('.reg-box').show()
        $('.login-box').hide()
    })
    $('#zce').on('click',function(){
        $('.reg-box').hide()
        $('.login-box').show()
    })


    var form = layui.form;
    var layer = layui.layer;
    form.verify({
        pwd:[/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'],
        repwd:function(value){
            var password = $('.reg-box [name=password]').val()
            if( password !== value){
                return 'sry,are u sillyB? are u xyc or sbcmw?'
            }
            
        }
    })

    $('#forml').on('submit',function(e){
        e.preventDefault()
        $.ajax({
            url:'http://ajax.frontend.itheima.net/api/reguser',
            type:'POST',
            data:{username:$('#forml [name=username]').val(),password:$('#forml [name=password]').val()},
            success:function(res){
                if(res.status !== 0){
                    layer.msg(res.message)
                }
                layer.msg('😀 Cool,Pretty Boy,u must have a big dick !')
                $('#zce').click()
            }

        })
    })

    $('#formr').on('submit',function(e){
        e.preventDefault()
        $.ajax({
            url:'http://ajax.frontend.itheima.net/api/login',
            type:'POST',
            data:{
                username:$('#formr [name=username]').val(),
                password:$('#formr [name=password]').val()
            },

            success:function(res){
                if( res.status !== 0){
                    return layer.msg('哦豁，你又输错了')
                }
                layer.msg('屌咯屌咯');
                localStorage.setItem('token',res.token);
                location.href = '/index.html'
                
                


            }
        })
    })
})