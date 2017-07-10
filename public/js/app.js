$(document).ready(function () {
  var drop_area = $(".drop_area");
  drop_area.sortable();

  $('.movers').draggable({
    helper: 'clone'
  });

  drop_area.droppable({
    tolerance: 'touch',
    drop: function (event, ui) {
      var element = ui.draggable;
      switch($(element).attr('id')) {
        case 'textbox':
          var id = Math.random().toString(36).substring(7);
          var template = "<div id='" + id +"' class ='txtEditor'>Enter you text here..</div>";
          $(this).append(template);
          $(".txtEditor").summernote({
            height: 150,
          });
          break;
        case 'image':
          var id = Math.random().toString(36).substring(7);
          var template = $('#hidden-image-insertion-template')[0].innerHTML;
          template = "<div id='" + id +"' class = 'imgEditor content'" + template + "</div>";
          $(this).append($(template));
          break;
        case 'button':
          var template = $('#hidden-button-insertion-template')[0].innerHTML;
          $(this).append($(template));
          break;
        case 'header':
          $(this).append($('<div>Its a header</div>'));
          break;
      }
    }
  });

  $(document).on("click", ".open_image_popup", function () {
    var element_id = $(this.parentElement).attr('id')
    $("#image_modal .image_element").val( element_id );
  });

  $('#image_modal_save').click(function() {
    var url = $('#image_modal .image_url').val();
    var template = "<img src='"+ url + "' alt='Image Not available'/>"
    var element_id = $('#image_modal .image_element').val();
    element_id = element_id.replace (/^/,'#');
    $(element_id)[0].innerHTML = template;
    console.log(1);

    $('#image_modal input').val('');
    $('#image_modal').modal('hide');
  });
  $('#resizable').resizable();
});
