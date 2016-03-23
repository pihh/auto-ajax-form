(function(){
	"use strict"

	$( "form" ).on('submit',function( event ) {
    	if($(this).attr('ajax')){
        	event.preventDefault();
            var marianaFormUrl = $(this).attr('action');
            var marianaFormId = $(this).attr('id');
            var marianaFormMethod = $(this).attr('type');
            var marianaFormSucess = $(this).attr('success');
            var marianaFormComplete = $(this).attr('complete');
            var marianaFormBefore = $(this).attr('before');
            var marianaFormInputs = $('#' + marianaFormId +' :input');
            var marianaEncType = $(this).attr('enctype');
            var marianaFormData = {};

            // Set enctype
            if(marianaEncType === undefined || marianaEncType == ''){
            	$(this).attr('enctype','multipart/form-data');
            }

            // Set success
			if(marianaFormSucess.indexOf('(') > -1){
                marianaFormSucess = marianaFormSucess.split('(')[0];
            }

            // Organize inputs
            marianaFormInputs.each(function() {
            	if(this.type == 'checkbox'){
                    	marianaFormData[this.name] = this.checked;
                }else{
                       	marianaFormData[this.name] = $(this).val();
                }
            });

            // Run Before function
            if(marianaFormBefore !== undefined && marianaFormBefore !== ''){
            	var fn = marianaFormBefore;
             	var func = fn +'( )';
             	eval(func);
            }

            // Run Ajax Call
            $.ajax({
                url: marianaFormUrl,
                type: marianaFormMethod,
                dataType: 'JSON',
                data: new FormData( this ),
                processData: false,
                contentType: false,
                cache: false,
                success:function(data){
                	// Run success
                	if(marianaFormSucess !== undefined && marianaFormSucess !== ''){
	                    var fn = marianaFormSucess;
	                    var func = fn +'( data )';
	                    eval(func);
                	}
                },
                complete:function(data){
                    // Run complete
					if(marianaFormComplete !== undefined && marianaFormComplete !== ''){
	                    var fn = marianaFormComplete;
	                    var func = fn +'( data )';
	                    //eval(func);
	                }
                }
            });
        }
    });

})();