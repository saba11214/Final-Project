var hockney = document.querySelector('.hockney')
var roy = document.querySelector('.roy')
var picture = document.querySelector('.picture')

function pageHockney() {
  window.location.href = 'hockney.html'}

function pageRoy() {
  window.location.href = 'roy.html'}

function pageCherry() {
  window.location.href = 'cherry.html'}

hockney.addEventListener('click', pageHockney);
roy.addEventListener('click', pageRoy);
picture.addEventListener('click', pageCherry);

function hoverHockney() {
  document.body.style.cursor = "pointer";}

function hoverRoy() {
  document.body.style.cursor = "pointer";}

function hoverCherry() {
  document.body.style.cursor = "pointer";}

hockney.addEventListener('mousemove', hoverHockney);
roy.addEventListener('mousemove', hoverRoy);
picture.addEventListener('mousemove', hoverCherry);

function offHockney() {
  document.body.style.cursor = "initial";}

function offRoy() {
  document.body.style.cursor = "initial";}

function offCherry() {
  document.body.style.cursor = "initial";}

  hockney.addEventListener('mouseleave', offHockney);
  roy.addEventListener('mouseleave', offRoy);
  picture.addEventListener('mouseleave', offCherry);
