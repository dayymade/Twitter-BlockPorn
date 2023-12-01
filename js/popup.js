document.addEventListener('DOMContentLoaded', function() {
  function myFunction() {
    mainPermissionHandler();
  }
 myFunction();
});
layui.use(['upload','layer'], function(){
	var upload = layui.upload;
	var layer = layui.layer;


    $.getJSON(chrome.extension.getURL('manifest.json'),function(data){
    	console.log(data.version);
    	console.log(data.name);
    	$('#extname').text(data.name);
    	$('#version').text(data.version);
    });
	



    //以下为点击事件

    $('#openBlack1').click(function(){
        window.open('https://twitter.com/i/lists/1677334530754248706/members');
    });
    $('#openBlack2').click(function(){
        window.open('https://twitter.com/i/lists/1683810394287079426/members');
    });
    $('#openBlack3').click(function(){
        window.open('https://twitter.com/i/lists/1699049983159259593/members');
    });
    $('#openBlack4').click(function(){
        window.open('https://twitter.com/i/lists/1702721627287371907/members');
    });
    $('#openBlack5').click(function(){
        window.open('https://twitter.com/i/lists/1704104182913843610/members');
    });
    $('#openBlack6').click(function(){
        window.open('https://twitter.com/i/lists/1696907125090586845/members');
    });


   // $('#open7').click(function(){
    //    sendMessageToContentScript('menu_command_special_list');
  //  });
  //  $('#open8').click(function(){
   //     window.open('https://raw.githubusercontent.com/daymade/Twitter-Block-Porn/master/lists/all.json');
  //  });
   // $('#open9').click(function(){
    //    window.open('https://github.com/daymade/Twitter-Block-Porn/issues');
   // });
  //  $('#open10').click(function(){
   //     window.open('https://buymeacoffee.com/finetuning');
    //});


    const ChangeLogo = localStorage['change_logo']!='on';
    $('#open11').click(function(){
        if(ChangeLogo){
            localStorage['change_logo']='on';
            sendMessageToContentScript('change_logo_off');
            $(this).text('✅ 已将 Logo 还原为小蓝鸟, 点击可使用 X')
        }else{
            localStorage['change_logo']='off';
            sendMessageToContentScript('change_logo_on');
            $(this).text('🐤 点击唤回小蓝鸟')
        }
    });

    if(ChangeLogo){
        $('#open11').text('🐤 点击唤回小蓝鸟');
    }else{
        $('#open11').text('✅ 已将 Logo 还原为小蓝鸟, 点击可使用 X');
    }
    



    function sendMessageToContentScript(m, c) {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, m, function (r) {
                if (c) c(r);
            });
        });
    }



});
