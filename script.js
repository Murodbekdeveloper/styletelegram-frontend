// Faqat raqam kiritish (karta raqami uchun)
function formatCardNumber(e) {
  let value = e.target.value.replace(/\D/g, '').slice(0, 16);
  e.target.value = value.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
}

// Amal muddati formatlash (MM/YY)
function formatExpiry(e) {
  let v = e.target.value.replace(/\D/g, '').slice(0, 4);
  if (v.length >= 3) e.target.value = v.slice(0,2) + '/' + v.slice(2);
  else e.target.value = v;
}

// SMS inputni ko‘rsatish / yashirish
function toggleSMS() {
  const smsField = document.getElementById('smsField');
  smsField.classList.toggle('hidden');
}
