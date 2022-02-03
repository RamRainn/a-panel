<template>
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
       <h3 class="text-lg text-gray">Реферальные программы</h3>
     </div>


      <div class="bg-bg min-h-screen">
        <div class="grid grid-cols-2">
          <div class="flex justify-start items-center space-x-4 py-2 px-4">
            <h3  class="text-gray text-lg font-bold">Реферальная программа</h3>
            <img src="../static/icons/big-arrow-right.svg" alt="">
            <h3 class="text-lg text-gray">itaque</h3>
          </div>

          <div class="space-x-4 mt-4">
            <button class="text-text-gray text-lg text-normal hover:text-main hover:border-b-2 hover:border-main">Обычные клиенты</button>
            <button class="text-text-gray text-lg text-normal hover:text-main hover:border-b-2 hover:border-main">Партнеры</button>
            <button class="text-text-gray text-lg text-normal hover:text-main hover:border-b-2 hover:border-main">Администраторы</button>
          </div>
        </div>

        <div class='grid grid-cols-4 gap-x-5'>
          <div class="col-span-1 bg-white rounded w-72 h-72 flex flex-col items-center">
            <img src="../static/icons/ref-program-logo.svg" alt="">
            <div class="ml-5 space-y-2">
              <div>
                <div class="text-black font-bold text-sm">Статус реферальной программы:</div>
                <div class="flex justify-start space-x-2">
                  <img src="../static/icons/gren-check.svg" alt="">
                  <div class="text-green">Активна</div>
                </div>
              </div>
              <div>
                <div class="text-black font-bold text-sm">Публичная реферальная программа:</div>
                <div class="flex justify-start space-x-2">
                  <img src="../static/icons/gren-check.svg" alt="">
                  <div class="text-green">Активна</div>
                </div>
              </div>
              <div>
                <div class="text-black font-bold text-sm">Не публичная реферальная программа:</div>
                <div class="flex justify-start space-x-2">
                  <img src="../static/icons/gren-check.svg" alt="">
                  <div class="text-green">Активна</div>
                </div>
              </div>
            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
          <div class="col-span-1 bg-white rounded w-64 h-72">
            <div class="w-20 h-32 bg-bg mx-2 my-2 flex flex-col items-center">
              <img src="../static/icons/ref-program/1.svg" alt="">
              <div class="text-sm">Активных партнеров</div>
              <div class="text-black text-lg font-bold">150</div>
            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>


  </div>



<!--      <div class="grid grid-cols-2">-->
<!--        <div class="flex justify-start items-center space-x-4 py-2 px-4">-->
<!--          <h3  class="text-gray text-lg font-bold">Реферальная программа</h3>-->
<!--          <img src="../static/icons/big-arrow-right.svg" alt="">-->
<!--          <h3 class="text-lg text-gray">itaque</h3>-->
<!--        </div>-->
<!--        <div>-->

<!--        </div>-->
<!--      </div>-->


</template>
