let dataResponse;

// let datafromJSON = JSON.parse('data.json');
// let dataFromJSON1 = JSON.parse('/data.json');
// console.log(datafromJSON);
// console.log(datafromJSON1);

fetch('data.json').then(response => {
  return response.json();
}).then(data => {
  console.log(data);
  dataResponse = data;
  return dataResponse;
}).catch(err => {
  window.alert('Sorry. An error was thrown.')
});

var str = dataResponse[0].fields.customfield_10115[0];
var str2 = dataResponse[1].fields.customfield_10115[0];

function extractString(foo){
	// return foo.split('name=').pop().split(',goal=').shift();
	let subStr = foo.split('name=').pop().split(',goal=').shift();
	console.log(subStr);
	return subStr;
}

extractString(str);
extractString(str2);