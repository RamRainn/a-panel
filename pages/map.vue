<template>
  <div>
    <div class="flex">
      <article class="bg-white shrink-0 flex flex-col w-24 border-r-2 border-border min-h-screen">
        <div class="px-5 py-5">
          <img src="../static/icons/logo.svg" alt="">
        </div>

        <div class="space-y-10 px-7 mt-10">
          <img  src="../static/icons/1.svg" alt="">
          <img  src="../static/icons/2.svg" alt="">
          <img  src="../static/icons/3.svg" alt="">
          <img  src="../static/icons/4.svg" alt="">
          <img  src="../static/icons/5.svg" alt="">
        </div>

        <div class="space-y-10 px-7 mt-72">
          <img  src="../static/icons/6.svg" alt="">
          <img  src="../static/icons/7.svg" alt="">
          <img  src="../static/icons/8.svg" alt="">
        </div>
      </article>

      <div class="bg-white w-full border-b-2 border-border h-16">
        <div class="flex justify-start items-center space-x-2">
          <h3 class="text-gray text-2xl py-4 pl-4 pr-1 font-bold">Дэшборд</h3>
          <img src="../static/icons/big-arrow-right.svg" alt="">
          <h3 class="text-2xl   text-gray">Клиенты</h3>
        </div>


        <div class="bg-bg min-h-screen">
          <div class="flex flex-col space-y-4 ml-20 pt-5">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/clients-page">Страница клиентов</nuxt-link>
            <nuxt-link to="/products-page">Продукты/товары</nuxt-link>
            <nuxt-link to="/referal-program">Реферальные программы</nuxt-link>
            <nuxt-link to="/program-page">Создание программы</nuxt-link>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
