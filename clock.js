angular.module('widget')
    .config(function(widgetServiceProvider) {
        widgetServiceProvider.register('clock', {
            sizex: 2,
            sizey: 2,
            color: '#292625',
            template: 'Dashboard-Widget-Clock/clock.html',
        });
    });
