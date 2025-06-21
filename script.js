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