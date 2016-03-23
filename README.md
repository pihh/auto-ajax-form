# auto-ajax-form
Form that is submited via ajax call without the programmer having to code the entire ajax request.

## Example:
<form id='ajax-form' ajax="true" action="ajax-call.php" type="POST" success="callback(data)" complete="callback2(data)">
	<input name="input1" type="text" />
	<input name="file1" type="file" />
	<button type="submit" >Submit</button>
</form>	

<script>
	var callback = function(data){
		console.log(data);
	}

	var callback2 = function(data){
		console.log('second callback');
	}
</script>

## Code explained:
- Each form has to have an individual id ( currently working on removing this feature ).
- If ajax="true" it will send the request via ajax
- Code injections: Currently you can inject success="function(data)" (runs a function with the data of the ajax call ), complete="function(data)"

### Sugestions and improvements:
- Feel free to talk to me in pihh.rocks@gmail.com for any sugestion or improvement.