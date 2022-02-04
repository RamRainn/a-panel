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
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="flex justify-start items-center space-x-4 py-2 px-4">
              <h3  class="text-gray text-lg lg:text-2xl font-bold">Клиенты</h3>
              <img src="../static/icons/big-arrow-right.svg" alt="">
              <h3 class="text-base lg:text-2xl text-gray">Обычные Клиенты</h3>
            </div>

            <div class="flex justify-end flex-wrap space-x-4 mt-4 pr-7">
              <button class="text-text-gray flex-1 lg:flex-none text-sm lg:text-lg text-normal border-b-2 border-transparent	hover:text-main hover:border-b-2 hover:border-main">Обычные клиенты</button>
              <button class="text-text-gray flex-2 lg:flex-none text-sm lg:text-lg text-normal border-b-2 border-transparent	hover:text-main hover:border-b-2 hover:border-main">Партнеры</button>
              <button class="text-text-gray flex-3 lg:flex-none text-sm lg:text-lg text-normal border-b-2 border-transparent	hover:text-main hover:border-b-2 hover:border-main">Администраторы</button>
            </div>
          </div>

          <div class='mt-5 px-5'>
            <div class="relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5674 20L16.0162 15.506L20.5674 20ZM18.5383 9.5C18.5383 11.7543 17.6298 13.9163 16.0125 15.5104C14.3953 17.1045 12.2018 18 9.91468 18C7.62754 18 5.43408 17.1045 3.81683 15.5104C2.19958 13.9163 1.29102 11.7543 1.29102 9.5C1.29102 7.24566 2.19958 5.08365 3.81683 3.48959C5.43408 1.89553 7.62754 1 9.91468 1C12.2018 1 14.3953 1.89553 16.0125 3.48959C17.6298 5.08365 18.5383 7.24566 18.5383 9.5V9.5Z" stroke="#37394E" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <input type="text" class="block w-full py-3 pl-10 rounded-md" placeholder="Поиск и фильтр" />
            </div>
          </div>

          <div class="mt-5 space-y-4 px-3">
            <div class="flex flex-col border-l-8 border-transparent hover:border-l-8 hover:border-main">
              <div class="-my-2 overflow-x-auto">
                <div class="py-2 align-middle inline-block min-w-full ">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="w-full">
                      <tbody class="bg-white">
                      <tr>
                        <td class="px-10 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
                            </div>
                            <div class="ml-28 space-y-4">
                              <div class="text-sm font-bold text-gray-900">ФИО</div>
                              <div class="text-sm font-bold text-gray-900">E-mail</div>
                            </div>
                          </div>
                        </td>
                        <td class="px-10 py-4 whitespace-nowrap space-y-4">
                          <div class="text-sm text-text-gray font-normal">Jarod O'Connell</div>
                          <div class="text-sm text-text-gray font-normal">overy.block2188@walter.com</div>
                        </td>

                        <td class="px-10 py-4 whitespace-nowrap space-y-4">
                          <div class="text-sm font-bold text-gray-900">Телефон</div>
                          <div class="text-sm font-bold text-gray-900">Заказов</div>
                        </td>

                        <td class="px-10 py-4 whitespace-nowrap space-y-4">
                          <div class="text-sm text-text-gray font-normal">1-971-592-3086</div>
                          <div class="text-sm text-text-gray font-normal">2</div>
                        </td>

                        <td class="px-10 py-4 whitespace-nowrap space-y-4">
                          <div class="text-sm font-bold text-gray-900">Дата последнего заказа
                          </div>
                          <div class="text-sm font-bold text-gray-900">Сумма заказов	</div>
                        </td>

                        <td class="px-10 py-4 whitespace-nowrap space-y-4">
                          <div class="text-sm text-text-gray font-normal">2021.11-07 08:44:36</div>
                          <div class="text-sm text-text-gray font-normal">1236</div>
                        </td>

                        <td class="whitespace-nowrap ">
                          <button class="mr-20">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.305919 0.264139C0.110039 0.433317 -2.89694e-08 0.662742 -3.9426e-08 0.901961C-4.98826e-08 1.14118 0.110039 1.37061 0.305919 1.53978L5.47795 6.00545L0.305919 10.4711C0.11559 10.6413 0.0102743 10.8691 0.0126549 11.1057C0.0150355 11.3422 0.124922 11.5685 0.318646 11.7358C0.512371 11.903 0.774433 11.9979 1.04839 12C1.32235 12.002 1.58628 11.9111 1.78334 11.7468L7.69408 6.64327C7.88996 6.47409 8 6.24467 8 6.00545C8 5.76623 7.88996 5.5368 7.69408 5.36762L1.78334 0.264139C1.5874 0.0950108 1.32169 5.77728e-08 1.04463 4.56623e-08C0.767573 3.35517e-08 0.501858 0.0950107 0.305919 0.264139Z" fill="#3D3D3D" fill-opacity="0.7"/>
                            </svg>

                          </button>
                        </td>
                      </tr>




                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="w-full">
                      <tbody class="bg-white">
                      <tr>
                        <td class="px-10 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
                            </div>
                            <div class="ml-28 space-y-4">
                              <div class="text-sm font-bold text-gray-900">ФИО</div>
                              <div class="text-sm font-bold text-gray-900">E-mail</div>
                            </div>
                          </div>
                        </td>
                        <td class="px-10 py-4 whitespace-nowrap space-y-4">
                          <div class="text-sm text-text-gray font-normal">Jarod O'Connell</div>
                          <div class="text-sm text-text-gray font-normal">overy.block2188@walter.com</div>
                        </td>

                        <td class="px-10 py-4 whitespace-nowrap space-y-4">
                          <div class="text-sm font-bold text-gray-900">Телефон</div>
                          <div class="text-sm font-bold text-gray-900">Заказов</div>
                        </td>

                        <td class="px-10 py-4 whitespace-nowrap space-y-4">
                          <div class="text-sm text-text-gray font-normal">1-971-592-3086</div>
                          <div class="text-sm text-text-gray font-normal">2</div>
                        </td>

                        <td class="px-10 py-4 whitespace-nowrap space-y-4">
                          <div class="text-sm font-bold text-gray-900">Дата последнего заказа
                          </div>
                          <div class="text-sm font-bold text-gray-900">Сумма заказов	</div>
                        </td>

                        <td class="px-10 py-4 whitespace-nowrap space-y-4">
                          <div class="text-sm text-text-gray font-normal">2021.11-07 08:44:36</div>
                          <div class="text-sm text-text-gray font-normal">1236</div>
                        </td>

                        <td class="whitespace-nowrap ">
                          <button class="mr-20">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.305919 0.264139C0.110039 0.433317 -2.89694e-08 0.662742 -3.9426e-08 0.901961C-4.98826e-08 1.14118 0.110039 1.37061 0.305919 1.53978L5.47795 6.00545L0.305919 10.4711C0.11559 10.6413 0.0102743 10.8691 0.0126549 11.1057C0.0150355 11.3422 0.124922 11.5685 0.318646 11.7358C0.512371 11.903 0.774433 11.9979 1.04839 12C1.32235 12.002 1.58628 11.9111 1.78334 11.7468L7.69408 6.64327C7.88996 6.47409 8 6.24467 8 6.00545C8 5.76623 7.88996 5.5368 7.69408 5.36762L1.78334 0.264139C1.5874 0.0950108 1.32169 5.77728e-08 1.04463 4.56623e-08C0.767573 3.35517e-08 0.501858 0.0950107 0.305919 0.264139Z" fill="#3D3D3D" fill-opacity="0.7"/>
                            </svg>

                          </button>
                        </td>
                      </tr>




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
  </div>
</template>
