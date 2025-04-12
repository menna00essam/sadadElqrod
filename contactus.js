function validateForm(event) {
    let valid = true;

    // تحقق من البيانات
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const bankName = document.getElementById('bank_name').value;

    if (!name || !phone || !bankName) {
      valid = false;
      alert("الرجاء تعبئة جميع الحقول");
    }

    // تحقق من رقم الجوال
    const phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
      valid = false;
      document.getElementById('phone-error').textContent = 'رقم الجوال يجب أن يحتوي على 10 أرقام فقط';
    } else {
      document.getElementById('phone-error').textContent = '';
    }

    return valid;
  }

 