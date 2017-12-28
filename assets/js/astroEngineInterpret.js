var AstroEngineInterpret = function (parentQuery) {
    var baseID = '';
    var objectDOM = [];
    var DATA = [];
    objectDOM['_parent'] = document.querySelector(parentQuery);

    var _loadData = function (type, data) {
        DATA[type] = data;
    };
    var _createGenericTextBlock = function (cssClass, header) {
        var commonObject = [];
        commonObject['block'] = egtGeneric.createElementWithAttr('div', {
            'class': 'block hidden ' + cssClass
        });
        commonObject['block'].appendChild(commonObject['header'] = egtGeneric.createElementWithAttr('h4', {
            'class': 'header'
        }));
        commonObject['block'].appendChild(commonObject['body'] = egtGeneric.createElementWithAttr('p', {
            'class': 'details'
        }));
        commonObject['header'].textContent = header;
        return commonObject;
    };
    var _updateText = function (planet, category, header, content) {
        objectDOM[planet][category]['header'].innerHTML = header;
        objectDOM[planet][category]['body'].innerHTML = content;
    };
    var _updateDOM = function (data, options) {
        if (data) {
            let data2, render;
            try {
                data2 = JSON.parse(data);
                render = '<p>' + data2['paragraphs'].join('</p><p>') + '</p><p><a href="' + data2['source'] + '">source</a></p>';
            } catch (e) {
                render = data;
            }
                        options['targetObject']['header'].innerHTML = options['header'];
            options['targetObject']['body'].innerHTML = render;
            options['targetObject']['block'].classList.remove('hidden');
        } else {
            options['targetObject']['block'].classList.add('hidden');
        }
    };
    var _clearAspects = function(planet) {
        for (aspectEntry in objectDOM[planet]['aspects']) {
            objectDOM[planet]['aspects'][aspectEntry]['block'].remove();
            delete objectDOM[planet]['aspects'][aspectEntry];
        }
    };
    var _addAspect = function (planet, planet2, aspect) {
        if (!objectDOM[planet]['aspects']) {objectDOM[planet]['aspects'] = [];}
        objectDOM[planet]['aspects'][aspect + planet2] = _createGenericTextBlock('aspect' + aspect, aspect + ' with ' + planet2)
        objectDOM[planet]['children'].appendChild(objectDOM[planet]['aspects'][aspect + planet2]['block']);
        egtGeneric.getFileAndCall(egtGeneric.getCurrentDirectory() + "/data/aspects/" + aspect + '_' + planet + '_' + planet2 + ".txt", _updateDOM, {
            'targetObject': objectDOM[planet]['aspects'][aspect + planet2],
            'header': DATA['render']['aspectData'][aspect]['label'] + ' with ' + planet2,
            'mimeType': 'text/plain'
        });
    };
    var _updateChart = function (data) {
        for (planet in data['Objects']) {
            if (DATA['render']['planetDescs'][planet]) {
                var sign = data['Objects'][planet]['sign']
                var house = Math.floor(data['Objects'][planet]['house']);
                egtGeneric.getFileAndCall(egtGeneric.getCurrentDirectory() + "/data/" + planet + "_" + sign + ".txt", _updateDOM, {
                    'targetObject': objectDOM[planet]['zodiac'],
                    'header': sign,
                    'mimeType': 'application/json'
                });
                if (DATA['render']['planetDescs'][planet]['showHouse']) {
                    egtGeneric.getFileAndCall(egtGeneric.getCurrentDirectory() + "/data/" + planet + "_house" + house + ".txt", _updateDOM, {
                        'targetObject': objectDOM[planet]['house'],
                        'header': 'House ' + egtGeneric.romanizeNumber(house),
                        'mimeType': 'text/plain'
                    });
                }
                if (DATA['render']['planetDescs'][planet]['showRetrograde']) {
                    if (data['Objects'][planet]['speed'] < 0) {
                        var retQuery;
                        if (DATA['render']['planetDescs'][planet]['retrogradeDepth'] == 'sign') {
                            retQuery = planet + '_' + data['Objects'][planet]['sign'] + "_Retrograde.txt";
                        } else {
                            retQuery = planet + "_Retrograde.txt";
                        }
                        egtGeneric.getFileAndCall(egtGeneric.getCurrentDirectory() + "/data/" + retQuery, _updateDOM, {
                            'targetObject': objectDOM[planet]['retrograde'],
                            'header': 'Retrograde',
                            'mimeType': 'text/plain'
                        });
                        objectDOM[planet]['retrograde']['block'].classList.remove('hidden');
                    } else {
                        objectDOM[planet]['retrograde']['block'].classList.add('hidden');
                    }
                }
                _clearAspects(planet);
                for (planet2 in data['Aspects'][planet]) {
                    if (DATA['render']['planetDescs'][planet2]) {
                        var aspQueryType = data['Aspects'][planet][planet2]['type'];
                        if (DATA['render']['planetDescs'][planet]['aspectDepth'] == 'presence') {
                            aspQueryType = 'General'
                        }
                        if (DATA['render']['planetDescs'][planet2]['aspectDepth'] == 'presence') {
                            aspQueryType = 'General'
                        }
                        _addAspect(planet, planet2, aspQueryType);
                    }
                }
            }
        }
    };
    var _drawTable = function () {
        try {
            objectDOM['navbar'] = [];
            objectDOM['navbar']['objects'] = [];
            objectDOM['navbar']['block'] = objectDOM['_parent'].querySelector('.navb');
            //objectDOM['_parent'].appendChild(objectDOM['navbar']['block'] = egtGeneric.createElementWithAttr('div', {'class':'navb'}));
            for (keyRender in DATA['render']['planetDescs']) {
                if (!DATA['render']['planetDescs'].hasOwnProperty(keyRender)) continue;
                //create description block
                var commonObject = [];
                objectDOM['_parent'].appendChild(commonObject['group'] = egtGeneric.createElementWithAttr('div', {
                    /*'id': baseID + keyRender,*/
                    'class': 'objectInterpretation',
                    'style': 'display: block; width: 100%; margin-bottom: 20px;'
                }));
                commonObject['group'].appendChild(commonObject['objectGroup'] = egtGeneric.createElementWithAttr('div', {
                    'class': 'headerContainer'
                }));
                commonObject['objectGroup'].appendChild(egtGeneric.createElementWithAttr('a', {'name': 'Object'+keyRender}));
                commonObject['objectGroup'].appendChild(commonObject['objectHeader'] = egtGeneric.createElementWithAttr('h2', {
                    'class': 'mheader'
                }));
                commonObject['group'].appendChild(commonObject['children'] = egtGeneric.createElementWithAttr('div', {
                    'class': 'definitions'
                }));
                if (DATA['render']['planetDescs'][keyRender]['displayName']) {
                    commonObject['objectHeader'].innerHTML = DATA['render']['planetDescs'][keyRender]['displayName'];
                } else {
                    commonObject['objectHeader'].innerHTML = keyRender;
                }
                commonObject['zodiac'] = _createGenericTextBlock('planet', 'Zodiac');
                commonObject['children'].appendChild(commonObject['zodiac']['block']);
                if (DATA['render']['planetDescs'][keyRender]['showRetrograde']) {
                    commonObject['retrograde'] = _createGenericTextBlock('retrograde', 'Retrograde');
                    commonObject['children'].appendChild(commonObject['retrograde']['block']);
                }

                if (DATA['render']['planetDescs'][keyRender]['showHouse']) {
                    commonObject['house'] = _createGenericTextBlock('house', 'House');
                    commonObject['children'].appendChild(commonObject['house']['block']);
                }
                objectDOM[keyRender] = commonObject;
                //create navigation block
                objectDOM['navbar']['objects'][keyRender] = [];
                objectDOM['navbar']['block'].appendChild(objectDOM['navbar']['objects'][keyRender]['block'] = egtGeneric.createElementWithAttr('a',{'class':'nave', 'href':'#', 'd':keyRender}));
                objectDOM['navbar']['objects'][keyRender]['block'].appendChild(objectDOM['navbar']['objects'][keyRender]['img'] = egtGeneric.createElementWithAttr('img',{'alt': keyRender,'src':'/assets/img/svg/Planet-'+String(keyRender).toLowerCase()+'.svg'}));
            }
        } catch (err) {
            console.log(key);
            console.log(err);
            console.log(objectDOM);
            console.log(DATA);
        }
    };
    var _focusOnPlanet = function(planet) {
        for (keyDesc in objectDOM['navbar']['objects']) {
            objectDOM[keyDesc]['group'].classList.add('hidden');
        }
        objectDOM[planet]['group'].classList.remove('hidden');
    };
    var _focusNone = function() {
        for (keyDesc in objectDOM['navbar']['objects']) {
            objectDOM[keyDesc]['group'].classList.remove('hidden');
        }
    };

    this.DOMobjects = objectDOM;
    this.addAspect = _addAspect;
    this.clearAspects = _clearAspects;
    this.drawTable = _drawTable;
    this.focusOnPlanet = _focusOnPlanet;
    this.focusNone = _focusNone;
    this.loadData = _loadData;
    this.updateChart = _updateChart;
    this.updateDOM = _updateDOM
    this.updateText = _updateText;
    return this;
};