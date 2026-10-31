// Browsers that cached the old broken page still request /src/main.jsx.
// Hostinger serves this file instead: it fetches the page fresh and reloads once.
(async () => {
  try {
    if (sessionStorage.getItem('revive-reloaded')) return
    sessionStorage.setItem('revive-reloaded', '1')
  } catch {}
  try {
    await fetch(location.href, { cache: 'reload' })
  } catch {}
  location.reload()
})()
