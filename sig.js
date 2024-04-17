// Query for the button with the id sign-now-button and assign that to the variable signNowButton.
const signNowButton = document.getElementById('sign-now-button');

// Function to add a signature
const addSignature = (event) => {
  // Get the inputs submitted
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  // You can get other input fields similarly

  // Create a new paragraph element
  const newSignature = document.createElement('p');

  // Format the signature
  newSignature.textContent = `🖊️ ${name} from ${city} supports this.`;
  // You can format other input fields similarly

  // Find where the signatures section is and append the new signature there
  const signaturesSection = document.querySelector('.signatures');
  signaturesSection.appendChild(newSignature);

  event.preventDefault(); // Prevent the default form submission behavior
  
  const oldCount = document.getElementById('counter');
  oldCount.remove();
  count = count + 1;
  const newCount = document.createElement('p');
  newCount.id = 'counter';
  newCount.textContent = `🖊️ ${count} people have signed the petition and support this cause.`;
  signaturesSection.appendChild(newCount);
};

let count = 3;

// Add click event listener to the "Sign Now" button
// signNowButton.addEventListener('click',addSignature);

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form
const validateForm = () => {
  let containsErrors = false;
  const petitionInputs = document.getElementById("sign-petition").elements;
  
  // Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }
  
  if (!containsErrors) {
    addSignature();
  
    // Clear input fields and reset containsErrors
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
    containsErrors = false;
  }
};

// Add event listener to the "Sign Now" button for form validation
signNowButton.addEventListener('click', validateForm);
