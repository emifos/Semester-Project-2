export function showAlert(message, type = "error", duration = 3000) {
  const alertBox = document.querySelector(".alert-message");

  if (alertBox) {
    alertBox.textContent = message;

    alertBox.classList.remove(
      "bg-red-100",
      "bg-green-100",
      "text-red-700",
      "text-success",
      "border-red-700",
      "border-success",
    );

    if (type === "success") {
      alertBox.classList.add("bg-green-100", "text-success", "border-success");
    } else {
      alertBox.classList.add("bg-red-100", "text-red-700", "border-red-700");
    }

    alertBox.classList.remove("hidden");
    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, duration);
  } else {
    alert(message);
  }
}
