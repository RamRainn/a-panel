<template>
  <div>
    <div class="flex justify-between">
      <article class="bg-white flex flex-col w-24 border-r-2 border-border min-h-screen">
        <div class="px-5 py-5">
          <img src="../static/icons/logo.svg" alt="">
        </div>

        <div class="space-y-10 px-7 mt-10">
          <img src="../static/icons/1.svg" alt="">
          <img src="../static/icons/2.svg" alt="">
          <img src="../static/icons/3.svg" alt="">
          <img src="../static/icons/4.svg" alt="">
          <img src="../static/icons/5.svg" alt="">
        </div>

        <div class="space-y-10 px-7 mt-72">
          <img src="../static/icons/6.svg" alt="">
          <img src="../static/icons/7.svg" alt="">
          <img src="../static/icons/8.svg" alt="">
        </div>
      </article>

      <div class="bg-white w-full border-b-2 border-border h-16">
        <div class="flex justify-start items-center space-x-2">
          <h3 class="text-gray text-2xl py-4 px-2 font-bold">Дэшборд</h3>
          <img src="../static/icons/big-arrow-right.svg" alt="">
          <h3 class="text-lg text-gray">Клиенты</h3>
        </div>


        <div class="bg-bg min-h-screen">
          <div class="grid grid-cols-2">
            <div class="flex justify-start items-center space-x-4 py-2 px-4">
              <h3  class="text-gray text-lg font-bold">Клиенты</h3>
              <img src="../static/icons/big-arrow-right.svg" alt="">
              <h3 class="text-lg text-gray">Обычные Клиенты</h3>
            </div>

            <div class="flex justify-end space-x-4 mt-4 pr-7">
              <button class="text-text-gray text-lg text-normal hover:text-main hover:border-b-2 hover:border-main">Обычные клиенты</button>
              <button class="text-text-gray text-lg text-normal hover:text-main hover:border-b-2 hover:border-main">Партнеры</button>
              <button class="text-text-gray text-lg text-normal hover:text-main hover:border-b-2 hover:border-main">Администраторы</button>
            </div>
          </div>

          <div class='mt-5 px-5'>
            <div class="relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5674 20L16.0162 15.506L20.5674 20ZM18.5383 9.5C18.5383 11.7543 17.6298 13.9163 16.0125 15.5104C14.3953 17.1045 12.2018 18 9.91468 18C7.62754 18 5.43408 17.1045 3.81683 15.5104C2.19958 13.9163 1.29102 11.7543 1.29102 9.5C1.29102 7.24566 2.19958 5.08365 3.81683 3.48959C5.43408 1.89553 7.62754 1 9.91468 1C12.2018 1 14.3953 1.89553 16.0125 3.48959C17.6298 5.08365 18.5383 7.24566 18.5383 9.5V9.5Z" stroke="#37394E" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <input type="text" class="block w-full py-2 pl-10 rounded-md" placeholder="Поиск и фильтр" />
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
