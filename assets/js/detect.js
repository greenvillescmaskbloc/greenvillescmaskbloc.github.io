$(function() {
	if (localStorage.getItem('detect-mode') !== 'true') {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	    	localStorage.setItem('bj-dark-mode','true');
	    }
	localStorage.setItem('detect-mode','true')
  }
});