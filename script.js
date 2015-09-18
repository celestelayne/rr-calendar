$(document).ready(function(){
	console.log(" ready! ");

	var today = moment(); // current day
	var eMoment = moment(today);

	// Week Start & End
	var firstDay = moment().startOf('week');

	var date = firstDay.format('DD'); // 01, 02, 03 ...
	var day = firstDay.format('ddd') // Sun, Mon
	var month = firstDay.format('MMMM'); // September
	var year = firstDay.format('YYYY'); // 2015

	var nextDay = moment(firstDay).add(1, 'days');

	///////////*  MONTH  *///////////
	var eDisplayMonth = document.getElementById('displayMonth');
	eDisplayMonth.innerHTML = today.format('MMMM YYYY');

	$('#next-item').on('click', function (i, val){
		var nextMonth = firstDay.format('MMMM YYYY'); // this works!!!
		$('#displayMonth').replaceWith('<p id="displayMonth" class="month">' + nextMonth + '</p>');

		var nextSun = firstDay.add(1, 'days').format('DD');
		var nextMon = firstDay.add(1, 'days').format('DD');
		var nextTue = firstDay.add(1, 'days').format('DD');
		var nextWed = firstDay.add(1, 'days').format('DD');
		var nextThu = firstDay.add(1, 'days').format('DD');
		var nextFri = firstDay.add(1, 'days').format('DD');
		var nextSat = firstDay.add(1, 'days').format('DD');
		
		$('#dateOne').text(nextSun);
		$('#dateTwo').text(nextMon);
		$('#dateThree').text(nextTue);
		$('#dateFour').text(nextWed);
		$('#dateFive').text(nextThu);
		$('#dateSix').text(nextFri);
		$('#dateSeven').text(nextSat);
	});

	$('#prev-item').on('click', function (i, val){
		var prevMonth = firstDay.format('MMMM YYYY');
		$('#displayMonth').replaceWith('<p id="displayMonth" class="month">' + prevMonth + '</p>');

		var prevSun = firstDay.subtract(1, 'days').format('DD');
		var prevMon = firstDay.subtract(1, 'days').format('DD');
		var prevTue = firstDay.subtract(1, 'days').format('DD');
		var prevWed = firstDay.subtract(1, 'days').format('DD');
		var prevThu = firstDay.subtract(1, 'days').format('DD');
		var prevFri = firstDay.subtract(1, 'days').format('DD');
		var prevSat = firstDay.subtract(1, 'days').format('DD');
		
		$('#dateOne').text(prevSun);
		$('#dateTwo').text(prevMon);
		$('#dateThree').text(prevTue);
		$('#dateFour').text(prevWed);
		$('#dateFive').text(prevThu);
		$('#dateSix').text(prevFri);
		$('#dateSeven').text(prevSat);
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

});