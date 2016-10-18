(function() {
    'use strict';

    angular
        .module('app.aboutus')
        .controller('AboutUs', AboutUs);

    function AboutUs(){
    		var vm = this;
		vm.BoardMembers  = [
							{id:1
							,name: 'Baba Sontyana',
							phone:'717-979-8228',
							Role: 'Member',
							Year: '2014'},
							{id:2
							,name: 'Deep Gupta',
							phone:'717-516-0850',
							Role: 'Member',
							Year: '2014'},
							{id:3
							,name: 'Madhukar Patel',
							phone:'717-273-3739',
							Role: 'Member',
							Year: '2014'},
							{id:4
							,name: 'Mayur Patel',
							phone:'717-541-8814',
							Role: 'Member',
							Year: '2014'},
							{id:5
							,name: 'Naresh (Nick) Patel',
							phone:'717-919-4357',
							Role: 'Member',
							Year: '2014'},
							{id:6
							,name: 'Rekha Arora',
							phone:'717-761-5255',
							Role: 'Member',
							Year: '2014'},
							{id:7
							,name: 'Samir Parikh ',
							phone:'717-495-4114',
							Role: 'Member',
							Year: '2014'},
							{id:8
							,name: 'Shabnam Sachdeva',
							phone:'717-343-9412',
							Role: 'Member',
							Year: '2014'},
							{id:9
							,name: 'Sharad Gupta',
							phone:'717-303-5168',
							Role: 'Member',
							Year: '2014'},
							{id:10
							,name: 'Virendra Trivedi',
							phone:'717-756-1034',
							Role: 'PRESIDENT',
							Year: '2014'},
							{id:11
							,name: 'Ashwini Sathe',
							phone:'717-810-1895',
							Role: 'VP',
							Year: '2014'},
							{id:12
							,name: 'Mridula Mishra',
							phone:'717-914-1777',
							Role: 'SECRETARY',
							Year: '2014'},
							{id:13
							,name: 'Pankaj Agrawal',
							phone:'717-728-7628',
							Role: 'TREASURER',
							Year: '2014'},
							{id:14
							,name: 'Punit Lochan',
							phone:'717-315-9900',
							Role: 'PP',
							Year: '2014'},
							{id:15
							,name: 'Ujjwal Mittal',
							phone:'717-731-9269',
							Role: 'WEBMASTER',
							Year: '2014'},
							{id:16
							,name: 'Pramod Srivastava',
							phone:'717-856-1537',
							Role: 'AUDITOR',
							Year: '2014'},
							{id:17
							,name: 'Deep Gupta',
							phone:'717-516-0850',
							Role: 'ACP',
							Year: '2014'},
							{id:18
							,name: 'MG Patel',
							phone:'717-728-2929',
							Role: 'ADCP',
							Year: '2014'},
							{id:19
							,name: 'Ashok Shukla',
							phone:'717-737-1919',
							Role: 'AM',
							Year: '2014'},
							{id:20
							,name: 'Atreia Sindiri',
							phone:'717-395-7675',
							Role: 'AM',
							Year: '2014'},
							{id:21
							,name: 'Bony Dawood',
							phone:'717-732-1502',
							Role: 'AM',
							Year: '2014'},
							{id:22
							,name: 'KD Patel',
							phone:'717-697-7185',
							Role: 'AM',
							Year: '2014'},
							{id:23
							,name: 'Manisha Arya',
							phone:'717-732-8079',
							Role: 'AM',
							Year: '2014'},
							{id:24
							,name: 'Mukund Kulkarni',
							phone:'717-732-8127',
							Role: 'AM',
							Year: '2014'},
							{id:25
							,name: 'Narendra Kumar',
							phone:'717-795-0778',
							Role: 'AM',
							Year: '2014'},
							{id:26
							,name: 'Rajeev Pangarkar',
							phone:'717-730-6717',
							Role: 'AM',
							Year: '2014'},
							{id:27
							,name: 'Sardari Khanna',
							phone:'717-741-0757',
							Role: 'AM',
							Year: '2014'},
							{id:28
							,name: 'Srinivasan Sarma',
							phone:'717-732-9042',
							Role: 'AM',
							Year: '2014'},
							{id:1
							,name: 'Baba Sontyana',
							phone:'717-979-8228',
							Role: 'Member',
							Year: '2015'},
							{id:2
							,name: 'Deep Gupta',
							phone:'717-516-0850',
							Role: 'Member',
							Year: '2015'},
							{id:3
							,name: 'Madhukar Patel',
							phone:'717-273-3739',
							Role: 'Member',
							Year: '2015'},
							{id:4
							,name: 'Mayur Patel',
							phone:'717-541-8814',
							Role: 'Member',
							Year: '2015'},
							{id:5
							,name: 'Mridula Mishra',
							phone:'717-914-1777',
							Role: 'Member',
							Year: '2015'},
							{id:6
							,name: 'Naresh Patel',
							phone:'717-919-4357',
							Role: 'Member',
							Year: '2015'},
							{id:7
							,name: 'Samir Parikh ',
							phone:'717-495-4114',
							Role: 'Member',
							Year: '2015'},
							{id:8
							,name: 'Samina Majid',
							phone:'717-649-1377',
							Role: 'Member',
							Year: '2015'},
							{id:9
							,name: 'Sharad Gupta',
							phone:'717-303-5168',
							Role: 'Member',
							Year: '2015'},
							{id:10
							,name: 'Virendra Trivedi',
							phone:'717-756-1034',
							Role: 'PRESIDENT',
							Year: '2015'},
							{id:11
							,name: 'Pankaj Agarwal',
							phone:'717-728-7628',
							Role: 'VP',
							Year: '2015'},
							{id:12
							,name: 'Sukanya Mukherjee',
							phone:'	717-761-7927',
							Role: 'SECRETARY',
							Year: '2015'},
							{id:13
							,name: 'Shabnam Sachdeva',
							phone:'717-343-9412',
							Role: 'TREASURER',
							Year: '2015'},
							{id:14
							,name: 'Punit Lochan',
							phone:'717-315-9900',
							Role: 'PP',
							Year: '2015'},
							{id:15
							,name: 'Alok Gupta',
							phone:'717-903-6667',
							Role: 'WEBMASTER',
							Year: '2015'},
							{id:16
							,name: 'Pramod Srivastava',
							phone:'717-856-1537',
							Role: 'AUDITOR',
							Year: '2015'},
							{id:17
							,name: 'Deep Gupta',
							phone:'717-516-0850',
							Role: 'ACP',
							Year: '2015'},
							{id:18
							,name: 'MG Patel',
							phone:'717-728-2929',
							Role: 'ADCP',
							Year: '2015'},
							{id:19
							,name: 'Ashok Shukla',
							phone:'717-737-1919',
							Role: 'AM',
							Year: '2015'},
							{id:20
							,name: 'Atreia Sindiri',
							phone:'717-395-7675',
							Role: 'AM',
							Year: '2015'},
							{id:21
							,name: 'Bony Dawood',
							phone:'717-732-1502',
							Role: 'AM',
							Year: '2015'},
							{id:22
							,name: 'KD Patel',
							phone:'717-697-7185',
							Role: 'AM',
							Year: '2015'},
							{id:23
							,name: 'Manisha Arya',
							phone:'717-732-8079',
							Role: 'AM',
							Year: '2015'},
							{id:24
							,name: 'Mukund Kulkarni',
							phone:'717-732-8127',
							Role: 'AM',
							Year: '2015'},
							{id:25
							,name: 'Narendra Kumar',
							phone:'717-795-0778',
							Role: 'AM',
							Year: '2015'},
							{id:26
							,name: 'Rajeev Pangarkar',
							phone:'717-730-6717',
							Role: 'AM',
							Year: '2015'},
							{id:27
							,name: 'Sardari Khanna',
							phone:'717-741-0757',
							Role: 'AM',
							Year: '2015'},
							{id:28
							,name: 'Srinivasan Sarma',
							phone:'717-732-9042',
							Role: 'AM',
							Year: '2015'},
							{id:28
							,name: 'Punit Lochan',
							phone:'717-315-9900',
							Role: 'AM',
							Year: '2015'},
							{id:29
							,name: 'Mridula Mishra',
							phone:'717-914-1777',
							Role: 'Marketing',
							Year: '2015'},
							{id:28
							,name: 'Ashwini Sathe',
							phone:'717-810-1895',
							Role: 'Entertainment',
							Year: '2015'
							},
		{
		    id: 1
							, name: 'Girish Patel',
							phone: '717-290-6661',
		    Role: 'Member',
		    Year: '2016'
		},
							{
							    id: 2
							, name: 'Deep Gupta',
							    phone: '717-516-0850',
							    Role: 'Member',
							    Year: '2016'
							},
							{
							    id: 3
							, name: 'Hardik Patel',
							phone: '717-732-8030',
							    Role: 'Member',
							    Year: '2016'
							},
							{
							    id: 4
							, name: 'Mridula Mishra',
							phone: '717-914-1777',
							    Role: 'Member',
							    Year: '2016'
							},
							{
							    id: 5
							, name: 'Naresh Patel',
							phone: '717-919-4357',
							    Role: 'Member',
							    Year: '2016'
							},
							{
							    id: 6
							, name: 'Ravi V.subramanian',
							phone: '717-651-0620 ',
							    Role: 'Member',
							    Year: '2016'
							},
							{
							    id: 7
							, name: 'Vikram Pattarkine',
							phone: '717-763-1281',
							    Role: 'Member',
							    Year: '2016'
							},
							{
							    id: 8
							, name: 'Samina Majid',
							    phone: '717-649-1377',
							    Role: 'Member',
							    Year: '2016'
							},
							{
							    id: 9
							, name: 'Sharad Gupta',
							    phone: '717-303-5168',
							    Role: 'Member',
							    Year: '2016'
							},
							{
							    id: 10
							, name: 'Samir Parikh',
							phone: '717-495-4114',
							    Role: 'PRESIDENT',
							    Year: '2016'
							},
							{
							    id: 11
							, name: 'Pankaj Agarwal',
							    phone: '717-728-7628',
							    Role: 'VP',
							    Year: '2016'
							},
							{
							    id: 12
							, name: 'Sukanya Mukherjee',
							    phone: '	717-761-7927',
							    Role: 'SECRETARY',
							    Year: '2016'
							},
							{
							    id: 13
							, name: 'Shabnam Sachdeva',
							    phone: '717-343-9412',
							    Role: 'TREASURER',
							    Year: '2016'
							},
							{
							    id: 14
							, name: 'Virendra Trivedi',
							    phone: '717-756-1034',
							    Role: 'PP',
							    Year: '2016'
							},
							{
							    id: 15
							, name: 'Alok Gupta',
							    phone: '717-903-6667',
							    Role: 'WEBMASTER',
							    Year: '2016'
							},
							{
							    id: 17
							, name: 'Deep Gupta',
							    phone: '717-516-0850',
							    Role: 'ACP',
							    Year: '2016'
							},
							{
							    id: 18
							, name: 'MG Patel',
							    phone: '717-728-2929',
							    Role: 'ADCP',
							    Year: '2016'
							},
							{
							    id: 19
							, name: 'Ashok Shukla',
							    phone: '717-737-1919',
							    Role: 'AM',
							    Year: '2016'
							},
							{
							    id: 20
							, name: 'Atreia Sindiri',
							    phone: '717-395-7675',
							    Role: 'AM',
							    Year: '2016'
							},
							{
							    id: 21
							, name: 'Bony Dawood',
							    phone: '717-732-1502',
							    Role: 'AM',
							    Year: '2016'
							},
							{
							    id: 22
							, name: 'KD Patel',
							    phone: '717-697-7185',
							    Role: 'AM',
							    Year: '2016'
							},
							{
							    id: 23
							, name: 'Manisha Arya',
							    phone: '717-732-8079',
							    Role: 'AM',
							    Year: '2016'
							},
							{
							    id: 24
							, name: 'Mukund Kulkarni',
							    phone: '717-732-8127',
							    Role: 'AM',
							    Year: '2016'
							},
							{
							    id: 28
							, name: 'Punit Lochan',
							    phone: '717-315-9900',
							    Role: 'AM',
							    Year: '2016'
							},
							{
							    id: 26
							, name: 'Rajeev Pangarkar',
							    phone: '717-730-6717',
							    Role: 'AM',
							    Year: '2016'
							},
							{
							    id: 27
							, name: 'Sardari Khanna',
							    phone: '717-741-0757',
							    Role: 'AM',
							    Year: '2016'
							},
							{
							    id: 28
							, name: 'Srinivasan Sarma',
							    phone: '717-732-9042',
							    Role: 'AM',
							    Year: '2016'
							},
							{
							    id: 29
							, name: 'Mridula Mishra',
							    phone: '717-914-1777',
							    Role: 'Marketing',
							    Year: '2016'
							},
							{
							    id: 29
							, name: 'Mayur Patel',
							phone: '570-374-7733',
							    Role: 'Marketing',
							    Year: '2016'
							},
							{
							    id: 28
							, name: 'Ashwini Sathe',
							    phone: '717-810-1895',
							    Role: 'Entertainment',
							    Year: '2016'
							}
		,
							{
							    id: 28
							, name: 'Baba Sontyana',
							phone: '717-979-8228',
							    Role: 'Entertainment',
							    Year: '2016'
							}];
						
        }

      
			        
    })();