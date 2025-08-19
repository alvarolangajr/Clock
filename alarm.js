// alarm.js
const readline = require('readline');
const { exec } = require('child_process');

// Create interface to read input from user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for the alarm time (HH:MM)
rl.question('Set alarm time (HH:MM, 24h format): ', (time) => {
    const [alarmHour, alarmMinute] = time.split(':').map(Number);

    console.log(`Alarm set for ${alarmHour}:${alarmMinute}`);

    // Check every second
    const interval = setInterval(() => {
        const now = new Date();
        if (now.getHours() === alarmHour && now.getMinutes() === alarmMinute) {
            console.log('⏰ Alarm ringing!');


            exec('say "Wake up!"'); 
            clearInterval(interval);
            rl.close();
        }
    }, 1000);
});
