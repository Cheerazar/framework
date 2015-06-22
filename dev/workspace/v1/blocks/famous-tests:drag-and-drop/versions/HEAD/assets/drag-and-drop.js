'use strict';

FamousFramework.scene('famous-tests:drag-and-drop', {
    behaviors: {
        '$self': {
            'size': [undefined, undefined],
            'align': [0.5, 0.5],
            'mount-point': [0.5, 0.5]
        },
        '#draggable': {
            'size': [200, 200],
            'position': function (pos) {
                return pos;
            },
            'style': {
                'background-color': 'whitesmoke',
                'font-family': 'Lato'
            }
        }
    },
    events: {
        '#draggable': {
            'drag': function ($state, $event) {
                var eventType = $event.status;

                if (eventType === 'start') console.log('drag start');
                if (eventType === 'move') console.log('dragging');
                if (eventType === 'end') console.log('drag end');

                var curr = $state.get('pos');
                var delta = $event.centerDelta;
                $state.set('pos', [curr[0] + delta.x, curr[1] + delta.y]);
            }
        }
    },
    states: {
        'pos': [0, 0]
    },
    tree: '\n        <node id="draggable">\n            <div>Drag me!</div>\n        </node>\n    '
});