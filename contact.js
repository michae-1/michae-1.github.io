document.addEventListener("DOMContentLoaded", function () {
  var emailAction = document.getElementById("email-action");
  var whatsappAction = document.getElementById("whatsapp-action");

  if (emailAction) {
    var emailUser = ["michaelkimani", ".", "mkg"];
    var emailDomain = ["gmail", ".", "com"];
    emailAction.href = "mailto:" + emailUser.join("") + "@" + emailDomain.join("");
  }

  if (whatsappAction) {
    var country = "254";
    var subscriber = ["718", "112", "011"];
    whatsappAction.href = "https://wa.me/" + country + subscriber.join("");
    whatsappAction.target = "_blank";
    whatsappAction.rel = "noopener noreferrer";
  }
});