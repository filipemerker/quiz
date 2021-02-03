<template>
  <div
    class="flex flex-col min-h-screen h-full w-full max-w-md content-center justify-center"
  >
    <header class="w-full pb-4 flex flex-wrap px-4 border-b border-green-400">
      <h1
        data-testid="title"
        class="text-gray-50 text-xl font-bold text-left w-full italic"
      >
        Biblos App
      </h1>
      <h2
        data-testid="sub-title"
        class="text-gray-50 text-4xl font-bold text-left w-full mt-2 leading-9"
      >
        Aumente seu conhecimento bíblico
      </h2>
      <h2
        data-testid="description-title"
        class="text-gray-50 text-lg font-semibold text-left w-full mt-4 leading-6"
      >
        Memorize textos e eventos bíblicos que irão edificar profundamente sua
        vida.
      </h2>
    </header>
    <div class="w-screen max-w-full overflow-hidden mt-5">
      <h2
        data-testid="description-title"
        class="text-gray-50 text-lg font-semibold text-left ml-4"
      >
        Confira os desafios disponíveis:
      </h2>
      <div
        class="w-full overflow-auto whitespace-nowrap flex flex-row pb-4 pl-4 mt-2"
      >
        <router-link to="/multipla-escolha">
          <div
            class="card flex-shrink-0 w-40 h-52 mr-3 bg-white rounded-md shadow-lg"
          >
            Multipla escolha
          </div>
        </router-link>
        <div
          class="card flex-shrink-0 w-40 h-52 mr-3 bg-white rounded-md shadow-lg"
        ></div>
        <div
          class="card flex-shrink-0 w-40 h-52 mr-3 bg-white rounded-md opacity-40"
        ></div>
        <div
          class="card flex-shrink-0 w-40 h-52 mr-3 bg-white rounded-md opacity-40"
        ></div>
        <div class="card flex-shrink-0 w-0.5 h-52"></div>
      </div>
    </div>
  </div>
</template>
