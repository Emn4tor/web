const hello = document.getElementById('hello');
const greetings = ['Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao', 'Konnichiwa', 'Namaste', '你好', 'Привет', '안녕하세요', 'Merhaba', 'مرحبا', 'Hej', 'Salut', 'Hallå', 'Hoi', 'Hei', 'Olá', 'Ahoj', 'Salve', 'Hei', 'Γεια σας', 'שלום', 'こんにちは', '안녕하세요', 'สวัสดี', 'Chào', 'Xin chào', 'ជំរាបសួរ', 'ສະບາຍດີ', 'မင်္ဂလာပါ'];
let index = 0;
let charIndex = 0;
let isDeleting = false;



function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = hours + ':' + minutes;
  const clock = document.getElementById('clock');
  clock.textContent = timeString;
}

function type() {
    const currentGreeting = greetings[index];
    if (isDeleting) {
        hello.textContent = currentGreeting.substring(0, charIndex - 1);
        charIndex--;
    } else {
        hello.textContent = currentGreeting.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentGreeting.length) {
        isDeleting = true;
        setTimeout(type, 1400);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % greetings.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, 100);
    }
}

type();
updateTime();

setInterval(updateTime, 1000);