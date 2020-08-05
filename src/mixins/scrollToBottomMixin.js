export default {
  data () {
    return {
      isScrolledToBottom: false
    }
  },
  mounted () {
    window.onscroll = () => {
      this.isScrolledToBottom = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      ) + window.innerHeight === document.documentElement.offsetHeight
    }
  }
}
