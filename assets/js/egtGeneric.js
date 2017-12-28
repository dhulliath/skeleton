const NAMESPACES = {
    'svg': "http://www.w3.org/2000/svg",
    'xlink': 'http://www.w3.org/1999/xlink'
}
const egtSVG = {
    'createGradientDef2': function (type, data, attrs = []) {
        var gradient = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, type + 'Gradient', attrs);
        for (stop in data) {
            gradient.appendChild(egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'stop', {
                'offset': stop,
                'stop-color': data[stop]
            }));
        }
        return gradient;
    },
    'createGradientDef': function (type, data, attrs = []) {
        if (['linear','radial'].indexOf(type) < 0) {return null;}
        var gradient = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, type + 'Gradient', attrs);
        for (stop in data) {
            gradient.appendChild(egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'stop', data[stop]));
        }
        return gradient;
    },
    'describeArc': function (x, y, radius, startAngle, endAngle, invert = 0) {
        var start = egtGeneric.polarToCartesian(x, y, radius, endAngle);
        var end = egtGeneric.polarToCartesian(x, y, radius, startAngle);

        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        var d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, invert, end.x, end.y
        ].join(" ");

        return d;
    },
    'describeArcBlock': function (x, y, outerRadius, innerRadius, startAngle, endAngle) {
        //console.log(outerRadius+","+innerRadius);
        var point1 = egtGeneric.polarToCartesian(x, y, outerRadius, endAngle);
        var point2 = egtGeneric.polarToCartesian(x, y, outerRadius, startAngle);
        var point3 = egtGeneric.polarToCartesian(x, y, innerRadius, startAngle);
        var point4 = egtGeneric.polarToCartesian(x, y, innerRadius, endAngle);
        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        var d = [
            "M", point1.x, point1.y,
            "A", outerRadius, outerRadius, 0, largeArcFlag, 0, point2.x, point2.y,
            "L", point3.x, point3.y,
            "A", innerRadius, innerRadius, 0, largeArcFlag, 1, point4.x, point4.y,
            "Z"
        ].join(" ");
        return d;
    }
}
const egtGeneric = {
    'getCurrentDirectory': function () {
        var loc = window.location.pathname;
        var dir = loc.substring(0, loc.lastIndexOf('/'));
        return dir;
    },
    'getFileAndCall': function (fileTarget, callback, callbackOptions) {
        try {
        var apiHTTP = new XMLHttpRequest();
        apiHTTP.open("GET", fileTarget, true);
        if (callbackOptions['mimeType']) {
            apiHTTP.overrideMimeType(callbackOptions['mimeType']);
        }
        //apiHTTP.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        apiHTTP.onreadystatechange = function () {
            if (apiHTTP.readyState == 4 && apiHTTP.status == 200) {
                var requestData = apiHTTP.responseText;
                callback(requestData, callbackOptions);
            }
        };
        apiHTTP.send();
        } catch(err) {
            console.log(err);
        }
    },
    'getCurrentURL': function () {
        return [location.protocol, '//', location.host, location.pathname].join('');
    },
    'updatePageURL': function (queryString) {
        var url = this.getCurrentURL();
        $('meta[property="og:url"]').attr("content", url + "?" + queryString);
        window.history.pushState("some", "Title", url + "?" + queryString);
    },
    'createElementWithAttr': function (element, attributes) {
        var newElem = document.createElement(element);
        for (key in attributes) {
            newElem.setAttribute(key, attributes[key]);
        }
        return newElem;
    },
    'createElementWithAttrNS': function (namespace, element, attributes) {
        var newElem = document.createElementNS(namespace, element);
        for (key in attributes) {
            newElem.setAttributeNS(null, key, attributes[key]);
        }
        return newElem;
    },
    'setAttributesNS': function (namespace, object, attributes) {
        for (key in attributes) {
            object.setAttributeNS(namespace, key, attributes[key]);
        }
    },
    'setAttribute': function (object, attributes) {
        this.setAttributeNS(null, object, attributes);
    },
    'romanizeNumber': function (num) {
        var lookup = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1
            },
            roman = '',
            i;
        for (i in lookup) {
            while (num >= lookup[i]) {
                roman += i;
                num -= lookup[i];
            }
        }
        return roman;
    },
    'toRadians': function (angle) {
        while (angle > 360) {
            angle -= 360;
        }
        while (angle < 0) {
            angle += 360;
        }
        return angle * (Math.PI / 180);
    },
    'polarToCartesian': function (centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    },
    'encodeQueryData': function (data) {
        let ret = [];
        for (let d in data)
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        return ret.join('&');
    },
    'uriEncode': function (uri) {
        return encodeURIComponent(btoa(uri));
    },
    'uriDecode': function (uri) {
        return atob(decodeURIComponent(uri));
    },
    'getUrlParameter': function (sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }
}