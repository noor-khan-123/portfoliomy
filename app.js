let right = document.querySelector('.right');
let nav = document.querySelector('header nav')

.right.onclick = () => {
  right.classList.toggle('bx-x')
  headernav.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height ){
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href* = ' + id +']').classList.add('active');
      });
    }
  });

  let header = document.querySelector('header');

  header.classList.toggle("sticky", window.scrollY > 100 );

  right.classList.remove('bx-x')
  headernav.classList.remove('active')
};


const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const number = formData.get('number');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Send form data to server-side script
  fetch('/submit-form', {
    method: 'POST',
    body: formData,
  })
  .then((response) => {
    if (response.ok) {
      // Form submitted successfully
      alert('Message sent successfully!');
      form.reset();
    } else {
      // Handle error
      throw new Error('Error submitting form');
    }
  })
  .catch((error) => {
    console.error(error);
    alert('Error submitting form');
  });
});