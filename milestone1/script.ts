/////////******************contact section**********************////////

let contact_section = document.getElementById('contact');
let contact_btn = document.getElementById('contact_btn');

contact_btn?.addEventListener('click', ()=>{
    contact_section!.classList.toggle('hide')
});
/////*******************expertise********************/////////////

let expertise_section = document.getElementById('expertise');
let expertise_btn = document.getElementById('expertise_btn');

expertise_btn?.addEventListener('click', ()=>{
    expertise_section!.classList.toggle('hide')
});

/////******************refrence************************///////////

let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');

ref_btn?.addEventListener('click', ()=>{
    ref_section!.classList.toggle('hide')
});





























let print_btn = document.getElementById('print_btn')
print_btn?.addEventListener('click', ()=>{
    window.print()
});
