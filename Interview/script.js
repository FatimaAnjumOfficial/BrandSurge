document.addEventListener('DOMContentLoaded', function()
{
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    hamburger.addEventListener('click', function() 
    {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-list li a').forEach(link =>
    {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function initSlider() 
    {
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function showSlide(index) 
    {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (index + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide()
    {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide()
    {
        showSlide(currentSlide - 1);
    }
    
    let slideInterval = setInterval(nextSlide, 5000);
    
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () =>
    {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () =>
    {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    nextBtn.addEventListener('click', () =>
    {
        nextSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    prevBtn.addEventListener('click', () =>
    {
        prevSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    dots.forEach((dot, index) =>
    {
        dot.addEventListener('click', () =>
        {
            showSlide(index);
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
    
    initSlider();
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn =>
    {
        btn.addEventListener('click', function()
        {
            const tabId = this.getAttribute('data-tab');
            
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor =>
    {
        anchor.addEventListener('click', function(e)
        {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', function()
    {
        const header = document.querySelector('.header');
        if (window.scrollY > 100)
        {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        else
        {
            header.style.boxShadow = 'none';
        }
    });
});
