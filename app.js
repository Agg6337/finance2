//
// Дэлгэцтэй ажиллах контроллор
var uiController = (function(){ 
    
   
})(); 

// Санхүүтэй ажиллах контроллор
var financeController = (function(){ 


    console.log('hello from finance modul' );

})(); 

//Програм холбогч контроллор
var appController = (function(uiController , financeController){   

    var ctrlAddItem = function(){
         //1.Оруулах өгөгдлийг дэлгэцээс олж авна
         console.log('Дэлгэцээс өгөгдөл авах хэсэг..');
         //2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална
 
         //3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
 
         //4. Төсвийг тооцоолно.
 
         //5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана
    }

    document.querySelector('.add__btn').addEventListener('click', function(){
       ctrlAddItem();
    });

    document.addEventListener("keypress", function(event){
        if(event.keyCode === 13 || event.which ===13 ){
           ctrlAddItem();
        }
    });
})(uiController , financeController); 