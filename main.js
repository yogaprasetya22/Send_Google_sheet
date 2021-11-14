const scriptURL ="https://script.google.com/macros/s/AKfycbwDY1PhnCuC3FtOPxZhItBEaQpupVdGD9eBKmVItPaS3R291-4ZyodgsuOj5HbUAfBs/exec";
const form = document.forms["wpu-data"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => form.reset(),
      Swal.fire({
        title: document.getElementById("name").value,
        text: "Terima Kasih",
        icon: "success",
      })
    )
});
