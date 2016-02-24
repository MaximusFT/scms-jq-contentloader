;(function($, window, document){
    'use strict';

    var defaults = {
            idAjaxTarget    : 'appGo',
            threshold       : 20
        };

    function Plugin(element, options)
    {
        this.w  = $(document);
        this.el = $(element);
        this.options = $.extend({}, defaults, options);
        this.init();
    }

    Plugin.prototype = {

        init: function()
        {
            var list = this;
            this.getContent(this.getUrl());
        },
        getUrl: function()
        {
            return window.location.pathname;
        },
        reload: function()
        {
            var that = this;
            $('#'+that.options.idAjaxTarget).empty();
            console.log(window.location);
        },
        getContent: function(pathname)
        {
            var that = this;
            $.ajax({
                type: "POST",
                url: pathname,
                /*
				data: {
                    params: '111',
                    menu_id: 'qqq'
                }
				*/
            })
            .done(function(result) {
                console.log(that.options.idAjaxTarget);
                $('#'+that.options.idAjaxTarget).empty().html(result);
            });
        },
    };
    $.fn.appGo = function(params)
    {
        var that  = this;
        $(that).data("appGo", new Plugin(that, params));
        return that;
    };
})(window.jQuery, window, document);