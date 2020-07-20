export default {
    methods: {
        /**
         *  When image fails loading, Remove the image or parent of the image depending on the
         *  'elementLevel' property of the component
         * 
         * @param evt - error event reference
         */
        onImageLoadError: function(evt){
            if( this.mixinHint &&  this.mixinHint === 'elementLevel'){
                evt.target.remove()
            }else {
                evt.target.parentElement.remove()
            }
            
        }
    }
}