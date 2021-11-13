export default function observe({ target, threshold, callback }) {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      callback(entry);
    })
  }, {
    root: null,
    threshold: threshold
  });

  observer.observe(target);
}