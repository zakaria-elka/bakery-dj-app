$(document).ready(function(){
        var p;
        var d;

        $(".table").hide()
        $(".jumbotron").hide()
        
////////////////////////////////////////////////////
      $($(".card .btn").get()).click(function(){
        $(this).data('clicked', true);

        var i=0;
     
        while(i<$(".card .btn").length)
       {     if ($($(".card .btn").get(i)).data('clicked')) {
             d=$(".card-title").get(i).innerText
             p=$(".priceprod").get(i).innerText
             $($(".card .btn").get(i)).removeData('clicked');
             break;
              }

        i++;
       }
     
        $("#titlemod").text(d)
        $("#modal").show()
      
       
       });
 ////////////////////////////////////////////////////
 $('#buyall').click(function(){
       var info='';
       var tp=0;
       $('.table tbody tr .price').each(function(index,tr){

          tp = tp + parseInt(tr.innerText,10)
         
       })

      
          

             $('.table tbody tr').each(function(index){     
             
                  info=info +' Article'+index+': '+ $(this).children('.article').text()
                  info=info +'\tQuantite'+index+': '+  $(this).children('.qt').text()   
                  info=info +'\n'
               

            
            })
            
           info=info+'\n\nTotal price: '+tp 
           $(".jumbotron form textarea").val(info)
           $(".jumbotron").show()

          

 })


////////////////////////////////////////////////////
       $("#Cbtn").click(function(){

         q=$('#qut').val()
         $("#modal").hide()
         $(".table tbody").append("<tr><td class='article'>"+d+"</td><td class='qt'>"+q+"</td><td class='price'>"+p*q+"</td></tr>")
         $(".table").show()
         $("tfoot").show()

       })


 ////////////////////////////////////////////////////
       $('#tremove').click(function(){

        $(".table tbody").empty();
        $("tfoot").hide();

       })


 ////////////////////////////////////////////////////
       $(".btn-close").click(function(){
     
        $("#modal").hide()
       })






      }); 

