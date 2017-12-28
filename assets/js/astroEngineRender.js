var AstroEngineRender = function (svgid) {

    this.SVGID = svgid;
    //Link to SVG DOM
    objectSVG = document.querySelector(svgid);
    //Create DEFS DOM if non existent
    if (!objectSVG.querySelector('defs')) {
        objectSVG.appendChild(egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'defs', null));
    }
    //Link to DEFS DOM
    var objectDefs = objectSVG.querySelector('defs');
    //Create Group DOM array
    let objectDOM = [];
    let DATA = [];

    this.loadData = function (type, data) {
        DATA[type] = data;
    };

    //Create a generic object group[id=id] containing a path[class=block], text[class=label], textpath; defPath
    var _createCommonObject = function (id, blockAttributes, labelAttributes, labelPathAttributes, labelPath, labelContent) {
        var commonObjects = [];
        commonObjects['group'] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'g', {
            'id': id,
        });
        commonObjects['group'].appendChild(commonObjects['block'] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'path', blockAttributes));
        commonObjects['block'].classList.add('block');
        commonObjects['group'].appendChild(commonObjects['label'] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'text', labelAttributes));
        commonObjects['label'].appendChild(commonObjects['labelPath'] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'textPath', labelPathAttributes));
        commonObjects['label'].classList.add('label');
        commonObjects['labelPath'].setAttributeNS(NAMESPACES.xlink, 'xlink:href', '#text' + svgid + id + 'Label');
        commonObjects['labelPath'].textContent = labelContent;

        objectDefs.appendChild(commonObjects['labelPathDef'] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'path', {
            'id': 'text' + svgid + id + 'Label',
            'd': labelPath
        }));
        return commonObjects;
    };
    //Create a generic object, and a gradient
    var _createCommonObjectWithGradient = function (id, blockAttributes, labelAttributes, labelPathAttributes, labelPath, labelContent, gradientType, gradientData) {
        var commonObjects = _createCommonObject(id, blockAttributes, labelAttributes, labelPathAttributes, labelPath, labelContent);
        objectDefs.appendChild(commonObjects['gradient'] = egtSVG.createGradientDef2(gradientType, gradientData, {
            'id': 'gradient' + id + 'Fill'
        }));
        return commonObjects;
    };
    //Create a planet object using _createCommonObjectWithGradient as base, add circle object
    var _createPlanetObject = function (planet) {
        //figure out how many degrees we need for enough label space
        var arcDegrees = ((DATA['planets'][planet]['orb'] * 3 * 1350) + 100) / (2 * Math.PI) / DATA['planets'][planet]['radius'];
        //create the generic with a gradient
        objectDOM['planet'][planet] = _createCommonObjectWithGradient(planet, {
                'stroke': DATA['planets'][planet]['color'],
                'd': egtSVG.describeArcBlock(5000, 5000, (DATA['planets'][planet]['radius'] - DATA['planets'][planet]['arcRadius']), (DATA['planets'][planet]['radius'] + DATA['planets'][planet]['arcRadius']), 360 - arcDegrees, 360)
            }, {
                'font-size': (DATA['planets'][planet]['orb'] * 0.8),
                'fill': DATA['planets'][planet]['accentcolor']
            }, {
                'startOffset': '100%', //DATA['planets'][planet]['orb'] / 2,
                'text-anchor': 'end'
            }, egtSVG.describeArc(5000, 5000, DATA['planets'][planet]['radius'] - DATA['planets'][planet]['arcRadius'] + (DATA['planets'][planet]['orb'] / 4), 358, 360 - arcDegrees, 1), DATA['planets'][planet]['displayName'],
            'linear', {
                '0%': DATA['planets'][planet]['color'],
                '100%': DATA['planets'][planet]['accentcolor']
            });
            //egtSVG.describeArc(5000, 5000, DATA['planets'][planet]['radius'] + DATA['planets'][planet]['arcRadius'] - (DATA['planets'][planet]['orb'] / 4), 362 - arcDegrees, 358)
        //make a circle cause this is the only thing that uses circles
        objectDOM['planet'][planet]['group'].appendChild(objectDOM['planet'][planet]['circle'] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'circle', {
            'stroke': DATA['planets'][planet]['color'],
            'stroke-width': DATA['planets'][planet]['orb'] / 4,
            'cx': 5000,
            'cy': 5000 - DATA['planets'][planet]['radius'],
            'r': DATA['planets'][planet]['orb'],
            'fill': 'url(#gradient' + planet + 'Fill)'
        }));
        //throw that fucker into the DOM
        objectDOM['planets'].appendChild(objectDOM['planet'][planet]['group']);
    };
    //Create a house using _createCommonObject
    var _createHouseObject = function (house) {
        objectDOM['house'][house] = _createCommonObject('house' + house, {
                'stroke': 'url(#gradient' + DATA['houses'][house]['ruler'] + 'Fill)'
            }, {
                'fill': 'url(#gradient' + DATA['houses'][house]['ruler'] + 'Fill)'
            }, {
                'startOffset': '50%'
            },
            '',
            DATA['houses'][house]['title']);
        objectDOM['house'][house]['group'].setAttributeNS(null, 'visibility', 'none');
        objectDOM['houses'].appendChild(objectDOM['house'][house]['group']);
    };
    //Create a zodiac sign using _createCommonObjectWithGradient, add path[class=glyph]
    var _createZodiacObject = function (sign) {
        var zodiacCount = Object.keys(DATA['zodiacs']).length;
        var zodiacWidth = 360 / zodiacCount;
        var angleStart = ((Math.abs(zodiacCount - DATA['zodiacs'][sign]['order'])) * zodiacWidth) + 0.25;
        var angleEnd = (angleStart + zodiacWidth) - 0.5;
        objectDOM['zodiac'][sign] = _createCommonObjectWithGradient(sign, {
                'stroke': DATA['zodiacs'][sign]['color'],
                'fill': 'url(#gradient' + sign + 'Fill)',
                'd': egtSVG.describeArcBlock(5000, 5000, 4600, 4000, angleStart, angleEnd)
            }, {
                'stroke': DATA['zodiacs'][sign]['color'],
                'fill': 'url(#gradient' + DATA['zodiacs'][sign]['planetExaltation'] + 'Fill)'
            }, {
                'startOffset': '50%'
            },
            egtSVG.describeArc(5000, 5000, 4025, angleEnd, angleStart, 1),
            sign,
            'linear', {
                '0%': DATA['zodiacs'][sign]['color'],
                '100%': DATA['zodiacs'][sign]['accentcolor']
            });
        objectDOM['zodiac'][sign]['group'].insertBefore(objectDOM['zodiac'][sign]['glyph'] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'path', {
            'class': 'glyph',
            'stroke': DATA['zodiacs'][sign]['color'],
            'fill': 'url(#gradient' + DATA['zodiacs'][sign]['planetExaltation'] + 'Fill)',
            'transform': 'rotate(' + coordParse((zodiacWidth * DATA['zodiacs'][sign]['order']) - (zodiacWidth / 2)) + ' 5000 5000)',
            'd': DATA['zodiacs'][sign]['pathGlyph']
        }), objectDOM['zodiac'][sign]['label']);

        objectDOM['zodiacs'].appendChild(objectDOM['zodiac'][sign]['group']);
    };
    //Translate zodiacological coordinates into SVG coordinates (degrees of longitude)
    var coordParse = function (longitude) {
        while (longitude < 0) {
            longitude += 360;
        }
        while (longitude > 360) {
            longitude -= 360;
        }
        return Math.abs(360 - longitude);
    };
    //Update block and pathDef of house using given longitude and width
    var _updateHouse = function (house, longitude, width) {
        var longitudeCalc = coordParse(longitude);
        var longitudeBar = egtGeneric.toRadians(longitudeCalc - 90.5);
        var extraline = " M" +
            Math.round(5000 + Math.cos(longitudeBar) * 4650) + "," +
            Math.round(5000 + Math.sin(longitudeBar) * 4650) + "L" +
            Math.round(5000 + Math.cos(longitudeBar) * 4800) + "," +
            Math.round(5000 + Math.sin(longitudeBar) * 4800);
        objectDOM['house'][house]['group'].setAttributeNS(null, 'visibility', 'visible');
        objectDOM['house'][house]['block'].setAttributeNS(null, 'd', egtSVG.describeArcBlock(5000, 5000, 4800, 4650, longitudeCalc - width + 0.5, longitudeCalc) + extraline);
        objectDOM['house'][house]['labelPathDef'].setAttributeNS(null, 'd', egtSVG.describeArc(5000, 5000, 4670, longitudeCalc - 0.25, longitudeCalc - width + 0.5, 1))

        //update Ascendant if house is 1
        if (house == 1) {
            _updateAscendant(longitude);
        }
    };
    //Focus on a Planet - Rotate chart and Zoom
    var _focusOnPlanet = function(planet) {
        for (planetKey in objectDOM['planet']) {
            objectDOM['planet'][planetKey]['group'].classList.remove('focused');
        }
        objectDOM['ring'].setAttributeNS(null, 'transform', 'scale(2) translate(-2500) rotate(' + (DATA['planets'][planet]['longitude'] ) + ' 5000 5000)');
        objectDOM['planet'][planet]['group'].classList.add('focused');
        objectSVG.setAttribute('viewBox', '0 0 10000 7000');
    };
    //Remove Focus from a planet
    var _focusNone = function() {
        for (planetKey in objectDOM['planet']) {
            objectDOM['planet'][planetKey]['group'].classList.remove('focused');
        }
        objectSVG.setAttribute('viewBox', '0 0 10000 10000');
        _updateAscendant(DATA['planets']['Ascendant']['longitude']);
    }
    //Rotate the chart so Ascendant is on the left
    var _updateAscendant = function (longitude) {
        objectDOM['ring'].setAttributeNS(null, 'transform', 'rotate(' + (longitude - 90) + ' 5000 5000)');
    }
    //Rotate a planet to given longitude
    var _updatePlanet = function (planet, longitude) {
        if (!objectDOM['planet'][planet]) return;
        DATA['planets'][planet]['longitude'] = longitude;
        objectDOM['planet'][planet]['group'].setAttributeNS(null, 'transform', 'rotate(' + coordParse(longitude) + ' 5000 5000)');
        objectDOM['planet'][planet]['labelPath'].textContent = DATA['planets'][planet]['displayName'] + ' ' + egtAstro.longitudeToZodiacAddress(longitude);
    };
    //Remove all intercepted/duplicated classes from zodiac
    var _clearInterceptions = function () {
        for (key in objectDOM['zodiac']) {
            objectDOM['zodiac'][key]['group'].classList.remove('intercepted');
            objectDOM['zodiac'][key]['group'].classList.remove('duplicated');
        }
    }
    //add intercepted class to zodiac sign
    var _addInterception = function (zodiac) {
        objectDOM['zodiac'][zodiac]['group'].classList.add('intercepted');
    }
    //add duplicated class to zodiac sign
    var _addDuplication = function (zodiac) {
        objectDOM['zodiac'][zodiac]['group'].classList.add('duplicated');
    }
    //delete all aspect objects
    var _clearAspects = function () {
        for (key in objectDOM['aspect']) {
            objectDOM['aspect'][key].remove();
        }
    }
    //create a path[class=type] between planet1 and planet2
    var _drawAspect = function (planet1, planet2, type, angle) {
        if (!DATA['planets'][planet1]) {
            return false;
        }
        if (!DATA['planets'][planet2]) {
            return false;
        }
        if (objectDOM['aspect'][planet1 + planet2]) {
            objectDOM['aspect'][planet1 + planet2].remove();
        }
        var points = [
            egtGeneric.polarToCartesian(5000, 5000, DATA['planets'][planet1]['radius'], coordParse(DATA['planets'][planet1]['longitude'])),
            egtGeneric.polarToCartesian(5000, 5000, DATA['planets'][planet2]['radius'], coordParse(DATA['planets'][planet2]['longitude']))
        ];
        var largeArcFlag = Math.abs(DATA['planets'][planet1]['longitude'] - DATA['planets'][planet2]['longitude']) < 180 ? "0" : "1";
        var invertFlag = angle >= 0 ? "1" : "0";
        var radiiMult = 2;
        objectDOM['aspects'].appendChild(objectDOM['aspect'][planet1 + planet2] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'path', {
            'id': planet1 + planet2,
            'class': type,
            'd': ['M', points[0].x, points[0].y, 'A', DATA['planets'][planet1]['radius'] * radiiMult, DATA['planets'][planet2]['radius'] * radiiMult, angle, 0, 1 - invertFlag, points[1].x, points[1].y].join(' ')
        }));
    };
    //Update positions
    var _updateChart = function (data) {
        for (planet in data['Objects']) {
            _updatePlanet(planet, data['Objects'][planet]['longitude']);
        }
        for (house in data['Houses']) {
            var nextHouse = parseInt(house) + 1;
            while (nextHouse > 12) {
                nextHouse -= 12;
            }
            var houseWidthDegrees = data['Houses'][nextHouse]['longitude'] - data['Houses'][house]['longitude'];
            while (houseWidthDegrees < 0) {
                houseWidthDegrees += 360;
            }
            while (houseWidthDegrees > 360) {
                houseWidthDegrees -= 360;
            }
            _updateHouse(house, data['Houses'][house]['longitude'], houseWidthDegrees);
        }
        _clearAspects();
        for (aspect in data['Aspects']) {
            for (aspect2 in data['Aspects'][aspect]) {
                _drawAspect(aspect, aspect2, data['Aspects'][aspect][aspect2]['type'], data['Aspects'][
                    aspect
                ][aspect2]['angle']);
            }
        }
        _clearInterceptions();
        for (key in data['Intercepts']['Skipped']) {
            _addInterception(data['Intercepts']['Skipped'][key]);
        }
        for (key in data['Intercepts']['Duplicated']) {
            _addDuplication(data['Intercepts']['Duplicated'][key]);
        }
    };
    //Draw the base chart
    this.drawChartBase = function () {
        objectSVG.setAttribute('viewBox', '0 0 10000 10000');
        objectSVG.appendChild(objectDOM['ring'] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'g', {
            'class': 'ringZodiac'
        }));
        objectDOM['ring'].appendChild(objectDOM['aspects'] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'g', {
            'class': 'aspects'
        }));
        objectDOM['ring'].appendChild(objectDOM['houses'] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'g', {
            'class': 'houses'
        }));
        objectDOM['ring'].appendChild(objectDOM['zodiacs'] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'g', {
            'class': 'signs'
        }));
        objectDOM['ring'].appendChild(objectDOM['planets'] = egtGeneric.createElementWithAttrNS(NAMESPACES.svg, 'g', {
            'class': 'planets'
        }));
        objectDOM['house'] = [];
        for (keyHouse in DATA['houses']) {
            if (!DATA['houses'].hasOwnProperty(keyHouse)) continue;
            _createHouseObject(keyHouse);
        }
        objectDOM['zodiac'] = [];
        for (keyZodiac in DATA['zodiacs']) {
            if (!DATA['zodiacs'].hasOwnProperty(keyZodiac)) continue;
            _createZodiacObject(keyZodiac);
        }
        objectDOM['planet'] = [];
        for (keyPlanet in DATA['planets']) {
            if (!DATA['planets'].hasOwnProperty(keyPlanet)) continue;
            _createPlanetObject(keyPlanet);
        }
        objectDOM['aspect'] = [];
    };

    //make these functions callable from the outside
    this.addDuplication = _addDuplication;
    this.addInterception = _addInterception;
    this.clearAspects = _clearAspects;
    this.clearInterceptions = _clearInterceptions;
    this.drawAspect = _drawAspect;
    this.focusOnPlanet = _focusOnPlanet;
    this.focusNone = _focusNone;
    this.updateChart = _updateChart;
    this.updateHouse = _updateHouse;
    this.updatePlanet = _updatePlanet;
    
    this.dataDump = function () {
        console.log(DATA);
        console.log(objectDOM);
    }
    return this;
}

