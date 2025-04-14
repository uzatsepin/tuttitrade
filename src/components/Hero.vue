<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Particles Background -->
    <div class="hero__particles absolute inset-0 z-0" id="hero__particles"></div>

    <!-- Modern gradient background -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <!-- Animated elements -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div class="absolute h-96 w-96 rounded-full bg-blue-500/10 top-1/4 -left-48 blur-3xl animate-float"></div>
          <div class="absolute h-96 w-96 rounded-full bg-indigo-500/10 bottom-1/4 -right-48 blur-3xl animate-float-delay-2"></div>
          <div class="absolute h-64 w-64 rounded-full bg-blue-600/10 top-3/4 left-1/3 blur-2xl animate-float-delay-1"></div>
          
          <!-- Grid overlay for professional look -->
          <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
		  </div>
        </div>
      </div>
    </div>

    <!-- Animated business visuals -->
    <div class="absolute inset-0 z-10 pointer-events-none">
      <!-- Airplane animation -->
      <div class="absolute top-[20%] -left-20 animate-plane-flight">
        <Icon name="fa6-solid:plane" class="text-blue-400/60 w-24 h-24 transform -rotate-12" />
      </div>

      <!-- Container ship animation -->
      <div class="absolute bottom-[15%] right-[5%] animate-ship-sailing">
        <Icon name="fa6-solid:ship" class="text-blue-400/60 w-28 h-28" />
      </div>

      <!-- Package icon representing logistics -->
      <div class="absolute top-[25%] right-[15%] animate-float-delay-3">
        <Icon name="mdi:package-variant" class="text-blue-300/50 w-20 h-20" />
      </div>
    </div>

    <div class="container mx-auto px-4 z-20 py-20">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Hero Text Content -->
        <div class="w-full md:w-1/2 text-white mb-10 md:mb-0">
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Ваш товар з Китаю — <br />
            <span class="text-blue-400">просто та надійно!</span>
          </h1>
          
          <p class="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay-300 leading-relaxed">
            Від пошуку заводу до доставки в Україну — ми беремо все на себе.
          </p>
          
          <!-- Enhanced Features Section -->
          <div class="mb-10 space-y-4 animate-fade-in-delay-600">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 transform transition duration-300 hover:translate-x-1 hover:bg-white/15">
              <div class="flex items-center space-x-3">
                <span class="bg-blue-600 p-2 rounded-full flex items-center justify-center shrink-0">
                  <Icon name="lucide:check-circle" class="h-5 w-5" />
                </span>
                <div>
                  <h3 class="text-lg font-medium text-blue-300">Перевірені постачальники</h3>
                  <p class="text-white/70 text-sm">Співпрацюємо лише з надійними та сертифікованими виробниками продукції</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 transform transition duration-300 hover:translate-x-1 hover:bg-white/15">
              <div class="flex items-center space-x-3">
                <span class="bg-blue-600 p-2 rounded-full flex items-center justify-center shrink-0">
                  <Icon name="lucide:shield-check" class="h-5 w-5" />
                </span>
                <div>
                  <h3 class="text-lg font-medium text-blue-300">Контроль якості на місці</h3>
                  <p class="text-white/70 text-sm">Наші представники в Китаї особисто перевіряють якість товарів перед відправкою</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 transform transition duration-300 hover:translate-x-1 hover:bg-white/15">
              <div class="flex items-center space-x-3">
                <span class="bg-blue-600 p-2 rounded-full flex items-center justify-center shrink-0">
                  <Icon name="lucide:badge-dollar-sign" class="h-5 w-5" />
                </span>
                <div>
                  <h3 class="text-lg font-medium text-blue-300">Найкращі ціни</h3>
                  <p class="text-white/70 text-sm">Прямі контакти з виробниками дозволяють нам пропонувати найвигідніші умови</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Statistics Section -->
          <div class="flex flex-wrap gap-8 mb-10 animate-fade-in-delay-900">
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-blue-400">100+</span>
              <span class="text-gray-300 text-sm">Задоволених клієнтів</span>
            </div>
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-blue-400">300+</span>
              <span class="text-gray-300 text-sm">Успішних доставок</span>
            </div>
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-blue-400">99%</span>
              <span class="text-gray-300 text-sm">Якість продукції</span>
            </div>
          </div>
          
          <!-- Modernized Action Button -->
          <OthersPrimaryButton
            :text="'Замовити консультацію'"
            :icon="'lucide:arrow-right'"
            class="modern-button animate-fade-in-delay-1200 w-full justify-center lg:w-fit"
            @buttonClick="scrollToContact"
           />
        </div>

        <!-- Contact Form with professional glassmorphism -->
        <div class="w-full md:w-1/2 md:pl-12">
          <form 
            @submit.prevent="handleSubmit" 
            class="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20 animate-fade-in-delay-1500"
          >
            <h3 class="text-2xl font-semibold text-white mb-6">Отримати консультацію</h3>
            
            <div class="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше ім'я"
                  v-model="formData.name"
                  class="w-full bg-white/20 border border-white/30 focus:border-blue-400 h-12 text-white rounded-md px-4 outline-none placeholder:text-white/70"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Ваш телефон"
                  v-model="formData.phone"
                  class="w-full bg-white/20 border border-white/30 focus:border-blue-400 h-12 text-white rounded-md px-4 outline-none placeholder:text-white/70"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Ваше питання (опціонально)"
                  v-model="formData.message"
                  class="w-full bg-white/20 border border-white/30 focus:border-blue-400 h-24 text-white rounded-md px-4 py-3 outline-none placeholder:text-white/70 resize-none"
                ></textarea>
              </div>
              <OthersPrimaryButton 
			  	:text="'Відправити'"
				:icon="'lucide:send'"
				class="modern-button animate-fade-in-delay-1200 flex items-center justify-center w-full"
				@buttonClick="handleSubmit"
			  />
            </div>
            
            <p class="text-white/80 text-xs mt-4 text-center">
              Натискаючи на кнопку, ви погоджуєтеся з нашою <a href="#" class="text-blue-300 hover:underline">політикою конфіденційності</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Form state
const formData = ref({
  name: '',
  phone: '',
  message: ''
});

// Methods
const handleSubmit = () => {
  console.log('Form submitted:', formData.value);
  alert('Ваша заявка відправлена! Ми зв\'яжемося з вами найближчим часом.');
  formData.value = { name: '', phone: '', message: '' };
};

const scrollToContact = () => {
  const contactElement = document.getElementById('contact');
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: 'smooth' });
  }
};

// Particles.js implementation with bubble effect
const initParticles = () => {
  if (typeof window !== "undefined" && window.particlesJS) {
    window.particlesJS("hero__particles", {
      particles: {
        number: {
          value: 60,
          density: { enable: true, value_area: 1000 }
        },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 0.8,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 6,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.15,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 200,
            size: 12,
            duration: 2,
            opacity: 0.6,
            speed: 3
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  } else {
    console.warn("particles.js not available");
  }
};

// Lifecycle hooks
onMounted(() => {
  // Load particles.js script
  if (!document.getElementById("particles-js-script")) {
    const script = document.createElement("script");
    script.id = "particles-js-script";
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = initParticles;
    document.head.appendChild(script);
  } else {
    initParticles();
  }
});
</script>

<style scoped>
/* Professional animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 10s ease-in-out infinite;
}

.animate-float-delay-1 {
  animation: float 8s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-float-delay-2 {
  animation: float 12s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-float-delay-3 {
  animation: float 9s ease-in-out infinite;
  animation-delay: 3s;
}

/* Plane animation */
@keyframes plane-flight {
  0% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(calc(100vw + 100px)) translateY(-50px); }
  50.01% { transform: translateX(-100px) translateY(100px); }
  100% { transform: translateX(0) translateY(0); }
}

.animate-plane-flight {
  animation: plane-flight 30s linear infinite;
}

/* Ship animation */
@keyframes ship-sailing {
  0% { transform: translateX(0); }
  50% { transform: translateX(-100px); }
  100% { transform: translateX(0); }
}

.animate-ship-sailing {
  animation: ship-sailing 15s ease-in-out infinite;
}

/* Fade-in animations with delays */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-delay-300 {
  animation: fadeIn 0.8s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-fade-in-delay-600 {
  animation: fadeIn 0.8s ease-out 0.6s forwards;
  opacity: 0;
}

.animate-fade-in-delay-900 {
  animation: fadeIn 0.8s ease-out 0.9s forwards;
  opacity: 0;
}

.animate-fade-in-delay-1200 {
  animation: fadeIn 0.8s ease-out 1.2s forwards;
  opacity: 0;
}

.animate-fade-in-delay-1500 {
  animation: fadeIn 0.8s ease-out 1.5s forwards;
  opacity: 0;
}
</style>
