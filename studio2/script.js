document.addEventListener("DOMContentLoaded", function (event) {
         function process() {
            var adj = document.f.adj.value;
             var noun = document.f.noun.value;
             var animal = document.f.animal.value;
             var noise = document.f.noise.value;

            var myMsg = document.getElementById('myMsg');
            myMsg.innerHTML = ('<em>' + adj1 + '</em> Macdonald had a ' + noun + ', E-I-E-I-O. <br> and on that  ' + noun + ' he had an ' + animal + ', E-I-E-I-O <br> with a ' + noise +" " + noise +' here, <br> and a ' + noise +" " + noise +'there, <br>here a ' + noise + 'there a ' + noise + ',<br> everywhere a ' + noise + ', <br>' + adj + ' Macdonald had a ' + noun + ', E-I-E-I-O.');
            return false;
         }

         document.f.onsubmit = process;
         document.f.onreset = function(event) {
         document.getElementById('myMsg').classList.add("hidden");
        })
   });
