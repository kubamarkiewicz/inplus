var serveName = 'proxy.php?url=http://customersearch.varta-automotive.com';

function myRedirectToOption(currentPath, optionValue) {
	if (currentPath.charAt(0) == '/') {
		currentPath = serveName + currentPath;
	}
	if(optionValue == "noSelection"){
		window.location = currentPath
	} else {
		window.location = currentPath + "/" + optionValue;
	}
}

/**
 * returns path with an additional ReST-like parameter and an additional "/result"
 * Failover if no Parameter is given, to return current path
 * @param currentPath
 * @param optionValue
 */
function myRedirectToOptionResult(currentPath, optionValue) {
	currentPath = serveName + currentPath;
	if(optionValue != "noSelection"){
		currentPath = currentPath + "/" + optionValue;
	}
	console.log('submit to: ' + currentPath);
}