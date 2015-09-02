'use strict';

angular.module('vujohnnyApp')
    .controller('PortfolioCtrl', function($scope) {
        $scope.companies = [{
            company: 'Guthy-Renker',
            location: 'Santa Monica',
            state: 'California',
            websites: [{
                    name: 'Proactiv',
                    url: 'http://www.proactiv.com'
                }, {
                    name: 'Wen Hair Care',
                    url: 'http://www.wen.com'
                }, {
                    name: 'CrepeErase',
                    url: 'http://www.crepeerase.com'
                }, {
                    name: 'MeaningfulBeauty',
                    url: 'http://www.meaningfulbeauty.com'
                }, {
                    name: 'Perricone MD',
                    url: 'http://www.subd.com'
                }, {
                    name: 'Sheer Cover',
                    url: 'https://www.sheercover.com'
                },
                /*{
                	name:'IT Cosmetics',
                	url:'http://www.tryitnow.com'
                },*/
                {
                    name: 'Principal Secret',
                    url: 'https://www.principalsecret.com'
                },
                /*{
                	name:'Xout',
                	url:'https://www.xout.com'
                },*/
                {
                    name: 'Hand Perfection',
                    url: 'https://www.handperfection.com/order'
                },
                {
                    name: 'Acne',
                    url: 'http://www.acne.com'
                }
            ]
        }, {
            company: 'Williams Sonoma',
            location: 'San Francisco',
            state: 'California',
            websites: [{
                name: 'Williams Sonoma',
                url: 'http://www.williams-sonoma.com'
            }, {
                name: 'Williams Sonoma Home',
                url: 'http://www.williams-sonoma.com/pages/williams-sonoma-home'
            }, {
                name: 'Pottery Barn',
                url: 'http://www.potterybarn.com'
            }, {
                name: 'Pottery Barn Kids',
                url: 'http://www.potterybarnkids.com'
            }, {
                name: 'Pottery Barn Teens',
                url: 'http://www.pbteen.com'
            }, {
                name: 'West Elm',
                url: 'http://www.westelm.com'
            }, {
                name: 'Mark and Graham',
                url: 'http://www.markandgraham.com'
            }, {
                name: 'Rejuvenation',
                url: 'http://www.rejuvenation.com'
            }]
        }, {
            company: 'Walmart',
            city: 'Bentonville',
            state: 'Arkansas',
            websites: [{
                name: 'Sams Club',
                url: 'http://www.samsclub.com'
            }, {
                name: 'Walmart',
                url: 'http://www.walmart.com'
            }]
        }, {
            company: 'J.C. Penny',
            city: 'Plano',
            state: 'California',
            websites: [{
                name: 'JCPenny',
                url: 'http://www.jcpenny.com'
            }]
        }
        /*, {
            company: 'CVS Pharmacy',
            city: 'Woonsocket',
            state: 'Rhode Island',
            websites: [{
                name: 'CVS',
                url: 'http://www.cvs.com'
            }]
        }*/];
    });