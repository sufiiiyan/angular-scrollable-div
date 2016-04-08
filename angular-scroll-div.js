/**
 * @author Sufiyan Momin
 * @description Add scrolling div image
 */

angular.module('angular-scroll-div', []).directive('scrollDiv', ['$rootScope', function ($rootScope) {
    return {
        link: function (scope, element, attr) {

            $(document).ready(function () {
                
                var scrollOption = scope.$eval(attr.scrollConfig);

                $(element).smoothDivScroll(scrollOption);

                $(element).bind("mouseover", function () {
                    $(this).smoothDivScroll("stopAutoScrolling");
                }).bind("mouseout", function () {
                    $(this).smoothDivScroll("startAutoScrolling");
                });
            });


        }
    };
}]);