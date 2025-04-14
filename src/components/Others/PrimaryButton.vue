<template>
    <button class="modern-button animate-fade-in-delay-1200 inline-flex items-center space-x-2 cursor-pointer" @click="emit('buttonClick')">
        <span class="relative z-10 font-medium">{{ text }}</span>
        <Icon :name="icon" class="h-5 w-5 relative z-10 transition-transform duration-300" />
    </button>
</template>

<script lang="ts" setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Замовити консультацію',
    },
    icon: {
        type: String,
        default: 'lucide:arrow-right',
    },
})

const emit = defineEmits(['buttonClick'])
</script>

<style scoped>
/* Modern button with sleek hover effect */
.modern-button {
  position: relative;
  padding: 0.875rem 2rem;
  font-size: 1.125rem;
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

.modern-button:hover .h-5 {
  transform: translateX(4px);
}

.modern-button:active {
  transform: translateY(0);
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
}
</style>
