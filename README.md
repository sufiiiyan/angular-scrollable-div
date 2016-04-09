# angular-smooth-scrollable-div
-------------------------------------
angular smooth scrollable div
----------------------------------------

####  **add dependency in you module**

    var app=angular.module("you app name",['angular-scroll-div'])
    


####  **Using directive**

    <div id="scrollDiv" scroll-div scroll-config="{'autoScrollingMode': 'always', 'autoScrollingDirection':'endlessLoopLeft', 'autoScrollingInterval':25, 'autoScrollingStep': 1}">
        <a ng-repeat="slide in sourceImg" href="{{slide.link}}" target="_blank">
            <img src="{{slide.imgSrc}}" alt="Demo image" id="{{slide.id}}" />
        </a>
    </div>
    
    **In controller**   
 ```
 .controller('demoCtrl', ['$scope', demoCtrl]);
        function demoCtrl($scope) {
            $scope.sourceImg = [{
                imgSrc: 'Smooth/images/demo/field.jpg',
                link: 'www.google.com',
                id: '1'
            }, {
                imgSrc: 'Smooth/images/demo/gnome.jpg',
                link: 'www.cdn.com',
                id: '2'
            }, {
                imgSrc: 'Smooth/images/demo/pencils.jpg',
                link: 'www.example.com',
                id: '3'
            }]
        }

 
 

