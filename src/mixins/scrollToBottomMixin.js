export default {
  data () {
    return {
      isScrolledToBottom: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.watchScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.watchScroll)
  },
  methods: {
    watchScroll () {
      console.log('watch scroll')
      this.isScrolledToBottom = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      ) + window.innerHeight === document.documentElement.offsetHeight
    }
  }
}
