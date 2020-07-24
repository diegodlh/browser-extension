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
      enableExperimentalNewNoteButton: false,
    },
    function (items) {
      document.getElementById('badge').checked = items.badge;
      document.getElementById('enableExperimentalNewNoteButton'
        ).checked = items.enableExperimentalNewNoteButton;
    }
  );
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('badge').addEventListener('click', saveOptions);

document.getElementById('enableExperimentalNewNoteButton').addEventListener('click', (e) => {
  chrome.storage.sync.set({
    enableExperimentalNewNoteButton: e.target.checked,
  })
});
