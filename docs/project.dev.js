var dashApp = angular.module('dashApp', [ 'ngRoute' ]);

dashApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/about', {
            templateUrl: '/docs/templates/about.html',
            controller: 'dashAppAboutController'
        }).
        when('/docs', {
            templateUrl: '/docs/templates/docs.html',
            controller: 'dashAppDocsController'
        }).
        when('/docs/:doc1', {
            templateUrl: '/docs/templates/docs.html',
            controller: 'dashAppDocsController'
        }).
        when('/docs/:doc1/:doc2', {
            templateUrl: '/docs/templates/docs.html',
            controller: 'dashAppDocsController'
        }).
        when('/docs/:doc1/:doc2/:doc3', {
            templateUrl: '/docs/templates/docs.html',
            controller: 'dashAppDocsController'
        }).
        when('/docs/:doc1/:doc2/:doc3/:doc4', {
            templateUrl: '/docs/templates/docs.html',
            controller: 'dashAppDocsController'
        }).
        when('/', {
            templateUrl: '/docs/templates/splash.html',
            controller: 'dashAppSplashController'
        }).
        otherwise({
            redirectTo: '/docs'
        });
}]);

dashApp.controller( 'dashAppController', [ '$location', '$scope', function( $location, $scope ) {
    $scope.isSplash = function() {
        return '/' === $location.path();
    };
    $scope.isDocs = function() {
        return '/docs' === $location.path();
    };
    $scope.isAbout = function() {
        return '/about' === $location.path();
    };
}]);

dashApp.controller('dashAppAboutController', [ function() {
    console.log('about controller');
}]);

dashApp.controller('dashAppDocsController', [ '$scope', '$http', '$templateCache', '$routeParams', function( $scope, $http, $templateCache, $routeParams ) {
    $scope.parentSelected = function(parent) {
        var current = $scope.currentTopic();
        return parent.path === current;
    };
    $scope.currentTopic = function() {
        var params = [];
        if ($routeParams.doc1) {
            params.push($routeParams.doc1);
        }
        if ($routeParams.doc2) {
            params.push($routeParams.doc2);
        }
        if ($routeParams.doc3) {
            params.push($routeParams.doc3);
        }
        if ($routeParams.doc4) {
            params.push($routeParams.doc4);
        }
        return params.join('/');
    };
    $scope.parentShowing = function(obj, child) {
        var params = [],
            match,
            regx,
            current,
            others;
        if ($routeParams.doc1) {
            params.push($routeParams.doc1);
        }
        if ($routeParams.doc2) {
            params.push($routeParams.doc2);
        }
        if ($routeParams.doc3) {
            params.push($routeParams.doc3);
        }
        if ($routeParams.doc4) {
            params.push($routeParams.doc4);
        }
        current = params.join('\/');
        regx = new RegExp( '^' + current );
        match = ( null !== obj.path.match( regx ) ) ? true : false;
        others = child.path.split('/');
        others.pop();
        others = others.join('/');
        regx = new RegExp( '^' + others);
        return match || ( null !== current.match( regx ) ) ? true : false;
    };


    $scope.documents = [
        { path: 'overview',
            children: [
                { 'path': 'overview',
                    'title': 'Overview',
                    'default': true
                },
                { 'path': 'security',
                    'title': 'Security'
                },
                { 'path': 'transactions',
                    'title': 'Transactions'
                },
                { 'path': 'requests',
                    'title': 'Requests'
                },
                { 'path': 'keys',
                    'title': 'Keys'
                },
                { 'path': 'databases',
                    'title': 'Databases',
                    'children': [
                        { 'path': 'database/names',
                            'title': 'Names'
                        },
                        { 'path': 'database/versions',
                            'title': 'Versions'
                        },
                        { 'path': 'database/opening',
                            'title': 'Opening',
                            'demos': [ {
                                    'title': 'Opening A Database Example: Simple Case',
                                    'id': 'dashdb/ZCngL'
                                } ]
                        },
                        { 'path': 'database/closing',
                            'title': 'Closing',
                            'demos': [
                                {
                                    'title': 'Closing A Database Example: Simple Case',
                                    'id': 'dashdb/SFYx5'
                                }
                            ]
                        },
                        { 'path': 'database/removing',
                            'title': 'Removing',
                            'demos': [ {
                                'title': 'Removing A Database Example: Simple Case',
                                'id': 'dashdb/retKS'
                            } ]
                        },
                        { 'path': 'database/getting',
                            'title': 'Getting',
                            'demos': [
                                { 'title': 'Getting Existing Databases Example: Simple Case',
                                    'id': 'dashdb/5ZWMg'
                                }
                            ]
                        } ]
                },
                { 'path': 'entries',
                    'title': 'Entries',
                    'children': [
                        { 'path': 'entry/adding',
                            'title': 'Adding',
                            'demos': [ {
                                    'title': 'Adding An Object To An Object Store Example: Simple Case',
                                    'id': 'dashdb/LD42e'
                                } ] },
                        { 'path': 'entry/getting',
                            'title': 'Getting',
                            'demos': [ {
                                    'title': 'Getting An Object From An Object Store Example: Simple Case',
                                    'id': 'dashdb/ALXu8'
                                }, 
                                {
                                    'title': 'Getting Multiple Objects From A Database Example: Simple Case',
                                    'id': 'dashdb/R8ZL4'
                                } ] },
                        { 'path': 'entry/putting',
                            'title': 'Putting',
                            'demos': [ {
                                    'title': 'Putting An Object Into An Object Store Example: Simple Case',
                                    'id': 'dashdb/zHLWL'
                                } ] },
                        { 'path': 'entry/removing',
                            'title': 'Removing',
                            'demos': [ {
                                    'title': 'Removing An Object From An Object Store Example: Simple Case',
                                    'id': 'dashdb/Gb2CC'
                                },
                                {
                                    'title': 'Removing Multiple Objects From A Database Example: Simple Case',
                                    'id': 'dashdb/H6r9x'
                                } ] },
                        { 'path': 'entry/updating',
                            'title': 'Updating',
                            'demos': [ {
                                    'title': 'Updating Multiple Objects In A Database Example: Simple Case',
                                    'id': 'dashdb/dqx4R'
                                } ] }
                    ]
                },
                { 'path': 'indexes',
                    'title': 'Indexes',
                    'children': [
                        { 'path': 'index/creating',
                            'title': 'Creating',
                            'demos': [ {
                                    'title': 'Creating An Index Example: Simple Case',
                                    'id': 'dashdb/kM4sQ'
                                } ] },
                        { 'path': 'index/getting',
                            'title': 'Getting',
                            'demos': [ {
                                    'title': 'Getting An Index Example: Simple Case',
                                    'id': 'dashdb/2vqYW'
                                } ]},
                        { 'path': 'index/iterating',
                            'title': 'Iterating',
                            'demos': [ {
                                    'title': 'Getting Multiple Indexes Example: Simple Case',
                                    'id': 'dashdb/2FmJg'
                                } ] },
                        { 'path': 'index/removing',
                            'title': 'Removing',
                            'demos': [ {
                                    'title': 'Removing An Index Example: Simple Case',
                                    'id': 'dashdb/2td5q'
                                } ]
                        }
                    ]
                },
                { 'path': 'keyranges',
                    'title': 'Keyranges',
                    'children': [
                        { 'path': 'keyrange/bounds',
                            'title': 'Bounds' },
                        { 'path': 'keyrange/direction',
                            'title': 'Direction' }
                    ]
                },
                { 'path': 'stores',
                    'title': 'Stores',
                    'children': [
                        { 'path': 'objectstore/keypaths', 'title': 'Keypaths' },
                        { 'path': 'objectstore/clearing', 'title': 'Clearing',
                            'demos': [ {
                                    'title': 'Clearing An Object Store Example: Simple Case',
                                    'id': 'dashdb/YCj4Q'
                                } ] },
                        { 'path': 'objectstore/creating', 'title': 'Creating',
                            'demos': [ {
                                    'title': 'Creating An Object Store Example: Simple Case',
                                    'id': 'dashdb/8mCew'
                                } ] },
                        { 'path': 'objectstore/getting', 'title': 'Getting',
                            'demos': [ {
                                    'title': 'Getting An Object Store Example: Simple Case',
                                    'id': 'dashdb/LJqjA'
                                } ] },
                        { 'path': 'objectstore/iteration', 'title': 'Iterating',
                            'demos': [ {
                                    'title': 'Getting Multiple Object Stores Example: Simple Case',
                                    'id': 'dashdb/ZCngL'
                                } ] },
                        { 'path': 'objectstore/removing', 'title': 'Removing',
                            'demos': [ {
                                    'title': 'Removing An Object Store Example: Simple Case',
                                    'id': 'dashdb/Zcw46'
                                } ] }
                    ]
                },
                { 'path': 'cursors',
                    'title': 'Cursors'
                }

            ]
        }
    ];

    var getPath = function(path) {
        return ['/documentation/', path, '.md' ].join('');
    }
    $scope.documentContent = function(path) {
        return $templateCache.get(getPath(path))[1];
    }
    $scope.currentDocument = function() {
        var topic = $scope.currentTopic(),
            found = false;
        _.map($scope.documents, function(item) {
           if (item.path === topic) {
               found = item;
               return;
           }
           if(item.children) {
               _.map(item.children, function(item2) {
                   if (item2.path === topic) {
                       found = item2;
                       return;
                   }
                   if (item2.children) {
                       _.map(item2.children, function(item3) {
                           if(item3.path === topic) {
                               found = item3;
                               return;
                           }
                       });
                   }
               });
           }
        });
        return found;
    }
    var process = function(item) {
        $http.get( getPath(item.path), { cache: $templateCache } );
        if (!item.children) {
            return;
        } else {
            _.map(item.children, function(datum) {
                process(datum);
            });
        }
    };
    _.map( $scope.documents, process );

}]);

dashApp.controller('dashAppDocsContentController', [ '$routeParams', '$scope', function( $routeParams, $scope ) {
    $scope.currentTopic = function() {
        var params = [];

        if ($routeParams.doc1) {
            params.push($routeParams.doc1);
        }
        if ($routeParams.doc2) {
            params.push($routeParams.doc2);
        }
        if ($routeParams.doc3) {
            params.push($routeParams.doc3);
        }
        if ($routeParams.doc4) {
            params.push($routeParams.doc4);
        }
        return params.join('/');
    };
    $scope.pathLevel = function(obj) {
        var current = $scope.currentTopic();
        return obj.default && '' === current || obj.path === current;
    };
}]);

dashApp.controller('dashAppDocsSidebarController', [ '$routeParams', '$scope', function($routeParams, $scope) {

}]);

dashApp.controller('dashAppDocsDemosController', [ '$scope', '$sce', function( $scope, $sce ) {
    $scope.demos = function() {
        var current = $scope.currentDocument();
        return current.demos || [];
    };
    $scope.demoUrl = function(demo) {
        return $sce.trustAsResourceUrl('http://jsfiddle.net/' + demo.id + '/embedded');
    };
}]);

dashApp.controller('dashAppSplashController', [ function() {
    console.log('splash controller');
}]);

dashApp.directive('markdown', function () {
    var converter = new Showdown.converter();
    return {
        restrict: 'AE',
        link: function (scope, element, attrs) {
            if (attrs.markdown) {
                scope.$watch(attrs.markdown, function (newVal) {
                    if (!newVal) {
                        return;
                    }
                    var html = converter.makeHtml(newVal);
                    element.html(html);
                });
            } else {
                var text = element.text(),
                    html = text ? converter.makeHtml(element.text()) : '';
                element.html(html);
            }
        }
    };
});