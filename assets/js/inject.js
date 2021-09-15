document.body.innerHTML += '<script async src="https://www.google-analytics.com/analytics.js"></script>'

window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'G-F624SLM32R', 'auto');
ga('send', 'pageview');

const leftContent = document.querySelector('.left')
const rightContent = document.querySelector('.right')
const textContent = document.querySelector('.text')
const contactContent = document.querySelector('.contact')

const htmlVideoString = `
  <iframe width="500" height="300" src="https://www.youtube.com/embed/0CWzFx1HRvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="margin-bottom: 100px;"></iframe>
`

rightContent.insertAdjacentHTML('afterbegin', htmlVideoString)

const contentString = `
        <span id="zone-01">Zone 01 is our collaborative coding education platform.</span>
        <br><br>
        <span id="zone-01-process">New here? Here’s what you need to do:</span>
        <br><br>
        1)
        <span id="instruction-1">Create an account, and log into the platform.</span>
        <br>
        2) <span id="instruction-2">Complete the online cognitive test.</span>
        <br>
        3)
        <span id="instruction-3">Wait to find out whether you’ve made it to the next stage.</span>
        <br>
        <br>
        <span id="account">That’s it! If you’ve already created an account, sign in to complete
          your application or check for updates.</span>
`


const contactString = `

      <div id="about-us">Want to know more about 01 Founders, London's new free coding school, with a job guarantee?&thinsp;</div>
      <div class="contact">
      <a target="_blank" href="https://www.01founders.co/">
        <span class="arrow">→</span>
        <span id="contact">Visit our main website.</span>
      </a>
      </div>
      <div class="contact">
      <a target="_blank" href="https://www.01founders.co/faq">
        <span class="arrow">→</span>
        <span id="faq">Read the Frequently Asked Questions</span>
      </a>
      </div>
`

textContent.innerHTML = contentString

contactContent.insertAdjacentHTML('afterend', contactString)
contactContent.remove()
