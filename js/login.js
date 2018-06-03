$(function(){
	console.log($(window).height()); 
//	document.body.style.height= $(window).height()+"px";
	//input绑定失去，获取焦点事件
    $(".useName").on({"focus":useNamefn,"blur":useNamefn1});
    function useNamefn(){
    	$(".err").css("display","none");
    	$(".useName").css("width","90%");
    }
    function useNamefn1(){
    	$(".useName").css("width","80%");
    }
    $(".pass").on({"focus":passfn,"blur":passfn1});
    function passfn(){
    	$(".err").css("display","none");
    	$(".pass").css("width","90%");
    }
    function passfn1(){
    	$(".pass").css("width","80%");
    }
    //登录验证
    $(".btn").on("click",function(){
    	//手机号，密码填写正确
    	if($(".useName").val()==1){
    		$(".err").css("display","none");
    		window.location.href = "../index.html";
    	}else{
    		$(".err").css("display","block");
    		$(".useName").val("");
    		$(".pass").val("");
    	}
    })
    //点击完成注册
    $(".signup").on("click",function(){
    	//手机号或密码不为空
    	if($(".useName").val()!=""&&$(".pass").val()!=""){
    		$(".signupDone").show();
	    	$(".login").hide();
	    	var i= 3;
	    	var timer = setInterval(function(){
	    		i--;
	    		$(".signupDone strong").html(i);
	    		if(i<=0){
	    			clearInterval(timer);
	    			window.location.href = "login.html";
	    		}
	    	},1000);
    	}else{
    		$(".login .err").css("display","block").html("手机号或密码为空");
    	}
    })
})
