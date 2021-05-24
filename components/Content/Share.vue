<template>
  <section class="social-links">
    <ShareNetwork
      v-for="network in networks"
      :key="network.network"
      :network="network.network"
      :style="{ backgroundColor: network.color }"
      :url="sharing.url"
      :title="article.title"
      :description="article.body.slice(0, 20)"
      :twitter-user="article.twitterUser"
      :hashtags="sharing.tags"
    >
      <i :class="network.icon"></i>
      <span>{{ network.name }}</span>
    </ShareNetwork>
  </section>
</template>

<script>
export default {
  name: 'SociaShare',
  props: {
    article: {
      type: Object,
      default() {
        return {
          title: '',
          summary: '',
          published_at: '',
          twitterUser: 'tngeene',
        }
      },
    },
  },
  data() {
    return {
      networks: [
        {
          network: 'twitter',
          name: 'Twitter',
          icon: 'fab fah fa-lg fa-twitter',
          color: '#1da1f2',
        },

        {
          network: 'whatsapp',
          name: 'Whatsapp',
          icon: 'fab fah fa-lg fa-whatsapp',
          color: '#25d366',
        },
        {
          network: 'reddit',
          name: 'Reddit',
          icon: 'fab fah fa-lg fa-reddit-alien',
          color: '#ff4500',
        },
        {
          network: 'facebook',
          name: 'Facebook',
          icon: 'fab fah fa-lg fa-facebook-f',
          color: '#1877f2',
        },

        {
          network: 'email',
          name: 'Email',
          icon: 'far fah fa-lg fa-envelope',
          color: '#333333',
        },
        {
          network: 'evernote',
          name: 'Evernote',
          icon: 'fab fah fa-lg fa-evernote',
          color: '#2dbe60',
        },
        {
          network: 'flipboard',
          name: 'Flipboard',
          icon: 'fab fah fa-lg fa-flipboard',
          color: '#e12828',
        },
        {
          network: 'hackernews',
          name: 'HackerNews',
          icon: 'fab fah fa-lg fa-hacker-news',
          color: '#ff4000',
        },

        {
          network: 'linkedin',
          name: 'LinkedIn',
          icon: 'fab fah fa-lg fa-linkedin',
          color: '#007bb5',
        },
        {
          network: 'messenger',
          name: 'Messenger',
          icon: 'fab fah fa-lg fa-facebook-messenger',
          color: '#0084ff',
        },

        {
          network: 'pinterest',
          name: 'Pinterest',
          icon: 'fab fah fa-lg fa-pinterest',
          color: '#bd081c',
        },
        {
          network: 'pocket',
          name: 'Pocket',
          icon: 'fab fah fa-lg fa-get-pocket',
          color: '#ef4056',
        },
        {
          network: 'sms',
          name: 'SMS',
          icon: 'far fah fa-lg fa-comment-dots',
          color: '#333333',
        },

        {
          network: 'telegram',
          name: 'Telegram',
          icon: 'fab fah fa-lg fa-telegram-plane',
          color: '#0088cc',
        },
      ],
    }
  },
  computed: {
    sharing() {
      let url
      const tags = []
      this.article.tags.forEach((tag) => {
        tags.push(tag.title)
      })

      if (typeof window !== 'undefined') {
        url = window.location.href
      }

      const data = {
        tags: tags.join(','),
        url,
      }
      return data
    },
  },
}
</script>
