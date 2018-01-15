$( '.content--grid' ).each( function () {
  
  var elementOffset = $( this ).offset();
  //console.log( elementOffset + ' : elementOffset' );
  var offset = elementOffset.top + elementOffset.left;
  //console.log( offset + ' : offset ' );
  var delay = offset / 1000;
  console.log( delay + ' : delay' );
  
  TweenMax.from( $( this ), 0.5, { scale : 0, delay : delay, ease : Back.easeOut } );

} );