<template>
  <section 
    id="statistics" 
    ref="statisticsSection" 
    class="py-20 bg-gradient-to-br from-blue-800 to-blue-950 text-white relative overflow-hidden"
  >
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(255,255,255,0.05)_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>
    </div>
    
    <!-- Floating orbs -->
    <div class="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
    <div class="absolute bottom-20 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow animation-delay-2000"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div data-aos="fade-up" class="mb-16 text-center max-w-3xl mx-auto">
        <h5 class="text-blue-300 uppercase tracking-widest font-medium mb-3">Наша експертність</h5>
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          Довіра, підкріплена результатами
        </h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
      </div>
      
      <!-- Desktop statistics grid -->
      <div class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
        <div 
          v-for="stat in statistics" 
          :key="stat.id" 
          class="stat-card group bg-blue-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-blue-700/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
        >
          <div class="h-full flex flex-col p-8 relative">
            <!-- Gradient hover effect -->
            <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                :class="stat.gradientClass"></div>
            
            <!-- Icon -->
            <div class="icon-wrapper mb-5 relative rounded-full w-16 h-16 flex items-center justify-center" :class="stat.iconClass">
              <div class="absolute inset-0 rounded-full opacity-20" :class="stat.gradientClass"></div>
              <Icon :name="stat.icon" class="h-8 w-8 text-white relative z-10" />
            </div>
            
            <!-- Value counter -->
            <div class="flex items-baseline mb-2">
              <span class="text-4xl lg:text-5xl font-bold text-white">
                <CountUp 
                  :end-val="stat.value" 
                  :options="{ duration: 2.5, suffix: stat.suffix }" 
                  :trigger-start="isVisible"
                />
              </span>
            </div>
            
            <!-- Label -->
            <p class="text-base text-blue-100 leading-snug">{{ stat.label }}</p>
            
            <!-- Decorative element -->
            <div class="absolute bottom-0 right-0 w-20 h-20 opacity-10">
              <Icon :name="stat.icon" class="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mobile carousel -->
      <div class="md:hidden">
        <div class="relative">
          <div class="statistics-carousel overflow-hidden">
            <div class="flex transition-transform duration-300 ease-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div 
                v-for="stat in statistics" 
                :key="stat.id" 
                class="stat-card min-w-full px-4"
              >
                <div class="bg-blue-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-blue-700/30 h-full p-8 flex flex-col items-center text-center">
                  <!-- Icon -->
                  <div class="icon-wrapper mb-5 relative rounded-full w-16 h-16 flex items-center justify-center" :class="stat.iconClass">
                    <div class="absolute inset-0 rounded-full opacity-20" :class="stat.gradientClass"></div>
                    <Icon :name="stat.icon" class="h-8 w-8 text-white relative z-10" />
                  </div>
                  
                  <!-- Value counter -->
                  <div class="flex items-baseline mb-2">
                    <span class="text-4xl lg:text-5xl font-bold text-white">
                      <CountUp 
                        :end-val="stat.value" 
                        :options="{ duration: 2.5, suffix: stat.suffix }" 
                        :trigger-start="isVisible"
                      />
                    </span>
                  </div>
                  
                  <!-- Label -->
                  <p class="text-base text-blue-100 leading-snug">{{ stat.label }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Carousel controls -->
          <div class="flex justify-center gap-3 mt-6">
            <button 
              @click="prevSlide" 
              class="w-10 h-10 rounded-full bg-blue-800/50 border border-blue-700/30 flex items-center justify-center hover:bg-blue-700/50 transition-colors"
              aria-label="Попередній слайд"
            >
              <Icon name="lucide:chevron-left" class="h-5 w-5" />
            </button>
            <button 
              @click="nextSlide" 
              class="w-10 h-10 rounded-full bg-blue-800/50 border border-blue-700/30 flex items-center justify-center hover:bg-blue-700/50 transition-colors"
              aria-label="Наступний слайд"
            >
              <Icon name="lucide:chevron-right" class="h-5 w-5" />
            </button>
          </div>
          
          <!-- Dots indicators -->
          <div class="flex justify-center mt-4 gap-2">
            <button 
              v-for="(_, index) in statistics" 
              :key="index" 
              @click="goToSlide(index)" 
              class="w-2 h-2 rounded-full transition-all duration-300" 
              :class="currentSlide === index ? 'bg-blue-400 w-6' : 'bg-blue-700'"
              :aria-label="`Перейти до слайду ${index + 1}`"
            ></button>
          </div>
        </div>
      </div>
      
      <!-- Trust indicator -->
      <div class="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
        <p class="text-blue-200 text-sm uppercase tracking-wider mb-4">Нам довіряють провідні компанії</p>
        <div class="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-60">
          <div class="w-16 h-16 bg-[var(--color-background)]/20 rounded-full"></div>
          <div class="w-16 h-16 bg-[var(--color-background)]/20 rounded-full"></div>
          <div class="w-16 h-16 bg-[var(--color-background)]/20 rounded-full"></div>
          <div class="w-16 h-16 bg-[var(--color-background)]/20 rounded-full"></div>
          <div class="w-16 h-16 bg-[var(--color-background)]/20 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Statistics data
interface Stat {
  id: number;
  value: number;
  label: string;
  icon: string;
  suffix: string;
  gradientClass: string;
  iconClass: string;
}

const statistics: Stat[] = [
  {
    id: 1,
    value: 500,
    label: 'клієнтів довірили нам свої замовлення',
    icon: 'lucide:users',
    suffix: '+',
    gradientClass: 'from-blue-500 to-blue-700',
    iconClass: 'bg-blue-600'
  },
  {
    id: 2,
    value: 10000,
    label: 'кг товарів доставлено в Україну',
    icon: 'lucide:package',
    suffix: '+',
    gradientClass: 'from-purple-500 to-purple-700',
    iconClass: 'bg-purple-600'
  },
  {
    id: 3,
    value: 200,
    label: 'перевірених заводів у Китаї',
    icon: 'lucide:factory',
    suffix: '+',
    gradientClass: 'from-green-500 to-green-700',
    iconClass: 'bg-green-600'
  },
  {
    id: 4,
    value: 8,
    label: 'років успішної роботи на ринку',
    icon: 'lucide:clock',
    suffix: '',
    gradientClass: 'from-red-500 to-red-700',
    iconClass: 'bg-red-600'
  }
];

// Visibility state for animations
const isVisible = ref(false);
const statisticsSection = ref<HTMLElement | null>(null);

// Mobile carousel state
const currentSlide = ref(0);
const autoplayInterval = ref<NodeJS.Timer | null>(null);

// Methods for carousel
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % statistics.length;
  resetAutoplay();
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + statistics.length) % statistics.length;
  resetAutoplay();
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
  resetAutoplay();
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlide();
  }, 5000);
};

const resetAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    startAutoplay();
  }
};

// CountUp component for animated counters
const CountUp = defineComponent({
  props: {
    endVal: {
      type: Number,
      required: true
    },
    options: {
      type: Object,
      default: () => ({})
    },
    triggerStart: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const count = ref(0);
    const duration = props.options?.duration || 2;
    const suffix = props.options?.suffix || '';
    
    watch(() => props.triggerStart, (start) => {
      if (start) {
        startCounting();
      }
    }, { immediate: true });
    
    const startCounting = () => {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;
      
      const updateCount = () => {
        const now = Date.now();
        if (now >= endTime) {
          count.value = props.endVal;
          return;
        }
        
        const elapsed = (now - startTime) / (endTime - startTime);
        count.value = Math.floor(props.endVal * elapsed);
        requestAnimationFrame(updateCount);
      };
      
      requestAnimationFrame(updateCount);
    };
    
    return () => h('span', `${count.value}${suffix}`);
  }
});

onMounted(() => {
  // Set up Intersection Observer for animation trigger
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  if (statisticsSection.value) {
    observer.observe(statisticsSection.value);
  }
  
  // Start carousel autoplay
  startAutoplay();
});

onUnmounted(() => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
});
</script>

<style scoped>
.icon-wrapper {
  position: relative;
  z-index: 1;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

/* Animation for floating elements */
@keyframes float-slow {
  0%, 100% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(15px, -15px);
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Fix for Safari rendering */
.statistics-carousel {
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  mask-image: radial-gradient(white, black);
}
</style>