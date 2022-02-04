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
          <h3 class="text-2xl   text-gray">Товары</h3>
        </div>


        <div class="bg-bg min-h-screen">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="flex justify-start items-center space-x-4 py-2 px-4">
              <h3  class="text-gray text-lg lg:text-2xl font-bold">Товары</h3>
              <img src="../static/icons/big-arrow-right.svg" alt="">
              <h3 class="text-base lg:text-2xl text-gray">Все товары</h3>
            </div>

            <div class="flex items-center justify-start md:justify-end flex-wrap space-x-4 ml-4 mt-4 pr-7">
              <button class="text-text-gray  lg:flex-none text-sm lg:text-lg text-normal border-b-2 border-transparent	hover:text-main hover:border-b-2 hover:border-main">Все товары</button>
              <button class="text-text-gray flex-2 lg:flex-none text-sm lg:text-lg text-normal border-b-2 border-transparent	hover:text-main hover:border-b-2 hover:border-main">В продаже</button>
              <button class="text-text-gray flex-3 lg:flex-none text-sm lg:text-lg text-normal border-b-2 border-transparent	hover:text-main hover:border-b-2 hover:border-main">Готов к продаже</button>
            </div>
          </div>

          <div class='mt-5 px-5 grid grid-cols-1 lg:grid-cols-6 gap-x-2'>
            <div class="relative rounded-md shadow-sm w-full col-span-4">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5674 20L16.0162 15.506L20.5674 20ZM18.5383 9.5C18.5383 11.7543 17.6298 13.9163 16.0125 15.5104C14.3953 17.1045 12.2018 18 9.91468 18C7.62754 18 5.43408 17.1045 3.81683 15.5104C2.19958 13.9163 1.29102 11.7543 1.29102 9.5C1.29102 7.24566 2.19958 5.08365 3.81683 3.48959C5.43408 1.89553 7.62754 1 9.91468 1C12.2018 1 14.3953 1.89553 16.0125 3.48959C17.6298 5.08365 18.5383 7.24566 18.5383 9.5V9.5Z" stroke="#37394E" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <input type="text" class="block w-full py-3 pl-10 rounded-md" placeholder="Поиск и фильтр" />
            </div>
            <div class="col-span-1 lg:col-span-2 flex justify-center space-x-4 mt-4 lg:-mt-0 lg:ml-28">
              <button class="px-10 text-white  inline-flex items-center   font-normal relative bg-main text-sm">
                <svg class="-ml-0.5 mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 1.5C7.74566 1.5 5.58365 2.39553 3.98959 3.98959C2.39553 5.58365 1.5 7.74566 1.5 10C1.5 12.2543 2.39553 14.4163 3.98959 16.0104C5.58365 17.6045 7.74566 18.5 10 18.5C12.2543 18.5 14.4163 17.6045 16.0104 16.0104C17.6045 14.4163 18.5 12.2543 18.5 10C18.5 7.74566 17.6045 5.58365 16.0104 3.98959C14.4163 2.39553 12.2543 1.5 10 1.5ZM10 5C10.1989 5 10.3897 5.07902 10.5303 5.21967C10.671 5.36032 10.75 5.55109 10.75 5.75V9.25H14.25C14.4489 9.25 14.6397 9.32902 14.7803 9.46967C14.921 9.61032 15 9.80109 15 10C15 10.1989 14.921 10.3897 14.7803 10.5303C14.6397 10.671 14.4489 10.75 14.25 10.75H10.75V14.25C10.75 14.4489 10.671 14.6397 10.5303 14.7803C10.3897 14.921 10.1989 15 10 15C9.80109 15 9.61032 14.921 9.46967 14.7803C9.32902 14.6397 9.25 14.4489 9.25 14.25V10.75H5.75C5.55109 10.75 5.36032 10.671 5.21967 10.5303C5.07902 10.3897 5 10.1989 5 10C5 9.80109 5.07902 9.61032 5.21967 9.46967C5.36032 9.32902 5.55109 9.25 5.75 9.25H9.25V5.75C9.25 5.55109 9.32902 5.36032 9.46967 5.21967C9.61032 5.07902 9.80109 5 10 5Z" fill="#F6F5F0"/>
                </svg>
                Импорт товара</button>
              <button class="px-10 inline-flex items-center  text-white  font-normal bg-main text-sm ">
                <svg class="-ml-0.5 mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 1.5C7.74566 1.5 5.58365 2.39553 3.98959 3.98959C2.39553 5.58365 1.5 7.74566 1.5 10C1.5 12.2543 2.39553 14.4163 3.98959 16.0104C5.58365 17.6045 7.74566 18.5 10 18.5C12.2543 18.5 14.4163 17.6045 16.0104 16.0104C17.6045 14.4163 18.5 12.2543 18.5 10C18.5 7.74566 17.6045 5.58365 16.0104 3.98959C14.4163 2.39553 12.2543 1.5 10 1.5ZM10 5C10.1989 5 10.3897 5.07902 10.5303 5.21967C10.671 5.36032 10.75 5.55109 10.75 5.75V9.25H14.25C14.4489 9.25 14.6397 9.32902 14.7803 9.46967C14.921 9.61032 15 9.80109 15 10C15 10.1989 14.921 10.3897 14.7803 10.5303C14.6397 10.671 14.4489 10.75 14.25 10.75H10.75V14.25C10.75 14.4489 10.671 14.6397 10.5303 14.7803C10.3897 14.921 10.1989 15 10 15C9.80109 15 9.61032 14.921 9.46967 14.7803C9.32902 14.6397 9.25 14.4489 9.25 14.25V10.75H5.75C5.55109 10.75 5.36032 10.671 5.21967 10.5303C5.07902 10.3897 5 10.1989 5 10C5 9.80109 5.07902 9.61032 5.21967 9.46967C5.36032 9.32902 5.55109 9.25 5.75 9.25H9.25V5.75C9.25 5.55109 9.32902 5.36032 9.46967 5.21967C9.61032 5.07902 9.80109 5 10 5Z" fill="#F6F5F0"/>
                </svg>
                Добавить товар</button>
            </div>
          </div>


          <div class="mt-5 px-5 flex justify-between flex-wrap space-y-5">
            <button class="bg-white text-black w-52 mt-5 px-4 py-2 inline-flex items-center  font-bold  hover:bg-main hover:text-white border border-gray rounded-lg">Косметика
              <svg class="ml-2 -mr-0.5 hover:fill-white" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.53708 1.3165C6.69707 0.894502 7.30255 0.894502 7.46304 1.3165L8.49799 4.18345C8.57049 4.37345 8.75498 4.49995 8.96097 4.49995H11.5044C11.9743 4.49995 12.1793 5.08494 11.8098 5.37143L9.99993 6.99991C9.91885 7.06224 9.8596 7.14864 9.83068 7.24673C9.80176 7.34482 9.80465 7.44956 9.83893 7.5459L10.4999 10.3474C10.6609 10.7974 10.1399 11.1838 9.74594 10.9069L7.28755 9.34687C7.20336 9.2877 7.10296 9.25595 7.00006 9.25595C6.89716 9.25595 6.79676 9.2877 6.71257 9.34687L4.25418 10.9069C3.8607 11.1838 3.33922 10.7969 3.50022 10.3474L4.16119 7.5459C4.19547 7.44956 4.19836 7.34482 4.16944 7.24673C4.14052 7.14864 4.08127 7.06224 4.00019 6.99991L2.19027 5.37143C1.82029 5.08494 2.02628 4.49995 2.49526 4.49995H5.03865C5.13879 4.50028 5.23667 4.4702 5.31934 4.41368C5.40202 4.35717 5.46558 4.27688 5.50163 4.18345L6.53658 1.3165H6.53708Z" stroke="#B13837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-sm text-text-gray font-normal ml-2 hover:text-white">4.5/5</span>
            </button>
            <button class="bg-white text-black w-52 px-4 py-2 inline-flex items-center  font-bold border hover:bg-main hover:text-white  border-gray rounded-lg">Растения
              <svg class="ml-2 -mr-0.5 hover:fill-white" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.53708 1.3165C6.69707 0.894502 7.30255 0.894502 7.46304 1.3165L8.49799 4.18345C8.57049 4.37345 8.75498 4.49995 8.96097 4.49995H11.5044C11.9743 4.49995 12.1793 5.08494 11.8098 5.37143L9.99993 6.99991C9.91885 7.06224 9.8596 7.14864 9.83068 7.24673C9.80176 7.34482 9.80465 7.44956 9.83893 7.5459L10.4999 10.3474C10.6609 10.7974 10.1399 11.1838 9.74594 10.9069L7.28755 9.34687C7.20336 9.2877 7.10296 9.25595 7.00006 9.25595C6.89716 9.25595 6.79676 9.2877 6.71257 9.34687L4.25418 10.9069C3.8607 11.1838 3.33922 10.7969 3.50022 10.3474L4.16119 7.5459C4.19547 7.44956 4.19836 7.34482 4.16944 7.24673C4.14052 7.14864 4.08127 7.06224 4.00019 6.99991L2.19027 5.37143C1.82029 5.08494 2.02628 4.49995 2.49526 4.49995H5.03865C5.13879 4.50028 5.23667 4.4702 5.31934 4.41368C5.40202 4.35717 5.46558 4.27688 5.50163 4.18345L6.53658 1.3165H6.53708Z" stroke="#B13837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-sm text-text-gray font-normal ml-2 hover:text-white">4.5/5</span>
            </button>
            <button class="bg-white text-black w-52 px-4 py-2 inline-flex items-center  font-bold border hover:bg-main hover:text-white  border-gray rounded-lg">Канцелярия
              <svg class="ml-2 -mr-0.5 hover:fill-white" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.53708 1.3165C6.69707 0.894502 7.30255 0.894502 7.46304 1.3165L8.49799 4.18345C8.57049 4.37345 8.75498 4.49995 8.96097 4.49995H11.5044C11.9743 4.49995 12.1793 5.08494 11.8098 5.37143L9.99993 6.99991C9.91885 7.06224 9.8596 7.14864 9.83068 7.24673C9.80176 7.34482 9.80465 7.44956 9.83893 7.5459L10.4999 10.3474C10.6609 10.7974 10.1399 11.1838 9.74594 10.9069L7.28755 9.34687C7.20336 9.2877 7.10296 9.25595 7.00006 9.25595C6.89716 9.25595 6.79676 9.2877 6.71257 9.34687L4.25418 10.9069C3.8607 11.1838 3.33922 10.7969 3.50022 10.3474L4.16119 7.5459C4.19547 7.44956 4.19836 7.34482 4.16944 7.24673C4.14052 7.14864 4.08127 7.06224 4.00019 6.99991L2.19027 5.37143C1.82029 5.08494 2.02628 4.49995 2.49526 4.49995H5.03865C5.13879 4.50028 5.23667 4.4702 5.31934 4.41368C5.40202 4.35717 5.46558 4.27688 5.50163 4.18345L6.53658 1.3165H6.53708Z" stroke="#B13837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-sm text-text-gray font-normal ml-2 hover:text-white">4.5/5</span>
            </button>
            <button class="bg-white text-black w-52 px-4 py-2 inline-flex items-center  font-bold border hover:bg-main hover:text-white  border-gray rounded-lg">Специи
              <svg class="ml-2 -mr-0.5 hover:fill-white" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.53708 1.3165C6.69707 0.894502 7.30255 0.894502 7.46304 1.3165L8.49799 4.18345C8.57049 4.37345 8.75498 4.49995 8.96097 4.49995H11.5044C11.9743 4.49995 12.1793 5.08494 11.8098 5.37143L9.99993 6.99991C9.91885 7.06224 9.8596 7.14864 9.83068 7.24673C9.80176 7.34482 9.80465 7.44956 9.83893 7.5459L10.4999 10.3474C10.6609 10.7974 10.1399 11.1838 9.74594 10.9069L7.28755 9.34687C7.20336 9.2877 7.10296 9.25595 7.00006 9.25595C6.89716 9.25595 6.79676 9.2877 6.71257 9.34687L4.25418 10.9069C3.8607 11.1838 3.33922 10.7969 3.50022 10.3474L4.16119 7.5459C4.19547 7.44956 4.19836 7.34482 4.16944 7.24673C4.14052 7.14864 4.08127 7.06224 4.00019 6.99991L2.19027 5.37143C1.82029 5.08494 2.02628 4.49995 2.49526 4.49995H5.03865C5.13879 4.50028 5.23667 4.4702 5.31934 4.41368C5.40202 4.35717 5.46558 4.27688 5.50163 4.18345L6.53658 1.3165H6.53708Z" stroke="#B13837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-sm text-text-gray font-normal ml-2 hover:text-white">4.5/5</span>
            </button>
            <button class="bg-white text-black w-52 px-4 py-2 inline-flex items-center  font-bold border hover:bg-main hover:text-white  border-gray rounded-lg">Книги
              <svg class="ml-2 -mr-0.5 hover:fill-white" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.53708 1.3165C6.69707 0.894502 7.30255 0.894502 7.46304 1.3165L8.49799 4.18345C8.57049 4.37345 8.75498 4.49995 8.96097 4.49995H11.5044C11.9743 4.49995 12.1793 5.08494 11.8098 5.37143L9.99993 6.99991C9.91885 7.06224 9.8596 7.14864 9.83068 7.24673C9.80176 7.34482 9.80465 7.44956 9.83893 7.5459L10.4999 10.3474C10.6609 10.7974 10.1399 11.1838 9.74594 10.9069L7.28755 9.34687C7.20336 9.2877 7.10296 9.25595 7.00006 9.25595C6.89716 9.25595 6.79676 9.2877 6.71257 9.34687L4.25418 10.9069C3.8607 11.1838 3.33922 10.7969 3.50022 10.3474L4.16119 7.5459C4.19547 7.44956 4.19836 7.34482 4.16944 7.24673C4.14052 7.14864 4.08127 7.06224 4.00019 6.99991L2.19027 5.37143C1.82029 5.08494 2.02628 4.49995 2.49526 4.49995H5.03865C5.13879 4.50028 5.23667 4.4702 5.31934 4.41368C5.40202 4.35717 5.46558 4.27688 5.50163 4.18345L6.53658 1.3165H6.53708Z" stroke="#B13837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-sm text-text-gray font-normal ml-2 hover:text-white">4.5/5</span>
            </button>
            <button class="bg-white text-black w-52 px-4 py-2 inline-flex items-center  font-bold border hover:bg-main hover:text-white  border-gray rounded-lg">Периферия
              <svg class="ml-2 -mr-0.5 hover:fill-white" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.53708 1.3165C6.69707 0.894502 7.30255 0.894502 7.46304 1.3165L8.49799 4.18345C8.57049 4.37345 8.75498 4.49995 8.96097 4.49995H11.5044C11.9743 4.49995 12.1793 5.08494 11.8098 5.37143L9.99993 6.99991C9.91885 7.06224 9.8596 7.14864 9.83068 7.24673C9.80176 7.34482 9.80465 7.44956 9.83893 7.5459L10.4999 10.3474C10.6609 10.7974 10.1399 11.1838 9.74594 10.9069L7.28755 9.34687C7.20336 9.2877 7.10296 9.25595 7.00006 9.25595C6.89716 9.25595 6.79676 9.2877 6.71257 9.34687L4.25418 10.9069C3.8607 11.1838 3.33922 10.7969 3.50022 10.3474L4.16119 7.5459C4.19547 7.44956 4.19836 7.34482 4.16944 7.24673C4.14052 7.14864 4.08127 7.06224 4.00019 6.99991L2.19027 5.37143C1.82029 5.08494 2.02628 4.49995 2.49526 4.49995H5.03865C5.13879 4.50028 5.23667 4.4702 5.31934 4.41368C5.40202 4.35717 5.46558 4.27688 5.50163 4.18345L6.53658 1.3165H6.53708Z" stroke="#B13837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-sm text-text-gray font-normal ml-2 hover:text-white">4.5/5</span>
            </button>
            <button class="bg-white text-black w-52 px-4 py-2 inline-flex items-center  font-bold border hover:bg-main hover:text-white  border-gray rounded-lg">Интерьер
              <svg class="ml-2 -mr-0.5 hover:fill-white" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.53708 1.3165C6.69707 0.894502 7.30255 0.894502 7.46304 1.3165L8.49799 4.18345C8.57049 4.37345 8.75498 4.49995 8.96097 4.49995H11.5044C11.9743 4.49995 12.1793 5.08494 11.8098 5.37143L9.99993 6.99991C9.91885 7.06224 9.8596 7.14864 9.83068 7.24673C9.80176 7.34482 9.80465 7.44956 9.83893 7.5459L10.4999 10.3474C10.6609 10.7974 10.1399 11.1838 9.74594 10.9069L7.28755 9.34687C7.20336 9.2877 7.10296 9.25595 7.00006 9.25595C6.89716 9.25595 6.79676 9.2877 6.71257 9.34687L4.25418 10.9069C3.8607 11.1838 3.33922 10.7969 3.50022 10.3474L4.16119 7.5459C4.19547 7.44956 4.19836 7.34482 4.16944 7.24673C4.14052 7.14864 4.08127 7.06224 4.00019 6.99991L2.19027 5.37143C1.82029 5.08494 2.02628 4.49995 2.49526 4.49995H5.03865C5.13879 4.50028 5.23667 4.4702 5.31934 4.41368C5.40202 4.35717 5.46558 4.27688 5.50163 4.18345L6.53658 1.3165H6.53708Z" stroke="#B13837" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-sm text-text-gray font-normal ml-2 hover:text-white">4.5/5</span>
            </button>

          </div>


            <div class="flex flex-col mt-5">
              <div class="-my-2 overflow-x-auto">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class=" overflow-hidden sm:rounded-lg space-y-5">
                    <table class="min-w-full">
                      <thead>
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left pl-20 text-xs font-bold text-black uppercase tracking-wider">Название</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Цена продажи, руб</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Категория</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Дата обновления</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Дата последней покупки
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус
                        </th>
                      </tr>
                      </thead>
                      <tbody class="bg-white border border-gray rounded-lg">
                      <tr class="rounded-lg">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img class="h-10 w-10 rounded-full" src="../static/product-page.png" alt="">
                            </div>
                            <div class="ml-4 space-y-4">Тушь для ресниц `vivienne sabo`</div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">136333</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Косметика</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2021.11-07 08:44:36</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2021.11-07 08:44:36</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">В обработке</td>

                      </tr>

                      <!-- More people... -->
                      </tbody>
                      <tbody class="bg-white border border-gray rounded-lg">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img class="h-10 w-10 rounded-full" src="../static/product-page.png" alt="">
                            </div>
                            <div class="ml-4 space-y-4">Тушь для ресниц `vivienne sabo`</div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">136333</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Косметика</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2021.11-07 08:44:36</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2021.11-07 08:44:36</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">В обработке</td>

                      </tr>

                      <!-- More people... -->
                      </tbody>
                      <tbody class="bg-white border border-gray rounded-lg">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img class="h-10 w-10 rounded-full" src="../static/product-page.png" alt="">
                            </div>
                            <div class="ml-4 space-y-4">Тушь для ресниц `vivienne sabo`</div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">136333</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Косметика</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2021.11-07 08:44:36</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2021.11-07 08:44:36</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">В обработке</td>

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
