$(document).ready(function(){
	console.log(" ready! ");

	var unavailableDates = [
	  "2015-06-01",
	  "2015-06-08",
	  "2015-06-15",
	  "2015-06-16",
	  "2015-06-17",
	  "2015-07-03",
	  "2015-07-04",
	  "2015-07-05",
	  "2015-07-12",
	  "2015-07-29"
	];

	var today = moment(); // current day

	// Week Start & End
	var firstDay = moment().startOf('week');
	var lastDay = moment().endOf('week');

	// Dates of the month
	var dates = [];
	var day = firstDay;

	// Days of the week
	var weekdays = [];
	var weekday = firstDay;

	// console.log(weekday);

	while (day <= lastDay) {
		dates.push(day.format('DD'));
		day = day.clone().add(1, 'day');

		weekdays.push(weekday.format('ddd'));
		weekday = weekday.clone().add(1, 'days')
	}

	console.log(dates);
	console.log(weekdays);

	debugger;

	$('#next-item').on('click', function (i, val){

		var targetDate = document.getElementById('dateOne');
		console.log(targetDate)
		targetDate.innerHTML = date.format('ddd');

		var nextWeek = dates.add(7, 'days');
		console.log(nextWeek)
		$('#dateOne').replaceWith('<li id="dateOne" class="date">' + nextWeek + '</li>');
	});

	// $('#displayMonth').append('<li id="displayMonth" class="month">' + dayOfWeek + '</li>');

	$.each(weekdays, function (i, val){
		var weekday = val;
		// days Sunday, Monday ...
		$('#displayWeekday').append('<li class="day">' + weekday + '</li>');
	});

	$.each(dates, function (i, val){
		var date = val;
		// dates 13, 14, 15
		$('#displayDate').append('<li id="dateOne" class="date">' + date + '</li>');

		// Underscore Template
		var calendarTemplate = _.template($('#calendar-template').html());
		var resultsHtml = calendarTemplate(weekday)
		
		$('#calendar-template').html(resultsHtml);
	});

});