$(function() {
    $('article.listBox').click(function (event) {
      var eventTarget = $(event.target);
      if (eventTarget.hasClass('listBoxItemHeader')) {
          if (!eventTarget.parent().hasClass('listBoxItemExpanded')) {
              $('section.listBoxItemExpanded').removeClass('listBoxItemExpanded');
          }

          eventTarget.parent().toggleClass('listBoxItemExpanded');
      }
     })

});
