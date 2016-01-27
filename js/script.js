$(document).ready(function()
{
    localStorage.clear();
    var d = new Date();

    // gets the current month
    // http://www.w3schools.com/jsref/jsref_getmonth.asp
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    $("#nextMonth").click(function()
    {
        $(".dayDate").html("");
        if(localStorage.getItem("cMonth"))
        {
            var useMonthD = parseInt(localStorage.getItem("cMonth")) + 1;
            var useYear = d.getFullYear();
            if(parseInt($("#thisYear").html()) !== (d.getFullYear()))
            {
                var useYear = localStorage.getItem("cYear");
            }
            if(localStorage.getItem("cMonth") == 11)
            {
                //var useYear = d.getFullYear() + 1;
                var useYear = parseInt($("#thisYear").html()) + 1;
                localStorage.setItem("cYear", useYear)
                var useMonthD = 0;
            }
            var useMonth = month[useMonthD];
            var thisMonthDay = useMonthD;
            localStorage.setItem("cMonth", useMonthD);
        }
        else
        {
            var monthAsInt = parseInt(d.getMonth() + 1);
            var useYear = d.getFullYear();
            if(parseInt($("#thisYear").html()) !== (d.getFullYear()))
            {
                var useYear = localStorage.getItem("cYear");
            }
            if((d.getMonth()) == 11)
            {
                //var useYear = d.getFullYear() + 1;
                var useYear = parseInt($("#thisYear").html()) + 1;
                localStorage.setItem("cYear", useYear)
                var useMonthAsInt = 0;
            }
            localStorage.setItem("cMonth", monthAsInt);
            var useMonth = month[monthAsInt];
            var thisMonthDay = monthAsInt;
        }
        beginCalendar(useMonth, thisMonthDay, useYear);
    });

    $("#previousMonth").click(function()
    {
        $(".dayDate").html("");
        if(localStorage.getItem("cMonth"))
        {
            var useMonthD = parseInt(localStorage.getItem("cMonth")) - 1;
            var useYear = d.getFullYear();
            if(parseInt($("#thisYear").html()) !== (d.getFullYear()))
            {
                var useYear = localStorage.getItem("cYear");
            }
            if(localStorage.getItem("cMonth") == 0)
            {
                //var useYear = d.getFullYear() - 1;
                var useYear = parseInt($("#thisYear").html()) - 1;
                localStorage.setItem("cYear", useYear)
                var useMonthD = 11;
            }
            var useMonth = month[useMonthD];
            var thisMonthDay = useMonthD;
            localStorage.setItem("cMonth", useMonthD);
        }
        else
        {
            var monthAsInt = parseInt(d.getMonth() - 1);
            var useYear = d.getFullYear();
            if(parseInt($("#thisYear").html()) !== (d.getFullYear()))
            {
                var useYear = localStorage.getItem("cYear");
            }
            if(monthAsInt == -1)
            {
                alert("valid");
                //var useYear = d.getFullYear() - 1;
                var useYear = parseInt($("#thisYear").html()) - 1;
                localStorage.setItem("cYear", useYear)
                var monthAsInt = 11;
            }
            localStorage.setItem("cMonth", monthAsInt);
            var useMonth = month[monthAsInt];
            var thisMonthDay = monthAsInt;
        }
        beginCalendar(useMonth, thisMonthDay, useYear);
    });

    var useMonth = month[d.getMonth()];
    var useYear = d.getFullYear();
    var thisMonthDay = d.getMonth();
    beginCalendar(useMonth, thisMonthDay, useYear);

    function beginCalendar(thisMonth, thisMonthDay, year)
    {
        $("#thisMonth").html(thisMonth);
        $("#thisYear").html(year);

        // gets amount of days in specified month & year
        // http://stackoverflow.com/a/1184359
        function daysInMonth(thisMonthDay, year)
        {
            return new Date(year, thisMonthDay, 0).getDate();
        }

        // gets the total days for this month alone
        var thisMonthRaw = thisMonthDay + 1;

        // gets which day of the week the first day is
        if(thisMonthRaw.toString().length == 1)
        {
            var thisMonthRawInt = "0" + thisMonthRaw.toString();
        }
        else
        {
            var thisMonthRawInt = thisMonthRaw.toString();
        }
        var firstDay = new Date(year + "-" + thisMonthRawInt + "-01").getDay();
        var realDay = new Array();
        realDay[0] = "Monday";
        realDay[1] = "Tuesday";
        realDay[2] = "Wednesday";
        realDay[3] = "Thursday";
        realDay[4] = "Friday";
        realDay[5] = "Saturday";
        realDay[6] = "Sunday";
        var dayOfMonth = realDay[firstDay];

        setCalendar();
        // setting the calendar
        function setCalendar()
        {
            // total days for the month
            var daysThisMonth = daysInMonth(thisMonthRaw, year);

            // set the first day of the week
            var getInitial = new Array();
            getInitial["Monday"] = "1000";
            getInitial["Tuesday"] = "1001";
            getInitial["Wednesday"] = "1002";
            getInitial["Thursday"] = "1003";
            getInitial["Friday"] = "1004";
            getInitial["Saturday"] = "1005";
            getInitial["Sunday"] = "999";
            var startingDay = getInitial[dayOfMonth];

            var daysThisMonthAddition = (parseInt(daysThisMonth) + parseInt(startingDay)) - 1;
            var j = 1;
            for (i = startingDay; i <= daysThisMonthAddition; i++)
            {
                $("#" + i).html(j);
                j = j + 1;
            }
        }
    }
});