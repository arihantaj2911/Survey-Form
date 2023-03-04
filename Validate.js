function validateForm() {
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('number');
    const roleInput = document.getElementById('dropdown');
    const ratingInputs = document.querySelectorAll('[name=rating]');
    const likedInputs = document.querySelectorAll('[name=liked]');
  
    
    if (nameInput.value.trim() === '') {
      alert('Please enter your name');
      return false;
    }
  
    
    if (emailInput.value.trim() === '') {
      alert('Please enter your email');
      return false;
    }
  
    
    if (ageInput.value.trim() !== '' && (isNaN(ageInput.value) || ageInput.value < 1 || ageInput.value > 99)) {
      alert('Please enter a valid age');
      return false;
    }
  
    
    if (roleInput.value === 'Select Your Role') {
      alert('Please select your role');
      return false;
    }
  
   
    let isRatingChecked = false;
    ratingInputs.forEach(input => {
      if (input.checked) {
        isRatingChecked = true;
      }
    });
    if (!isRatingChecked) {
      alert('Please select a rating');
      return false;
    }
  
    
    let isLikedChecked = false;
    likedInputs.forEach(input => {
      if (input.checked) {
        isLikedChecked = true;
      }
    });
    if (!isLikedChecked) {
      alert('Please select at least one thing you liked about our product');
      return false;
    }
  
    
    return true;
  }
  
