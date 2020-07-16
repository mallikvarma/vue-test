export default {
    methods: {
        onImageLoadError: function(evt){
            if( this.mixinHint &&  this.mixinHint === 'elementLevel'){
                evt.target.remove()
            }else {
                evt.target.parentElement.remove()
            }
            
        }
    }
}