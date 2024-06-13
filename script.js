function scrollToDiv(divId) {
    var div = document.getElementById(divId);
    if (div) {
      div.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  