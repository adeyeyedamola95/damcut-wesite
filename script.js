const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (name === "" || phone === "" || service === "" || date === "" || time === "") {
        bookingMessage.textContent = "Please fill in all the fields.";
        return;
    }

    bookingMessage.textContent =
        `Thank you, ${name}! Your ${service} appointment has been booked for ${date} at ${time}.`;

    bookingForm.reset();
});