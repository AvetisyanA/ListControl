$(function() {
    $('article.listBox').click(function (event) {
      var eventTarget = $(event.target);
      if (eventTarget.hasClass('listBoxItemHeader')) {
          if (!eventTarget.parent().hasClass('listBoxItemExpanded')) {
              $('section.listBoxItemExpanded').removeClass('listBoxItemExpanded');
              $('section.listBoxItemExpanded').next().removeClass('exListBoxItemContent');
          }

          eventTarget.parent().toggleClass('listBoxItemExpanded');
          eventTarget.next().toggleClass('exListBoxItemContent');
      }
     })

});
