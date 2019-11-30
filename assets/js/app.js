document.addEventListener('onload', myAppOnload);
$("#contact").on("submit", (e) => {
    e.preventDefault(); // prevents the event from taking the default action of sending the form as a postback event using GET
});

const form = document.getElementById("#contact");
form.addEventListener('submit', e => {
    e.preventDefault();
    const method = form.getAttribute("method");
    const action = form.getAttribute("action");
    const submitForm = async (evt) => {
        return await fetch(action, {
            method, // shorthand for method: method
            mode: 'cors', // make sure you are running through HTTP:// and not file://
            data: new FormData(form) // see <https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData>
        });
    };});
var pathname = window.location.pathname;