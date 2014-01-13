module('Testing wgRecordEvent static plugin', {
	setup: function() {
		this.oldga = ga;
		ga = sinon.spy(ga);
	},
	teardown: function() {
		ga = this.oldga;
	}
});

test('wgRecordEvent exists', function(){
	ok(jQuery.wgRecordEvent);
});

test('Test that ga() is called with proper parameters for downloads', function() {
	var expectedArgs = [
			'send', 
			'event', 
			'Downloads', 
			'File download', 
			{'file': 'file1.pdf'}
		];
	
	jQuery.wgRecordEvent('download', 'file1.pdf');
	
	ok(ga.called);
	deepEqual(ga.args[0], expectedArgs);
});

test('Test that ga() is called with proper parameters for outgoing links', function() {
	var expectedArgs = [
			'send', 
			'event', 
			'Links', 
			'External link', 
			{'url': 'http://www.dsmwebgeeks.com/'}
		];

	jQuery.wgRecordEvent('download', 'http://www.dsmwebgeeks.com/');

	ok(ga.called);
	deepEqual(ga.args[0], expectedArgs);
});


module('Testing wgTrack Outgoing plugin', {
	setup: function() {
		this.oldga = ga;
		ga = sinon.spy(ga);
	},
	teardown: function() {
		ga = this.oldga;
	}
});

test('wgTrackOutgoing exists', function() {
	ok( jQuery('#testDiv').wgTrackOutgoing);
});

test('wgTrackOutgoing returns one link', function() {
	equal( jQuery('#testDiv').wgTrackOutgoing().length);
});

test('wgTrackOutgoing calls ga()', function() {
	jQuery('#testDiv').wgTrackOutgoing();
	ok(ga.called);
});


module('Testing wgTrack Downloads plugin', {
	setup: function() {
		this.oldga = ga;
		ga = sinon.spy(ga);
	},
	teardown: function() {
		ga = this.oldga;
	}
});

test('wgTrackDownload exists', function() {
	ok( jQuery('#testDiv').wgTrackDownload);
});

test('wgTrackDownload returns one link', function() {
	equal( jQuery('#testDiv').wgTrackDownload().length);
});

test('wgTrackDownload calls ga()', function() {
	jQuery('#testDiv').wgTrackDownload();
	ok(ga.called);
});
