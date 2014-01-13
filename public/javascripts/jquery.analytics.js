(function($) {

	/**
	 * Static function that makes a call to ga() with the proper arguments
	 **/
	$.wgRecordEvent = function(eventType, eventData) {
		ga('send', 'event', 'Downloads', 'File download', {'file': 'file1.pdf'});
	}

	/**
	 * Find each outgoing link and attach an eventhandler that triggers
	 * a Google Analytics "event"
	 **/
	$.fn.wgTrackOutgoing = function() {
		return this.find('a').each(function() {

		});
	}

	/**
	 * Find each link to a downloadable file and attacn an eventhandler that
	 * triggers a Google Analytics "event"
	 **/
	$.fn.wgTrackDownload = function() {
		return this.find('a').each(function() {

		});

	}

	/**
	 * This defines some default values for the wgTrackDownload function
	 */
	$.fn.wgTrackDownload.defaults = {};

}(jQuery));