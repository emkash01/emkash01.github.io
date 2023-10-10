
function set_current_date() {
    document.getElementById("date_input").valueAsDate = new Date();
  }

  function load() {
    set_current_date();
  }

  window.addEventListener("load",load);

