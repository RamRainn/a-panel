<template>
  <div>
    <div class="flex">
      <article class="bg-white shrink-0 flex flex-col w-20 lg:w-24 border-r-2 border-border min-h-full">
        <div class="px-5 py-5 flex flex-col">
          <img src="../static/icons/logo.svg" alt="">
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
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="flex justify-start items-center space-x-4 py-2 px-4">
              <h3  class="text-gray text-lg lg:text-2xl font-bold">Реферальные программы</h3>

            </div>

          </div>

          <div class='mt-5 px-5 gap-x-2'>
            <div class="relative rounded-md shadow-sm w-full">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5674 20L16.0162 15.506L20.5674 20ZM18.5383 9.5C18.5383 11.7543 17.6298 13.9163 16.0125 15.5104C14.3953 17.1045 12.2018 18 9.91468 18C7.62754 18 5.43408 17.1045 3.81683 15.5104C2.19958 13.9163 1.29102 11.7543 1.29102 9.5C1.29102 7.24566 2.19958 5.08365 3.81683 3.48959C5.43408 1.89553 7.62754 1 9.91468 1C12.2018 1 14.3953 1.89553 16.0125 3.48959C17.6298 5.08365 18.5383 7.24566 18.5383 9.5V9.5Z" stroke="#37394E" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <input type="text" class="block w-full py-3 pl-10 rounded-md" placeholder="Поиск и фильтр" />
            </div>

          </div>

          <div class="flex flex-col md:flex-row md:justify-between ap-x-5 px-5 mt-5">
            <div class="flex  flex-col md:flex-row  md:justify-start space-x-4">
              <div class="flex justify-center space-x-5">
                <select class="mt-1 block w-52  pl-6 pr-16 py-2 text-base border-2 border-border rounded-lg">
                  <option selected>Индустрия</option>
                  <option>Индустрия</option>
                  <option>Индустрия</option>
                </select>
                <select class="mt-1 block w-44  pl-6 pr-16 py-2 text-base border-2 border-border rounded-lg">
                  <option selected>Цель</option>
                  <option>Цель</option>
                  <option>Цель</option>
                </select>
              </div>
              <div class="flex justify-center space-x-5">
                <input type="text"  class="block w-44 py-2 placeholder-gray-500 border-2 border-border rounded-lg" placeholder="Награда от">
                <input type="text"  class="block w-44 py-2 placeholder-gray-500 border-2 border-border rounded-lg" placeholder="Награда до">
              </div>
            </div>
            <div class="mr-5">
              <button class="px-10 text-white py-4 inline-flex items-center font-bold relative bg-main text-sm">
                Фильтры</button>
            </div>
          </div>



          <div class="flex flex-col mt-5">
            <div class="-my-2 overflow-x-auto">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class=" overflow-hidden sm:rounded-lg space-y-5">
                  <table class="min-w-full">
                    <thead>
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left pl-20 text-xs font-bold text-black uppercase tracking-wider">Сайт</th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Название</th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Цель</th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Индустрия</th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Награда
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Срок выплат
                      </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white border border-gray rounded-lg">
                    <tr class="rounded-lg">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" src="../static/icons/logo.svg" alt="">
                          </div>
                          <div class="ml-4 space-y-4">http://www.quitzon.com/</div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">itaque</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">% от заказа</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">velit</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">37%</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15</td>

                    </tr>

                    <!-- More people... -->
                    </tbody>
                    <tbody class="bg-white border border-gray rounded-lg">
                    <tr class="rounded-lg">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" src="../static/icons/logo.svg" alt="">
                          </div>
                          <div class="ml-4 space-y-4">http://www.quitzon.com/</div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">itaque</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">% от заказа</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">velit</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">37%</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15</td>

                    </tr>

                    <!-- More people... -->
                    </tbody>

                  </table>

                </div>
              </div>
            </div>
          </div>


        </div>
      </div>


    </div>
  </div>
</template>
