
const submit = document.querySelector("#submit");

const uploadCallback = () => {
    //TODO: Process image into appropriate type
    fetch("localhost:6060/predict", {
        method : "POST",
    });
};

submit.addEventListener("click", uploadCallback);
