import React from 'react';

const Slider = () => {
    return (
        <div className='bg-slider'>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/src/assets/img/transparent.png" class="d-block w-100" alt="..."/>

          <div class="carousel-caption">
            <p class="slider-text-first">LMS PSD Templete</p>
            <p class="slider-text-middle">Frequent Check & Feedback</p>
            <p class="slider-text-last">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro quae et officia, qui, sapiente a debitis vero eveniet mollitia velit rerum nemo error veniam ullam ab quos similique necessitatibus eaque. Inventore laboriosam nobis ipsam rerum voluptatem enim ullam reiciendis!</p>
            <a
              name=""
              id=""
              class="btn btn1 text-light Montserrat"
              href="#"
              role="button"
              >Get Started</a
            >
            
          </div>
          
        </div>
        <div class="carousel-item">
          <img src="/src/assets/img/transparent.png" class="d-block w-100" alt="..."/>
          <div class="carousel-caption">
            <p class="slider-text-first ">LMS PSD Templete</p>
            <p class="slider-text-middle">Frequent Check & Feedback</p>
            <p class="slider-text-last">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro quae et officia, qui, sapiente a debitis vero eveniet mollitia velit rerum nemo error veniam ullam ab quos similique necessitatibus eaque. Inventore laboriosam nobis ipsam rerum voluptatem enim ullam reiciendis!</p>
            <a
              name=""
              id=""
              class="btn btn1 text-light Montserrat"
              href="#"
              role="button"
              >Get Started</a
            >
            
          </div>
        </div>
        <div class="carousel-item">
          <img src="/src/assets/img/transparent.png" class="d-block w-100" alt="..."/>
          <div class="carousel-caption">
            <p class="slider-text-first">LMS PSD Templete</p>
            <p class="slider-text-middle">Frequent Check & Feedback</p>
            <p class="slider-text-last">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro quae et officia, qui, sapiente a debitis vero eveniet mollitia velit rerum nemo error veniam ullam ab quos similique necessitatibus eaque. Inventore laboriosam nobis ipsam rerum voluptatem enim ullam reiciendis!</p>
            <a
              name=""
              id=""
              class="btn btn1 text-light Montserrat"
              href="#"
              role="button"
              >Get Started</a
            >
            
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
            
        </div>
    );
};

export default Slider;