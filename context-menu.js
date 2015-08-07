(function() {
  var gui = require("nw.gui");
  
  var menu = new gui.Menu;
  
  menu.append(new gui.MenuItem({
    label: "Cut",
    click: function() {
      document.execCommand("cut");
    }
  }));
  
  menu.append(new gui.MenuItem({
    label: "Copy",
    click: function() {
      document.execCommand("copy");
    }
  }));
  
  menu.append(new gui.MenuItem({
    label: "Paste",
    click: function() {
      document.execCommand("paste");
    }
  }));
  
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target.isContentEditable) {
      menu.popup(e.x, e.y);
    }
  });
}());
