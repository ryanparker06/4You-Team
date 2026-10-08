/* Shared image and link configuration; works on GitHub Pages and locally. */
(() => {
 const config=window.SITE_CONFIG||{};
 const get=path=>path.split('.').reduce((obj,key)=>obj?.[key],config);
 const external=value=>typeof value==='string' && /^https?:\/\/[^\s]+$/i.test(value.trim()) ? value.trim() : '';
 const imageURL=value=>{
  if(typeof value!=='string')return '';
  const v=value.trim();
  return external(v) || (/^(?!\/|\\|\.\.)(?:[\w .-]+\/)*[\w .-]+\.(?:png|jpe?g|webp|gif|svg)(?:\?[^#]*)?$/i.test(v)?v:'');
 };
 const prefix=document.body.dataset.assetPrefix||'';
 const logo=imageURL(config.logo);
 document.querySelectorAll('[data-logo]').forEach(img=>{
  if(!logo)return;
  img.onerror=()=>{img.onerror=null;img.src=prefix+'assets/4you-logo.png'};
  img.src=/^https?:\/\//i.test(logo)?logo:prefix+logo;
 });
 document.querySelectorAll('[data-image]').forEach(box=>{
  const url=imageURL(get(box.dataset.image));if(!url)return;
  const img=document.createElement('img');img.alt='Project or team image';img.loading='lazy';
  img.onload=()=>box.replaceChildren(img);
  img.src=/^https?:\/\//i.test(url)?url:prefix+url;
 });
 document.querySelectorAll('[data-link]').forEach(a=>{
  const url=external(get(a.dataset.link));
  if(url){a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.hidden=false;a.removeAttribute('aria-disabled');a.removeAttribute('title')}
  else if(a.hasAttribute('data-always-show')){a.hidden=false;a.removeAttribute('href');a.setAttribute('aria-disabled','true')}
  else if(a.hasAttribute('data-optional'))a.hidden=true;
 });
})();
