const slotForm = document.getElementById('slot-form');
const slotTimeSelect = document.getElementById('slot-time');
const bookSlotBtn = document.getElementById('book-slot-btn');

let availableSlots = ['9:00 AM - 10:00 AM', '11:00 AM - 12:00 PM', '1:00 PM - 2:00 PM', '3:00 PM - 4:00 PM', '5:00 PM - 6:00 PM'];

slotForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedSlot = slotTimeSelect.value;

    if (selectedSlot !== '') {
        if (availableSlots.includes(selectedSlot)) {
            alert(`Slot booked successfully! You have booked ${selectedSlot}.`);
            // update the available slots array
            availableSlots = availableSlots.filter((slot) => slot !== selectedSlot);
            // update the slot availability in the slotbooking.html page
            const slotElements = document.querySelectorAll('.slot');
            slotElements.forEach((slot) => {
                if (slot.textContent === selectedSlot) {
                    slot.dataset.available = 'false';
                    slot.style.backgroundColor = '#f7cac9'; // red
                    slot.style.color = '#e74c3c';
                }
            });
        } else {
            alert('Slot not available!');
        }
    } else {
        alert('Please select a time slot!');
    }
});

bookSlotBtn.addEventListener('click', () => {
    slotForm.style.display = 'block';
});