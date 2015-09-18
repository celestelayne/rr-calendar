$(document).ready(function(){
	console.log(" ready! ");

	var today = moment(); // current day
	var eMoment = moment(today);

	// Week Start & End
	var firstDay = moment().startOf('week');
	var nextDay = moment(firstDay).add(1, 'days');

	///////////*  MONTH  *///////////
	var eDisplayMonth = document.getElementById('displayMonth');
	eDisplayMonth.innerHTML = today.format('MMMM YYYY');

	$('#next-item').on('click', function (i, val){
		var nextMonth = eMoment.add(1, 'months').format('MMMM YYYY');
		$('#displayMonth').replaceWith('<p id="displayMonth" class="month">' + nextMonth + '</p>');
	});

	$('#prev-item').on('click', function (i, val){
		var prevMonth = eMoment.subtract(1, 'months').format('MMMM');
		$('#displayMonth').replaceWith('<p id="displayMonth" class="month">' + prevMonth + '</p>');
	});

	///////////*  DAYS OF WEEK  *///////////
	// Sunday
	var day1 = document.getElementById('Sunday');
	day1.innerHTML = firstDay.format('ddd');
	
	// Monday
	var day2 = document.getElementById('Monday');
	day2.innerHTML = nextDay.format('ddd');
	
	// Tuesday
	var day3 = document.getElementById('Tuesday');
	day3.innerHTML = nextDay.add(1, 'days').format('ddd');

		// Wednesday
	var day4 = document.getElementById('Wednesday');
	day4.innerHTML = nextDay.add(1, 'days').format('ddd');

	// Thursday
	var day5 = document.getElementById('Thursday');
	day5.innerHTML = nextDay.add(1, 'days').format('ddd');

	// Friday
	var day6 = document.getElementById('Friday');
	day6.innerHTML = nextDay.add(1, 'days').format('ddd');

	// Friday
	var day7 = document.getElementById('Saturday');
	day7.innerHTML = nextDay.add(1, 'days').format('ddd');

	///////////*  DATES OF WEEK  *///////////
	// Sunday
	var date1 = document.getElementById('dateOne');
	date1.innerHTML = firstDay.format('DD');

	// Monday
	var date2 = document.getElementById('dateTwo');
	date2.innerHTML = firstDay.add(1, 'day').format('DD');

	// Tuesday
	var date3 = document.getElementById('dateThree');
	date3.innerHTML = firstDay.add(1, 'day').format('DD');

	// Wednesday
	var date4 = document.getElementById('dateFour');
	date4.innerHTML = firstDay.add(1, 'day').format('DD');

	// Thursday
	var date5 = document.getElementById('dateFive');
	date5.innerHTML = firstDay.add(1, 'day').format('DD');

	// Friday
	var date6 = document.getElementById('dateSix');
	date6.innerHTML = firstDay.add(1, 'day').format('DD');

	// Saturday
	var date7 = document.getElementById('dateSeven');
	date7.innerHTML = firstDay.add(1, 'day').format('DD');

	///////////*  DAYS IN MONTH  *///////////

	// var daysOfWeek = [];
	// 	for(var i = firstDay; i.isBefore(lastDay); i.add(1, 'days')){
	// 		daysOfWeek.push(i.format('dddd'));
	// 	};
	// 	var result = daysOfWeek.toString().split(",").valueOf();
		// console.log(result);

		// $('.date').append(result);

	// for (var d = new Date(firstDay); d <= lastDay; d.setDate(d.getDate() + 1)) {
	//     daysOfWeek.push(new Date(d) );
 //  	}
  	// debugger;

  	// 	var eachDay = document.getElementById("date").innerHTML = daysOfWeek.toString().split(",").valueOf();
			// console.log(eachDay);
	// debugger;



	// $('#next-item').on('click', function(){

	// 	$.each(months, function (index, value){
	// 		$('p#displayMonth').text(months[(index++) % months.length]);
	// 	});
	// });

	/*  DAYS OF THE WEEK  */
	// var eDisplayWeekday = document.getElementById('displayWeekday');
	// eDisplayWeekday.innerHTML = today.format('ddd');



	// Create calendar template -- calendarTemplate is a function and _.template is a method
	 	var calendarTemplate = _.template($('#calendar-template').html());

});