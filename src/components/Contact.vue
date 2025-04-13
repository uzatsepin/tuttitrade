<template>
  <section id="contact" class="py-20 bg-white relative overflow-hidden">
    <!-- Business-themed animated elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Animated business jets -->
      <div
        v-for="(plane, index) in planes"
        :key="index"
        class="absolute z-10 transition-transform"
        :style="planeStyle(plane)"
        :class="{'animate-slight-bounce': plane.bounce}"
      >
        <div class="transition-all duration-1000 ease-in-out" :style="{ transform: `rotate(${plane.rotate}deg) scale(${plane.scale})` }">
          <Icon name="lucide:plane" class="w-12 h-12" :class="plane.color"/>
        </div>
      </div>

      <!-- Business documents/contracts flying -->
      <div
        v-for="(doc, index) in documents"
        :key="`doc-${index}`"
        class="absolute transition-all duration-700 ease-in-out"
        :style="documentStyle(doc)"
        @mouseenter="docHover(doc)"
      >
        <div :class="['transform transition-transform', doc.hovered ? 'scale-110' : '']">
          <svg width="28" height="28" viewBox="0 0 24 24" :class="doc.color" fill="currentColor">
            <path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M16,18H8v-2h8V18z M16,14H8v-2h8V14z M13,9V3.5 L18.5,9H13z"/>
          </svg>
        </div>
      </div>

      <!-- Financial chart animations -->
      <div class="absolute bottom-5 right-10 opacity-30 pointer-events-none">
        <svg width="120" height="60" viewBox="0 0 120 60">
          <polyline 
            class="chart-line" 
            fill="none" 
            stroke="#3B82F6" 
            stroke-width="2"
            points="0,50 20,40 40,45 60,20 80,30 100,10 120,25"
          />
          <g v-for="(point, i) in [50, 40, 45, 20, 30, 10, 25]" :key="`point-${i}`">
            <circle 
              :cx="i * 20" 
              :cy="point" 
              r="3" 
              fill="#3B82F6" 
              class="chart-point"
              :style="{ animationDelay: `${i * 0.2}s` }"
            />
          </g>
        </svg>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-blue-700">Зв'яжіться з нами</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Готові розпочати співпрацю? Залиште запит, і ми зв'яжемося з вами найближчим часом
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Contact Information -->
        <div class="lg:col-span-5">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl relative overflow-hidden">
            
            <!-- Animated curved path for visual appeal -->
            <div class="absolute inset-0 opacity-20 pointer-events-none">
              <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,250 Q200,100 400,250 T750,250" fill="none" stroke="#3B82F6" stroke-width="2"/>
                <path d="M50,150 Q200,0 400,150 T750,150" fill="none" stroke="#3B82F6" stroke-width="2"/>
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-blue-700 mb-6 relative z-10">Контактна інформація</h3>
            
            <div class="space-y-6 relative z-10">
              <div class="flex items-start group">
                <div class="bg-white p-3 rounded-full mr-4 shadow-md group-hover:shadow-lg transition-all duration-300 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div class="transform transition-transform duration-300 group-hover:translate-x-2">
                  <p class="font-semibold text-gray-800">Телефон:</p>
                  <p class="text-gray-700">+380 97 123 45 67</p>
                  <button 
                    @click="handleCallRequest"
                    class="text-blue-600 hover:text-blue-800 font-medium mt-1 transition-colors flex items-center"
                  >
                    <span>Замовити дзвінок</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div class="flex items-start group">
                <div class="bg-white p-3 rounded-full mr-4 shadow-md group-hover:shadow-lg transition-all duration-300 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="transform transition-transform duration-300 group-hover:translate-x-2">
                  <p class="font-semibold text-gray-800">Email:</p>
                  <p class="text-gray-700">info@tutitrade.com</p>
                </div>
              </div>
              
              <div class="flex items-start group">
                <div class="bg-white p-3 rounded-full mr-4 shadow-md group-hover:shadow-lg transition-all duration-300 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div class="transform transition-transform duration-300 group-hover:translate-x-2">
                  <p class="font-semibold text-gray-800">Месенджери:</p>
                  <div class="flex space-x-4 mt-2">
                    <a 
                      v-for="(messenger, index) in messengers" 
                      :key="index"
                      :href="messenger.url" 
                      class="bg-white p-2 rounded-full text-gray-700 hover:text-blue-600 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-110 min-w-10 min-h-10 flex items-center justify-center"
                      :title="messenger.name"
                    >
                      <Icon :name="messenger.icon" class="h-6 w-6 min-w-6 min-h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-12 relative z-10 border-t border-blue-200 pt-6">
              <h4 class="text-xl font-semibold text-blue-700 mb-4">Режим роботи:</h4>
              <div class="space-y-2">
                <p class="text-gray-700 flex justify-between">
                  <span>Понеділок - П'ятниця:</span> 
                  <span class="font-medium">9:00 - 18:00</span>
                </p>
                <p class="text-gray-700 flex justify-between">
                  <span>Субота:</span> 
                  <span class="font-medium">10:00 - 15:00</span>
                </p>
                <p class="text-gray-700 flex justify-between">
                  <span>Неділя:</span> 
                  <span class="font-medium">Вихідний</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="lg:col-span-7">
          <div class="bg-white rounded-xl p-8 shadow-lg relative">
            <!-- Decorative airplanes in the corner -->
            <div class="absolute top-6 right-6 text-blue-200 opacity-50">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-blue-700 mb-6 flex items-center">
              <span>Надіслати повідомлення</span>
              <div class="ml-3 w-8 h-1 bg-yellow-400 rounded-full"></div>
            </h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div 
                v-if="submitted" 
                class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center animate-fade-in"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Повідомлення надіслано! Ми зв'яжемося з вами найближчим часом.</span>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2 group">
                  <label for="name" class="block text-sm font-medium text-gray-700 group-focus-within:text-blue-700 transition-colors">
                    Ваше ім'я *
                  </label>
                  <div class="relative">
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      :class="{'border-red-300 focus:border-red-500 focus:ring-red-200': v$.name.$error}"
                      required
                    />
                    <span v-if="v$.name.$error" class="text-red-500 text-xs mt-1 absolute -bottom-5">
                      Будь ласка, введіть ваше ім'я
                    </span>
                  </div>
                </div>
                
                <div class="space-y-2 group">
                  <label for="phone" class="block text-sm font-medium text-gray-700 group-focus-within:text-blue-700 transition-colors">
                    Ваш телефон *
                  </label>
                  <div class="relative">
                    <input
                      id="phone"
                      v-model="formData.phone"
                      type="tel"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      :class="{'border-red-300 focus:border-red-500 focus:ring-red-200': v$.phone.$error}"
                      required
                    />
                    <span v-if="v$.phone.$error" class="text-red-500 text-xs mt-1 absolute -bottom-5">
                      Будь ласка, введіть коректний номер телефону
                    </span>
                  </div>
                </div>
              </div>
              
              <div class="space-y-2 group">
                <label for="email" class="block text-sm font-medium text-gray-700 group-focus-within:text-blue-700 transition-colors">
                  Email
                </label>
                <div class="relative">
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    :class="{'border-red-300 focus:border-red-500 focus:ring-red-200': v$.email.$error}"
                  />
                  <span v-if="v$.email.$error" class="text-red-500 text-xs mt-1 absolute -bottom-5">
                    Будь ласка, введіть коректний email
                  </span>
                </div>
              </div>
              
              <div class="space-y-2">
                <label for="message" class="block text-sm font-medium text-gray-700">
                  Повідомлення
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 resize-none"
                  rows="5"
                  placeholder="Опишіть ваш запит або питання..."
                ></textarea>
              </div>
              
              <div class="space-y-2">
                <label class="flex items-center">
                  <input 
                    v-model="formData.consent" 
                    type="checkbox" 
                    class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    :class="{'border-red-300': v$.consent.$error}"
                    required
                  />
                  <span class="ml-2 text-sm text-gray-600">
                    Я даю згоду на обробку моїх персональних даних
                  </span>
                </label>
                <span v-if="v$.consent.$error" class="text-red-500 text-xs block mt-1">
                  Необхідно дати згоду на обробку персональних даних
                </span>
              </div>
              
              <button 
                type="submit"
                :disabled="isSubmitting" 
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] flex justify-center items-center"
                :class="{'opacity-70 cursor-not-allowed': isSubmitting}"
              >
                <span v-if="isSubmitting" class="mr-2">
                  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                {{ isSubmitting ? 'Надсилання...' : 'Надіслати повідомлення' }}
              </button>
              
              <div class="flex items-center justify-center space-x-2 text-sm text-gray-500 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                <p>Ваші дані надійно захищені</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast notifications -->
    <div 
      v-if="showToast" 
      class="fixed bottom-5 right-5 bg-white shadow-lg rounded-lg p-4 flex items-center z-50 animate-slide-in-right max-w-md"
    >
      <div :class="`text-${toastType === 'success' ? 'green' : 'blue'}-600 mr-3`">
        <svg v-if="toastType === 'success'" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <svg v-else class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>
        <h4 class="font-medium text-gray-800">{{ toastTitle }}</h4>
        <p class="text-gray-600 text-sm">{{ toastMessage }}</p>
      </div>
      <button @click="closeToast" class="ml-auto text-gray-400 hover:text-gray-500">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';

// Types
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

// Define validation rules
const rules = {
  name: { required },
  phone: { 
    required,
    validPhone: helpers.regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i)
  },
  email: {
    email: helpers.withMessage('Невірний формат email', email)
  },
  consent: { required }
};

// Form state
const formData = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  message: '',
  consent: false
});

// Animation state
const planes = ref([
  { 
    id: 1, 
    x: -10, 
    y: 20, 
    rotate: -15, 
    speedX: 0.08, 
    speedY: 0.01, 
    scale: 1, 
    type: 'jet', 
    color: 'text-blue-500',
    bounce: true,
    path: {
      amplitude: 5,
      frequency: 0.02,
      phase: 0
    }
  },
  { 
    id: 2, 
    x: 110, 
    x: 110, 
    y: 55, 
    rotate: 195, 
    speedX: -0.05, 
    speedY: 0.005, 
    scale: 0.8, 
    type: 'jet',
    color: 'text-blue-400',
    bounce: true,
    path: {
      amplitude: 8,
      frequency: 0.015,
      phase: Math.PI
    }
  },
  { 
    id: 3, 
    x: 50, 
    y: 15, 
    rotate: 0, 
    speedX: 0.04, 
    speedY: 0.02, 
    scale: 0.7, 
    type: 'chart',
    color: 'text-indigo-500',
    bounce: false,
    path: {
      amplitude: 0,
      frequency: 0,
      phase: 0
    }
  },
  { 
    id: 4, 
    x: 80, 
    y: 75, 
    rotate: -10, 
    speedX: -0.03, 
    speedY: -0.01, 
    scale: 0.9, 
    type: 'briefcase',
    color: 'text-blue-600',
    bounce: false,
    path: {
      amplitude: 3,
      frequency: 0.025,
      phase: Math.PI/2
    }
  },
]);

const documents = ref([
  { id: 1, x: 15, y: 30, rotate: 5, scale: 1, color: 'text-blue-400 opacity-70', hovered: false },
  { id: 2, x: 70, y: 40, rotate: -8, scale: 0.9, color: 'text-indigo-400 opacity-70', hovered: false },
  { id: 3, x: 40, y: 65, rotate: 12, scale: 0.8, color: 'text-blue-500 opacity-70', hovered: false },
  { id: 4, x: 85, y: 20, rotate: -5, scale: 1.1, color: 'text-blue-600 opacity-70', hovered: false },
]);

// Messenger apps data
const messengers = [
  { 
    name: 'Telegram', 
    url: 'https://t.me/tutitrade', 
    icon: 'ri:telegram-line'
  },
  { 
    name: 'Viber', 
    url: 'viber://chat?number=+380971234567', 
    icon: 'basil:viber-outline'
  },
  { 
    name: 'WhatsApp', 
    url: 'https://wa.me/380971234567', 
    icon: 'ic:baseline-whatsapp'
  }
];

// Form submission state
const isSubmitting = ref(false);
const submitted = ref(false);

// Toast notification state
const showToast = ref(false);
const toastTitle = ref('');
const toastMessage = ref('');
const toastType = ref<'success' | 'info'>('info');
const toastTimeout = ref<number | null>(null);

// Validation
const v$ = useVuelidate(rules, formData);

// Animation functions
const planeStyle = (plane: any) => {
  const yOffset = plane.path.amplitude * Math.sin(plane.path.frequency * plane.x + plane.path.phase);
  
  return {
    left: `${plane.x}%`,
    top: `${plane.y + yOffset}%`,
    opacity: 0.7,
    transition: 'transform 0.3s ease-out'
  };
};

const documentStyle = (doc: any) => {
  return {
    left: `${doc.x}%`,
    top: `${doc.y}%`,
    transform: `rotate(${doc.rotate}deg) scale(${doc.scale})`,
    transition: 'all 0.5s ease'
  };
};

const docHover = (doc: any) => {
  doc.hovered = true;
  setTimeout(() => {
    doc.hovered = false;
  }, 500);
};

// Handle form submission
const handleSubmit = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) return;
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Contact form submitted:', formData);
    
    // Show success message
    showToastNotification({
      title: 'Повідомлення надіслано!',
      message: 'Ми зв\'яжемося з вами найближчим часом',
      type: 'success'
    });
    
    // Reset form
    resetForm();
    submitted.value = true;
    
    // Hide success message after some time
    setTimeout(() => {
      submitted.value = false;
    }, 5000);
    
  } catch (error) {
    showToastNotification({
      title: 'Помилка!',
      message: 'Не вдалося надіслати повідомлення. Спробуйте пізніше.',
      type: 'info'
    });
  } finally {
    isSubmitting.value = false;
  }
};

// Handle call request
const handleCallRequest = () => {
  showToastNotification({
    title: 'Запит на дзвінок відправлено!',
    message: 'Наш спеціаліст передзвонить вам найближчим часом',
    type: 'info'
  });
};

// Reset form
const resetForm = () => {
  formData.name = '';
  formData.email = '';
  formData.phone = '';
  formData.message = '';
  formData.consent = false;
  v$.value.$reset();
};

// Toast notification
const showToastNotification = ({ title, message, type }: { title: string, message: string, type: 'success' | 'info' }) => {
  toastTitle.value = title;
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;
  
  if (toastTimeout.value) clearTimeout(toastTimeout.value);
  toastTimeout.value = window.setTimeout(() => {
    closeToast();
  }, 5000);
};

const closeToast = () => {
  showToast.value = false;
  if (toastTimeout.value) {
    clearTimeout(toastTimeout.value);
    toastTimeout.value = null;
  }
};

// Improved animation loop with smoother motion
let animationFrameId: number | null = null;
let lastTime = 0;
const animateBusinessElements = (timestamp: number) => {
  if (!lastTime) lastTime = timestamp;
  const deltaTime = timestamp - lastTime;
  const timeScaleFactor = deltaTime / 16; // Normalize to ~60fps
  
  // Animate planes with smoother, business-jet like movements
  planes.value.forEach(plane => {
    // Calculate smooth paths with subtle wave motion
    plane.x += plane.speedX * timeScaleFactor;
    plane.y += plane.speedY * Math.sin(plane.x * 0.01) * timeScaleFactor;
    
    // Add smooth rotation variations for realistic flight
    if (plane.type === 'jet') {
      plane.rotate += Math.sin(timestamp * 0.001) * 0.1;
    }
    
    // Reset planes with different patterns when they go off-screen
    if (plane.x > 110) {
      plane.x = -10;
      plane.y = 10 + Math.random() * 60;
    } else if (plane.x < -10) {
      plane.x = 110;
      plane.y = 10 + Math.random() * 60;
    }
  });
  
  // Gently animate documents with subtle floating
  documents.value.forEach((doc, index) => {
    doc.y += Math.sin(timestamp * 0.001 + index) * 0.02;
    doc.rotate += Math.sin(timestamp * 0.0005 + index) * 0.02;
  });
  
  lastTime = timestamp;
  animationFrameId = requestAnimationFrame(animateBusinessElements);
};

// Start/stop animations with improved timing
onMounted(() => {
  // Start animations with requestAnimationFrame for smoother performance
  animationFrameId = requestAnimationFrame(animateBusinessElements);
  
  // Add random subtle movements to documents occasionally
  const documentInterval = setInterval(() => {
    documents.value.forEach(doc => {
      if (Math.random() > 0.7) {
        doc.rotate += (Math.random() - 0.5) * 5;
        doc.scale += (Math.random() - 0.5) * 0.1;
        // Keep scale within reasonable bounds
        if (doc.scale < 0.7) doc.scale = 0.7;
        if (doc.scale > 1.2) doc.scale = 1.2;
      }
    });
  }, 3000);
  
  return () => {
    clearInterval(documentInterval);
  };
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  if (toastTimeout.value) {
    clearTimeout(toastTimeout.value);
  }
});
</script>

<style>
/* Base animations */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-right {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
}

/* Enhanced animation effects */
@keyframes float-subtle {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-5px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

@keyframes slight-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.animate-slight-bounce {
  animation: slight-bounce 4s ease-in-out infinite;
}

.chart-line {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: dash 3s linear forwards infinite;
}

.chart-point {
  animation: pulse-subtle 2s infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 300;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes pulse-subtle {
  0%, 100% { 
    transform: scale(1);
    opacity: 0.8;
  }
  50% { 
    transform: scale(1.3);
    opacity: 1;
  }
}

/* Animation classes */
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 0.5s ease-out forwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 2s infinite;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>