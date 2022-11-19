(function($){
   $(document).ready(function() {
      $('.select2').select2();
   })
   $(document).on("change", ".select2", function() {
      $('.select2').select2();
   })
})(jQuery);