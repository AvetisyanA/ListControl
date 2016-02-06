$(function() {
    $('#main').click(function (event) {
      var eventTarget = $(event.target);
      if (eventTarget.hasClass('listBoxItemHeader')) {
          if (!eventTarget.parent().hasClass('listBoxItemExpanded')) {
              $('section.container-column.listBoxItemExpanded').removeClass('listBoxItemExpanded');
              $('section.container-column.listBoxItemExpanded').next().removeClass('exListBoxItemContent');
              eventTarget.parent().addClass('listBoxItemExpanded');
              eventTarget.next().addClass('exListBoxItemContent');
              // console.log(eventTarget.next());
          }
          else {
            eventTarget.parent().toggleClass('listBoxItemExpanded');
            eventTarget.next().toggleClass('exListBoxItemContent');
          }
      }
     })

});
