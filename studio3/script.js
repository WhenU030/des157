document.addEventListener("DOMContentLoaded", function(event) {
    // click bags
   var original = document.getElementById('original');

   original.addEventListener('mouseover', function() {
     console.log('move mouse over, open zip');
     original.src='img/open_zip.png';

     original.addEventListener('mouseout', function() {
     console.log('move mouse out, open zip');
     original.src='img/original.png';
    })

     original.addEventListener('dblclick', function(){
        console.log('double click, take things out');
        document.getElementById('intro').style.display = 'none';
        document.getElementById('title').style.display = 'none';
        document.getElementById('pics').style.display = 'block';
     });
   });

   // ***************************************************************
   // chang ysl color
   var ysl = document.getElementById('ysl_bw');
   var ysl_txt = document.getElementById('ysl_txt');

   ysl.addEventListener('mouseover', function() {
     console.log('mouseover, ysl colorful');
     ysl.src='img/ysl.png';
     ysl_txt.style.display="block";
   });

   ysl.addEventListener('mouseout', function() {
     console.log('mouseout, ysl b&w');
     ysl.src='img/ysl_bw.png';
     ysl_txt.style.display="none";
   });

   // ***************************************************************
   // chang becca color
   var becca = document.getElementById('becca_bw');
   var becca_txt = document.getElementById('becca_txt');

   becca.addEventListener('mouseover', function() {
     console.log('mouseover, becca colorful');
     becca.src='img/becca.png';
     becca_txt.style.display="block";
   });

   becca.addEventListener('mouseout', function() {
     console.log('mouseout, becca b&w');
     becca.src='img/becca_bw.png';
     becca_txt.style.display="none";
   });

   // ***************************************************************
   // chang tf color
   var tf = document.getElementById('tf_bw');
   var tf_txt = document.getElementById('tf_txt');

   tf.addEventListener('mouseover', function() {
     console.log('mouseover, tf colorful');
     tf.src='img/tf.png';
     tf_txt.style.display="block";
   });

   tf.addEventListener('mouseout', function() {
     console.log('mouseout, tf b&w');
     tf.src='img/tf_bw.png';
     tf_txt.style.display="none";
   });

   // ***************************************************************
   // chang lp color
   var lp = document.getElementById('lp_bw');
   var lp_txt = document.getElementById('lp_txt');

   lp.addEventListener('mouseover', function() {
     console.log('mouseover, lp colorful');
     lp.src='img/lp.png';
     lp_txt.style.display="block";
   });

   lp.addEventListener('mouseout', function() {
     console.log('mouseout, lp b&w');
     lp.src='img/lp_bw.png';
     lp_txt.style.display="none";
   });

   // ***************************************************************
   // chang ud color
   var ud = document.getElementById('ud_bw');
   var ud_txt = document.getElementById('ud_txt');

   ud.addEventListener('mouseover', function() {
     console.log('mouseover, ud colorful');
     ud.src='img/ud.png';
     ud_txt.style.display="block";
   });

   ud.addEventListener('mouseout', function() {
     console.log('mouseout, ud b&w');
     ud.src='img/ud_bw.png';
     ud_txt.style.display="none";
   });

   // ***************************************************************
   // chang brow color
   var brow = document.getElementById('brow_bw');
   var brow_txt = document.getElementById('brow_txt');

   brow.addEventListener('mouseover', function() {
     console.log('mouseover, brow colorful');
     brow.src='img/brow.png';
     brow_txt.style.display="block";
   });

   brow.addEventListener('mouseout', function() {
     console.log('mouseout, brow b&w');
     brow.src='img/brow_bw.png';
     brow_txt.style.display="none";
   });

   // ***************************************************************
   // chang bbr color
   var bbr = document.getElementById('bbr_bw');
   var bbr_txt = document.getElementById('bbr_txt');

   bbr.addEventListener('mouseover', function() {
     console.log('mouseover, bbr colorful');
     bbr.src='img/bbr.png';
     bbr_txt.style.display="block";
   });

   bbr.addEventListener('mouseout', function() {
     console.log('mouseout, bbr b&w');
     bbr.src='img/bbr_bw.png';
     bbr_txt.style.display="none";
   });

   // ***************************************************************
   // chang giraffe color
   var giraffe = document.getElementById('giraffe_bw');
   var giraffe_txt = document.getElementById('giraffe_txt');

   giraffe.addEventListener('mouseover', function() {
     console.log('mouseover, giraffe colorful');
     giraffe.src='img/giraffe.png';
     giraffe_txt.style.display="block";
   });

   giraffe.addEventListener('mouseout', function() {
     console.log('mouseout, giraffe b&w');
     giraffe.src='img/giraffe_bw.png';
     giraffe_txt.style.display="none";
   });

   giraffe.addEventListener('click', function() {
      console.log('click to clean up table');
      document.getElementById('intro').style.display = 'block';
      document.getElementById('title').style.display = 'block';
      document.getElementById('pics').style.display = 'none';
   })
});
