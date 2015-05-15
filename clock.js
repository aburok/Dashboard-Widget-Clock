angular.module('widget')
    .config(function(widgetServiceProvider) {
        widgetServiceProvider.register('clock', {
            sizex: 2,
            sizey: 2,
            color: '#292625',
            template: 'Widget-clock/clock.html',
            dataBind: {
                type: 'internal',
                interval: 1000
            }
        });
    });
