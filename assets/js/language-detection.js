setTimeout(() => {
  return
  var userLang = navigator.language || navigator.userLanguage;
  if (userLang.indexOf("fr") >= 0) {
    window.location.href = "/fr";
  } else {
    window.location.href = "/en";
  }
}, 3000);

