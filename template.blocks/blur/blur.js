modules.require(['jquery'], function($) {
	/*borschik:include:../../js/StackBoxBlur.js*/

	/**
	 *Returns the version of Internet Explorer or a -1
	 *(indicating the use of another browser).
	 */
	function getInternetExplorerVersion()

	{
		var rv = -1; // Return value assumes failure.
		if (navigator.appName == 'Microsoft Internet Explorer')
		{
			var ua = navigator.userAgent;
			var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null)
				rv = parseFloat( RegExp.$1 );
		}
		return rv;
	}

	if($('#canvas-background').length && getInternetExplorerVersion() != 8){

		var img  = new Image();

		img.src = $('#current-background').attr('src');

		img.onload = function(){
			stackBoxBlurImage( 'current-background', 'canvas-background', 10, false, 1 );
		};

	}
});