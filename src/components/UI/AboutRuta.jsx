import React from 'react'

export const AboutRuta = () => {
  return (
    <>
    <section class="ezy__contents1 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-stone-900 dark:text-white">
  <div class="container px-16 md:px-8 lg:px-28">
    <div class="grid grid-cols-12 justify-center">
      {/* <!-- heading --> */}
      <div class="col-span-12 md:col-span-8 md:col-start-3 text-center">
        <h1 class="font-bold text-3xl lg:text-[45px] leading-none mb-4">Lorem ipsum dolor sit amet</h1>
        <p class="text-lg leading-6 opacity-80 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      {/* <!-- banner --> */}
      <div class="col-span-12">
        <img
          src="https://cdn.easyfrontend.com/pictures/contents/contents-banner.jpg"
          alt=""
          class="h-auto max-w-full my-4 md:my-12 rounded-md"
        />
      </div>
      <div class="col-span-12 md:col-span-8 md:col-start-3">
        <p class="text-[17px] leading-6 opacity-80 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio. Hic, nisi! Perspiciatis veritatis
          quibusdam esse! Corrupti aut unde neque sit alias repudiandae ratione debitis id pariatur? Nesciunt quam
          officia enim repudiandae, voluptatibus, culpa veniam sapiente sunt nisi ratione tenetur.
        </p>
        <br />
        <hr class="bg-slate-300" />
        <br />
        <h4 class="text-2xl font-medium opacity-80 mb-2">The standard Lorem Ipsum</h4>
        <p class="text-[17px] leading-6 opacity-80 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio. Hic, nisi! Perspiciatis veritatis
          quibusdam esse! Corrupti aut unde neque sit alias repudiandae ratione debitis id pariatur? Nesciunt quam
          officia enim repudiandae, voluptatibus, culpa veniam sapiente sunt nisi ratione tenetur.
        </p>
        <br />
        <blockquote
          cite="https://easyfrontend.com"
          class="border-l-[2px] border-blue-600 p-8 text-xl leading-snug font-medium"
        >
          <b>
            For 50 years, WWF has been protecting the future of nature. The world's leading conservation
            organization, WWF works in 100 countries and is supported by 1.2 million members in the United States
            and close to 5 million globally
          </b>
          <p class="text-[17px] leading-6 opacity-80 mb-2"></p>
          <p class="text-[17px] leading-6 opacity-80 mb-2">- John Doe, CEO & Founder</p>
        </blockquote>
        <br />
        <p class="text-[17px] leading-6 opacity-80 mb-2">
          Lorem ipsum dolor sit amet consectetur
          <a href="#" class="text-blue-600 underline opacity-80">adipisicing elit</a>. Pariatur, odio. Hic, nisi!
          Perspiciatis veritatis quibusdam esse! Corrupti aut unde neque sit alias repudiandae ratione debitis id
          pariatur? Nesciunt quam officia enim repudiandae, voluptatibus, culpa veniam sapiente sunt nisi ratione
          tenetur.
        </p>

        <br />
        <img
          src="https://cdn.easyfrontend.com/pictures/blog/blog_4.jpg"
          alt=""
          class="max-w-full h-auto rounded-md mb-2 opacity-70"
        />
        <p class="text-[17px] leading-6 opacity-80 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo doloremque.
        </p>

        <br />
        <h4 class="text-2xl font-medium mb-2">1914 translation by H.</h4>
        <p class="text-[17px] leading-6 opacity-80 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias quam ut at voluptatem, illum id
          repudiandae libero labore deserunt voluptates vero accusantium suscipit quae possimus beatae velit.
          Repellat cupiditate amet, consequatur eaque vel autem accusantium excepturi sed unde sunt pariatur nobis
          qui nam, minima ullam. Quos quasi quidem consequatur sequi veniam doloribus quisquam, ipsam cum provident
          hic impedit eos!
        </p>
      </div>
      {/* <!-- contents --> */}
      <div class="col-span-12 md:col-span-8 md:col-start-3">
        <hr class="bg-slate-300 my-6 lg:my-12" />
        {/* <!-- social icons --> */}
        <ul class="flex justify-center items-center">
          <li>
            <a
              href="#"
              class="text-[15px] opacity-90 transition duration-500 border rounded-md px-4 py-3 my-1 mr-2 hover:text-blue-600"
              ><i class="fas fa-clone mr-2"></i> Copy Link</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-[15px] opacity-90 transition duration-500 border rounded-md px-4 py-3 my-1 mr-2 hover:text-blue-600"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a
              href="#"
              class="text-[15px] opacity-90 transition duration-500 border rounded-md px-4 py-3 my-1 mr-2 hover:text-blue-600"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a
              href="#"
              class="text-[15px] opacity-90 transition duration-500 border rounded-md px-4 py-3 my-1 hover:text-blue-600"
              ><i class="fab fa-vimeo"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
