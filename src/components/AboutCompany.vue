<template>
    <section id="about" ref="sectionRef" class="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-6 text-gray-800">Про нашу компанію</h2>
            <p class="text-xl text-gray-600 text-center mb-4 lg:mb-16 max-w-3xl mx-auto">Ми створюємо нові можливості для вашого бізнесу</p>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <!-- Left side: Interactive map -->
                <div
                    :class="`lg:col-span-5 relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`"
                    style="transition: opacity 1s ease-in-out"
                >
                    <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-xl overflow-hidden h-full hidden lg:block">
                        <div class="relative h-full min-h-[400px] p-8">
                            <!-- Business-style world map background -->
                            <svg class="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
                                <!-- World map simplified grid -->
                                <path d="M100,100 L700,100" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />
                                <path d="M100,150 L700,150" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />
                                <path d="M100,200 L700,200" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />
                                <path d="M100,250 L700,250" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />
                                <path d="M100,300 L700,300" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />
                                <path d="M100,350 L700,350" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />
                                <path d="M100,400 L700,400" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />

                                <path d="M100,100 L100,400" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />
                                <path d="M200,100 L200,400" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />
                                <path d="M300,100 L300,400" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />
                                <path d="M400,100 L400,400" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />
                                <path d="M500,100 L500,400" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />
                                <path d="M600,100 L600,400" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />
                                <path d="M700,100 L700,400" stroke="white" stroke-width="0.5" stroke-opacity="0.3" />

                                <!-- Continents abstract shapes -->
                                <path
                                    d="M200,150 Q250,180 300,150 T400,170 T500,150 L450,250 Q380,280 350,250 T250,230 Z"
                                    fill="white"
                                    fill-opacity="0.1"
                                />
                                <path
                                    d="M530,200 Q580,180 650,220 T700,260 L680,320 Q630,340 600,300 T550,260 Z"
                                    fill="white"
                                    fill-opacity="0.1"
                                />
                                <path
                                    d="M150,270 Q200,250 230,280 T330,300 L300,350 Q250,380 200,350 T170,320 Z"
                                    fill="white"
                                    fill-opacity="0.1"
                                />
                            </svg>

                            <!-- Ukraine location -->
                            <div class="absolute left-1/4 bottom-1/3 z-20">
                                <div class="relative">
                                    <div class="absolute -inset-4 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                                    <div class="h-6 w-6 text-white">
                                        <Icon name="lucide:map-pin" class="h-6 w-6 min-h-6 min-w-6" />
                                    </div>
                                    <span
                                        class="absolute mt-4 left-1/2 transform -translate-x-1/2 text-white font-semibold whitespace-nowrap"
                                    >
                                        Україна
                                    </span>
                                </div>
                            </div>

                            <!-- China location - Repositioned to avoid overlap with connection line -->
                            <div class="absolute right-1/4 top-1/4 z-20">
                                <div class="relative">
                                    <div class="absolute -inset-4 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
                                    <div class="h-6 w-6 text-white">
                                        <Icon name="lucide:map-pin" class="h-6 w-6 min-h-6 min-w-6" />
                                    </div>
                                    <span
                                        class="absolute mt-2 left-1/2 transform -translate-x-1/2 text-white font-semibold whitespace-nowrap"
                                    >
                                        Китай
                                    </span>
                                </div>
                            </div>

                            <!-- Connection lines - Properly positioned -->
                            <svg class="absolute inset-0 h-full w-full z-10" xmlns="http://www.w3.org/2000/svg">
                                <path
									id="flight-path"
									d="M180,350 C250,280 350,220 420,155"
									stroke="white"
									stroke-width="2"
									stroke-dasharray="8 4"
									fill="none"
									/>
                            </svg>

                            <!-- Animated planes - using proper plane icon -->
                            <div v-for="(plane, index) in planes" :key="index" class="absolute" :style="planeStyle(plane)">
                                <div class="text-white" :style="planeRotationStyle(plane)">
                                    <Icon name="fa6-solid:plane" class="h-8 w-8" />
                                </div>
                            </div>

                            <!-- Packages - using proper package icon -->
                            <div v-for="(pkg, index) in packages" :key="`pkg-${index}`" class="absolute" :style="packageStyle(pkg)">
                                <div class="text-white" :style="{ opacity: pkg.opacity }">
                                    <Icon name="mdi:package-variant" class="h-8 w-8" />
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
							data-aos="fade-up"
							data-aos-delay="200"
                            :class="`bg-white rounded-xl shadow-md p-6 border-l-4 ${
                                feature.borderColor
                            } transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                                isVisible ? 'animate-fade-in' : 'opacity-0'
                            }`"
                            :style="{ animationDelay: `${0.2 * (index + 1)}s`, transition: 'all 0.5s ease' }"
                        >
                            <div class="flex items-start mb-2">
                                <div class="p-2 mr-4">
                                    <Icon :name="feature.icon" class="h-6 w-6 min-h-6 min-w-6 text-blue-600"></Icon>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">{{ feature.title }}</h3>
                                    <p class="text-gray-600">{{ feature.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        :class="`mt-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600 ${
                            isVisible ? 'animate-fade-in' : 'opacity-0'
                        }`"
						data-aos="fade-up"
						data-aos-delay="200"
                        :style="{ animationDelay: '1s', transition: 'opacity 1s ease-in-out' }"
                    >
                        <p class="text-lg text-gray-700 mb-6">
                            Ми — команда професіоналів, яка вже 8 років допомагає бізнесам з України отримувати товари з Китаю швидко,
                            надійно та вигідно. Наша місія — зробити імпорт простим для кожного підприємця.
                        </p>

                        <div class="flex items-center space-x-6">
                            <button @click="scrollToContact" class="modern-button">
                                <span class="relative z-10">Зв'язатися з нами</span>
                            </button>

                            <div class="flex items-center text-gray-600">
                                <Icon name="lucide:phone" class="h-5 w-5 mr-2" />
                                <span>+38 (012) 345-67-89</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Business-style background elements -->
        <div
            class="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-5 -z-10"
            style="border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%"
        ></div>
        <div
            class="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 opacity-5 -z-10"
            style="border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%"
        ></div>
    </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// Animation objects
const planes = ref([
    { id: 1, progress: 0, speed: 0.0015, direction: 1 },
    { id: 2, progress: 0.5, speed: 0.001, direction: 1 },
])

const packages = ref([
    { x: 25, y: 40, opacity: 0.7, speed: 0.15 },
    { x: 75, y: 60, opacity: 0.8, speed: 0.1 },
    { x: 60, y: 30, opacity: 0.6, speed: 0.2 },
])

// Company features
const features = [
    {
        icon: 'lucide:globe',
        title: 'Глобальна експертиза',
        description: 'Знання китайської мови та культури ділового спілкування, розуміння специфіки регіону',
        borderColor: 'border-blue-600',
    },
    {
        icon: 'lucide:clock',
        title: '8 років досвіду',
        description: 'Роки роботи з китайськими постачальниками та успішних поставок для українських клієнтів',
        borderColor: 'border-green-600',
    },
    {
        icon: 'lucide:users',
        title: 'Команда професіоналів',
        description: 'Фахівці в закупівлях, логістиці, ЗЕД та митному оформленні',
        borderColor: 'border-purple-600',
    },
    {
        icon: 'lucide:check',
        title: 'Прозорість процесів',
        description: 'Чесна цінова політика та повний контроль на кожному етапі роботи',
        borderColor: 'border-amber-600',
    },
]

// Intersection Observer setup
onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true
                observer.disconnect()
            }
        },
        { threshold: 0.2 }
    )

    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }

    // Start animation loop
    startAnimations()
})

let animationFrameId: number | null = null

// Animation functions
const startAnimations = () => {
    // Get the bezier path coordinates from the SVG path for plane animation
    const flightPath = {
        start: { x: 200, y: 300 },
        control1: { x: 275, y: 250 },
        control2: { x: 425, y: 200 },
        end: { x: 500, y: 125 },
    }

    // Use a more efficient animation loop with timestamp throttling
    let lastAnimationTime = 0
    const animationThreshold = 30 // Only update every 30ms (approx 33fps instead of 60fps)

    const animate = (timestamp: number) => {
        // Throttle animation updates for better performance
        if (timestamp - lastAnimationTime > animationThreshold) {
            lastAnimationTime = timestamp

            // Animate planes along the bezier curve
            planes.value.forEach((plane) => {
                plane.progress += plane.speed * plane.direction

                // Reverse direction when reaching endpoints
                if (plane.progress >= 1) {
                    plane.direction = -1
                } else if (plane.progress <= 0) {
                    plane.direction = 1
                }
            })

            // Animate packages with less frequency
            packages.value.forEach((pkg) => {
                pkg.y = (pkg.y + pkg.speed / 3) % 100 // Slower vertical movement
                // Update opacity less frequently for better performance
                if (Math.random() > 0.7) {
                    pkg.opacity = 0.5 + Math.sin(Date.now() / 2000) * 0.3
                }
            })
        }

        animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
}

// Clean up
onUnmounted(() => {
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
        animationFrameId = null
    }
})

// Styling computed properties
const planeStyle = computed(() => (plane: any) => {
  const t = plane.progress

  // Обновлённые контрольные точки:
  const x = 
    180 * Math.pow(1 - t, 3) +
    3 * 250 * Math.pow(1 - t, 2) * t +
    3 * 350 * (1 - t) * Math.pow(t, 2) +
    420 * Math.pow(t, 3)

  const y = 
    350 * Math.pow(1 - t, 3) +
    3 * 280 * Math.pow(1 - t, 2) * t +
    3 * 220 * (1 - t) * Math.pow(t, 2) +
    155 * Math.pow(t, 3)

  return {
    left: `${(x / 800) * 100}%`,
    top: `${(y / 500) * 100}%`,
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.1s ease-out',
    zIndex: Math.floor(t * 100),
  }
})

const planeRotationStyle = computed(() => (plane: any) => {
    // Calculate rotation angle based on direction and position
    // This creates a more natural looking flight angle
    const t = plane.progress
    const dx = plane.direction > 0 ? 1 : -1
    const baseAngle = plane.direction > 0 ? -30 : 150

    // Add slight banking effect based on position in curve
    const bankingAngle = Math.sin(t * Math.PI) * 10 * dx

    return {
        transform: `rotate(${baseAngle + bankingAngle}deg)`,
        opacity: 0.9,
    }
})

const packageStyle = computed(() => (pkg: any) => {
    return {
        left: `${pkg.x}%`,
        top: `${pkg.y}%`,
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.5s ease',
    }
})

// Scroll to contact section
const scrollToContact = () => {
    const contactElement = document.getElementById('contact')
    if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<style>
.animate-fade-in {
    animation: fadeIn 1s ease forwards;
}

.animate-pulse {
    animation: pulse 2s infinite;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0.2;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.3;
    }
    100% {
        transform: scale(1);
        opacity: 0.2;
    }
}

/* Modern button with sleek hover effect (same as Hero component) */
.modern-button {
    position: relative;
    padding: 0.75rem 1.5rem;
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
</style>
