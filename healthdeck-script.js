const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const modal=$("#bookingModal"),toast=$("#toast");
function showToast(t){toast.innerHTML="✓ <span>"+t+"</span>";toast.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>toast.classList.remove("show"),2800)}
function openBooking(){modal.hidden=false;document.body.style.overflow="hidden";$("#modalDate").min=new Date().toISOString().split("T")[0]}
function closeBooking(){modal.hidden=true;document.body.style.overflow=""}
$$("[data-open-booking]").forEach(b=>b.addEventListener("click",openBooking));$$("[data-close]").forEach(b=>b.addEventListener("click",closeBooking));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)closeBooking()});
$("#bookingForm")?.addEventListener("submit",e=>{e.preventDefault();const n=new FormData(e.currentTarget).get("name");closeBooking();e.currentTarget.reset();showToast("Appointment request saved for "+n+".")});
$("#quickBook")?.addEventListener("click",()=>{openBooking();showToast($("#quickDoctor").value+" selected.")});
$("#contactForm")?.addEventListener("submit",e=>{e.preventDefault();e.currentTarget.reset();showToast("Message sent to the Health Deck team.")});
$("#menuBtn")?.addEventListener("click",()=>$("#mobileMenu").classList.toggle("open"));
$$(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>$("#mobileMenu").classList.remove("open")));
const quotes=[["The booking process was simple, the clinic felt calm, and my doctor explained everything without rushing me.","Ananya M."],["I found the right specialist quickly and the follow-up instructions were clear and genuinely useful.","Rahul V."],["The family health package made our preventive checkups much easier to plan.","Simran K."]];
let qi=0;function renderQuote(){if($("#quote")){$("#quote").textContent=quotes[qi][0];$("#patientName").textContent=quotes[qi][1]}}$("#next")?.addEventListener("click",()=>{qi=(qi+1)%quotes.length;renderQuote()});$("#prev")?.addEventListener("click",()=>{qi=(qi-1+quotes.length)%quotes.length;renderQuote()});
const sections=$$("main section[id]"),links=$$(".nav-links a");new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-40% 0px -50%"}).observe;
sections.forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform="none"}}),{threshold:.08}).observe(s));
$$(".dept,.service,.doctor,.facility,.package,.why-card,.photo-stack,.contact-card,.testimonial,.cta-card").forEach(e=>{e.style.opacity=0;e.style.transform="translateY(16px)";e.style.transition="opacity .6s ease,transform .6s ease";new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.style.opacity=1;x.target.style.transform="none"}}),{threshold:.1}).observe(e)});
