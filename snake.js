var c = document.getElementsByTagName( 'canvas' )[ 0 ];
var ctx = c.getContext( '2d' );
var W = 700, H = 700;
var boxes = [];
var length = 10;
var dir;

function init() {
    for ( var i = 0, x = 15; i < length; i++, x += 15 ) {
        initSnake( i );
        boxes[ i ].x = x;  
        boxes[ i ].y = 10;
    }
    dir = 'right';
}

function initSnake( i ) {
    boxes[ i ] = {
        w: 10,
        h: 10,
        x: 0,
        y: 0
    };
}

function walk() {
    box = boxes.shift();
    box.x += length * 15;
    box = boxes.push( box );
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
        case 40:
            console.log( 'left' );
            break;
        case 37:
            console.log( 'left' );
            break;
        case 39:
            console.log( 'right' );
            break;
        case 38:
            console.log( 'up' );
            break;
    }
 } ); 

init();
render();
