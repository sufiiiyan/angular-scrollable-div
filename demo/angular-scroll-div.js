

/**
 * @author Tushar Borole
 * @description Add ios style clear button for input box
 * for example <input type="text" id="fixed"  clear-btn/>
 */

angular.module('angular-character-count', []).directive('charCount', ['$parse','$compile', function ($parse, $compile) {
    return {
        require: '^form',
        link: function (scope, element, attr, formCtrl) {
            
            console.log(scope);
            console.log(element);
            console.log(attr);
            console.log(formCtrl)
            
            console.log(attr.ngModel.$viewValue)
            
            var idP =  Math.round(Math.random() * 1000000000);
             $(element).after('<p id='+ idP+ '></p>');
            scope.$watch(attr.ngModel, function(val){
                if(angular.isDefined(val)){
                    console.log(val);
                    var remainingChar = attr.charMaxlength - val.length;
                    
                    var remaiSpan = "<p ng-class=\"{'normalCharacter':"+ val.length +"<= 30,'warningCharacter': "+val.length+" >= 40, 'dangerCharacter': "+val.length+" > 55 }\">"+ remainingChar + " of " + attr.charMaxlength + " characters left</p>";
                    $('#'+ idP).html(remaiSpan);
                    
                    if(val.length > 40 && val.length < 45){
                        $('#'+ idP).removeClass('normalCharacter');
                        $('#'+ idP).removeClass('dangerCharacter');
                        $('#'+ idP).addClass('warningCharacter');
                    }else{
                        if(val.length > 45){
                            $('#'+ idP).addClass('dangerCharacter');
                            $('#'+ idP).removeClass('normalCharacter');
                            $('#'+ idP).removeClass('warningCharacter');
                        }else{
                            $('#'+ idP).removeClass('warningCharacter');
                            $('#'+ idP).removeClass('dangerCharacter');
                            $('#'+ idP).addClass('normalCharacter');
                        }
                    }
                    
                   
                     /*var contentTr = angular.element('<span>'+ remainingChar + ' of ' + attr.ngMaxlength + ' characters left</span>');*/
            /*contentTr.insertAfter(element);*/
                    /*contentTr.prepend(contentTr);*/
                    
            /*$compile(contentTr)(scope);*/
                    
                    /*var remainingChar = attr.ngMaxlength - val.length;
                    element.parent().append('<span>'+ remainingChar + ' of ' + attr.ngMaxlength + ' characters left</span>');*/
                    /*var tpl = $compile(el)(scope);
                    element.after(tpl);*/
             }
                
            
            });
            
           
            
            
            
            /*var top = elm.height() / 2;
            elm.wrap("<div style='position: relative'></div>");
            var btn = '<span id=' + Math.round(Math.random() * 1000000000) + ' class="searchclear ng-hide glyphicon glyphicon-remove-circle"></span>';
            var angularBtn = angular.element(btn);
            angularBtn.css('top', top);
            elm.after(angularBtn);
            //clear the input
            angularBtn.on("click", function () {
                elm.val('').trigger("change");
                $parse(attr.ngModel).assign(scope, null);
                scope.$apply();
            });

            // show  clear btn  on focus
            elm.bind('focus keyup change paste propertychange', function (blurEvent) {
                if (elm.val() && elm.val().length > 0) {
                    angularBtn.removeClass("ng-hide");
                } else {
                    angularBtn.addClass("ng-hide");
                }
            });
            // remove  clear btn  on focus
            elm.bind('blur', function (blurEvent) {
                if (!angularBtn.is(":hover"))
                    angularBtn.addClass("ng-hide");
            });*/
            
            
            // ng-class="{'normalCharacter': ngoProfileData.description.length <= 300,
            // 'warningCharacter': ngoProfileData.description.length >= 300, 
            // 'dangerCharacter': ngoForm.noteItem.$viewValue.length > 450 }">
            // {{500 - ngoForm.noteItem.$viewValue.length}} of  500 characters left </span>
            
        }
    };
}]);
