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
      <div data-aos="fade-up" class="mb-16 text-center max-w-3xl mx-auto">
        <h5 class="text-blue-600 uppercase tracking-widest font-medium mb-3">Наші переваги</h5>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Чому обирають нас?
        </h2>
        <div class="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p class="text-xl text-gray-600">
          Наш підхід робить імпорт з Китаю безпечним та ефективним
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
        <div 
          v-for="advantage in advantages" 
          :key="advantage.id" 
          class="advantage-card group transform transition-all duration-500 hover:-translate-y-2"
          :data-aos-delay="100 + (advantage.id * 50)"
          data-aos="fade-up"
        >
          <div class="bg-white rounded-xl shadow-md h-full group border border-gray-100 overflow-hidden">
            <div class="h-16 flex items-center justify-center bg-blue-600 relative">
              <!-- Icon background with animated gradient -->
              <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="text-white relative z-10">
                <Icon :name="advantage.icon" class="h-10 w-10 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                {{ advantage.title }}
              </h3>
              <p class="text-gray-600">{{ advantage.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16" data-aos="fade-up" data-aos-delay="300">
        <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div class="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8 text-white">
            <h2 class="text-2xl md:text-3xl font-bold mb-3">
              Комплексні рішення заощаджують ваш час та бюджет
            </h2>
            <p class="text-blue-100">
              Переваги професійного підходу до імпорту з Китаю
            </p>
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
            
            <!-- Business metrics section with animations -->
            <div 
              class="bg-white p-8 rounded-lg border border-gray-100 shadow-sm"
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
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-blue-200 h-full flex flex-col items-center justify-center">
                    <!-- Background fill animation -->
                    <div class="absolute bottom-0 left-0 right-0 bg-blue-50 h-0 group-hover:h-full transition-all duration-500 ease-out"></div>
                    
                    <!-- Content -->
                    <div class="relative z-10 text-center">
                      <div class="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">{{ stat.value }}</div>
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
                class="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-md transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              >
                <!-- Button background animation -->
                <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                <!-- Lightning bolt animation -->
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 transform group-hover:translate-x-0 -translate-x-full transition-transform duration-300">
                  <Icon name="lucide:zap" class="h-5 w-5" />
                </span>
                
                <!-- Button text with animation -->
                <span class="relative z-10 inline-block group-hover:translate-x-2 transition-transform duration-300">
                  Розрахувати свою економію
                </span>
                
                <!-- Arrow animation -->
                <span class="absolute inset-y-0 right-0 flex items-center pr-3 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-300">
                  <Icon name="lucide:arrow-right" class="h-5 w-5" />
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
</script>

<style scoped>
.advantage-card:hover {
  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.15), 0 8px 10px -6px rgba(59, 130, 246, 0.1);
}
</style>