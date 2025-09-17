<template>
  <div class="flex justify-center gap-6 mb-12">
    <a 
      v-for="social in socialLinks" 
      :key="social.name"
      :href="social.url" 
      :target="social.external ? '_blank' : '_self'"
      :rel="social.external ? 'noopener noreferrer' : undefined"
      :class="socialLinkClasses"
      :aria-label="social.name"
    >
      <Icon :name="social.icon" class="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
    </a>
  </div>
</template>

<script setup lang="ts">
interface SocialLink {
  name: string
  url: string
  icon: string
  external?: boolean
}

interface Props {
  links?: SocialLink[]
}

// Props com valores padrão
const props = withDefaults(defineProps<Props>(), {
  links: () => [
    {
      name: 'GitHub',
      url: 'https://github.com/igorelias',
      icon: 'simple-icons:github',
      external: true
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/igorelias',
      icon: 'simple-icons:linkedin',
      external: true
    },
    {
      name: 'E-mail',
      url: 'mailto:contato@igorelias.dev',
      icon: 'heroicons:envelope',
      external: false
    }
  ]
})

// Computed para os links sociais
const socialLinks = computed(() => props.links)

// Classes CSS para os links sociais
const socialLinkClasses = 'group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 hover:shadow-lg'
</script>