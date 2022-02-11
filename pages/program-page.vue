<template>
  <div>
    <div class="flex">
      <article class="bg-white shrink-0 flex flex-col w-20 lg:w-24 border-r-2 border-border min-h-full">
        <div class="px-5 py-5 flex flex-col items-center">
          <img src="../static/icons/logo.svg" alt="">
          <button class="py-2 px-2">
            <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#3AA1FF"/>
              <path d="M10 4C11.1046 4 12 3.10457 12 2C12 0.89543 11.1046 0 10 0C8.89543 0 8 0.89543 8 2C8 3.10457 8.89543 4 10 4Z" fill="#3AA1FF"/>
              <path d="M18 4C19.1046 4 20 3.10457 20 2C20 0.89543 19.1046 0 18 0C16.8954 0 16 0.89543 16 2C16 3.10457 16.8954 4 18 4Z" fill="#3AA1FF"/>
            </svg>

          </button>
        </div>

        <div class="space-y-10 px-7 mt-10">
          <img  src="../static/icons/1.svg" alt="">
          <img  src="../static/icons/2.svg" alt="">
          <img  src="../static/icons/3.svg" alt="">
          <img  src="../static/icons/4.svg" alt="">
          <img  src="../static/icons/5.svg" alt="">
        </div>

        <div class="space-y-10 px-7 mt-96">
          <img  src="../static/icons/6.svg" alt="">
          <img  src="../static/icons/7.svg" alt="">
          <img  src="../static/icons/8.svg" alt="">
        </div>
      </article>

      <div class="bg-white w-full border-b-2 border-border h-16">
        <div class="flex justify-start items-center space-x-2">
          <h3 class="text-gray text-2xl py-4 pl-4 pr-1 font-bold">Дэшборд</h3>
          <img src="../static/icons/big-arrow-right.svg" alt="">
          <h3 class=" text-base lg:text-2xl text-gray">Реферальные программы</h3>
        </div>


        <div class="bg-bg min-h-screen">
          <div class="flex justify-start items-center space-x-4 py-2 px-4">
            <h3  class="text-gray text-lg lg:text-2xl font-bold">Программы</h3>
            <img src="../static/icons/big-arrow-right.svg" alt="">
            <h3 class="text-base lg:text-2xl text-gray">Создание новой программы</h3>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-x-20 px-4">
            <div class="row-start-auto lg:row-span-4 col-start-auto col-span-4">
              <div class="space-y-2">
                <label for="name" class="text-gray text-lg lg:text-2xl font-bold">Название</label>
                <input type="text" name="name" id="name" class="block w-full border-2 border-border py-4 text-gray-900 placeholder-gray-500 sm:text-sm rounded-lg" placeholder="Впишите название Вашей программы">
              </div>

              <div class="mt-2">
                <label for="description" class="text-gray text-lg lg:text-2xl font-bold">Описание</label>
                <div class="mt-6">
                  <textarea rows="16" name="description" id="description" placeholder="Впишите описание Вашей программы" class="shadow-sm resize-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                </div>
              </div>


            </div>
            <div class="lg:row-span-4 col-span-4">
              <div class="space-y-2">
                <label for="awards" class="text-gray text-lg lg:text-2xl font-bold">Награда</label>
                <input type="text" name="awards" id="awards" class="block w-full border-2 pl-4 border-border p-0 py-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm rounded-lg" placeholder="Впишите награду Вашей программы">
              </div>

              <div class="space-y-5 mt-2">
                <label for="status" class="text-gray text-lg lg:text-2xl font-bold">Целевой статус</label>
                <select id="status" name="status" class="mt-1 block w-full pl-3 pr-10 py-4 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Впишите целевой статус Вашей программы</option>
                  <option>Впишите целевой статус Вашей программы</option>
                  <option>Впишите целевой статус Вашей программы</option>
                </select>
                <button type="button" class="bg-white relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-gray rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
                  <span class="sr-only">Use setting</span>
                  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                  <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-main shadow transform ring-0 transition ease-in-out duration-200"></span>
                </button>
              </div>

              <div class="space-y-5 mt-2">
                <label for="status" class="text-gray text-lg lg:text-2xl font-bold">Срок выплат</label>
                <select id="status" name="status" class="mt-1 block w-full pl-3 pr-10 py-4 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Впишите срок выплат Вашей программы</option>
                  <option>Впишите срок выплат Вашей программы</option>
                  <option>Впишите срок выплат Вашей программы</option>
                </select>
              </div>

              <div class="space-y-5 mt-2">
                <label for="status" class="text-gray text-lg lg:text-2xl font-bold">Срок жизни куки</label>
                <select id="status" name="status" class="mt-1 block w-full pl-3 pr-10 py-4 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Впишите срок куки Вашей программы</option>
                  <option>Впишите срок куки Вашей программы</option>
                  <option>Впишите срок куки Вашей программы</option>
                </select>
              </div>





            </div>
            <div class="lg:row-span-4 lg:col-span-4 flex lg:justify-center">
              <div class="space-y-2">
                <h5 class="text-gray text-lg lg:text-2xl font-bold">Логотип программы</h5>

                <div class="rounded-lg border-2 border-gray w-72 lg:w-96 h-72 bg-white flex justify-center items-center object-cover">
                  <img src="../static/test-img.png" alt="">
                </div>

                <div class="text-right">
                  <button class="px-6 text-white py-4 inline-flex items-center font-bold relative bg-main text-sm">
                    Загрузить изображение</button>
                </div>
              </div>

            </div>
          </div>



        </div>
      </div>


    </div>
  </div>
</template>
