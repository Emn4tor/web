function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = hours + ':' + minutes;
    const clock = document.getElementById('clock');
    clock.textContent = timeString;
}

document.addEventListener("DOMContentLoaded", async function() {
    const output = document.getElementById("output");
    const input = document.getElementById("input");
    const commands = {
      "ip": async () => {
        const ipData = await fetch('https://myip.wtf/json').then(res => res.json());
        const { YourFuckingIPAddress, YourFuckingISP } = ipData;
        output.innerHTML += `Your IP address: <em>${YourFuckingIPAddress}</em><br>`;
      },
      "author": () => {
        output.innerHTML += "Made by Emn4tor (@emn4tor)<br>";
      },
      "clear": () => {
        output.innerHTML = "";
      },
      "ls": () => {
        output.innerHTML += "All Pages: index.html, terminal<br>";
      },
      "help": () => {
        output.innerHTML += "Commands:<br>";
        output.innerHTML += "ip - Show IP address<br>";
        output.innerHTML += "author (or dev) - Show author information<br>";
        output.innerHTML += "clear - Clear the terminal<br>";
        output.innerHTML += "ls - List all cmd<br>";
        output.innerHTML += "help - Show this help message<br>";
        output.innerHTML += "exit - Close the terminal<br>";
        output.innerHTML += "echo [text] - Display the given text<br>";
        output.innerHTML += "info - Show terminal information<br>";
        output.innerHTML += "cd [page] - Change to the given page<br>";
      },
      "exit": () => {
        window.close();
      },
      "echo": (args) => {
        output.innerHTML += args.join(" ") + "<br>";
      },
      "info": () => {
        output.innerHTML += "This is a terminal emulator made by Emn4tor. You can use this terminal to navigate through the website. Type 'help' to see all commands.<br>";
      },
      "cd": (args) => {
        // Implement page changing logic here
        output.innerHTML += "Changing to page: " + args.join(" ") + "<br>";
      }
    };
  
    input.addEventListener("keydown", async function(event) {
      if (event.key === "Enter") {
        const inputText = input.value.trim();
        const inputArray = inputText.split(" ");
        const command = inputArray[0];
        const args = inputArray.slice(1);
  
        output.innerHTML += `notroot@emn4tor.de:~# ${inputText}<br>`;
  
        if (commands.hasOwnProperty(command)) {
          await commands[command](args);
        } else {
          output.innerHTML += "Command not found. Type 'help' to see available commands.<br>";
        }
  
        input.value = "";
      }
    });
  
    // Initial message
    const ipData = await fetch('https://myip.wtf/json').then(res => res.json());
    const { YourFuckingIPAddress, YourFuckingISP } = ipData;
    output.innerHTML += `Last login: ${new Date().toLocaleString()} from ${YourFuckingIPAddress}<br>`;
    output.innerHTML += `notroot@emn4tor.de:~# `;
  });
  





updateTime();