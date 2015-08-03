function Selfie(config){
    
    var SelfieMachine = function(videoId){
         var self = this;
         navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
         self.video = $('video#'+videoId).get(0);
         self.canvas = $('canvas#'+videoId).get(0);
         
         self.videoHandler = function(stream){
             console.log('videoHandler');
             self.video.src = window.webkitURL.createObjectURL(stream);
         };
         
          self.errorHandler = function(){
             console.log('Error');
         };
         
         if (navigator.getUserMedia) {
            console.log('ok');    
            navigator.getUserMedia({video: true}, self.videoHandler, self.errorHandler);
        }
        
    }    
    
    
    $('*[data-action="selfie"]').each(function(){
        var idStr = '_p'+(new String(parseFloat(Math.random())).split('.')[1]);
        $(this).find('video').attr('width',config.width).attr('height',config.height).attr('id',idStr);
        $(this).find('canvas').attr('width',config.width).attr('height',config.height).attr('id',idStr);
        
        new SelfieMachine(idStr);
        
        
    });
    
    
    
}

