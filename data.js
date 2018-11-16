const form = document.querySelector('#add-user-input');
form.addEventListener('submit', function(evt) {
evt.preventDefault();
db.collection('userInput').add({
name: form.name.value,
email: form.email.value,
message: form.message.value
});
form.name.value = '';
form.email.value = '';
form.message.value = '';
})

db.collection('userInput').add({
createdAt: firebase.firestore.FieldValue.serverTimestamp(),
name: form.name.value,
email: form.email.value,
message: form.message.value

