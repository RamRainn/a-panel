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
          <h3 class=" text-base lg:text-2xl text-gray">Баланс</h3>
        </div>


        <div class="bg-bg min-h-screen">
          <div class="flex justify-start items-center space-x-4 py-2 px-4">
            <h3  class="text-gray text-lg lg:text-2xl font-bold">Баланс</h3>

          </div>

          <div class="grid overflow-hidden grid-cols-1 lg:grid-cols-12 grid-rows-12 gap-5 px-5 mt-5">
            <div class="row-span-2 col-span-5 bg-white border-2 border-gray rounded h-44">
              <div class="flex justify-between items-center mt-4 px-2">
                <h5 class="text-gray text-xl font-bold">Статистика</h5>
                <button class="flex text-sm font-bold inline-flex items-center px-4">
                  За последнюю неделю
                  <svg class="ml-2 -mr-0.5" width="10" height="10" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84592 0.1912C6.74723 0.0687746 6.6134 -3.37976e-08 6.47386 -4.5997e-08C6.33431 -5.81963e-08 6.20048 0.0687745 6.10179 0.191199L3.49682 3.42372L0.891854 0.191199C0.792601 0.0722436 0.659667 0.0064212 0.521684 0.00790907C0.383701 0.00939694 0.251709 0.078076 0.154137 0.199154C0.0565653 0.320231 0.00121971 0.48402 2.09236e-05 0.655244C-0.00117834 0.826467 0.0518655 0.991425 0.147727 1.11459L3.12476 4.8088C3.22345 4.93123 3.35728 5 3.49682 5C3.63637 5 3.7702 4.93123 3.86889 4.8088L6.84592 1.11459C6.94458 0.992127 7 0.826055 7 0.652894C7 0.479733 6.94458 0.313661 6.84592 0.1912Z" fill="#3D3D3D"/>
                  </svg>

                </button>
              </div>
            </div>
            <div class="row-span-2 col-span-4 bg-white border-2 border-gray rounded">
              <div class="flex justify-between items-center mt-4 px-2">
                <h5 class="text-gray text-xl font-bold">Активность</h5>
                <div class="flex justify-center space-x-2">
                  <div>Оплата</div>
                  <div>Перевод</div>
                </div>
                <button class="flex text-sm font-bold inline-flex items-center px-4">
                  За последнюю неделю
                  <svg class="ml-2 -mr-0.5" width="10" height="10" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84592 0.1912C6.74723 0.0687746 6.6134 -3.37976e-08 6.47386 -4.5997e-08C6.33431 -5.81963e-08 6.20048 0.0687745 6.10179 0.191199L3.49682 3.42372L0.891854 0.191199C0.792601 0.0722436 0.659667 0.0064212 0.521684 0.00790907C0.383701 0.00939694 0.251709 0.078076 0.154137 0.199154C0.0565653 0.320231 0.00121971 0.48402 2.09236e-05 0.655244C-0.00117834 0.826467 0.0518655 0.991425 0.147727 1.11459L3.12476 4.8088C3.22345 4.93123 3.35728 5 3.49682 5C3.63637 5 3.7702 4.93123 3.86889 4.8088L6.84592 1.11459C6.94458 0.992127 7 0.826055 7 0.652894C7 0.479733 6.94458 0.313661 6.84592 0.1912Z" fill="#3D3D3D"/>
                  </svg>

                </button>
              </div>
            </div>
            <div class="row-span-5 col-span-3 bg-white border-2 border-gray rounded">
              <div class="flex justify-between items-center mt-4 px-6">
                <h5 class="text-gray text-xl font-bold">Недавние платежи</h5>
                <button class="flex text-sm font-bold inline-flex items-center hover:text-main border-b-2 border-transparent hover:border-b-2 hover:border-main">
                  смотреть все
                </button>
              </div>
              <div class="mt-4">
                <table class="">
                  <tr>
                    <td class="px-10 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
                        </div>
                        <div class="ml-4 space-y-4">
                          <div class="text-sm font-bold text-gray-900">Danny Sandoval</div>
                          <div class="text-sm text-text-gray font-normal">Тушь для ресниц</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-10 py-4 whitespace-nowrap space-y-4">
                      <div class="text-sm font-bold text-gray-900">₽222222</div>
                      <div class="text-sm text-text-gray font-normal">07:22 pm</div>
                    </td>


                  </tr>

                  <tr>
                    <td class="px-10 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
                        </div>
                        <div class="ml-4 space-y-4">
                          <div class="text-sm font-bold text-gray-900">Danny Sandoval</div>
                          <div class="text-sm text-text-gray font-normal">Тушь для ресниц</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-10 py-4 whitespace-nowrap space-y-4">
                      <div class="text-sm font-bold text-gray-900">₽222222</div>
                      <div class="text-sm text-text-gray font-normal">07:22 pm</div>
                    </td>


                  </tr>

                  <tr>
                    <td class="px-10 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
                        </div>
                        <div class="ml-4 space-y-4">
                          <div class="text-sm font-bold text-gray-900">Danny Sandoval</div>
                          <div class="text-sm text-text-gray font-normal">Тушь для ресниц</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-10 py-4 whitespace-nowrap space-y-4">
                      <div class="text-sm font-bold text-gray-900">₽222222</div>
                      <div class="text-sm text-text-gray font-normal">07:22 pm</div>
                    </td>


                  </tr>
                  <tr>
                    <td class="px-10 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
                        </div>
                        <div class="ml-4 space-y-4">
                          <div class="text-sm font-bold text-gray-900">Danny Sandoval</div>
                          <div class="text-sm text-text-gray font-normal">Тушь для ресниц</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-10 py-4 whitespace-nowrap space-y-4">
                      <div class="text-sm font-bold text-gray-900">₽222222</div>
                      <div class="text-sm text-text-gray font-normal">07:22 pm</div>
                    </td>


                  </tr>

                </table>
              </div>
            </div>


            <div class="row-span-2 col-span-5 bg-white border-2 border-gray rounded h-44">
              <div class="flex justify-between items-center mt-4 px-2">
                <h5 class="text-gray text-xl font-bold">Продано</h5>
                <button class="flex text-sm font-bold inline-flex items-center px-4">
                  За последнюю неделю
                  <svg class="ml-2 -mr-0.5" width="10" height="10" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84592 0.1912C6.74723 0.0687746 6.6134 -3.37976e-08 6.47386 -4.5997e-08C6.33431 -5.81963e-08 6.20048 0.0687745 6.10179 0.191199L3.49682 3.42372L0.891854 0.191199C0.792601 0.0722436 0.659667 0.0064212 0.521684 0.00790907C0.383701 0.00939694 0.251709 0.078076 0.154137 0.199154C0.0565653 0.320231 0.00121971 0.48402 2.09236e-05 0.655244C-0.00117834 0.826467 0.0518655 0.991425 0.147727 1.11459L3.12476 4.8088C3.22345 4.93123 3.35728 5 3.49682 5C3.63637 5 3.7702 4.93123 3.86889 4.8088L6.84592 1.11459C6.94458 0.992127 7 0.826055 7 0.652894C7 0.479733 6.94458 0.313661 6.84592 0.1912Z" fill="#3D3D3D"/>
                  </svg>

                </button>
              </div>
            </div>
            <div class="row-span-2 col-span-4 bg-white border-2 border-gray rounded">

              <div class="flex items-center justify-center">
                <div class="max-w-sm w-full">
                  <div class="px-2 py-4  bg-white rounded-t">
                    <div class="flex items-center justify-center">
                      <span  tabindex="0" class="text-base font-bold">February</span>
                    </div>
                    <div class="flex items-center justify-between pt-4 overflow-x-auto">
                      <table class="w-full">
                        <thead>
                        <tr>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center">Sun</p>
                            </div>
                          </th>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center">Mon</p>
                            </div>
                          </th>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center">Tue</p>
                            </div>
                          </th>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center">Wed</p>
                            </div>
                          </th>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center">Thu</p>
                            </div>
                          </th>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center">Fri</p>
                            </div>
                          </th>
                          <th>
                            <div class="w-full flex justify-center">
                              <p class="text-base font-medium text-center">Sat</p>
                            </div>
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td class="pt-2">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">30</p>
                            </div>
                          </td>
                          <td class="pt-2">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">31</p>
                            </div>
                          </td>
                          <td class="pt-2">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base">1</p>
                            </div>
                          </td>
                          <td class="pt-2">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base">2</p>
                            </div>
                          </td>
                          <td class="pt-2">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">3</p>
                            </div>
                          </td>
                          <td class="pt-2">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">4</p>
                            </div>
                          </td>
                          <td class="pt-2">
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">5</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="w-full h-full">
                              <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                <a  role="link" tabindex="0" class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full">6</a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">7</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base">8</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base">9</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">10</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">11</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">12</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">13</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">14</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base">15</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base">16</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">17</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">18</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">19</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">20</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">21</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base">22</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base">23</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">24</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">25</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">26</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">27</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base font-medium">28</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">28</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">1</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">2</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">3</p>
                            </div>
                          </td>
                          <td>
                            <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                              <p class="text-base text-gray-500 dark:text-gray-100 font-medium">4</p>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-3 bg-white border-2 border-gray rounded py-6">
              <div class="flex justify-end pr-4">
                <button class="py-2 px-2">
                  <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#3D3D3D"/>
                    <path d="M10 4C11.1046 4 12 3.10457 12 2C12 0.89543 11.1046 0 10 0C8.89543 0 8 0.89543 8 2C8 3.10457 8.89543 4 10 4Z" fill="#3D3D3D"/>
                    <path d="M18 4C19.1046 4 20 3.10457 20 2C20 0.89543 19.1046 0 18 0C16.8954 0 16 0.89543 16 2C16 3.10457 16.8954 4 18 4Z" fill="#3D3D3D"/>
                  </svg>
                </button>
              </div>
              <div class="flex justify-center item-center space-x-4 px-4">
                <img src="../static/icons/balance-ico-1.svg" alt="">
                <h4 class="text-2xl font-bold w-44">Перевод по номеру карты</h4>
              </div>

            </div>
            <div class="col-span-3 bg-white border-2 border-gray rounded py-6">
              <div class="flex justify-end pr-4">
                <button class="py-2 px-2">
                  <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#3D3D3D"/>
                    <path d="M10 4C11.1046 4 12 3.10457 12 2C12 0.89543 11.1046 0 10 0C8.89543 0 8 0.89543 8 2C8 3.10457 8.89543 4 10 4Z" fill="#3D3D3D"/>
                    <path d="M18 4C19.1046 4 20 3.10457 20 2C20 0.89543 19.1046 0 18 0C16.8954 0 16 0.89543 16 2C16 3.10457 16.8954 4 18 4Z" fill="#3D3D3D"/>
                  </svg>
                </button>
              </div>
              <div class="flex justify-center item-center space-x-4 px-4">
                <img src="../static/icons/balance-ico-2.svg" alt="">
                <h4 class="text-2xl font-bold w-44">Перевод по номеру телефона</h4>
              </div>

            </div>
            <div class="col-span-3 bg-white border-2 border-gray rounded py-6">
              <div class="flex justify-end pr-4">
                <button class="py-2 px-2">
                  <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#3D3D3D"/>
                    <path d="M10 4C11.1046 4 12 3.10457 12 2C12 0.89543 11.1046 0 10 0C8.89543 0 8 0.89543 8 2C8 3.10457 8.89543 4 10 4Z" fill="#3D3D3D"/>
                    <path d="M18 4C19.1046 4 20 3.10457 20 2C20 0.89543 19.1046 0 18 0C16.8954 0 16 0.89543 16 2C16 3.10457 16.8954 4 18 4Z" fill="#3D3D3D"/>
                  </svg>
                </button>
              </div>
              <div class="flex justify-center item-center space-x-4 px-4">
                <img src="../static/icons/balance-ico-3.svg" alt="">
                <h4 class="text-2xl font-bold w-44">Перевод в другие Банки</h4>
              </div>

            </div>
          </div>

         <div>

         </div>



        </div>
      </div>


    </div>
  </div>
</template>
