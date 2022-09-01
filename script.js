// const loading = document.querySelector('.loading');
// const complete = document.getElementById('title');
// const done = document.getElementById('complete');

// setTimeout(() => {
//     loading.style.width = loading.getAttribute('data-done');
//     loading.style.opacity = 1;
// }, 1000);


// function titleChange() {
//     complete.style.display = 'none';
//     done.style.display = 'block';
// }

// setTimeout(titleChange => {
//     document.getElementById("front_page").scrollIntoView();
// }, 2500);

// // function scrollToFrontPage() {
// //     document.getElementById('front_page').scrollIntoView({behavior: 'smooth'});
// // }

// // function redirectPage() {
// //     window.location.href="https://bbenterprise.jp/";
// //     setTimeout(() =>{
// //     }, 4200);
// // }

// // setTimeout(redirectPage, 4200);

// // setTimeout(function(){
// //     window.location.href = 'https://bbenterprise.jp/';
// //   }, 5*1000);

// setTimeout(titleChange => {
// 	complete.style.display = 'none';
// 	done.style.display = 'block';
//     document.querySelector(".mv").scrollIntoView({
// 		behavior: 'smooth'
// 	});
// }, 4000);

// setTimeout(titleChange, 2800);





const loading = document.querySelector('.loading');
const complete = document.getElementById('title');
const done = document.getElementById('complete');
const loadingScreen = document.querySelector('.loading_screen');

setTimeout(() => {
    loading.style.width = loading.getAttribute('data-done');
    loading.style.opacity = 1;
}, 1000);

function titleChange() {
    complete.style.display = 'none';
    done.style.display = 'block';
}

setTimeout(titleChange, 2500);

window.onload = function() {
    loadingScreen.classList.add('loaded');
}

setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
  }, 3000);