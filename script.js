const container = document.getElementById('clock-container');
const form = document.getElementById('add-clock-form');
const timezoneSelect = document.getElementById('timezone-select');

const defaultTimezones = [
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo",
    "Australia/Sydney",
    "Asia/Kolkata",
    "America/Los_Angeles"
];

let clocks = [];

function createClock(timezone) {
    const id = `clock-${timezone.replace(/[\/_]/g, '-')}`;
    console.log(id);
    if (document.getElementById(id)) return;
    console.log("here");

    const clockEl = document.createElement('div');
    clockEl.className = 'clock';
    clockEl.id = id;

    const cityName = timezone.split('/')[1].replace(/_/g, ' ');

    clockEl.innerHTML = `
      <button onclick="removeClock('${id}')">x</button>
      <h2>${cityName}</h2>
      <div class="time" id="${id}-time">--:--:--</div>
    `;

    container.appendChild(clockEl);

    clocks.push({ id, timezone });
}

function updateClocks() {
    clocks.forEach(({ id, timezone }) => {
        const timeEl = document.getElementById(`${id}-time`);
        if (timeEl) {
            const now = new Date();
            const options = {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            };
            timeEl.textContent = now.toLocaleTimeString('en-US', options);
        }
    });
}

function removeClock(id) {
    clocks = clocks.filter(clock => clock.id !== id);
    const el = document.getElementById(id);
    if(el) el.remove();
}