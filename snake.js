var c = document.getElementsByTagName( 'canvas' )[ 0 ];
var ctx = c.getContext( '2d' );
var W = 700, H = 700;
var boxes = [];
var length = 10;
var dir;

function init() {
    for ( var i = 0, x = 15; i < length; i++, x += 15 ) {
        boxes.push( {
            w: 10,
            h: 10,
            y: 10,
            x: x
        } );
    }
    dir = 'right';
}

function walk()  {
    for ( var i = 0; i < length; ++i ) {
        boxes[ i ] = boxes[ i + 1 ];
        newDot( dir );
    }
    boxes.splice( 0, 1 );
}

function newDot( dir ) {
    switch ( dir ) {
        case 'up':
            x = boxes[ length -1 ].x;
            y = boxes[ length -1 ].y - 15;
            break;
        case 'down':
            x = boxes[ length -1 ].x;
            y = boxes[ length -1 ].y + 15;
            break;
        case 'right':
            y = boxes[ length - 1 ].y;
            x = boxes[ length - 1 ].x + 15;
            break;
        case 'left':
            y = boxes[ length - 1 ].y;
            x = boxes[ length - 1 ].x - 15;
            break;
    };
    boxes[ length ] = {
        w: 10,
        h: 10,
        x: x,
        y: y
    };
}

function render() {
    walk();

    ctx.fillStyle = '#fff';
    ctx.fillRect( 0, 0, W, H );

    for ( var i = 0; i < length; ++i ) {
        box = boxes[ i ];
        ctx.fillStyle = 'black';
        ctx.fillRect( box.x, box.y, box.w, box.h );
    }

    setTimeout( render, 500 );
}
$( document ).keydown( function( e ) {
    switch ( e.keyCode ) {
        case 37:
            dir = 'left';
            break;
        case 38:
            dir = 'up';
            break;
        case 39:
            dir = 'right';
            break;
        case 40:
            dir = 'down';
            break;
    }
} ); 

init();
render();
