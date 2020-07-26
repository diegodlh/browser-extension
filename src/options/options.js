'use strict';

function saveOptions() {
  chrome.storage.sync.set({
    badge: document.getElementById('badge').checked,
  });
}

function loadOptions() {
  chrome.storage.sync.get(
    {
      badge: true,
      transparentToolbarButtons: false,
    },
    function (items) {
      document.getElementById('badge').checked = items.badge;
      document.getElementById('transparentToolbarButtons').checked = items.transparentToolbarButtons;
    }
  );
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('badge').addEventListener('click', saveOptions);

document.getElementById('transparentToolbarButtons').addEventListener('click', (e) => {
  chrome.storage.sync.set({
    transparentToolbarButtons: e.target.checked,
  })
});
