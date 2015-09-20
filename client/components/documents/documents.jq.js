$(function() {
	$('#upload-form').transloadit({
		// We want to wait for all encodings to finish before the form
		// is submitted.veaea
		wait: true,
		// The upload to Transloadit should start as soon as the user
		// selects some files.
		triggerUploadOnFileSelection: false,
		autoSubmit: false,
		params: {
			auth: {
				// This is your API key.
				key: '9ab32cc05fd311e5b3f19da10b2cb81b'
			},
			steps: {
        resize_to_75: {
          robot: "/image/resize",
          use: ":original",
          width: 75,
          height: 75
        }
      }
		},
		onSuccess: function(assembly) {
			console.log(assembly);
			var thisTeam = localStorage['$selectedteam'];
			var thisUser = localStorage['firebase:session::mksequip'].uid;
			var refUrl = 'https://mksequip.firebaseIO.com/';
			var fb = new Firebase(refUrl);
			fb = fb.child('teams').child(window.selectedTeam).child('images').child(assembly.assembly_id);
			fb.set(assembly.results);
		}
	});
});
