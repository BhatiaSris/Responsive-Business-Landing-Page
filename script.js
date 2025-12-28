function adjustBodyPadding() {
  const nav = document.querySelector(".navbar");
  if (nav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
  }
}

window.addEventListener("load", adjustBodyPadding);
window.addEventListener("resize", adjustBodyPadding);

console.log("JavaScript connected");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enquiryForm");
  const mobileInput = document.getElementById("mobile");
  const mobileError = document.getElementById("mobileError");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    // ✅ Mobile validation (10 digits)
    const mobileValue = mobileInput.value.trim();
    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(mobileValue)) {
      mobileError.classList.remove("d-none");
      mobileInput.focus();
      return;
    } else {
      mobileError.classList.add("d-none");
    }

    //  SUCCESS ACTION (simulate submit)
    alert("Enquiry submitted successfully!");

    //  RESET FORM
    form.reset();

    //  CLOSE MODAL
    $("#enquiryModal").modal("hide");
  });
});
