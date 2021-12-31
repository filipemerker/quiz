<template>
  <header class="justify-between items-center">
    <h1
      id="brand"
      data-testid="title"
      class="flex text-xl w-full font-bold text-left italic"
    >
      <div id="logo-wrapper" class="w-11 h-11 gradient-1 rounded-full">
        <svg
          id="logo"
          class="w-full h-full"
          width="700pt"
          height="700pt"
          version="1.1"
          viewBox="0 0 700 700"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              fill="rgba(255, 255, 255, 1)"
              d="m200.04 404.26c0 10.309 8.3594 18.668 18.668 18.668h313.14c10.309 0 18.668-8.3594 18.668-18.668l-0.003906-329.59c0-10.309-8.3594-18.668-18.668-18.668h-310.8c-39.457 0-71.551 32.094-71.551 71.551v304.9c0 39.453 32.094 71.547 71.551 71.547h310.81c10.309 0 18.668-8.3594 18.668-18.668 0-10.309-8.3594-18.668-18.668-18.668l-310.81 0.003907c-18.867 0-34.215-15.348-34.215-34.215l-0.003907-304.9c0-18.867 15.352-34.219 34.219-34.219h292.14v292.26l-294.48 0.003906c-10.309 0-18.664 8.3555-18.664 18.664z"
            />
            <path
              fill="rgba(255, 255, 255, 1)"
              d="m350 115.36c-10.309 0-18.668 8.3594-18.668 18.668v56.539h-49.137c-10.309 0-18.668 8.3594-18.668 18.668 0 10.309 8.3594 18.668 18.668 18.668l49.137-0.003906v120.31c0 10.309 8.3594 18.668 18.668 18.668s18.668-8.3594 18.668-18.668v-120.31h49.137c10.309 0 18.668-8.3594 18.668-18.668s-8.3594-18.668-18.668-18.668h-49.137v-56.535c0-10.309-8.3594-18.668-18.668-18.668z"
            />
          </g>
        </svg>
      </div>
      BIBLOS App
    </h1>
  </header>
</template>

<style lang="postcss" scoped>
#brand {
  display: flex;
  align-items: center;
}
#logo-wrapper {
  padding: 7px;
  margin-right: 5px;
  box-shadow: none;
}
#logo {
  transform: rotate(10deg);
  margin-top: 2.5px;
}
</style>
