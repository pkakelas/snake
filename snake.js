var c = document.getElementsByTagName( 'canvas' )[ 0 ];
var ctx = c.getContext( '2d' );
var W = 700, H = 700;
var STEP = 15;
var dots = [];
var length = 5;
var dir;
var apple;

function init() {
    for ( var i = 0, x = STEP; i <= length; i++, x += STEP ) {
        createDot( i );
        dots[ i ].x = x;
    }
    dir = 'right';
}

function integrate()  {
    var dot;
    for ( var i = 0; i < length; ++i ) { //movement
        dots[ i ] = dots[ i + 1 ];
        dot = newDot( dir );
    }

    for ( var i = 1; i < length; ++i ) { //restrictions
        if ( dot.x == dots[ i - 1 ].x && dot.y == dots[ i - 1 ].y ) {
            console.log( 'fuck' );
        }
    }
    if ( dot.x > W || dot.x < 0 || dot.y > H || dot.y < 0 ) {
        console.log( 'fuck' );
    }

    console.log( apple );
    if ( dot.x == apple.x && dot.y == apple.y ) {
        createApple();
        length += 1;
    }
}

function createApple() {
    return apple = {
        w: 10,
        h: 10,
        x: Math.round( Math.random() * W / STEP ) * STEP,
        y: Math.round( Math.random() * H / STEP ) * STEP - 5
    };
}

function createDot( i ) {
    return dots[ i ] = {
        w: 10,
        h: 10,
        x: 10,
        y: 10
    };
}

function newDot( dir ) {
    switch ( dir ) {
        case 'up':
            x = dots[ length - 2 ].x;
            y = dots[ length - 2 ].y - STEP;
            break;
        case 'down':
            x = dots[ length - 2 ].x;
            y = dots[ length - 2 ].y + STEP;
            break;
        case 'right':
            y = dots[ length - 2 ].y;
            x = dots[ length - 2 ].x + STEP;
            break;
        case 'left':
            y = dots[ length - 2 ].y;
            x = dots[ length - 2 ].x - STEP;
            break;
    };
    dot = createDot( length );
    dot.x = x;
    dot.y = y;
    return dot;
}

function render() {
    integrate();

    ctx.fillStyle = '#fff';
    ctx.fillRect( 0, 0, W, H );

    for ( var i = 0; i < length; ++i ) {
        dot = dots[ i ];
        ctx.fillStyle = 'black';
        ctx.fillRect( dot.x, dot.y, dot.w, dot.h );
    }

    ctx.fillStyle = 'red';
    image = new Image();
    image.src = 'http://findicons.com/files/icons/496/smooth/128/apple.png';
    ctx.drawImage( image, apple.x, apple.y, 15, 15 );

    setTimeout( render, 200 );
}

$( document ).keydown( function( e ) {
    switch ( e.keyCode ) {
        case 37:
            if ( dir != 'right' ) {
                dir = 'left';
            }
            break;
        case 38:
            if ( dir != 'down' ) {
                dir = 'up';
            }
            break;
        case 39:
            if ( dir != 'left' ) {
                dir = 'right';
            }
            break;
        case 40:
            if ( dir != 'up' ) {
                dir = 'down';
            }
            break;
    }
} ); 

createApple();
init();
render();
