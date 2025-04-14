<template>
    <section id="faq" class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div
            class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500 opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"
        ></div>

        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-blue-700">Часті питання</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Знайдіть відповіді на найпоширеніші питання про наші послуги імпорту з Китаю
                </p>
            </div>

            <!-- FAQ Topics Tags -->
            <div class="mt-16 text-center">
                <h4 class="text-lg font-medium text-gray-700 mb-4">Популярні теми</h4>
                <div class="flex flex-wrap justify-center gap-3">
                    <button
                        v-for="(tag, index) in faqTags"
                        :key="index"
                        @click="filterByTag(tag)"
                        class="py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                        :class="[activeTag === tag ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']"
                    >
                        {{ tag }}
                    </button>
                </div>
            </div>

            <div class="max-w-3xl mx-auto">              
                <!-- FAQ Accordion -->
                <div class="space-y-4 mt-8">
                    <div
                        v-for="item in filteredFAQItems"
                        :key="item.id"
                        class="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
                        :class="{ 'bg-blue-50 border-blue-200': activeItem === item.id }"
                    >
                        <button
                            @click="toggleItem(item.id)"
                            class="w-full px-6 py-5 flex justify-between items-center text-left font-semibold hover:text-blue-600 transition-colors duration-300"
                            :class="{ 'text-blue-700': activeItem === item.id, 'text-gray-800': activeItem !== item.id }"
                        >
                            <span>{{ item.question }}</span>
                            <div class="transform transition-transform duration-300" :class="{ 'rotate-180': activeItem === item.id }">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </button>
                        <transition
                            enter-active-class="transition duration-300 ease-out"
                            enter-from-class="transform -translate-y-4 opacity-0"
                            enter-to-class="transform translate-y-0 opacity-100"
                            leave-active-class="transition duration-200 ease-in"
                            leave-from-class="transform translate-y-0 opacity-100"
                            leave-to-class="transform -translate-y-4 opacity-0"
                        >
                            <div v-if="activeItem === item.id" class="px-6 pb-5 pt-0 text-gray-700">
                                <div class="border-t border-gray-100 pt-4">
                                    <p v-html="highlightSearchTerms(item.answer)" class="leading-relaxed"></p>
                                    <div v-if="item.links && item.links.length" class="mt-4 flex flex-wrap gap-2">
                                        <a
                                            v-for="(link, i) in item.links"
                                            :key="i"
                                            :href="link.url"
                                            class="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            <span>{{ link.text }}</span>
                                            <svg
                                                class="ml-1 w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>

                <!-- No results message -->
                <div v-if="filteredFAQItems.length === 0" class="text-center py-12">
                    <div class="text-gray-400 mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="mx-auto"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <h3 class="text-xl font-medium text-gray-600">Нічого не знайдено</h3>
                    <p class="mt-2 text-gray-500">Спробуйте змінити запит або задайте своє питання нам напряму</p>
                </div>
            </div>

            <!-- Contact CTA -->
            <div
                class="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 sm:p-10 rounded-2xl max-w-3xl mx-auto text-center shadow-xl"
            >
                <div class="absolute -right-4 -top-4">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-20">
                        <path
                            d="M87.5 55C87.5 73.5 73.5 87.5 55 87.5C36.5 87.5 22.5 73.5 22.5 55C22.5 36.5 36.5 22.5 55 22.5C73.5 22.5 87.5 36.5 87.5 55Z"
                            stroke="white"
                            stroke-width="5"
                        />
                        <path d="M51.25 38.75L60 55L51.25 71.25L42.5 55L51.25 38.75Z" stroke="white" stroke-width="3" />
                        <path d="M67.5 43.75L67.5 66.25" stroke="white" stroke-width="3" />
                        <path d="M35 43.75L35 66.25" stroke="white" stroke-width="3" />
                    </svg>
                </div>
                <h3 class="text-2xl font-bold mb-4">Залишились питання?</h3>
                <p class="mb-8 text-lg opacity-90">
                    Наші фахівці готові відповісти на всі ваші запитання та допомогти з вибором оптимального рішення для вашого бізнесу.
                </p>
                <OthersPrimaryButton 
                    :title="'Задати питання'"
                    :icon="'fluent:question-24-filled'"
                    @buttonClick="scrollToContact"
                />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

interface FAQLink {
    text: string
    url: string
}

interface FAQItem {
    id: string
    question: string
    answer: string
    tags: string[]
    links?: FAQLink[]
}

// Initialize with expanded FAQ content
const faqItems = ref<FAQItem[]>([
    {
        id: 'item-1',
        question: 'Скільки часу займає доставка?',
        answer: 'Стандартний термін доставки складає <strong>25-45 днів</strong> з моменту замовлення, включаючи виробництво товару та транспортування. Точні строки залежать від типу товару, обсягу замовлення та обраного способу доставки. Для термінових замовлень у нас є прискорені варіанти доставки. Ми також надаємо детальний графік з розбивкою по етапах для кожного замовлення.',
        tags: ['Доставка', 'Терміни'],
        links: [{ text: 'Детальніше про способи доставки', url: '#delivery' }],
    },
    {
        id: 'item-2',
        question: 'Як ви перевіряєте якість товарів?',
        answer: 'Ми проводимо багаторівневу перевірку якості: інспекцію виробництва, вибірковий контроль готової продукції, а також підсумкову перевірку перед відправленням. Наші спеціалісти на місці роблять фото та відео звіти, які ви отримуєте до відправки товару. Для критично важливих замовлень ми можемо організувати незалежну інспекцію від третіх сторін з міжнародною сертифікацією.',
        tags: ['Якість', 'Перевірка'],
        links: [{ text: 'Стандарти контролю якості', url: '#quality' }],
    },
    {
        id: 'item-3',
        question: 'Які гарантії я отримую?',
        answer: 'Ми надаємо гарантії на відповідність товару заявленим характеристикам, страхування вантажу, а також повний супровід у разі виникнення проблем. Всі умови співпраці фіксуються в офіційному договорі. Ми працюємо тільки з перевіреними виробниками та транспортними компаніями, що мінімізує ризики для вашого бізнесу.',
        tags: ['Гарантії', 'Безпека'],
        links: [{ text: 'Зразок договору', url: '#contract' }],
    },
    {
        id: 'item-4',
        question: 'З якими товарами ви працюєте?',
        answer: 'Ми працюємо з широким спектром товарів: від електроніки та побутової техніки до одягу, меблів, будівельних матеріалів та промислового обладнання. Єдині обмеження стосуються товарів, заборонених до ввезення законодавством України. Наші експерти мають галузеву спеціалізацію і добре розуміють специфіку різних категорій товарів.',
        tags: ['Товари', 'Асортимент'],
        links: [{ text: 'Каталог категорій', url: '#categories' }],
    },
    {
        id: 'item-5',
        question: 'Який мінімальний обсяг замовлення?',
        answer: "Мінімальний обсяг замовлення залежить від категорії товару та політики конкретного виробника. Ми можемо організувати як великі оптові закупівлі, так і працювати за схемою консолідації декількох невеликих замовлень для оптимізації витрат на доставку. Для малого бізнесу у нас є спеціальні програми з можливістю об'єднання замовлень різних клієнтів.",
        tags: ['Замовлення', 'Обсяг'],
    },
    {
        id: 'item-6',
        question: 'Як відбувається оплата?',
        answer: 'Оплата здійснюється поетапно: передоплата 30-50% для запуску замовлення у виробництво, залишок — після перевірки якості перед відправленням. Ми працюємо з безпечними та зручними платіжними методами, включаючи банківські перекази та ескроу-рахунки для великих замовлень. Для постійних клієнтів доступні спеціальні умови оплати та відтермінування.',
        tags: ['Оплата', 'Фінанси'],
        links: [{ text: 'Варіанти оплати', url: '#payment' }],
    },
    {
        id: 'item-7',
        question: 'Чи можна замовити зразки перед основним замовленням?',
        answer: 'Так, ми рекомендуємо замовляти зразки перед великими партіями, особливо при першій співпраці з виробником. Це дозволяє оцінити якість продукції, перевірити відповідність вашим вимогам та уникнути проблем при масовому виробництві. Вартість зразків зазвичай вища, ніж вартість одиниці товару при оптовому замовленні, але це виправдана інвестиція в якість.',
        tags: ['Замовлення', 'Зразки', 'Якість'],
    },
    {
        id: 'item-8',
        question: 'Як вибрати надійного виробника?',
        answer: 'Вибір надійного виробника — одне з ключових завдань, яке ми беремо на себе. Ми проводимо багатоступеневу перевірку потенційних партнерів: аналізуємо юридичні документи, перевіряємо виробничі потужності, вивчаємо історію компанії та відгуки клієнтів. Наша база перевірених виробників формувалася роками, що дозволяє нам пропонувати оптимальні варіанти під ваші потреби та бюджет.',
        tags: ['Виробники', 'Перевірка', 'Безпека'],
        links: [{ text: 'Критерії відбору виробників', url: '#manufacturers' }],
    },
])

const activeItem = ref<string | null>(null)
const searchQuery = ref('')
const activeTag = ref<string | null>(null)

// Extract all unique tags for filtering
const faqTags = computed(() => {
    const allTags = faqItems.value.flatMap((item) => item.tags)
    return [...new Set(allTags)]
})

// Toggle accordion item
const toggleItem = (id: string) => {
    activeItem.value = activeItem.value === id ? null : id
}

// Filter FAQ items based on search query and active tag
const filteredFAQItems = computed(() => {
    let results = faqItems.value

    // Filter by tag if active
    if (activeTag.value) {
        results = results.filter((item) => item.tags.includes(activeTag.value!))
    }

    // Filter by search query if present
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase().trim()
        results = results.filter((item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query))
    }

    return results
})

// Filter by tag
const filterByTag = (tag: string) => {
    if (activeTag.value === tag) {
        activeTag.value = null // toggle off
    } else {
        activeTag.value = tag
    }
}

// Highlight search terms in text
const highlightSearchTerms = (text: string) => {
    if (!searchQuery.value.trim()) return text

    const query = searchQuery.value.trim()
    const regex = new RegExp(`(${query})`, 'gi')
    return text.replace(regex, '<mark class="bg-yellow-100 px-1 rounded">$1</mark>')
}

// Scroll to contact section
const scrollToContact = () => {
    const contactElement = document.getElementById('contact')
    if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<style>
.from-blue-600 {
    --tw-gradient-from: #2563eb;
    --tw-gradient-to: rgb(37 99 235 / 0);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-blue-800 {
    --tw-gradient-to: #1e40af;
}

/* Smooth transitions */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0px);
    }
}

/* Apply specific styling to the search highlight */
mark {
    transition: background-color 0.2s ease;
}

/* Additional responsive styling */
@media (max-width: 640px) {
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
</style>
