const mainMenu = document.querySelector( 'header' );
window.addEventListener( 'scroll', () => {
    if( this.scrollY > 100 ){
        mainMenu.classList.add( 'slidedown' );
    }else{
        mainMenu.classList.remove( 'slidedown' );
    }
} );


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    this.reset(); // Clear the form after submission
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function sendEmail(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:${email}?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    
    window.location.href = mailtoLink;
}
