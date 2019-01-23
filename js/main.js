(() => {

	//what we want to work with
		var badge = document.querySelector('#alien1');
			//what do we want it to do
			
		var allTheBadges = document.querySelectorAll('.image-wrapper');


		function logMyId() {
		console.log(this.id);
		
			// log to the dev tools
		}
		//how do we want it to do that
		badge.addEventListener("click", logMyId);

		allTheBadges.forEach(currentbadge => currentbadge.addEventListener('click', logMyId));


	})();