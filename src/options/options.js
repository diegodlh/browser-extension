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
    },
    function (items) {
      document.getElementById('badge').checked = items.badge;
      document.getElementById('adderToolbarFooter').checked = items.adderToolbarFooter;
    }
  );
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('badge').addEventListener('click', saveOptions);

document.getElementById('adderToolbarFooter').addEventListener('change', (e) => {
  console.log(e.target.value)
  chrome.storage.sync.set({
    adderToolbarFooter: e.target.value,
  })
});
