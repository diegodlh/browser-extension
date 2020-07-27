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
      adderToolbarFooter: 'never',
      usePdfWhiteOverlay: false,
      enableExperimentalNewNoteButton: false,
      openSidebar: false,
      transparentToolbarButtons: false,
    },
    function (items) {
      document.getElementById('badge').checked = items.badge;
      document.getElementById('adderToolbarFooter').value = items.adderToolbarFooter;
      document.getElementById('usePdfWhiteOverlay').checked = items.usePdfWhiteOverlay;
      document.getElementById('enableExperimentalNewNoteButton'
        ).checked = items.enableExperimentalNewNoteButton;
      document.getElementById('openSidebar').checked = items.openSidebar;
      document.getElementById('transparentToolbarButtons').checked = items.transparentToolbarButtons;
    }
  );
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('badge').addEventListener('click', saveOptions);

document.getElementById('adderToolbarFooter').addEventListener('change', (e) => {
  chrome.storage.sync.set({
    adderToolbarFooter: e.target.value,
  })
});

document.getElementById('usePdfWhiteOverlay').addEventListener('click', (e) => {
  chrome.storage.sync.set({
    usePdfWhiteOverlay: e.target.checked,
  })
});

document.getElementById('transparentToolbarButtons').addEventListener('click', (e) => {
  chrome.storage.sync.set({
    transparentToolbarButtons: e.target.checked,
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
