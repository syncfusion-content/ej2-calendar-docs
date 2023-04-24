   ej.base.enableRipple(true);        
     loadCultureFiles('he');
     var L10n=ej.base.L10n;
     L10n.load({
    'he': {
        'datepicker': {
            placeholder: 'הזן תאריך',
             today:'היום'
        }
    }
    });
   var datepicker = new ej.calendars.DatePicker({
       locale: 'he',enableRtl:true
    });
    datepicker.appendTo('#element');
 
function loadCultureFiles(name) {
        var files = ['ca-gregorian.json', 'numbers.json', 'timeZoneNames.json'];
        if (name === 'ar') {
            files.push('numberingSystems.json');
        }
        var loader = ej.base.loadCldr;
        var loadCulture = function (prop) {
            var val, ajax;
            if (name === 'ar' && prop === files.length - 1) {
                ajax = new ej.base.Ajax('https://ej2.syncfusion.com/javascript/demos/src/common/cldr-data/supplemental/' + files[prop], 'GET', false);
            } else {
                ajax = new ej.base.Ajax('https://ej2.syncfusion.com/javascript/demos/src/common/cldr-data/main/' + name + '/' + files[prop], 'GET', false);
            }
            ajax.onSuccess = function (value) {
                val = value;
            };
            ajax.send();
            loader(JSON.parse(val));
        };
        for (var prop = 0; prop < files.length; prop++) {
            loadCulture(prop);
        }
    }


