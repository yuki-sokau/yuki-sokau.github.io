     //id取得//////////

     const btn=document.getElementById('sentbtn');

     const name=document.getElementById('name');

     const area=document.getElementById('result');

     ////////////////////////



     btn.onclick=function start(){



       //乱数で結果を適当にだす。



       var ans=[`Vスタートデッキ草`, `Vスタートデッキ炎`, `Vスタートデッキ水`, `Vスタートデッキ雷`, `Vスタートデッキ超`, `Vスタートデッキ闘`, `Vスタートデッキ悪`, `Vスタートデッキ鋼`, `Vスタートデッキ無色`];//配列(何を入れるかは自由)



       var random=Math.floor(Math.random()*ans.length);//乱数



       console.log(ans[random]);



       //switch文///

       switch(random){

         case 0:

         var com='状態以上を駆使して相手の動きを鈍らせよう';

         break;

         case 1:

         var com='圧倒的なパワーで相手をねじ伏せよう'

         break;

         case 2:

         var com='柔軟な動きとホエルオーのタフネスを切り札に立ち回ろう'

         break;

         case 3:

         var com='ピカチュウかわいい'

         break;

         case 4:

         var com='ミュウかわいい'

         break;

         case 5:

         var com='ルカリオVの速攻と闘タイプならではの火力補助で相手を倒そう'

         break;

         
         case 6:

         var com='ガラルヤドランかわいいよね'

         break;

         
         case 7:

         var com='ガッチガッチの守りとメタルソーサーのエネ加速が強み'

         break;

         
         case 8:

         var com='無色の底力を見せよう、キーカードはチルタリスだ'

         break;

       }



       console.log(com);



       var Aname=name.value;



       switch(Aname){

         case "":

         Aname="名無し";

         break;

       }



       console.log(Aname);



       var res=Aname+"さんにおすすめのデッキは"+"<br>「"+ans[random]+"」です。<br><br>"+com;



       area.innerHTML=res;



       name.value="";





     }
