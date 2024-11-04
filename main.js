function diff(){
    var a = moment('2023-3-26 12:00:00');
    var b = moment();
    diff = moment.preciseDiff(a, b, true);

    diff_years = diff['years'];
    diff_months = diff['months'];
    diff_days = diff['days']; 
    diff_hours = diff['hours'];
    diff_minutes = diff['minutes'];
    diff_seconds = diff['seconds']; diff_seconds = diff['seconds'] < 10 ? '0' + diff_seconds : diff_seconds;

    document.getElementById("days-output").innerHTML = diff_years + " years " + diff_months + " months " + diff_days + " days " + diff_hours + " hours " + diff_hours + " hour " + diff_minutes + " minutes " + diff_seconds + " seconds ";

  }
  setInterval(diff, 1000);

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}