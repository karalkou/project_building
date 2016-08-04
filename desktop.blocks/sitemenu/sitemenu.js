modules.require(['jquery__menuAim'], function($) {

/*--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function(){

    $('.root-item').closest('li').hover(function(event){
        var eventType = event.type,
            eventTarget = event.target;
        var dropDownMenu = $('.parent').closest('ul'),
            dropDowmMenuHeight = dropDownMenu.height(),
            finalMenuHeight;
        /*
         * *if event.type is 'mouseenter',
         * *than we make our logic
         * */
        if( eventType === 'mouseenter' ){

            /* functions for menuAim plug-in */
            function activation(row){
                var $row = $(row),
                    submenuId = $row.data("submenuId"),
                    $submenu = $("#" + submenuId);

                /*
                 * *if $row has submenu we set _top: 0;_
                 * *and check the heigth of children
                 * */
                if($row.children('ul').length){
                    //subMenuHeight = $submenu.height();

                    /* HEIGHT for visible submenu */
                    //if(subMenuHeight >= dropDowmMenuHeight){
                    finalMenuHeight = dropDowmMenuHeight;
                    //}else{
                    //    finalMenuHeight = subMenuHeight;
                    //}

                    $submenu.css({
                        'top': '0',
                        'height': finalMenuHeight
                    });

                }

                /* show submenu */
                $submenu.css("display", "block");
                $row.css("background-color", "#f5f5f5");
            }

            function deactivation(row){
                var $row = $(row),
                    submenuId = $row.data("submenuId"),
                    $submenu = $("#" + submenuId);
                /* hide submenu */
                $submenu.css("display", "none");
                $row.css("background-color", "");
            }

            /* menuAim plug-in ACTIVATION */
            $("#js-menu").menuAim({
                activate: activation,  // fired on row activation
                deactivate: deactivation  // fired on row deactivation
            });

        }else{
            /*
             * * this function is for hiding all submenus after "mouseleave" event
             *
             * PS. so many methods were used to avoid
             * setting new id's or classes in html-code
             * */
            $(eventTarget).closest('#horizontal-multilevel-menu')
                .find('.parent')
                .closest('li')
                .find('ul').css("display", "none");
        }
    });



});
/*--------------------------------------------------------------------------------------------------------------------*/
});