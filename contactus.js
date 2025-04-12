function validateForm(event) {
    event.preventDefault(); // منع إرسال النموذج إذا كانت البيانات غير صحيحة

    // الحصول على القيم المدخلة في الحقول
    const name = document.getElementById('name').value;
    const idNumber = document.getElementById('id_number').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const bankName = document.getElementById('bank_name').value;
    const delayedPayment = document.getElementById('delayed_payment').checked;

    let valid = true;

    // التحقق من اسم العميل
    if (name.trim() === '') {
        alert('الرجاء إدخال اسم العميل.');
        valid = false;
    }

    // التحقق من رقم الهوية (يجب أن يكون 10 أرقام)
    const idNumberPattern = /^[0-9]{10}$/;
    if (!idNumber.match(idNumberPattern)) {
        alert('الرجاء إدخال رقم هوية مكون من 10 أرقام.');
        valid = false;
    }

    // التحقق من رقم الجوال (يجب أن يكون 10 أرقام)
    const phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
        alert('الرجاء إدخال رقم جوال مكون من 10 أرقام.');
        valid = false;
    }

    // التحقق من اسم البنك
    if (bankName.trim() === '') {
        alert('الرجاء إدخال اسم البنك.');
        valid = false;
    }

    if (valid) {
        alert('تم إرسال النموذج بنجاح!');
        document.getElementById('contact-form').reset(); // مسح البيانات بعد إرسالها
    }

    return valid; // إرجاع true للسماح بإرسال النموذج إذا كانت البيانات صحيحة
}
