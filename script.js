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
