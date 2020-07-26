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
      usePdfWhiteOverlay: false,
    },
    function (items) {
      document.getElementById('badge').checked = items.badge;
      document.getElementById('usePdfWhiteOverlay').checked = items.usePdfWhiteOverlay;
    }
  );
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('badge').addEventListener('click', saveOptions);

document.getElementById('usePdfWhiteOverlay').addEventListener('click', (e) => {
  chrome.storage.sync.set({
    usePdfWhiteOverlay: e.target.checked,
  })
});
