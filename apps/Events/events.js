(function() {
    'use strict';

    angular
        .module('app.events')
        .controller('Events', Events);

    function Events(){
    		var vm = this;
		vm.upcomingEvents  = [
							
                           
							{id:1
							,eventdate: 'Sunday, 04 Dec 2016',
							eventName:'Annual Gala & Dinner',
							Description: "Radisson Hotel, Camp Hill",
							img:'ID.JPG',
							bgcolor: '#F6F6F6',
							path: 'AG'
							},
                             {
                                 id: 4
							, eventdate: 'Saturday, 24 June 2017',
                                 eventName: 'India Day - A Community Fair',
                                 Description: "HACC",
                                 img: 'AGD.JPG',
                                 bgcolor: '#F6F6F6 ',
                                 path: 'ID1'
                             },
							   
                            {
                                id: 2
							, eventdate: 'To be Announced',
                                eventName: 'Annual General Body meeting',
                                Description: "",
                                img: 'Other.JPG',
                                bgcolor: '#F6F6F6 ',
                                path: 'summit/RegisterSeminar.aspx'
                            }, {
                                id: 1
							, eventdate: 'To be Announced',
							eventName: 'Education Seminar',
							Description: 'To be Announced',
                                img: 'ES.JPG',
                                bgcolor: '#F6F6F6',
                                path: 'ES1.View'
                            }
                            
							];
		vm.pastEvents  = [
							{id:1
							,eventdate: '03 Mar 2014',
							eventName:'Education Seminar',
							Description: 'Happiness 2.0: The Scientific Basis of Emotions and evidence-based techniques to control the mind and the body',
							img:'2.JPG'},
							{id:2
							,eventdate: '08 Aug 2014',
							eventName:'India Day',
							Description: "India Day 2014 celebration held at HACC, Harrisburg Campus the facility included ample free parking, auditorium for performances, lot of room for vendors, live cooking, dining and socializing area, easy access, open green space to stroll, a large tent for outdoor activities and Mela type atmosphere.",
							img:'3.JPG'},
							{id:3
							,eventdate: '09 July 2014',
							eventName:'Mini Seminar',
							Description: "IRS and Eventuality Topics",
							img:'1.JPG'}
							];
						
        }

      
			        
    })();
