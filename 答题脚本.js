/*开始两个按钮*/
alert('开跑了撒');
var enter = document.getElementById('js-test-normal-start');
enter.click();

var entertwo = document.querySelectorAll('.js-confirm-type-button');
entertwo[0].click();

var examcontent = document.querySelectorAll('.exam-page__question-content');        //获得内容
var examanswer = document.querySelectorAll('.exam-page__question-answer');      //获得选项

var partone = document.querySelector('.part1');
var parttwo = document.querySelector('.part2');
var partthree = document.querySelector('.part3');

function Rpart1(ii,t) {       //part1答题

    if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "关于 “游戏版权保护” 的理解，哪一条是正确的？") {      //1

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == ' 只有权益人（被侵权者）可以对侵权者进行维权行为。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "哪些评价适合点“点赞”") {       //2

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '有参考性的游戏真实感受。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == " TapTap 不会收录什么样的游戏？") {      //3

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '破解版、盗版游戏。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "可以使用哪种方式对游戏提出合理建议？") {      //4

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '客观、理智的在评价处或论坛表达建议。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "对 TapTap 上排行榜单的理解，哪一条是正确的？") {      //5

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == 'TapTap 的排行榜无法人工干预，是系统按照算法计算的。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "哪些评价适合点“欢乐”") {      //6

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '以诙谐、幽默的方式表述有意义的游戏评价。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "看到了用语不文明的评价，可以怎么做？") {      //7

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '点击举报，且写明理由。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "以下哪些昵称或个人简介的内容是可取的？") {      //8

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '使用非中文写的文字。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "有关“小黑屋处理”的通知，以下哪种说法是正确的？") {      //9

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '“小黑屋”操作是系统根据用户行为自主检测判定的。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "发表了高质量的帖子后，以下哪项行为是正确的？") {      //10

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '点击右上角选择申精。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "哪种为获取游戏试玩资格的合理方式？") {      //11

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '关注该论坛，且积极参与资格发放活动。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "如何看待 TapTap 的广告位？") {      //12

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '是开发者的一种市场推广行为。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "优秀的科普或推荐帖，适合回复什么内容？") {      //13

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '感谢楼主分享，另外推荐《xxx》也是挺不错的游戏。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "在 TapTap，我们欢迎什么样的评价？") {      //14

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '文明且合理的表达对游戏的看法。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "在TapTap，不建议用哪种方式来发现好游戏？") {      //15

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '在每个用户评价下留言询问。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "如果发表的内容被管理员删除，以下哪种做法是合适的？") {      //16

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '阅读社区条例，在反馈贴文明的询问被删原因。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "什么内容在社区不适合发布？") {      //17

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '其他答案内容均不合适。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "发现了某款游戏有侵权嫌疑该怎么办？") {      //18

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '举报投诉该游戏，最好还能在论坛发布侵权内容的对比实证。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "发帖时，选用哪种标题更容易获得回复和关注？") {      //19

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '表述内容明确清晰的标题。如：《各大流派强弱分析》、《5-3关卡，大家是怎么通过的？》' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "因为哪些情形给出低分差评是不推崇的做法？") {      //20

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '其他答案都是' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "遇到不友善的回复后，可以采用以下哪种方式处理？") {      //21

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
                
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '其他答案均为合理的方式。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "以下哪些头像的选择是可取的？") {      //22

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '可爱的卖萌表情图。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else {console.log("找不到")}

    console.log('part1 : ' + ii );

} 

var ii = 0;
var t = 2;

/*part1开跑*/
var timepart1 = setInterval (function() {

    Rpart1(ii,t);
    ii++;
    if(ii >= 9) {
        t = 3;
    }

    if(ii == 22) {

        clearInterval(timepart1);
        setTimeout(function(){
            entertwo[1].click();
            setTimeout(function(){
                parttwogo();
            },1000)
        },1000)

    }
},500 + Math.random()*1000)

/*part2答题*/
function Rpart2(ii) {

    if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "大逃杀类型的游戏一般会具备什么要素？") {      //22

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '玩家可活动范围会缩小。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "以下游戏中，哪款为手游？") {      //22

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '明日方舟' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "团队合作游戏当中,“T”主要承担了队伍当中的什么责任。") {      //22

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '承受伤害。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "以下游戏中不属于RPG的是？") {      //22

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '反恐精英' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "云玩家是什么意思？") {      //22

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '没有直接接触游戏本体体验的玩家。' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else if (examcontent[ii].innerText.slice(t,examcontent[ii].innerText.length) == "百万亚瑟王系列的第一作是？") {      //22

        for (var iii = ii*4 ; iii < ii*4+4 ; iii++) {
            
            if ( examanswer[iii].innerText.slice(2,examanswer[iii].innerText.length) == '乖离性MA' ) {
                var num = iii;
                examanswer[num].click();
                break;
            }
        }

    } else {
        var num = Math.floor(Math.random() * (0 - 3+1)) + 3;
        examanswer[ ii * 4 + num ].click();
    }
    console.log('part2 : ' + ii );
}

/*part2开跑*/
var timepart2;
function parttwogo() {
    ii = 22;

    timepart2 = setInterval (function() {

        Rpart2(ii);
        ii++;
    
        if(ii == 22+10) {
            clearInterval(timepart2);

            setTimeout(function(){
                entertwo[2].click();
                setTimeout(function(){
                    partthreego();
                },1000)
            },1000)
        }
    },500 + Math.random()*1000)

}

var btn3 = document.querySelectorAll('.js-exam-page__submit-question');
var next1 = document.getElementById('1-question-step3-1');
var next2 = document.getElementById('1-question-step3-2');
var next3 = document.getElementById('1-question-step3-3');
var next4 = document.getElementById('1-question-step3-4');
/*part3答题*/

var ccc = 0 ; 
function Rpart3() {
    var num = Math.floor(Math.random() * (0 - 3+1)) + 3;
    examanswer[ 32 * 4 + (ii-32)*6 + num ].click();
    examanswer[ 32 * 4 + (ii-32)*6 + num +2].click();
    examanswer[ 32 * 4 + (ii-32)*6 + num +1].click();

    setTimeout (function(){
        btn3[ccc].click();
        ccc++;
        console.log('part3 : ' + ccc );
        switch(ccc){
            case 1:
                setTimeout(function(){
                    next1.click();
                },11000)
                break;
            case 2:
                setTimeout(function(){
                    next2.click();
                },11000)
                break;
            case 3:
                setTimeout(function(){
                    next3.click();
                },11000)
                break;
            case 4:
                setTimeout(function(){
                    next4.click();
                },11000)
                break;
        }
    },1000);
}

/*part3开跑*/
var timepart3;
function partthreego() {
    ii = 22+10;
    Rpart3(ii);
    ii++
    timepart3 = setInterval (function() {

        Rpart3(ii);
        ii++;
    
        if(ii == 22+10+4) {
            clearInterval(timepart3);
        }

    },15000 + Math.random()*1000)
}

/*enter暂停*/
document.addEventListener('keyup',function(e) {
    if (e.keyCode === 13) {
        console.log('已暂停，建议刷新重来');
        clearInterval(timepart1);
        clearInterval(timepart2);
        clearInterval(timepart3);
    }
} );