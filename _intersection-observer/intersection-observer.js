"use strict";

const intersections = document.querySelectorAll('.intersection');
const links = document.querySelectorAll('.link');

const options = {
    root: null,
    threshold: 1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            links.forEach(link => {
                link.classList.remove('active');
            })
        }
        if(entry.isIntersecting){
            let targetId = entry.target.getAttribute('id');
            targetId = '#' + targetId;
            
            links.forEach(link => {
                const linkHref = link.getAttribute('href');
                
                if(targetId === linkHref){
                    // console.log(targetId);
                    // console.log(linkHref);
                    link.classList.add('active');
                }
            })
        }
    })
}, options);

intersections.forEach(intersection => {
    observer.observe(intersection);
})
