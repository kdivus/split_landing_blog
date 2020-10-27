const left = document.querySelector('.left');
const middle = document.querySelector('.middle');
const end = document.querySelector('.end');
const container = document.querySelector('.container');

/* LEFT SIDE */
left.addEventListener('mouseenter',()=> {
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave',()=> {
    container.classList.remove('hover-left');
});

/* MIDDLE SIDE */
middle.addEventListener('mouseenter',()=> {
    container.classList.add('hover-middle');
});

middle.addEventListener('mouseleave',()=> {
    container.classList.remove('hover-middle');
});

/* END */
end.addEventListener('mouseenter',()=> {
    container.classList.add('hover-end');
});

end.addEventListener('mouseleave',()=> {
    container.classList.remove('hover-end');
});