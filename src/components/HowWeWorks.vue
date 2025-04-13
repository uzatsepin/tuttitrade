<template>
  <section id="how" class="py-20 bg-blue-50 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute w-full h-full bg-[linear-gradient(rgba(59,130,246,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(59,130,246,0.05)_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>
    </div>
    
    <!-- Background decorations -->
    <div class="absolute top-0 right-0 w-1/4 h-1/3 bg-gradient-to-b from-blue-100 to-transparent rounded-full blur-3xl opacity-70"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
        <h2 class="text-4xl font-bold mb-6 text-gray-900">Як ми працюємо</h2>
        <p class="text-xl text-gray-600">
          Прозорий процес, який гарантує чіткість та безпеку на кожному етапі імпорту товарів з Китаю
        </p>
      </div>
      
      <!-- Process steps with timeline -->
      <div class="relative">
        <!-- Timeline line -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
        
        <!-- Step 1 -->
        <div class="timeline-item mb-16" data-aos="fade-right">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
              <div class="mb-4">
                <span class="inline-block bg-blue-100 text-blue-600 text-lg font-semibold px-4 py-2 rounded-lg">Етап 1</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Консультація та аналіз потреб</h3>
              <p class="text-gray-600 max-w-lg ml-auto">
                Ми проводимо детальну консультацію, щоб зрозуміти ваші потреби, вимоги до товару, бюджет та терміни. 
                На цьому етапі ми також аналізуємо ринок та оцінюємо можливі ризики.
              </p>
            </div>
            
            <!-- Timeline dot -->
            <div class="timeline-dot bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center z-10 my-4 md:my-0">
              <Icon name="lucide:message-square" class="h-7 w-7" />
            </div>
            
            <div class="md:w-1/2 md:pl-12">
              <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Безкоштовна консультація</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Оцінка доцільності імпорту</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Аналіз конкурентів та вимог ринку</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Step 2 -->
        <div class="timeline-item mb-16" data-aos="fade-left" data-aos-delay="100">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:order-2 md:w-1/2 md:pl-12 mb-6 md:mb-0 text-center md:text-left">
              <div class="mb-4">
                <span class="inline-block bg-blue-100 text-blue-600 text-lg font-semibold px-4 py-2 rounded-lg">Етап 2</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Пошук та відбір постачальників</h3>
              <p class="text-gray-600 max-w-lg">
                Завдяки нашим зв'язкам у Китаї, ми швидко знаходимо надійних виробників, які відповідають вашим вимогам. 
                Перевіряємо їх репутацію, виробничі потужності та сертифікати.
              </p>
            </div>
            
            <!-- Timeline dot -->
            <div class="timeline-dot bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center z-10 my-4 md:my-0">
              <Icon name="lucide:search" class="h-7 w-7" />
            </div>
            
            <div class="md:order-1 md:w-1/2 md:pr-12">
              <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Прямий доступ до фабрик</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Перевірка надійності виробників</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Порівняння цін та умов виробництва</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Step 3 -->
        <div class="timeline-item mb-16" data-aos="fade-right" data-aos-delay="200">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
              <div class="mb-4">
                <span class="inline-block bg-blue-100 text-blue-600 text-lg font-semibold px-4 py-2 rounded-lg">Етап 3</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Замовлення зразків та контроль якості</h3>
              <p class="text-gray-600 max-w-lg ml-auto">
                Перед основним замовленням ми отримуємо зразки продукції для перевірки їх якості та відповідності вашим вимогам. 
                Такий підхід мінімізує ризики та дозволяє внести корективи.
              </p>
            </div>
            
            <!-- Timeline dot -->
            <div class="timeline-dot bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center z-10 my-4 md:my-0">
              <Icon name="lucide:package-check" class="h-7 w-7" />
            </div>
            
            <div class="md:w-1/2 md:pl-12">
              <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Замовлення тестових зразків</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Перевірка на відповідність стандартам</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Детальний звіт з фото та відео</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Step 4 -->
        <div class="timeline-item mb-16" data-aos="fade-left" data-aos-delay="300">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:order-2 md:w-1/2 md:pl-12 mb-6 md:mb-0 text-center md:text-left">
              <div class="mb-4">
                <span class="inline-block bg-blue-100 text-blue-600 text-lg font-semibold px-4 py-2 rounded-lg">Етап 4</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Виробництво та контроль якості</h3>
              <p class="text-gray-600 max-w-lg">
                Після затвердження зразків ми розміщуємо замовлення на фабриці. 
                Наша команда в Китаї здійснює регулярні перевірки виробництва, контроль якості та інспекції готової продукції.
              </p>
            </div>
            
            <!-- Timeline dot -->
            <div class="timeline-dot bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center z-10 my-4 md:my-0">
              <Icon name="lucide:factory" class="h-7 w-7" />
            </div>
            
            <div class="md:order-1 md:w-1/2 md:pr-12">
              <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Контроль на всіх етапах виробництва</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Інспекція готової продукції</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Регулярні звіти про прогрес</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Step 5 -->
        <div class="timeline-item" data-aos="fade-right" data-aos-delay="400">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
              <div class="mb-4">
                <span class="inline-block bg-blue-100 text-blue-600 text-lg font-semibold px-4 py-2 rounded-lg">Етап 5</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Логістика та митне оформлення</h3>
              <p class="text-gray-600 max-w-lg ml-auto">
                Ми організовуємо транспортування товару найбільш оптимальним маршрутом — морським, залізничним чи авіатранспортом. 
                Наші спеціалісти візьмуть на себе всі питання з митним оформленням та документами.
              </p>
            </div>
            
            <!-- Timeline dot -->
            <div class="timeline-dot bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center z-10 my-4 md:my-0">
              <Icon name="lucide:truck" class="h-7 w-7" />
            </div>
            
            <div class="md:w-1/2 md:pl-12">
              <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Оптимальний вибір способу доставки</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Повне митне оформлення</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="lucide:check-circle" class="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                    <span class="text-gray-700">Доставка "під ключ" до вашого складу</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="text-center mt-20" data-aos="fade-up">
        <div class="inline-block p-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg">
          <button 
            @click="scrollToContact"
            class="px-8 py-3 bg-white hover:bg-blue-50 rounded-md text-blue-600 font-medium transition duration-300"
          >
            Розпочати співпрацю
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Function to scroll to contact section
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.timeline-dot {
  box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.2);
}

@media (min-width: 768px) {
  .timeline-item:nth-child(even) .timeline-dot {
    transform: translateX(-50%);
  }
  
  .timeline-item:nth-child(odd) .timeline-dot {
    transform: translateX(-50%);
  }
}
</style>