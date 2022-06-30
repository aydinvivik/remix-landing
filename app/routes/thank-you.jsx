import { useEffect } from 'react';

export const meta = () => ({
  title: 'Homepage',
});

export default function ThankYou() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = "facebook-pixel";
    script.async = true;
    document.head.appendChild(script);
    script.innerHTML = `new Image().src = 'https://www.facebook.com/tr?id=55&ev=Lead&noscript=1';`;
  }, []);

  return (
    <div>
      <h1>asdaasdasd</h1>
      <script id="facebook-pixel-lead">{`fbq('track', 'Lead')`}</script>
    </div>
  );
}
