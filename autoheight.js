( function ($) {
    $.fn.autoHeight = function( options ) {
        /**
         * Setting
         * @type object
         */
        var settings = $.extend( {
            maxMin        : 'max', // max or min
            onResize      : false, // true or false
            disableOnSize : false // windows size (px) or false
        }, options );
    
        /**
         * Get the selected element
         * @type object
         */
        var element = $( this );

        /**
         * Change the height on ready
         */
        if ( settings.disableOnSize ) {
            disableAutoHeight( element, settings );
        }
        else {
            element.height( changeHeight( element, settings ) );
        }

        /**
         * Change the height on resize
         */
        if ( settings.onResize ) {
            $( window ).resize( function( event ) {
                if ( settings.disableOnSize ) {
                    disableAutoHeight( element, settings );
                }
                else {
                    element.height( changeHeight( element, settings ) );
                }
            } );
        }
    };

    /**
     * Change the height of the selected element
     * @param  [object] element  [slected element]
     * @param  [object] settings [settings of the plugin]
     * @return [void]            [change the height]
     */
    function changeHeight( element, settings ) {
        /**
         * Make the height of selected element auto
         */
        element.each( function( i, e ) {
            $( e ).height( 'auto' );
        } );

        /**
         * Get the max or min height of the selected element
         * @type int
         */
        var height;

        /**
         * Get the maximum height
         */
        if ( settings.maxMin == 'max' ) {
            height = Math.max.apply( null, element.map( function() {
                return $( this ).outerHeight();
            } ).get() );
        }
        /**
         * Ge the minimum height
         */
        else if( settings.maxMin == 'min' ) {
            height = Math.min.apply( null, element.map( function() {
                return $( this ).outerHeight();
            } ).get() );
        }

        return height;
    }

    /**
     * Disable the auto height when they reach the given window size
     * @param  [object] element  [slected element]
     * @param  [object] settings [settings of the plugin]
     * @return [void]            [disable auto height]
     */
    function disableAutoHeight( element, settings ) {
        /**
         * Disable the autoheight
         */
        if( $( window ).width() <= settings.disableOnSize ) {
            element.height( 'auto' );
        }
        else {
            element.height( changeHeight( element, settings ) );
        }
    }
} ( jQuery ) );