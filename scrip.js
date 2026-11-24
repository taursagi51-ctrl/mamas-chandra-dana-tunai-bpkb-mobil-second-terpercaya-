(function(){
  var v=document.getElementById('v'),vt=document.getElementById('vt'),rt=document.getElementById('rt'),wa=document.getElementById('simwa');
  function f(j){return j>=1000?'Rp '+(j/1000).toLocaleString('id-ID',{maximumFractionDigits:2})+' miliar':'Rp '+j.toLocaleString('id-ID',{maximumFractionDigits:1})+' juta'}
  function u(){var n=+v.value,r=n*0.95;vt.textContent=f(n);rt.textContent=f(r);
    wa.href='https://wa.me/6287831707651?text='+encodeURIComponent('Halo Mamas Chandra, taksiran kendaraan saya '+f(n)+'. Saya ingin tanya dana tunai jaminan BPKB.')}
  v.addEventListener('input',u);u();
})();