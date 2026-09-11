document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  }

  const downloadBtn = document.getElementById("downloadBtn");
  if (downloadBtn) {
    fetch("https://api.github.com/repos/lucasposito/MasterAssets-releases/releases/latest")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((release) => {
        const asset = (release.assets || []).find((a) => a.name.endsWith(".exe")) || release.assets[0];
        if (!asset) return;
        downloadBtn.href = asset.browser_download_url;
        downloadBtn.textContent = `Download MasterAssets ${release.tag_name}`;
      })
      .catch(() => {
        // Keep the fallback link to the releases page if the API call fails.
      });
  }
});
