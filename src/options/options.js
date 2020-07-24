'use strict';

function saveOptions() {
  chrome.storage.sync.set({
    badge: document.getElementById('badge').checked,
    openSidebar: document.getElementById('openSidebar').checked,
  });
}

function loadOptions() {
  chrome.storage.sync.get(
    {
      badge: true,
      adderToolbarFooter: false,
      enableExperimentalNewNoteButton: false,
      openSidebar: false,
    },
    function (items) {
      document.getElementById('badge').checked = items.badge;
      document.getElementById('adderToolbarFooter').checked = items.adderToolbarFooter;
      document.getElementById('enableExperimentalNewNoteButton'
        ).checked = items.enableExperimentalNewNoteButton;
      document.getElementById('openSidebar').checked = items.openSidebar;
    }
  );
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('badge').addEventListener('click', saveOptions);

document.getElementById('adderToolbarFooter').addEventListener('click', (e) => {
  chrome.storage.sync.set({
    adderToolbarFooter: e.target.checked,
  })
});

document.getElementById('enableExperimentalNewNoteButton').addEventListener('click', (e) => {
  chrome.storage.sync.set({
    enableExperimentalNewNoteButton: e.target.checked,
  })
});

document.getElementById('openSidebar').addEventListener('click', (e) => {
  chrome.storage.sync.set({
    openSidebar: e.target.checked,
  })
});
