var egtAstro = {
    'queryAPI': function (latitude, longitude, year, month, day, hour, minute, bKnowTime, id, callback) {
        var datetimeObj = new Date(month + "/" + day + "/" + year);
        let AstroData;

        //kindly ask google for a timezone
        var requestString = "https://maps.googleapis.com/maps/api/timezone/json?location=" +
            latitude + "," +
            longitude + "&timestamp=" +
            Math.floor(datetimeObj.getTime() / 1000);
        var jsonHTTP = new XMLHttpRequest();
        jsonHTTP.open("GET", requestString, false);
        jsonHTTP.send(null);
        var tzQuery = JSON.parse(jsonHTTP.responseText);
        var timezone = tzQuery['timeZoneId'];
        if (!timezone) {
            timezone = "UTC";
        }

        var QueryString = {
            "longitude": longitude,
            "latitude": latitude,
            "minute": minute,
            "hour": hour,
            "day": day,
            "month": month,
            "year": year,
            "timezone": timezone,
            "ID": id
        };

        var apiHTTP = new XMLHttpRequest();
        apiHTTP.open("POST", "https://astro.earlgraytease.com/api.php", true);
        apiHTTP.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        apiHTTP.onreadystatechange = function () {
            if (apiHTTP.readyState == 4 && apiHTTP.status == 200) {
                AstroData = JSON.parse(apiHTTP.response);
                AstroData['queryString'] = QueryString;
                callback(AstroData);
            }
        }
        
        apiHTTP.send(egtGeneric.encodeQueryData(QueryString));
        
    },
    'longitudeToZodiacAddress': function (longitude) {
        var signs = ['Ari', 'Tau', 'Gem', 'Can', 'Leo', 'Vir', 'Lib', 'Sco', 'Sag', 'Cap', 'Aqu', 'Pis'];
        var signNum = Math.floor(longitude / 30);
        var signPos = parseFloat(longitude) - (signNum * 30);
        var degree = Math.floor(signPos);
        var fullMin = (signPos - degree) * 60;
        var min = Math.floor(fullMin);
        var fullSec = Math.round((fullMin - min) * 60);
        if (min < 10) {
            min = "0" + min;
        }
        if (fullSec < 10) {
            fullSec = "0" + fullSec;
        }
        return degree + " " + signs[signNum] + " " + min + "'" + fullSec + '"';
    }
}