const inputEl = document.getElementById('donation-input');
const balanceEl = document.getElementById('balance');
const nDonationEl = document.getElementById('n-donation');
const historyEl = document.getElementById('history');
const date = new Date();
const donation = document.getElementById('donation');
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');




// banner button
// history and donation section toggle
document.getElementById('history-btn').addEventListener('click', function(){
    getClassHidden('history');

    donationBtn.classList.remove('bg-primary', 'text-black');
    donationBtn.classList.add('bg-white', 'text-gray-500');

    historyBtn.classList.add('bg-primary', 'text-black');
    historyBtn.classList.remove('bg-white', 'text-gray-500');
})

document.getElementById('donation-btn').addEventListener('click', function(){
    getClassHidden('donation');

    historyBtn.classList.remove('bg-primary', 'text-black');
    historyBtn.classList.add('bg-white', 'text-gray-500');

    donationBtn.classList.add('bg-primary', 'text-black');
    donationBtn.classList.remove('bg-white', 'text-gray-500');
})


// Noakhali Donation

document.getElementById('n-btn-donate').addEventListener('click', function(e){
    const inputValue = inputEl.value;
    
    
    // Show an alert message when the button is clicked
    if (inputValue == "" || isNaN(inputValue) || Number(inputValue) <= 0) {
        alert("Please enter a donation amount.");
        return;
    }
    const currentBalance = getNumberValue('balance');
    if (Number(inputValue) > currentBalance) {
        alert("Insufficient balance for this donation.");
        return;
    }

    const newBalance = currentBalance - parseFloat(inputValue);
    balanceEl.innerText = newBalance;

    const currentNDonation = getNumberValue('n-donation');
    const newNDonation = currentNDonation + parseFloat(inputValue);
    nDonationEl.innerText = newNDonation;

    // Add donation history
    historyEl.innerHTML += `
    <div class="p-8 mb-6 border rounded-lg">
                <h2 class="text-xl font-bold mb-4">
                    ${inputValue} Taka is Donated for Flood at Noakhali, Bangladesh.
                </h2>
                <p class="text-base font-light">
                    Date : ${date}.
                </p>
            </div>
    `;




    // show modal
    my_modal_5.showModal()

    // Clear the input field after donation
    inputEl.value = '';
})


// Feni Donation
document.getElementById('f-donate-btn').addEventListener('click', function(e){
    const fInputValue = document.getElementById('f-input').value;

    // Show an alert message when the button is clicked
    if (fInputValue == "" || isNaN(fInputValue) || Number(fInputValue) <= 0) {
        alert("Please enter a donation amount.");
        return;
    }
    const currentBalance = getNumberValue('balance');
    if (parseFloat(fInputValue) > currentBalance) {
        alert("Insufficient balance for this donation.");
        return;
    }

    const newBalance = currentBalance - parseFloat(fInputValue);
    balanceEl.innerText = newBalance;

    const currentFDonation = getNumberValue('f-donation');
    const newFDonation = currentFDonation + parseFloat(fInputValue);
    document.getElementById('f-donation').innerText = newFDonation;

     // Add donation history
    historyEl.innerHTML += `
    <div class="p-8 mb-6 border rounded-lg">
                <h2 class="text-xl font-bold mb-4">
                    ${fInputValue} Taka is Donated for Flood Relief in Feni, Bangladesh.
                </h2>
                <p class="text-base font-light">
                    Date : ${date}.
                </p>
            </div>
    `;


    // show modal
    my_modal_5.showModal()
    // Clear the input field after donation
    document.getElementById('f-input').value = '';
})


// Quota Movement Donation
document.getElementById('q-donation-btn').addEventListener('click', function(e){git 
    const qInputValue = document.getElementById('q-input').value;

    // Show an alert message when the button is clicked
    if (qInputValue == "" || isNaN(qInputValue) || Number(qInputValue) <= 0) {
        alert("Please enter a donation amount.");
        return;
    }

    const currentBalance = getNumberValue('balance');
    if (parseFloat(qInputValue) > currentBalance) {
        alert("Insufficient balance for this donation.");
        return;
    }
    const newBalance = currentBalance - parseFloat(qInputValue);
    balanceEl.innerText = newBalance;

    const currentQDonation = getNumberValue('q-donation');
    const newQDonation = currentQDonation + parseFloat(qInputValue);
    document.getElementById('q-donation').innerText = newQDonation;

        // Add donation history
        historyEl.innerHTML += `
    <div class="p-8 mb-6 border rounded-lg">
                <h2 class="text-xl font-bold mb-4">
                    ${qInputValue} Taka is Donated for Injured in the Quota Movement, Bangladesh.
                </h2>
                <p class="text-base font-light">
                    Date : ${date}.
                </p>
            </div>
    `;



    // show modal
    my_modal_1.showModal()
    // Clear the input field after donation
    document.getElementById('q-input').value = '';
})



// home to blog page
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'faq.html';
});
