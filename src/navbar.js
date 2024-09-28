document.write(`
<header class="bg-white text-gray-800">
<div
  class="container mx-auto flex items-center justify-between py-4 px-2"
>
  <div class="text-xl font-bold">Logo</div>

  <nav class="hidden md:flex space-x-6">
    <a href="#" class="hover:text-gray-600">Products</a>
    <a href="#" class="hover:text-gray-600">Company</a>
    <a href="#" class="hover:text-gray-600">...</a>
  </nav>

  <button
    class="hidden md:inline-block bg-[#F60014] rounded-sm text-white px-4 py-2"
  >
    BOOK A DEMO
  </button>

  <button
    class="md:hidden text-gray-800 focus:outline-none"
    id="mobileMenuBtn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</div>

<nav class="md:hidden bg-white text-gray-800 hidden" id="mobileMenu">
  <ul class="flex flex-col space-y-4 p-4">
    <li><a href="#" class="hover:text-gray-600">Products</a></li>
    <li><a href="#" class="hover:text-gray-600">Company</a></li>
    <li><a href="#" class="hover:text-gray-600">...</a></li>
    <li>
      <button
        class="bg-[#F60014] rounded-sm text-white px-4 py-2"
      >
        BOOK A DEMO
      </button>
    </li>
  </ul>
</nav>
</header>    
    
`);
