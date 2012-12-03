(function(ep){
    ep.Manejador.EventManager = function(){
        this.addEvent = function(type, onTrigger){
            var element;
            switch(type){
                case ep.Constant.EVENT_NEXT_STATE:
                    element = $('.nextState');
                    type = "click";
                    break;
                default:
                
            }
            element.live(type, onTrigger);
        }        
    }
    
})
(ep);


