/**
 * Created on 17.06.2016.
 */
window.iv = window.iv || {};
window.iv.ui = window.iv.ui || {};
/**
 * возращает разрешение bootstrap сетки
 */
window.iv.ui = {
    mediaPoints: {
        sm: 768,
        md: 992,
        lg: 1200
    },
    getGridPoint: function(){
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var point = 'xs';

        if((width>=this.mediaPoints.sm)){
            point = 'sm';
        }

        if((width>=this.mediaPoints.md)){
            point = 'md';
        }

        if((width>=this.mediaPoints.lg)){
            point = 'lg';
        }

        return point;
    }
};

//$(window).resize(function () {
//    // для отладки, показывает в консоле разрешение bootstrap сетки
//    console.log(window.iv.ui.getGridPoint());
//});