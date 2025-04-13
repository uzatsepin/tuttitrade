<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-2 mb-6">
            <div class="bg-white rounded-full p-2">
              <Plane class="h-8 w-8 text-blue-600" />
            </div>
            <span class="text-2xl font-bold text-white">TutiTrade</span>
          </div>
          <p class="text-gray-300 mb-6">
            Професійні послуги із замовлення товарів з Китаю з доставкою в Україну.
            Від пошуку до доставки — все в одних руках.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="p-2 rounded-full transition-colors">
              <Icon name="fe:facebook" class="h-5 w-5" />
            </a>
            <a href="#" class="p-2 rounded-full transition-colors">
              <Icon name="fe:instagram" class="h-5 w-5" />
            </a>
            <a href="#" class="p-2 rounded-full transition-colors">
              <Icon name="fe:messanger" class="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-6 flex items-center space-x-2">
            <span class="inline-block w-6 h-0.5 bg-blue-600 mr-2"></span>
            Контакти
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <Icon name="lucide:phone" class="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p class="text-white">+380 97 123 45 67</p>
                <p class="text-sm text-gray-400">Пн-Пт, 9:00-18:00</p>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <Icon name="lucide:mail" class="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p class="text-white">info@tutitrade.com</p>
                <p class="text-sm text-gray-400">Зв'яжіться з нами по email</p>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <Icon name="lucide:map-pin" class="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p class="text-white">Київ, Україна</p>
                <p class="text-sm text-gray-400">Центральний офіс</p>
              </div>
            </li>
          </ul>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-6 flex items-center">
            <span class="inline-block w-6 h-0.5 bg-blue-600 mr-2"></span>
            Навігація
          </h3>
          <div class="grid grid-cols-2 gap-3">
            <button 
              @click="scrollToSection('home')"
              class="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 text-left"
            >
              <Icon name="lucide:arrow-right" class="h-3 w-3" />
              <span>Головна</span>
            </button>
            <button 
              @click="scrollToSection('how-we-work')"
              class="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 text-left"
            >
            <Icon name="lucide:arrow-right" class="h-3 w-3" />
              <span>Як ми працюємо</span>
            </button>
            <button 
              @click="scrollToSection('advantages')"
              class="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 text-left"
            >
              <ArrowRight class="h-3 w-3" />
              <span>Переваги</span>
            </button>
            <button 
              @click="scrollToSection('about')"
              class="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 text-left"
            >
              <Icon name="lucide:arrow-right" class="h-3 w-3" />
              <span>Про нас</span>
            </button>
            <button 
              @click="scrollToSection('faq')"
              class="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 text-left"
            >
            <Icon name="lucide:arrow-right" class="h-3 w-3" />
              <span>FAQ</span>
            </button>
            <button 
              @click="scrollToSection('contact')"
              class="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 text-left"
            >
            <Icon name="lucide:arrow-right" class="h-3 w-3" />
              <span>Контакти</span>
            </button>
          </div>
        </div>
        
        <!-- Newsletter -->
        <div>
          <h3 class="text-xl font-bold mb-6 flex items-center">
            <span class="inline-block w-6 h-0.5 bg-blue-600 mr-2"></span>
            Зв'язатися з нами
          </h3>
          <p class="text-gray-300 mb-4">
            Залиште свій номер, і ми зв'яжемося з вами для консультації
          </p>
          <div class="flex">
            <input 
              v-model="phoneNumber"
              type="tel" 
              placeholder="Ваш телефон" 
              class="flex-1 bg-white/10 border border-gray-700 rounded-l-md px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-600"
            />
            <button 
              @click="submitPhone"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors flex-shrink-0"
            >
              <Icon name="lucide:arrow-right" class="h-5 w-5" />
            </button>
          </div>
          <p v-if="phoneSubmitted" class="text-xs text-green-400 mt-2">
            Дякуємо! Ми зв'яжемося з вами найближчим часом.
          </p>
          <p v-else class="text-xs text-gray-400 mt-2">
            Натискаючи на кнопку, ви погоджуєтеся з нашою політикою конфіденційності
          </p>
        </div>
      </div>
      
      <!-- Bottom Footer -->
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          © {{ currentYear }} TutiTrade. Усі права захищені.
        </p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-white text-sm">Політика конфіденційності</a>
          <a href="#" class="text-gray-400 hover:text-white text-sm">Умови використання</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const phoneNumber = ref('');
const phoneSubmitted = ref(false);

const currentYear = computed(() => {
  return new Date().getFullYear();
});

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const submitPhone = () => {
  if (phoneNumber.value.trim()) {
    console.log('Phone number submitted:', phoneNumber.value);
    phoneSubmitted.value = true;
    
    // Reset after 5 seconds
    setTimeout(() => {
      phoneNumber.value = '';
      phoneSubmitted.value = false;
    }, 5000);
  }
};
</script>

<style scoped>
/* Add any additional styling here */
.bg-white\/10 {
  background-color: rgba(255, 255, 255, 0.1);
}

.bg-white\/20 {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Add smooth hover transitions */
a, button {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>