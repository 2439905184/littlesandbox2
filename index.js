$(function()
{
    var time_index = 0
    const time_index_max = 7
    var time_software_index = 0
    const time_software_index_max = 4
    function change_time(index)
    {
        if(index == 0)
        {
            $("#center-show").attr("src","sand.png")
            $("#describe-history").text("工作室成立")
            $("#year").text("2020.08.02")
        }
        if(index == 1)
        {
            $("#center-show").attr("src","冲击关卡.png")
            $("#describe-history").text("第一款游戏 冲击 taptap发布")
            $("#year").text("2020.04.17")
        }
        if(index == 2)
        {
            $("#center-show").attr("src","水果下落消.png")
            $("#describe-history").text("第二款游戏 水果下落消 taptap发布")
            $("#year").text("2020.08.06")
        }
        if(index == 3)
        {
            $("#center-show").attr("src","音乐键盘手海报.png")
            $("#describe-history").text("第三款游戏 音乐键盘手 taptap发布")
            $("#year").text("2020.09.12")
        }
        if(index == 4)
        {
            $("#center-show").attr("src","贪吃蛇.png")
            $("#describe-history").text("第四款游戏 贪吃蛇 taptap发行")
            $("#year").text("2020.10.06")
        }
        if(index == 5)
        {
            //改
            $("#center-show").attr("src","点击小沙盒.png")
            $("#describe-history").text("第五款游戏 点击小沙盒 taptap发布")
            $("#year").text("2021.02.21")
        }
        if(index == 6)
        {
            $("#center-show").attr("src","手指跳跃.png")
            $("#describe-history").text("第六款游戏 手指跳跃 taptap发行")
            $("#year").text("2021.05.29")
        }
        if(index == 7)
        {
            $("#center-show").attr("src","华强买瓜.png")
            $("#describe-history").text("第七款游戏 华强买瓜同人游戏 bilibili/indienova发布")
            $("#year").text("2021.08.02")
        }
    }
    function change_soft_time(index)
    {
        if(index == 0)
        {
            $("#year_soft").text("2021-02-05")
            $("#center-show-software").attr("src","img/example.png")
            $("#center-show-software").attr("width","45%")
            $("#describe-history_soft").text("EasyAvgFrameWork 开源视觉小说框架 1.0稳定版发布")
        }
        if(index == 1)
        {
            $("#center-show-software").attr("src","img/example.png")
            $("#center-show-software").attr("width","45%")
            $("#describe-history_soft").text("EasyAvgFrameWork 1.3.2 框架细节更新")
        }
        if(index == 2)
        {
            $("#year_soft").text("2021-07-31")
            $("#center-show-software").attr("src","img/love2d.png")
            $("#center-show-software").attr("width","45%")
            $("#describe-history_soft").text("love-builder 0.2发布 love2d打包器 aardio语言开发")
        }
        if(index == 3)
        {
            $("#year_soft").text("2021-08-13")
            $("#center-show-software").attr("src","img/pocket.png")
            $("#center-show-software").attr("width","45%")
            $("#describe-history_soft").text("PocketPlugin 1.4.1发布 godot广告插件")
        }
        if(index == 4)
        {
            $("#year_soft").text("2022-05-27")
            $("#center-show-software").attr("src","img/iapp2java.png")
            //$("#center-show-software").attr("width","45%")
            $("#describe-history_soft").text("iapp2Java翻译器发布")
        }

    }
    $("#time_before").click(function()
    {
        if(time_index > 0)
        {
            time_index -= 1
            change_time(time_index)
            console.log(time_index)
        }
    })
    $("#time_after").click(function()
    {
        //$("#center-show").attr("height","400px")
        $("#center-show").attr("width","400px")
        if(time_index < time_index_max)
        {
            time_index += 1
            change_time(time_index)
            console.log(time_index)
        }
    })

    $("#soft_before").click(function()
    {
        if(time_software_index > 0)
        {
            time_software_index -= 1 
            change_soft_time(time_software_index)
        }
    })
    $("#soft_after").click(function()
    {
        if(time_software_index < time_software_index_max)
        {
            time_software_index += 1
            change_soft_time(time_software_index)
        }
    })
    //绑定点击事件
    $("#center-show").click(function()
     {
            //alert(time_index)
            if(time_index == 0)
            {
                location.reload()
            }
            if(time_index == 1) 
            {
                window.open("https://www.taptap.com/app/189201", "_blank")
            }
            if(time_index ==2)
            {
                window.open("https://www.taptap.com/app/196602","_blank")
            }
            if(time_index == 3)
            {
                window.open("https://www.taptap.com/app/199683","_blank")
            }
            if(time_index == 4)
            {
                window.open("https://www.taptap.com/app/200648","_blank")
            }
            if(time_index == 5)
            {
                window.open("https://www.taptap.com/app/209662","_blank")
            }
            if(time_index == 6)
            {
                window.open("https://www.taptap.com/app/215602","_blank")
            }
            if(time_index == 7)
            {
                window.open("https://indienova.com/g/hqmgtryx","_blank")
            }
    
   })
   $("#center-show-software").click(function()
   {
       if(time_software_index == 0 || time_software_index == 1)
       {
        window.open("https://github.com/little-game-and-simple-software/EasyAvg.js", "_blank")
       }
       if(time_software_index == 1)
       {
        window.open("https://github.com/little-game-and-simple-software/EasyAvg.js", "_blank")
       }
       if(time_software_index == 2)
       {
        window.open("https://github.com/2439905184/aardio-love-builder", "_blank")
       }
       if(time_software_index == 3)
       {
           window.open("https://gitee.com/small-sandbox/pocket-plugin","_blank")
       }
       if(time_software_index == 4)
        {
            window.open("https://github.com/2439905184/iapp2Java","_blank")
        }
   })
    /*function timeAfter()
    {
        console.log("Aaaa")
    }*/
})
