const params = window.location.search;

if (params) {
  if (document.getElementById("cta-button-1")) {
    document
      .getElementById("cta-button-1")
      .setAttribute("href", `https://pay.kiwify.com.br/2hpTpPV${params}`);
  }

  if (document.getElementById("cta-button-2")) {
    document
      .getElementById("cta-button-2")
      .setAttribute("href", `https://pay.kiwify.com.br/2hpTpPV${params}`);
  }
}
