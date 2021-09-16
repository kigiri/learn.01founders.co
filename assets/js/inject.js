document.body.innerHTML += '<script async src="https://www.googletagmanager.com/gtag/js?id=G-N86JQSKK9B"></script>'
document.body.innerHTML += `
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2942291289344991');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=2942291289344991&ev=PageView&noscript=1"
/></noscript>
`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-N86JQSKK9B');

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
      <div class="contact" style="display:none;">
      <a id="contact-link" target="_blank" href="mailto:theteam@01founders.co" style="display:block;">
        <span class="arrow">→</span>
        <span id="contact">Contact us.</span>
      </a>
      </div>
`

textContent.innerHTML = contentString

contactContent.insertAdjacentHTML('afterend', contactString)
contactContent.remove()
