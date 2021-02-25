document.addEventListener('DOMContentLoaded', function() {
    var options = {
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": null
          }
    };
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
  });
