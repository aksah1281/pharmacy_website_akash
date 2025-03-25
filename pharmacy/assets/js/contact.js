function sendMessage(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Replace these with your actual email & phone number
    const emailRecipient = "akashp1412@gmail.com"; // Change to your email
    const phoneNumber = "+15105090467"; // Change to your phone number

    // Encode values to be URL-safe
    const subject = encodeURIComponent(`Customer Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Detect mobile device
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

    if (isMobile) {
        // Open SMS app with pre-filled message
        const smsBody = encodeURIComponent(`Hello, I have a question:\n${message}`);
        const smsLink = `sms:${phoneNumber}?body=${smsBody}`;
        window.location.href = smsLink;
    } else {
        // Open email client with pre-filled subject & message
        const mailtoLink = `mailto:${emailRecipient}?subject=${subject}&body=${body}`;
        window.open(mailtoLink, "_blank"); // Open in new tab to bypass restrictions
    }
}
