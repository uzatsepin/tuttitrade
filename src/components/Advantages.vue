<template>
  <section 
    id="advantages" 
    ref="advantagesSection" 
    class="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
  >
    <!-- Background elements -->
    <div class="absolute -top-20 -right-20 h-64 w-64 bg-blue-600 opacity-5 rounded-full"></div>
    <div class="absolute -bottom-32 -left-20 h-96 w-96 bg-blue-600 opacity-5 rounded-full"></div>
    
    <!-- Grid pattern background -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute w-full h-full bg-[linear-gradient(rgba(59,130,246,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(59,130,246,0.05)_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div data-aos="fade-up" class="mb-4 lg:mb-16 text-center max-w-3xl mx-auto">
        <h5 class="text-blue-600 uppercase tracking-widest font-medium mb-3">Наші переваги</h5>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Чому обирають нас?
        </h2>
        <div class="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p class="text-xl text-gray-600">
          Наш підхід робить імпорт з Китаю безпечним та ефективним
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8" data-aos="fade-up" data-aos-delay="100">
        <div 
          v-for="advantage in advantages" 
          :key="advantage.id" 
          class="advantage-card group transition-all duration-300 relative"
          :data-aos-delay="100 + (advantage.id * 50)"
          data-aos="fade-up"
        >
          <!-- Simplified card with consistent styling -->
          <div class="bg-white rounded-xl shadow-md h-full border border-gray-100 overflow-hidden relative">
            <!-- Decorative corner element that stays in place -->
            <div class="absolute top-0 right-0 w-12 h-12 bg-blue-50 rounded-bl-xl"></div>
            
            <!-- Solid blue header instead of gradient -->
            <div class="h-20 flex items-center justify-center bg-blue-600 relative">
              <!-- Decorative circles -->
              <div class="absolute inset-0 overflow-hidden">
                <div class="absolute -top-6 -right-6 w-12 h-12 bg-white opacity-5 rounded-full"></div>
                <div class="absolute -bottom-10 -left-10 w-20 h-20 bg-white opacity-5 rounded-full"></div>
              </div>
              
              <div class="text-white relative z-10">
                <Icon :name="advantage.icon" class="h-10 w-10 transition-transform duration-300" />
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-gray-800">
                {{ advantage.title }}
              </h3>
              <p class="text-gray-600">{{ advantage.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16" data-aos="fade-up" data-aos-delay="300">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <!-- Improved header section with better visibility of the subtitle -->
          <div class="p-8 relative bg-white">
            <!-- Decorative elements -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-20 -mt-20"></div>
            <div class="absolute bottom-0 left-0 w-40 h-40 bg-blue-50 rounded-full -ml-20 -mb-20"></div>
            
            <!-- Content with better visibility -->
            <div class="relative z-10 max-w-3xl">
              <div class="inline-flex items-center mb-4 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                <Icon name="lucide:sparkles" class="h-4 w-4 mr-2" />
                <span>Професійний підхід</span>
              </div>
              
              <h2 class="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                Комплексні рішення заощаджують ваш час та бюджет
              </h2>
              
              <p class="text-blue-600 font-medium">
                Переваги професійного підходу до імпорту з Китаю
              </p>
              
              <div class="mt-6 md:mt-8 border-b border-gray-200"></div>
            </div>
          </div>
          
          <div class="p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <!-- Risk section with interactive list -->
              <div 
                class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center bg-red-100 text-red-600 mr-3">
                    <Icon name="lucide:shield" class="h-5 w-5" />
                  </div>
                  Ризики самостійного імпорту
                </h3>
                <ul class="space-y-3">
                  <li 
                    v-for="(risk, index) in risks" 
                    :key="index" 
                    class="flex items-start p-2 rounded-lg hover:bg-red-50 transition-colors group cursor-default"
                  >
                    <span class="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3 flex-shrink-0 group-hover:bg-red-200 transition-colors">
                      <Icon name="lucide:x" class="h-3 w-3" />
                    </span>
                    <span>{{ risk }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- Benefits section with interactive list -->
              <div 
                class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 mr-3">
                    <Icon name="lucide:check-check" class="h-5 w-5" />
                  </div>
                  Переваги роботи з нами
                </h3>
                <ul class="space-y-3">
                  <li 
                    v-for="(benefit, index) in benefits" 
                    :key="index" 
                    class="flex items-start p-2 rounded-lg hover:bg-blue-50 transition-colors group cursor-default"
                  >
                    <span class="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <Icon name="lucide:check" class="h-3 w-3" />
                    </span>
                    <span>{{ benefit }}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Business metrics section with improved animations -->
            <div 
              class="bg-white p-6 md:p-8 rounded-lg border border-gray-100 shadow-sm"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <div class="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 mr-3">
                  <Icon name="lucide:trending-up" class="h-5 w-5" />
                </div>
                Ваші вигоди в цифрах
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div 
                  v-for="stat in statistics" 
                  :key="stat.id"
                  class="relative overflow-hidden group"
                >
                  <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-blue-200 h-full flex flex-col items-center justify-center">
                    <!-- Background pattern for visual interest -->
                    <div class="absolute top-0 right-0 w-16 h-16 bg-blue-50 opacity-0 group-hover:opacity-100 rounded-full -mr-8 -mt-8 transition-all duration-500"></div>
                    
                    <!-- Animated gradient line -->
                    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                    
                    <!-- Content with counter animation -->
                    <div class="relative z-10 text-center py-2">
                      <div class="text-4xl font-bold text-blue-600 mb-2 counter-value" 
                           :data-value="stat.value" 
                           :data-suffix="stat.value.includes('%') ? '%' : ''"
                           :data-animation="true"
                      >0</div>
                      <p class="text-gray-600">{{ stat.label }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- CTA button with enhanced interactivity -->
            <div class="text-center mt-10">
              <button 
                @click="scrollToSection('contact')"
                class="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-4 px-6 md:px-10 rounded-md transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              >
                <!-- Improved button background animation -->
                <div class="absolute inset-0 w-full h-full">
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div class="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100"></div>
                </div>
                
                <!-- Lightning bolt animation -->
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 transform group-hover:translate-x-0 -translate-x-full transition-transform duration-300">
                  <Icon name="lucide:zap" class="h-4 w-4 md:h-5 md:w-5" />
                </span>
                
                <!-- Button text with animation -->
                <span class="relative z-10 inline-block group-hover:translate-x-2 transition-transform duration-300">
                  Розрахувати свою економію
                </span>
                
                <!-- Arrow animation -->
                <span class="absolute inset-y-0 right-0 flex items-center pr-3 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-300">
                  <Icon name="lucide:arrow-right" class="h-4 w-4 md:h-5 md:w-5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Ref for section element
const advantagesSection = ref<HTMLElement | null>(null);

// Advantages data - using consistent blue theme for business appearance
const advantages: Advantage[] = [
  {
    id: 1,
    title: 'Контроль якості на місці',
    description: 'Наші представники особисто перевіряють товар перед відправкою, надаючи фото та відео звіти',
    icon: 'lucide:check-circle',
  },
  {
    id: 2,
    title: 'Доступ до надійних фабрик',
    description: 'Обширна база перевірених постачальників у різних галузях промисловості Китаю',
    icon: 'lucide:factory',
  },
  {
    id: 3,
    title: 'Прозоре ціноутворення',
    description: 'Зрозуміла структура ціни без прихованих платежів та комісій на всіх етапах співпраці',
    icon: 'lucide:wallet',
  },
  {
    id: 4,
    title: 'Логістика під ключ',
    description: 'Повний супровід вантажу від фабрики до вашого складу, включаючи митне оформлення',
    icon: 'lucide:truck',
  }
];

// Risks of self-import
const risks = [
  'Втрата часу на пошук надійних постачальників',
  'Мовний бар\'єр та культурні відмінності',
  'Висока ймовірність отримати неякісний товар',
  'Складнощі з митним законодавством',
  'Відсутність гарантій та страхування вантажу'
];

// Benefits of working with us
const benefits = [
  'Миттєвий доступ до перевірених постачальників',
  'Професійні перекладачі та менеджери',
  'Багатоступенева система контролю якості',
  'Повний юридичний супровід',
  '100% страхування вантажу та гарантії'
];

// Statistics
const statistics = [
  {
    id: 1,
    value: '30%',
    label: 'економія часу на організацію закупівель'
  },
  {
    id: 2,
    value: '20%',
    label: 'зниження закупівельної вартості товарів'
  },
  {
    id: 3,
    value: '100%',
    label: 'гарантія якості та безпеки угоди'
  }
];

// Function to scroll to a section
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Initialize counter animations when statistics section is visible
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start animations for counters when they become visible
        initCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  // Start observing the statistics section
  const statsSection = document.querySelector('#advantages .counter-value');
  if (statsSection) {
    observer.observe(statsSection);
  }
});

// Counter animation function for statistics
const initCounters = () => {
  const counters = document.querySelectorAll('.counter-value');
  
  counters.forEach(counterEl => {
    const counter = counterEl as HTMLElement;
    const shouldAnimate = counter.dataset.animation === 'true';
    
    if (!shouldAnimate) return;
    
    const target = counter.dataset.value || '0';
    const suffix = counter.dataset.suffix || '';
    let numericTarget = parseFloat(target.replace(/[^\d.]/g, ''));
    
    // For performance, reduce large numbers in animation
    const animationSteps = 30; 
    const increment = numericTarget / animationSteps;
    let currentValue = 0;
    
    const updateCounter = () => {
      if (currentValue < numericTarget) {
        currentValue += increment;
        if (currentValue > numericTarget) currentValue = numericTarget;
        
        // Format number and append suffix
        counter.textContent = Math.floor(currentValue) + suffix;
        
        // Continue animation until target is reached
        requestAnimationFrame(updateCounter);
      }
    };
    
    updateCounter();
  });
};
</script>

<style scoped>
.advantage-card:hover {
  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.15), 0 8px 10px -6px rgba(59, 130, 246, 0.1);
}

/* Hover effect for list items */
.bg-red-50, .bg-blue-50 {
  transition: all 0.2s ease-out;
}

/* Smooth counter animation */
.counter-value {
  transition: transform 0.3s ease;
}

.counter-value:hover {
  transform: scale(1.1);
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .advantage-card {
    margin-bottom: 1rem;
  }
  
  /* Make tap targets bigger on mobile */
  .rounded-lg {
    padding: 0.75rem;
  }
}

/* Enhanced hover animations */
@keyframes pulse-subtle {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

/* Apply subtle hover animation to cards */
.advantage-card .bg-white:hover {
  animation: pulse-subtle 2s infinite ease-in-out;
}

/* Improve accessibility with focus states */
button:focus-visible, 
a:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>