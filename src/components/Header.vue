<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" :class="[scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5']">
    <div class="container mx-auto px-4 flex items-center justify-between">
      <!-- Logo -->
      <img src="../assets/icons/logo.svg" alt="logo" class="h-14 w-auto" />
      
      <!-- Navigation -->
      <nav class="hidden md:flex space-x-8">
        <a 
          v-for="item in navItems" 
          :key="item.id" 
          :href="item.href" 
          class="font-medium transition-colors relative nav-link"
          :class="[
            activeSection === item.id ? 'text-blue-400' : scrolled ? 'text-white' : 'text-white/80',
            'hover:text-blue-400'
          ]"
        >
          {{ item.label }}
        </a>
      </nav>
      
      <!-- CTA Button -->
      <div class="hidden md:block">
        <button 
          @click="scrollToContact" 
          class="modern-button"
        >
          Зв'язатися
        </button>
      </div>
      
      <!-- Mobile menu button - Fixed cross icon alignment -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <span class="sr-only">Toggle menu</span>
        <div class="relative w-6 h-6">
          <span 
            class="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
            :class="isMobileMenuOpen ? 'top-2.5 rotate-45 bg-white' : 'rotate-0 top-1 bg-white'"
          ></span>
          <span 
            class="absolute h-0.5 w-6 bg-current top-2.5 transform transition-all duration-300"
            :class="isMobileMenuOpen ? 'opacity-0 bg-white' : 'opacity-100 bg-white'"
          ></span>
          <span 
            class="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
            :class="isMobileMenuOpen ? 'top-2.5 -rotate-45 bg-white' : 'rotate-0 top-4 bg-white'"
          ></span>
        </div>
      </button>
    </div>
    
    <!-- Mobile menu - Fullscreen slide from right -->
    <div 
      class="md:hidden fixed inset-0 z-40 transform transition-transform duration-500 ease-in-out"
      :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="h-full w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
        <!-- Mobile menu content with slide-up animation -->
        <div class="container mx-auto px-4 py-20 flex flex-col justify-between h-full">
          <!-- Nav Links - Reduced text size and spacing -->
          <div class="flex flex-col space-y-3 mt-8">
            <a 
              v-for="(item, index) in navItems" 
              :key="item.id" 
              :href="item.href" 
              class="text-white/90 hover:text-blue-400 text-xl font-medium transition-colors py-2 transform transition-all duration-500 mobile-nav-item"
              :style="{ transitionDelay: `${index * 100}ms` }"
              :class="{ 'active': isMobileMenuOpen }"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </a>
          </div>
          
          <!-- Contact Info -->
          <div class="pb-10 transform transition-all duration-500 delay-500 opacity-0" :class="{ 'opacity-100 translate-y-0': isMobileMenuOpen, 'translate-y-10': !isMobileMenuOpen }">
            <div class="mb-6">
              <h3 class="text-blue-400 text-base font-medium mb-2">Контакти</h3>
              <div class="space-y-2">
                <a href="tel:+380123456789" class="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
                  <Icon name="lucide:phone" class="h-5 w-5" />
                  <span>+38 (012) 345-67-89</span>
                </a>
                <a href="mailto:info@tutitrade.com" class="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
                  <Icon name="lucide:mail" class="h-5 w-5" />
                  <span>info@tutitrade.com</span>
                </a>
              </div>
            </div>
            
            <!-- Social Media - Fixed icon proportions -->
            <div>
              <h3 class="text-blue-400 text-base font-medium mb-2">Соціальні мережі</h3>
              <div class="flex space-x-4">
                <a href="#" class="bg-white/10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-400/20 hover:text-blue-400 text-white transition-all">
                  <Icon name="lucide:facebook" class="h-5 w-5" />
                </a>
                <a href="#" class="bg-white/10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-400/20 hover:text-blue-400 text-white transition-all">
                  <Icon name="lucide:instagram" class="h-5 w-5" />
                </a>
                <a href="#" class="bg-white/10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-400/20 hover:text-blue-400 text-white transition-all">
                  <Icon name="lucide:linkedin" class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const scrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref('home');

// Navigation items
const navItems: NavItem[] = [
  { id: 'home', label: 'Головна', href: '#home' },
  { id: 'about', label: 'Про нас', href: '#about' },
  { id: 'services', label: 'Послуги', href: '#services' },
  { id: 'how', label: 'Як ми працюємо', href: '#how' },
  { id: 'advantages', label: 'Переваги', href: '#advantages' },
  { id: 'contact', label: 'Контакти', href: '#contact' },
];

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Watch for route changes to close mobile menu
watch(() => activeSection.value, () => {
  if (isMobileMenuOpen.value) {
    closeMobileMenu();
  }
});

// Scroll to contact section
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  closeMobileMenu();
};

// Update header style on scroll
const updateHeaderOnScroll = () => {
  scrolled.value = window.scrollY > 50;
};

// Update active section based on scroll position
const updateActiveSection = () => {
  const sections = navItems.map(item => item.id);
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section) {
      const rect = section.getBoundingClientRect();
      const offset = 100;
      
      if (rect.top <= offset) {
        activeSection.value = sections[i];
        break;
      }
    }
  }
};

// Add scroll event listeners
const handleScroll = () => {
  updateHeaderOnScroll();
  updateActiveSection();
};

onMounted(() => {
  updateHeaderOnScroll();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #60a5fa; /* blue-400 */
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* Modern button with sleek hover effect (same as Hero component) */
.modern-button {
  position: relative;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  border-radius: 0.375rem;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.modern-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: skewX(-20deg);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

.modern-button:hover {
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
}

.modern-button:hover::before {
  width: 120%;
}

.modern-button:active {
  transform: translateY(0);
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
}

/* Mobile menu animations */
.mobile-nav-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.mobile-nav-item.active {
  opacity: 1;
  transform: translateY(0);
}
</style>