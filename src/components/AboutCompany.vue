<template>
  <section id="about" ref="sectionRef" class="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl lg:text-4xl font-bold text-center mb-6 text-blue-700">
        Про нашу компанію
      </h2>
      <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        Ми створюємо нові можливості для вашого бізнесу
      </p>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Left side: Interactive map -->
        <div :class="`lg:col-span-5 relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`" style="transition: opacity 1s ease-in-out;">
          <div class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-xl overflow-hidden h-full">
            <div class="relative h-full min-h-[400px] p-8">
              <!-- Abstract world map background -->
              <div class="absolute inset-0 opacity-20">
                <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50,250 Q200,100 400,250 T750,250" fill="none" stroke="white" stroke-width="1" />
                  <path d="M50,350 Q200,200 400,350 T750,350" fill="none" stroke="white" stroke-width="1" />
                  <path d="M50,150 Q200,0 400,150 T750,150" fill="none" stroke="white" stroke-width="1" />
                  <circle cx="200" cy="250" r="5" fill="white" />
                  <circle cx="600" cy="200" r="5" fill="white" />
                  <circle cx="300" cy="300" r="3" fill="white" />
                  <circle cx="500" cy="150" r="4" fill="white" />
                  <circle cx="450" cy="350" r="3" fill="white" />
                  <circle cx="650" cy="300" r="4" fill="white" />
                </svg>
              </div>
              
              <!-- Ukraine location -->
              <div class="absolute left-1/4 bottom-1/3">
                <div class="relative">
                  <div class="absolute -inset-4 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                  <div class="h-8 w-8 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span class="absolute mt-2 left-1/2 transform -translate-x-1/2 text-white font-semibold whitespace-nowrap">
                    Україна
                  </span>
                </div>
              </div>
              
              <!-- China location -->
              <div class="absolute right-1/4 top-1/3">
                <div class="relative">
                  <div class="absolute -inset-4 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
                  <div class="h-8 w-8 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span class="absolute mt-2 left-1/2 transform -translate-x-1/2 text-white font-semibold whitespace-nowrap">
                    Китай
                  </span>
                </div>
              </div>
              
              <!-- Connection lines -->
              <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M200,300 Q350,225 500,150" 
                  stroke="white" 
                  stroke-width="2" 
                  stroke-dasharray="8 4" 
                  fill="none"
                />
              </svg>
              
              <!-- Animated planes -->
              <div v-for="(plane, index) in planes" :key="index" class="absolute" :style="planeStyle(plane)">
                <div class="h-12 w-12 text-white transform" :style="planeRotationStyle(plane)">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5L17 9M21 5L17 1M21 5C21 5 16 8.5 13 9.5C11.5 10 10.5 10.5 9.5 11.5C8.5 12.5 8.34482 14 7.5 15.5C7 16.5 5 19 5 19M9 18C9 18 9.5 17 10 17C10.5 17 10.5 17.5 11 17.5C11.5 17.5 11.5 17 12 17C12.5 17 13 18 13 18M9 18C9 18 9.5 19 10 19C10.5 19 10.5 18.5 11 18.5C11.5 18.5 11.5 19 12 19C12.5 19 13 18 13 18M9 18L3 20L5 14M13 18L19 20L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <!-- Packages floating animation -->
              <div v-for="(pkg, index) in packages" :key="`pkg-${index}`" class="absolute" :style="packageStyle(pkg)">
                <div class="h-8 w-8 text-white" :style="{ opacity: pkg.opacity }">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right side: Team info with animations -->
        <div class="lg:col-span-7">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Feature cards -->
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              :class="`bg-white rounded-xl shadow-md p-6 border border-blue-100 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`"
              :style="{ animationDelay: `${0.2 * (index + 1)}s`, transition: 'all 0.5s ease' }"
            >
              <div class="flex items-start mb-4">
                <div class="bg-blue-100 p-3 rounded-full mr-4">
                  <component :is="feature.icon" class="h-6 w-6 text-blue-600"></component>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            :class="`mt-8 bg-white rounded-xl shadow-md p-6 border border-blue-100 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`"
            :style="{ animationDelay: '1s', transition: 'opacity 1s ease-in-out' }"
          >
            <p class="text-lg text-gray-700 mb-6">
              Ми — команда професіоналів, яка вже 8 років допомагає бізнесам з України отримувати товари з Китаю швидко, надійно та вигідно. 
              Наша місія — зробити імпорт простим для кожного підприємця.
            </p>
            
            <button 
              @click="scrollToContact"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Зв'язатися з нами
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Background elements -->
    <div class="absolute top-0 right-0 h-64 w-64 bg-blue-500 opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 left-0 h-40 w-40 bg-blue-500 opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

// Animation objects
const planes = ref([
  { id: 1, progress: 0, speed: 0.002, direction: 1 },
  { id: 2, progress: 0.5, speed: 0.0015, direction: 1 },
]);

const packages = ref([
  { x: 25, y: 40, opacity: 0.7, speed: 0.2 },
  { x: 75, y: 60, opacity: 0.8, speed: 0.15 },
  { x: 60, y: 30, opacity: 0.6, speed: 0.25 },
]);

// Company features
const features = [
  {
    icon: 'lucide:globe',
    title: 'Глобальна експертиза',
    description: 'Знання китайської мови та культури ділового спілкування, розуміння специфіки регіону'
  },
  {
    icon: 'lucide:clock',
    title: '8 років досвіду',
    description: 'Роки роботи з китайськими постачальниками та успішних поставок для українських клієнтів'
  },
  {
    icon: 'lucide:users',
    title: 'Команда професіоналів',
    description: 'Фахівці в закупівлях, логістиці, ЗЕД та митному оформленні'
  },
  {
    icon: 'lucide:check',
    title: 'Прозорість процесів',
    description: 'Чесна цінова політика та повний контроль на кожному етапі роботи'
  }
];

// Intersection Observer setup
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
  
  // Start animation loop
  startAnimations();
});

let animationFrameId: number | null = null;

// Animation functions
const startAnimations = () => {
  const animate = () => {
    // Animate planes
    planes.value.forEach(plane => {
      plane.progress += plane.speed * plane.direction;
      
      // Reverse direction when reaching endpoints
      if (plane.progress >= 1) {
        plane.direction = -1;
      } else if (plane.progress <= 0) {
        plane.direction = 1;
      }
    });
    
    // Animate packages
    packages.value.forEach(pkg => {
      pkg.y = (pkg.y + pkg.speed) % 100; // Loop vertically
      pkg.opacity = 0.5 + Math.sin(Date.now() / 1000) * 0.3; // Pulsate opacity
    });
    
    animationFrameId = requestAnimationFrame(animate);
  };
  
  animate();
};

// Clean up
onUnmounted(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
});

// Styling computed properties
const planeStyle = computed(() => (plane: any) => {
  // Calculate curved path along bezier curve
  const t = plane.progress;
  const bezierX = 200 * (1-t)*(1-t) + 350 * 2*(1-t)*t + 500 * t*t;
  const bezierY = 300 * (1-t)*(1-t) + 225 * 2*(1-t)*t + 150 * t*t;
  
  return {
    left: `${bezierX / 800 * 100}%`,
    top: `${bezierY / 500 * 100}%`,
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.1s linear'
  };
});

const planeRotationStyle = computed(() => (plane: any) => {
  // Calculate rotation angle based on direction and position
  const angle = plane.direction > 0 ? -45 : 135;
  
  return {
    transform: `rotate(${angle}deg)`,
    opacity: 0.9
  };
});

const packageStyle = computed(() => (pkg: any) => {
  return {
    left: `${pkg.x}%`,
    top: `${pkg.y}%`,
    transform: 'translate(-50%, -50%)',
    transition: 'opacity 0.5s ease'
  };
});

// Scroll to contact section
const scrollToContact = () => {
  const contactElement = document.getElementById('contact');
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style>
.animate-fade-in {
  animation: fadeIn 1s ease forwards;
}

.animate-pulse {
  animation: pulse 2s infinite;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.05); opacity: 0.3; }
  100% { transform: scale(1); opacity: 0.2; }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
</style>