<script>
document.addEventListener('DOMContentLoaded', () => {
  const tabs      = Array.from(document.querySelectorAll('#tab_header .item'));
  const panels    = Array.from(document.querySelectorAll('#tab_container .container_item'));
  let currentIdx  = tabs.findIndex(t => t.classList.contains('is-active'));
  if (currentIdx === -1) currentIdx = 0;

  // helper to activate a given index
  function activate(idx) {
    tabs.forEach((t,i) => t.classList.toggle('is-active', i === idx));
    panels.forEach((p,i) => p.classList.toggle('is-active', i === idx));
    currentIdx = idx;
  }

  // advance to the next tab (wrap around)
  function nextTab() {
    const next = (currentIdx + 1) % tabs.length;
    activate(next);
  }

  // start auto‐rotation every 1 minute
  const intervalId = setInterval(nextTab, 10_000);

  // on any user click, immediately stop auto rotation
  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      // if still rotating, clear it
      if (intervalId) {
        clearInterval(intervalId);
      }
      activate(idx);
    });
  });
});
</script>
