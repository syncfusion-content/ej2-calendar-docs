   ej.base.enableRipple(true);
   
   var calendar = new ej.calendars.Calendar({
        change: function (args) {
            (document.getElementById('date_label')).textContent = 'Selected Value: ' + args.value.toLocaleDateString();
        }
    });
    calendar.appendTo('#element');


