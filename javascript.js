

document.getElementById('file').onchange = function(){

  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    console.log(this.result);

    // By lines
    var lines = this.result.split('\n');
    console.log(lines)
    for(var line = 0; line < lines.length; line++){
      //console.log(lines[line]);
    var matches = lines[line].match(/\[(.*?)\]/);
	if (matches) {
    var submatch = matches[1];

		}

    }
  };
  reader.readAsText(file);
}